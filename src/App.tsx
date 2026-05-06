import { useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  Brain,
  BookOpen,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Filter,
  FlaskConical,
  Search,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
  X,
} from 'lucide-react';
import { chapters } from './data/chapters';
import { memoryPoints } from './data/memoryPoints';
import { quizBank } from './data/quizBank';
import { sentenceBank } from './data/sentenceBank';
import { loadFromStorage, saveToStorage } from './utils/storage';

type MobileTab = 'dashboard' | 'chapters' | 'lab' | 'quiz' | 'notes';
const chapterTones = ['from-indigo-50/95 to-slate-50', 'from-emerald-50/95 to-slate-50', 'from-amber-50/95 to-stone-50', 'from-rose-50/95 to-stone-50'];

const searchSections = ['chapters', 'quiz', 'sentence', 'memory'] as const;

function SectionHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <div className="flex flex-wrap items-center justify-between gap-3"><div className="space-y-1"><h2 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">{title}</h2>{description && <p className="max-w-3xl text-sm leading-relaxed text-slate-600">{description}</p>}</div>{action}</div>;
}
function PremiumCard({ className = '', children }: { className?: string; children: React.ReactNode }) { return <article className={`premium-card ${className}`}>{children}</article>; }

export function App() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [quizIndex, setQuizIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [wrongNotes, setWrongNotes] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [query, setQuery] = useState('');
  const [done, setDone] = useState({ total: 0, correct: 0 });
  const [sentenceId, setSentenceId] = useState(1);
  const [mobileTab, setMobileTab] = useState<MobileTab>('dashboard');
  const [wrongFilter, setWrongFilter] = useState<'all' | 'chapter'>('all');
  const [openWrongIds, setOpenWrongIds] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [memoryFilter, setMemoryFilter] = useState<'all' | 'bookmarked'>('all');
  const [expandedMemoryIds, setExpandedMemoryIds] = useState<number[]>([]);

  useEffect(() => { setWrongNotes(loadFromStorage<number[]>('wrongNotes', [])); setBookmarks(loadFromStorage<number[]>('bookmarks', [])); setDone(loadFromStorage('progress', { total: 0, correct: 0 })); }, []);

  const currentQuiz = quizBank[quizIndex % quizBank.length];
  const currentSentence = sentenceBank.find((s) => s.id === sentenceId) ?? sentenceBank[0];
  const currentChapter = chapters[selectedChapter - 1];
  const progress = Math.round((done.correct / Math.max(done.total, 1)) * 100);

  const save = (nextWrong: number[], nextDone = done) => { setWrongNotes(nextWrong); setDone(nextDone); saveToStorage('wrongNotes', nextWrong); saveToStorage('progress', nextDone); };
  const submitAnswer = () => { if (choice === null) return; const correct = choice === currentQuiz.answer; const nextDone = { total: done.total + 1, correct: done.correct + (correct ? 1 : 0) }; const nextWrong = correct ? wrongNotes : [...new Set([...wrongNotes, currentQuiz.id])]; save(nextWrong, nextDone); setShowExplanation(true); };

  const searchResults = useMemo(() => {
    const q = query.trim();
    if (!q) return { chapters: [], quiz: [], sentence: [], memory: [] as string[] };
    return {
      chapters: chapters.filter((c) => `${c.title} ${c.coreConcept}`.includes(q)).map((c) => `챕터: ${c.title}`),
      quiz: quizBank.filter((k) => `${k.type} ${k.memoryPoint}`.includes(q)).slice(0, 5).map((k) => `문제유형: ${k.type} #${k.id}`),
      sentence: sentenceBank.filter((s) => `${s.title} ${s.sentence}`.includes(q)).map((s) => `문장: ${s.title}`),
      memory: memoryPoints.filter((m) => m.text.includes(q)).slice(0, 8).map((m) => `기억포인트: ${m.text}`),
    };
  }, [query]);

  const wrongNoteList = useMemo(() => quizBank.filter((q) => wrongNotes.includes(q.id) && (wrongFilter === 'all' || q.chapterId === selectedChapter)), [wrongNotes, wrongFilter, selectedChapter]);
  const memoryList = useMemo(() => (memoryFilter === 'bookmarked' ? memoryPoints.filter((m) => bookmarks.includes(m.id)) : memoryPoints).slice(0, 24), [memoryFilter, bookmarks]);

  return <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-slate-100 text-slate-800">
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8"><div><p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Premium Grammar Lab</p><h1 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">궁극의 고등학생 영어 어법</h1></div><div className="hidden items-center gap-2 rounded-xl border border-stone-200 bg-white/90 px-3 py-2 shadow-sm md:flex"><Search size={16} className="text-slate-400" /><input aria-label="검색" className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="챕터/유형/예문 검색" value={query} onChange={(e) => setQuery(e.target.value)} /></div></div></header>
    <main className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-4 md:grid md:grid-cols-12 md:px-8 md:pb-10">
      <aside className="hidden space-y-3 md:col-span-3 md:block">{chapters.map((c, idx) => <button key={c.id} className={`chapter-card bg-gradient-to-br ${chapterTones[idx % chapterTones.length]} ${selectedChapter === c.id ? 'ring-2 ring-indigo-300' : ''}`} onClick={() => setSelectedChapter(c.id)}><p className="text-xs font-medium uppercase tracking-wide text-slate-500">Chapter {c.id}</p><p className="mt-1 text-sm font-semibold text-slate-900">{c.title}</p><p className="mt-2 text-xs leading-relaxed text-slate-600">대표 함정 · {c.trap}</p></button>)}</aside>
      <section className="space-y-4 md:col-span-9">
        {(mobileTab === 'dashboard' || mobileTab === 'chapters') && <PremiumCard className="hero-panel"><SectionHeader title="오늘의 학습 대시보드" description="개념 이해 → 문장 해부 → 함정 훈련 루프를 모바일에서도 빠르게." action={<span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">오늘 추천 복습 <ChevronRight size={14} /></span>} /><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3"><PremiumCard className="stat-card"><Target size={16} /><p>진행률 {progress}%</p></PremiumCard><PremiumCard className="stat-card"><ClipboardCheck size={16} /><p>오답 {wrongNotes.length}개</p></PremiumCard><PremiumCard className="stat-card col-span-2 sm:col-span-1"><Brain size={16} /><p>북마크 {bookmarks.length}개</p></PremiumCard></div></PremiumCard>}
        {(mobileTab === 'dashboard' || mobileTab === 'chapters') && <PremiumCard><SectionHeader title="챕터 맵" description="가로 스크롤 + 탭으로 빠르게 이동." /><div className="mt-4 -mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-2 md:grid md:grid-cols-2 md:overflow-visible">{chapters.map((c, idx) => <button key={c.id} onClick={() => setSelectedChapter(c.id)} className={`min-w-[250px] snap-start rounded-2xl border border-stone-200 bg-gradient-to-br p-4 text-left shadow-sm ${chapterTones[idx % chapterTones.length]} ${selectedChapter === c.id ? 'border-indigo-300' : ''}`}><p className="text-xs text-slate-500">Chapter {c.id}</p><p className="mt-1 font-semibold text-slate-900">{c.title}</p><p className="mt-2 text-sm text-slate-600">핵심 질문 · {c.keyQuestion}</p></button>)}</div></PremiumCard>}
        {(mobileTab === 'dashboard' || mobileTab === 'chapters') && <PremiumCard><SectionHeader title={`챕터 상세 · ${currentChapter.title}`} description={currentChapter.description} /><div className="mt-4 grid grid-cols-2 gap-3"><div className="panel-block"><h3>개념</h3><p>{currentChapter.coreConcept}</p></div><div className="panel-block"><h3>기억 포인트</h3><p>{currentChapter.memoryPoint}</p></div><div className="panel-block col-span-2 md:col-span-1"><h3>대표 함정</h3><p>{currentChapter.trap}</p></div><div className="panel-block col-span-2 md:col-span-1"><h3>핵심 질문</h3><p>{currentChapter.keyQuestion}</p></div></div></PremiumCard>}
        {(mobileTab === 'dashboard' || mobileTab === 'lab') && <PremiumCard><SectionHeader title="문장 해부 실험실" description="태그를 눌러 구조를 확인하고 하단 설명 카드로 복기하세요." /><div className="mt-3 flex gap-2 overflow-x-auto pb-1">{sentenceBank.map((s) => <button key={s.id} className={`pill min-h-11 shrink-0 ${sentenceId === s.id ? 'pill-active' : ''}`} onClick={() => setSentenceId(s.id)}>{s.title}</button>)}</div><div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50/70 p-4 leading-7"><p className="whitespace-normal break-words text-sm text-slate-700">{currentSentence.sentence}</p><div className="mt-3 flex gap-2 overflow-x-auto pb-1">{currentSentence.layers.map((l, idx) => <span key={idx} className={`inline-flex shrink-0 rounded-md px-3 py-2 text-sm font-medium ${l.color}`}>{l.tag}: {l.text}</span>)}</div></div><div className="mt-3 grid gap-3 md:grid-cols-2"><div className="panel-block"><h3>Trap Point</h3><p>{currentSentence.trapPoint}</p></div><div className="panel-block"><h3>Layer Note</h3><p>{currentSentence.layers[0]?.note}</p></div></div></PremiumCard>}
        {(mobileTab === 'dashboard' || mobileTab === 'quiz') && <PremiumCard><SectionHeader title="시험 함정 훈련소" description="선택지 버튼/피드백/다음 문제 흐름을 모바일에 맞게 최적화." /><p className="mt-3 text-sm text-slate-500">{currentQuiz.level} · {currentQuiz.type} · #{currentQuiz.id}</p><p className="mt-2 text-base font-medium leading-relaxed text-slate-900">{currentQuiz.question}</p><div className="mt-3 grid gap-3">{currentQuiz.choices.map((c, idx) => <button key={idx} onClick={() => setChoice(idx)} className={`quiz-option ${choice === idx ? 'quiz-option-active' : ''}`}>{c}</button>)}</div><div className="mt-3 flex flex-wrap gap-2"><button onClick={submitAnswer} className="btn-primary">정답 확인</button><button onClick={() => { setQuizIndex((p) => p + 1); setChoice(null); setShowExplanation(false); }} className="btn-ghost">다음 문제</button><button className="btn-ghost" onClick={() => setShowExplanation((p) => !p)}>해설 {showExplanation ? '접기' : '펼치기'}</button></div>{choice !== null && showExplanation && <div className={`mt-4 rounded-xl border p-3 text-sm ${choice === currentQuiz.answer ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-amber-200 bg-amber-50 text-amber-900'}`}><p className="font-semibold">정답: {currentQuiz.answer + 1}</p><p className="mt-1">해설: {currentQuiz.explanation}</p></div>}</PremiumCard>}
        {(mobileTab === 'dashboard' || mobileTab === 'notes') && <PremiumCard><SectionHeader title="오답노트" description="필터 + 접기/펼치기로 긴 목록 부담을 줄였습니다." action={<div className="inline-flex items-center gap-2"><Filter size={14} className="text-slate-500" /><button className={`pill min-h-11 ${wrongFilter === 'all' ? 'pill-active' : ''}`} onClick={() => setWrongFilter('all')}>전체</button><button className={`pill min-h-11 ${wrongFilter === 'chapter' ? 'pill-active' : ''}`} onClick={() => setWrongFilter('chapter')}>현재 챕터</button></div>} /><div className="mt-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-slate-600">오답 {wrongNoteList.length}개 · 정확도 {progress}%</div><div className="mt-3 space-y-2">{wrongNoteList.length === 0 ? <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50/80 p-5 text-sm text-slate-500">기록된 오답이 없습니다.</div> : wrongNoteList.map((item) => { const open = openWrongIds.includes(item.id); return <div key={item.id} className="rounded-xl border border-stone-200 bg-white p-3"><button className="flex w-full items-center justify-between text-left" onClick={() => setOpenWrongIds((prev) => open ? prev.filter((id) => id !== item.id) : [...prev, item.id])}><div><p className="text-sm font-semibold text-slate-900">#{item.id} · {item.type}</p><p className="text-xs text-slate-500">{item.memoryPoint}</p></div><ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} size={16} /></button>{open && <div className="mt-3 flex flex-wrap gap-2"><button className="btn-ghost" onClick={() => setQuizIndex(quizBank.findIndex((q) => q.id === item.id))}>다시 풀기</button><button className="btn-ghost" onClick={() => save(wrongNotes.filter((id) => id !== item.id))}><X size={14} /> 삭제</button></div>}</div>; })}</div><button className="mt-3 btn-ghost" onClick={() => { if (window.confirm('오답노트를 전체 초기화할까요?')) save([]); }}><Trash2 size={14} /> 전체 초기화</button></PremiumCard>}
        {(mobileTab === 'dashboard' || mobileTab === 'notes') && <PremiumCard><SectionHeader title="기억 포인트" description="그리드 + 북마크 필터 + 2~3줄 요약으로 빠르게 복습." action={<div className="flex gap-2"><button className={`pill min-h-11 ${memoryFilter === 'all' ? 'pill-active' : ''}`} onClick={() => setMemoryFilter('all')}>전체</button><button className={`pill min-h-11 ${memoryFilter === 'bookmarked' ? 'pill-active' : ''}`} onClick={() => setMemoryFilter('bookmarked')}>북마크</button></div>} /><div className="mt-4 grid gap-2 sm:grid-cols-2">{memoryList.map((m) => { const expanded = expandedMemoryIds.includes(m.id); return <button key={m.id} className="memory-card" onClick={() => { const n = bookmarks.includes(m.id) ? bookmarks.filter((v) => v !== m.id) : [...bookmarks, m.id]; setBookmarks(n); saveToStorage('bookmarks', n); }}><p className={`text-sm leading-relaxed text-slate-700 ${expanded ? '' : 'line-clamp-3'}`}>{m.text}</p><div className="flex flex-col items-end gap-2"><Bookmark size={16} className={bookmarks.includes(m.id) ? 'fill-amber-400 text-amber-500' : 'text-slate-400'} /><span className="text-xs text-slate-500" onClick={(e) => { e.stopPropagation(); setExpandedMemoryIds((prev) => expanded ? prev.filter((id) => id !== m.id) : [...prev, m.id]); }}>{expanded ? '접기' : '펼치기'}</span></div></button>; })}</div></PremiumCard>}
        {(mobileTab === 'dashboard' || mobileTab === 'notes') && <PremiumCard><SectionHeader title="통합 검색" description="섹션별 결과와 EmptyState를 모바일 우선으로 구성." /><div className="mt-3 flex items-center gap-2 rounded-xl border border-stone-200 bg-white/90 px-3 py-2"><Search size={16} className="text-slate-400" /><input aria-label="모바일 검색" className="min-h-11 w-full bg-transparent text-sm outline-none" placeholder="검색어 입력" value={query} onChange={(e) => setQuery(e.target.value)} /></div><div className="mt-3 space-y-3">{query.trim().length === 0 ? <p className="rounded-xl border border-dashed border-stone-300 bg-stone-50/80 p-4 text-sm text-slate-500">검색어를 입력하면 챕터/문제/문장/기억포인트를 분류해서 보여줍니다.</p> : searchSections.map((k) => searchResults[k].length > 0 && <div key={k}><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{k}</p><div className="space-y-1">{searchResults[k].map((r, i) => <div key={i} className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-slate-700">{r}</div>)}</div></div>)}{query.trim().length > 0 && searchSections.every((k) => searchResults[k].length === 0) && <p className="rounded-xl border border-dashed border-stone-300 bg-stone-50/80 p-4 text-sm text-slate-500">검색 결과가 없습니다. 다른 키워드를 시도해보세요.</p>}</div></PremiumCard>}
      </section>
    </main>
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-stone-200 bg-stone-50/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden"><div className="grid grid-cols-5 gap-1 text-xs">{[['dashboard', Sparkles, '홈'], ['chapters', BookOpen, '챕터'], ['lab', FlaskConical, '해부'], ['quiz', Target, '훈련'], ['notes', TrendingUp, '오답']].map(([key, Icon, label]) => <button key={key} onClick={() => setMobileTab(key as MobileTab)} className={`flex min-h-11 flex-col items-center justify-center rounded-xl ${mobileTab === key ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500'}`}><Icon size={15 as never} /><span>{label}</span></button>)}</div></nav>
  </div>;
}
