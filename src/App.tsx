import { useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  Brain,
  BookOpen,
  ChevronRight,
  ClipboardCheck,
  Filter,
  FlaskConical,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from 'lucide-react';
import { chapters } from './data/chapters';
import { memoryPoints } from './data/memoryPoints';
import { quizBank } from './data/quizBank';
import { sentenceBank } from './data/sentenceBank';
import { loadFromStorage, saveToStorage } from './utils/storage';

type MobileTab = 'dashboard' | 'chapters' | 'lab' | 'quiz' | 'notes';

const chapterTones = [
  'from-indigo-50/95 to-slate-50',
  'from-emerald-50/95 to-slate-50',
  'from-amber-50/95 to-stone-50',
  'from-rose-50/95 to-stone-50',
];

function SectionHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">{title}</h2>
        {description && <p className="max-w-3xl text-sm leading-relaxed text-slate-600">{description}</p>}
      </div>
      {action}
    </div>
  );
}

function PremiumCard({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <article className={`premium-card ${className}`}>{children}</article>;
}

export function App() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [quizIndex, setQuizIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [wrongNotes, setWrongNotes] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [query, setQuery] = useState('');
  const [done, setDone] = useState<{ total: number; correct: number }>({ total: 0, correct: 0 });
  const [sentenceId, setSentenceId] = useState(1);
  const [mobileTab, setMobileTab] = useState<MobileTab>('dashboard');
  const [wrongFilter, setWrongFilter] = useState<'all' | 'chapter'>('all');

  useEffect(() => {
    setWrongNotes(loadFromStorage<number[]>('wrongNotes', []));
    setBookmarks(loadFromStorage<number[]>('bookmarks', []));
    setDone(loadFromStorage('progress', { total: 0, correct: 0 }));
  }, []);

  const currentQuiz = quizBank[quizIndex % quizBank.length];
  const currentSentence = sentenceBank.find((s) => s.id === sentenceId) ?? sentenceBank[0];
  const currentChapter = chapters[selectedChapter - 1];

  const progress = Math.round((done.correct / Math.max(done.total, 1)) * 100);

  const save = (nextWrong: number[], nextDone = done) => {
    setWrongNotes(nextWrong);
    setDone(nextDone);
    saveToStorage('wrongNotes', nextWrong);
    saveToStorage('progress', nextDone);
  };

  const submitAnswer = () => {
    if (choice === null) return;
    const correct = choice === currentQuiz.answer;
    const nextDone = { total: done.total + 1, correct: done.correct + (correct ? 1 : 0) };
    const nextWrong = correct ? wrongNotes : [...new Set([...wrongNotes, currentQuiz.id])];
    save(nextWrong, nextDone);
  };

  const searchResults = useMemo(() => {
    const q = query.trim();
    if (!q) return [] as string[];
    return [
      ...chapters.filter((c) => `${c.title} ${c.coreConcept}`.includes(q)).map((c) => `챕터: ${c.title}`),
      ...quizBank.filter((k) => `${k.type} ${k.memoryPoint}`.includes(q)).slice(0, 5).map((k) => `문제유형: ${k.type} #${k.id}`),
      ...sentenceBank.filter((s) => `${s.title} ${s.sentence}`.includes(q)).map((s) => `문장: ${s.title}`),
      ...memoryPoints.filter((m) => m.text.includes(q)).slice(0, 8).map((m) => `기억포인트: ${m.text}`),
    ].slice(0, 12);
  }, [query]);

  const wrongNoteList = useMemo(
    () => quizBank.filter((q) => wrongNotes.includes(q.id) && (wrongFilter === 'all' || q.chapterId === selectedChapter)),
    [wrongNotes, wrongFilter, selectedChapter],
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-slate-100 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Premium Grammar Lab</p>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">궁극의 고등학생 영어 어법</h1>
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-stone-200 bg-white/90 px-3 py-2 shadow-sm md:flex">
            <Search size={16} className="text-slate-400" />
            <input
              aria-label="검색"
              className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="챕터/유형/예문 검색"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-24 pt-6 md:grid md:grid-cols-12 md:px-8 md:pb-10">
        <aside className="hidden space-y-3 md:col-span-3 md:block">
          {chapters.map((c, idx) => (
            <button
              key={c.id}
              className={`chapter-card bg-gradient-to-br ${chapterTones[idx % chapterTones.length]} ${selectedChapter === c.id ? 'ring-2 ring-indigo-300' : ''}`}
              onClick={() => setSelectedChapter(c.id)}
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Chapter {c.id}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{c.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">대표 함정 · {c.trap}</p>
            </button>
          ))}
        </aside>

        <section className="space-y-4 md:col-span-9">
          {(mobileTab === 'dashboard' || mobileTab === 'chapters') && (
            <PremiumCard className="hero-panel">
              <SectionHeader
                title="오늘의 학습 대시보드"
                description="수능/내신 문법 실력을 개념 이해 → 문장 해부 → 함정 훈련의 루프로 끌어올리세요."
                action={<span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">오늘 추천 복습 <ChevronRight size={14} /></span>}
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <PremiumCard className="stat-card"><Target size={16} /><p>진행률 {progress}%</p></PremiumCard>
                <PremiumCard className="stat-card"><ClipboardCheck size={16} /><p>오답 {wrongNotes.length}개</p></PremiumCard>
                <PremiumCard className="stat-card"><Brain size={16} /><p>북마크 {bookmarks.length}개</p></PremiumCard>
              </div>
            </PremiumCard>
          )}

          {(mobileTab === 'dashboard' || mobileTab === 'chapters') && (
            <PremiumCard>
              <SectionHeader title="챕터 맵" description="진행률, 대표 함정, 핵심 질문 중심으로 학습 우선순위를 잡아보세요." />
              <div className="mt-4 -mx-1 flex gap-3 overflow-x-auto px-1 pb-2 md:grid md:grid-cols-2 md:overflow-visible">
                {chapters.map((c, idx) => (
                  <button key={c.id} onClick={() => setSelectedChapter(c.id)} className={`min-w-[260px] rounded-2xl border border-stone-200 bg-gradient-to-br p-4 text-left shadow-sm transition hover:shadow md:min-w-0 ${chapterTones[idx % chapterTones.length]} ${selectedChapter === c.id ? 'border-indigo-300' : ''}`}>
                    <p className="text-xs text-slate-500">Chapter {c.id}</p>
                    <p className="mt-1 font-semibold text-slate-900">{c.title}</p>
                    <p className="mt-2 text-sm text-slate-600">핵심 질문 · {c.keyQuestion}</p>
                    <p className="mt-2 text-xs text-slate-500">대표 함정 · {c.trap}</p>
                  </button>
                ))}
              </div>
            </PremiumCard>
          )}

          {(mobileTab === 'dashboard' || mobileTab === 'chapters') && (
            <PremiumCard>
              <SectionHeader title={`챕터 상세 · ${currentChapter.title}`} description={currentChapter.description} />
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="panel-block"><h3>개념</h3><p>{currentChapter.coreConcept}</p></div>
                <div className="panel-block"><h3>기억 포인트</h3><p>{currentChapter.memoryPoint}</p></div>
                <div className="panel-block"><h3>대표 함정</h3><p>{currentChapter.trap}</p></div>
                <div className="panel-block"><h3>핵심 질문</h3><p>{currentChapter.keyQuestion}</p></div>
              </div>
            </PremiumCard>
          )}

          {(mobileTab === 'dashboard' || mobileTab === 'lab') && (
            <PremiumCard>
              <SectionHeader title="문장 해부 실험실" description="구조 태그를 눌러 문장 내 역할과 시험 함정을 직관적으로 파악하세요." />
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {sentenceBank.map((s) => (
                  <button key={s.id} className={`pill ${sentenceId === s.id ? 'pill-active' : ''}`} onClick={() => setSentenceId(s.id)}>{s.title}</button>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50/70 p-4 leading-8">
                {currentSentence.layers.map((l, idx) => (
                  <span key={idx} className={`mr-1 inline-flex rounded-md px-2 py-1 text-sm font-medium ${l.color}`} title={`${l.tag}: ${l.note}`}>{l.text}</span>
                ))}
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="panel-block"><h3>Trap Point</h3><p>{currentSentence.trapPoint}</p></div>
                <div className="panel-block"><h3>Sentence Focus</h3><p>{currentSentence.sentence}</p></div>
              </div>
            </PremiumCard>
          )}

          {(mobileTab === 'dashboard' || mobileTab === 'quiz') && (
            <PremiumCard>
              <SectionHeader title="시험 함정 훈련소" description="정답 여부보다 사고 과정을 복기하는 데 집중하도록 피드백을 구성했습니다." />
              <p className="mt-3 text-sm text-slate-500">{currentQuiz.level} · {currentQuiz.type} · #{currentQuiz.id}</p>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-900">{currentQuiz.question}</p>
              <div className="mt-3 grid gap-2">
                {currentQuiz.choices.map((c, idx) => (
                  <button key={idx} onClick={() => setChoice(idx)} className={`quiz-option ${choice === idx ? 'quiz-option-active' : ''}`}>{c}</button>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={submitAnswer} className="btn-primary">정답 확인</button>
                <button onClick={() => { setQuizIndex((p) => p + 1); setChoice(null); }} className="btn-ghost">다음 문제</button>
              </div>
              {choice !== null && (
                <div className={`mt-4 rounded-xl border p-3 text-sm ${choice === currentQuiz.answer ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-amber-200 bg-amber-50 text-amber-900'}`}>
                  <p className="font-semibold">정답: {currentQuiz.answer + 1}</p>
                  <p className="mt-1">해설: {currentQuiz.explanation}</p>
                </div>
              )}
            </PremiumCard>
          )}

          {(mobileTab === 'dashboard' || mobileTab === 'notes') && (
            <PremiumCard>
              <SectionHeader
                title="오답노트"
                description="단순 기록이 아니라 약점 유형을 추적하는 개인 분석 대시보드입니다."
                action={<div className="inline-flex items-center gap-2"><Filter size={14} className="text-slate-500" /><button className={`pill ${wrongFilter === 'all' ? 'pill-active' : ''}`} onClick={() => setWrongFilter('all')}>전체</button><button className={`pill ${wrongFilter === 'chapter' ? 'pill-active' : ''}`} onClick={() => setWrongFilter('chapter')}>현재 챕터</button></div>}
              />
              <div className="mt-4 space-y-2">
                {wrongNoteList.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50/80 p-5 text-sm text-slate-500">기록된 오답이 없습니다. 꾸준히 훈련해 첫 오답도 학습 자산으로 남겨보세요.</div>
                ) : (
                  wrongNoteList.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white p-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">#{item.id} · {item.type}</p>
                        <p className="text-xs text-slate-500">{item.memoryPoint}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn-ghost" onClick={() => setQuizIndex(quizBank.findIndex((q) => q.id === item.id))}>다시 풀기</button>
                        <button className="btn-ghost" onClick={() => save(wrongNotes.filter((id) => id !== item.id))}><X size={14} /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </PremiumCard>
          )}

          {(mobileTab === 'dashboard' || mobileTab === 'notes') && (
            <PremiumCard>
              <SectionHeader title="기억 포인트 · 내 문법 무기고" description="짧고 강한 문장만 모아 시험장에서 즉시 떠올릴 수 있도록 정리했습니다." />
              <div className="mt-4 grid gap-2 md:grid-cols-2">
                {memoryPoints.slice(0, 20).map((m) => (
                  <button key={m.id} className="memory-card" onClick={() => {
                    const n = bookmarks.includes(m.id) ? bookmarks.filter((v) => v !== m.id) : [...bookmarks, m.id];
                    setBookmarks(n);
                    saveToStorage('bookmarks', n);
                  }}>
                    <p className="text-sm leading-relaxed text-slate-700">{m.text}</p>
                    <Bookmark size={16} className={bookmarks.includes(m.id) ? 'fill-amber-400 text-amber-500' : 'text-slate-400'} />
                  </button>
                ))}
              </div>
            </PremiumCard>
          )}

          {(mobileTab === 'dashboard' || mobileTab === 'notes') && (
            <PremiumCard>
              <SectionHeader title="통합 검색" description="필요한 챕터, 문제 유형, 기억 포인트를 빠르게 탐색하세요." />
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-stone-200 bg-white/90 px-3 py-2 md:hidden">
                <Search size={16} className="text-slate-400" />
                <input aria-label="모바일 검색" className="w-full bg-transparent text-sm outline-none" placeholder="검색어 입력" value={query} onChange={(e) => setQuery(e.target.value)} />
              </div>
              <div className="mt-3 space-y-2">
                {searchResults.length === 0 ? <p className="text-sm text-slate-500">검색어를 입력하면 결과가 표시됩니다.</p> : searchResults.map((r, i) => <div key={i} className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-slate-700">{r}</div>)}
              </div>
            </PremiumCard>
          )}
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-stone-200 bg-stone-50/95 px-2 py-2 backdrop-blur md:hidden">
        <div className="grid grid-cols-5 gap-1 text-xs">
          {[
            ['dashboard', Sparkles, '홈'],
            ['chapters', BookOpen, '챕터'],
            ['lab', FlaskConical, '해부'],
            ['quiz', Target, '훈련'],
            ['notes', TrendingUp, '노트'],
          ].map(([key, Icon, label]) => (
            <button key={key} onClick={() => setMobileTab(key as MobileTab)} className={`flex min-h-11 flex-col items-center justify-center rounded-xl ${mobileTab === key ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500'}`}>
              <Icon size={15 as never} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
