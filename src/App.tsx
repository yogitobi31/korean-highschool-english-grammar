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

type MainSection = 'home' | 'chapters' | 'lab' | 'quiz' | 'notes' | 'memory';
type MobileTab = MainSection;
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
  const [mobileTab, setMobileTab] = useState<MobileTab>('home');
  const [desktopSection, setDesktopSection] = useState<MainSection>('home');
  const [wrongFilter, setWrongFilter] = useState<'all' | 'chapter'>('all');
  const [openWrongIds, setOpenWrongIds] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [memoryFilter, setMemoryFilter] = useState<'all' | 'bookmarked'>('all');
  const [expandedMemoryIds, setExpandedMemoryIds] = useState<number[]>([]);
  const [sentenceLevelFilter, setSentenceLevelFilter] = useState<'all' | '내신 기본' | '내신 심화' | '수능 실전' | '수능 킬러'>('all');
  const [sentenceTypeFilter, setSentenceTypeFilter] = useState('all');
  const [sentenceSearch, setSentenceSearch] = useState('');
  const [activeLayerId, setActiveLayerId] = useState<string | null>(null);
  const [labLayers, setLabLayers] = useState({ skeleton: true, modifier: true, clause: true, trap: true, logic: true });

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

  const sentenceTypes = useMemo(() => ['all', ...new Set(sentenceBank.map((s) => s.type))], []);
  const filteredSentences = useMemo(() => sentenceBank.filter((s) => (sentenceLevelFilter === 'all' || s.level === sentenceLevelFilter) && (sentenceTypeFilter === 'all' || s.type === sentenceTypeFilter) && (`${s.title} ${s.sentence} ${s.type}`.toLowerCase().includes(sentenceSearch.toLowerCase()))), [sentenceLevelFilter, sentenceTypeFilter, sentenceSearch]);
  const visibleLayers = useMemo(() => currentSentence.layers.filter((layer) => {
    if (layer.colorType === 'core' && !labLayers.skeleton) return false;
    if (layer.colorType === 'modifier' && !labLayers.modifier) return false;
    if (layer.colorType === 'clause' && !labLayers.clause) return false;
    if (layer.colorType === 'trap' && !labLayers.trap) return false;
    if (layer.colorType === 'logic' && !labLayers.logic) return false;
    return true;
  }), [currentSentence, labLayers]);
  const activeLayer = currentSentence.layers.find((layer) => layer.id === activeLayerId) ?? visibleLayers[0];

  const navItems: Array<{ key: MainSection; label: string; icon: React.ElementType }> = [
    { key: 'home', label: '홈', icon: Sparkles },
    { key: 'chapters', label: '챕터', icon: BookOpen },
    { key: 'lab', label: '문장 해부', icon: FlaskConical },
    { key: 'quiz', label: '시험 훈련', icon: Target },
    { key: 'notes', label: '오답노트', icon: TrendingUp },
    { key: 'memory', label: '기억 포인트', icon: Brain },
  ];
  const chapterSummary = chapters.slice(0, 3);

  return <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-slate-100 text-slate-800">
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8"><div><p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Premium Grammar Lab</p><h1 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">궁극의 고등학생 영어 어법</h1></div><div className="hidden items-center gap-2 rounded-xl border border-stone-200 bg-white/90 px-3 py-2 shadow-sm md:flex"><Search size={16} className="text-slate-400" /><input aria-label="검색" className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="챕터/유형/예문 검색" value={query} onChange={(e) => setQuery(e.target.value)} /></div></div></header>
    <main className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-4 md:grid md:grid-cols-[280px_minmax(0,1fr)] md:px-8 md:pb-10">
      <aside className="hidden space-y-4 md:block">
        <PremiumCard className="space-y-4">
          <div><p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Navigation</p><p className="mt-1 text-sm font-semibold text-slate-900">궁극의 고등학생 영어 어법</p></div>
          <div className="space-y-1">{navItems.map(({ key, label, icon: Icon }) => <button key={key} onClick={() => setDesktopSection(key)} className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${desktopSection === key ? 'border-l-2 border-indigo-400 bg-indigo-50/80 font-semibold text-indigo-800' : 'text-slate-600 hover:bg-stone-100'}`}><Icon size={15} />{label}</button>)}</div>
          <div className="border-t border-stone-200 pt-3"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">챕터 바로가기</p><div className="mt-2 space-y-1">{chapterSummary.map((c) => <button key={c.id} onClick={() => { setSelectedChapter(c.id); setDesktopSection('chapters'); }} className="w-full rounded-lg px-2 py-1 text-left text-xs text-slate-600 hover:bg-stone-100">{`CH ${c.id} ${c.title}`}</button>)}</div></div>
        </PremiumCard>
      </aside>
      <section className="mx-auto w-full max-w-[1160px] space-y-4">
        {((mobileTab === 'home') || desktopSection === 'home') && <PremiumCard className="hero-panel"><SectionHeader title="오늘의 학습 홈" description="오늘의 학습, 진행률, 복습 추천과 핵심 약점을 한 화면에서 관리하세요." action={<span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">오늘 추천 복습 <ChevronRight size={14} /></span>} /><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3"><PremiumCard className="stat-card"><Target size={16} /><p>진행률 {progress}%</p></PremiumCard><PremiumCard className="stat-card"><ClipboardCheck size={16} /><p>오답 {wrongNotes.length}개</p></PremiumCard><PremiumCard className="stat-card col-span-2 sm:col-span-1"><Brain size={16} /><p>북마크 {bookmarks.length}개</p></PremiumCard></div></PremiumCard>}
        {(desktopSection === 'chapters' || mobileTab === 'chapters') && <PremiumCard><SectionHeader title="챕터 맵" description="핵심 어법 챕터를 한눈에 살펴보세요." /><div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{chapters.map((c, idx) => <button key={c.id} onClick={() => setSelectedChapter(c.id)} className={`rounded-2xl border border-stone-200 bg-gradient-to-br p-4 text-left shadow-sm ${chapterTones[idx % chapterTones.length]} ${selectedChapter === c.id ? 'border-indigo-300 ring-1 ring-indigo-200' : ''}`}><p className="text-xs text-slate-500">Chapter {c.id}</p><p className="mt-1 font-semibold text-slate-900">{c.title}</p><p className="mt-2 text-sm text-slate-600">핵심 질문 · {c.keyQuestion}</p><p className="mt-2 line-clamp-1 text-xs text-slate-500">대표 함정 · {c.trap}</p><p className="mt-2 text-xs text-slate-500">진행률 · {Math.min(100, 55 + c.id * 7)}%</p><span className="mt-3 inline-flex rounded-lg border border-stone-300 bg-white/90 px-2 py-1 text-xs font-medium text-slate-700">학습 시작</span></button>)}</div></PremiumCard>}
        {(desktopSection === 'chapters' || mobileTab === 'chapters') && <PremiumCard><SectionHeader title={`챕터 상세 · ${currentChapter.title}`} description={currentChapter.description} /><div className="mt-4 grid grid-cols-2 gap-3"><div className="panel-block"><h3>핵심 개념</h3><p>{currentChapter.coreConcept}</p></div><div className="panel-block"><h3>기억 포인트</h3><p>{currentChapter.memoryPoint}</p></div><div className="panel-block col-span-2 md:col-span-1"><h3>대표 함정</h3><p>{currentChapter.trap}</p></div><div className="panel-block col-span-2 md:col-span-1"><h3>핵심 질문</h3><p>{currentChapter.keyQuestion}</p></div></div></PremiumCard>}
        {(desktopSection === 'lab' || mobileTab === 'lab') && <PremiumCard><SectionHeader title="문장 해부 실험실" description="레이어 토글 + 구조 클릭 해설 + 시험 판단 순서까지 한 번에 훈련합니다." />
<div className="mt-3 grid gap-2 md:grid-cols-4"><select className="btn-ghost" value={sentenceLevelFilter} onChange={(e)=>setSentenceLevelFilter(e.target.value as never)}><option value="all">난이도 전체</option><option>내신 기본</option><option>내신 심화</option><option>수능 실전</option><option>수능 킬러</option></select><select className="btn-ghost" value={sentenceTypeFilter} onChange={(e)=>setSentenceTypeFilter(e.target.value)}>{sentenceTypes.map((t)=><option key={t} value={t}>{t==='all'?'유형 전체':t}</option>)}</select><input className="btn-ghost text-sm" placeholder="문장 검색" value={sentenceSearch} onChange={(e)=>setSentenceSearch(e.target.value)} /><p className="text-xs text-slate-500 self-center">총 {filteredSentences.length}문장</p></div>
<div className="mt-3 flex gap-2 overflow-x-auto pb-1">{filteredSentences.map((s) => <button key={s.id} className={`pill min-h-11 shrink-0 ${sentenceId === s.id ? 'pill-active' : ''}`} onClick={() => {setSentenceId(s.id); setActiveLayerId(null);}}>{s.title}</button>)}</div>
<div className="mt-3 flex flex-wrap gap-2">{[['skeleton','문장 뼈대만 보기'],['modifier','수식어 보기'],['clause','절 구조 보기'],['trap','함정 포인트 보기'],['logic','시험 판단 순서 보기']].map(([k,label]) => <button key={k} className={`pill ${labLayers[k as keyof typeof labLayers] ? 'pill-active' : ''}`} onClick={()=>setLabLayers((p)=>({...p,[k]:!p[k as keyof typeof p]}))}>{label}</button>)}</div>
<div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50/70 p-4"><p className="text-sm text-slate-500">{currentSentence.level} · {currentSentence.type} · {currentSentence.examSourceStyle}</p><p className="mt-2 whitespace-normal break-words text-sm text-slate-800">{currentSentence.sentence}</p><p className="mt-1 text-xs text-slate-500">{currentSentence.koreanMeaning}</p><div className="mt-3 flex flex-wrap gap-2">{visibleLayers.map((l)=><button key={l.id} onClick={()=>setActiveLayerId(l.id)} className={`rounded-md px-3 py-2 text-xs font-semibold layer-${l.colorType} ${activeLayer?.id===l.id?'ring-2 ring-slate-400':''}`}>{l.role} · {l.text}</button>)}</div></div>
<div className="mt-3 grid gap-3 md:grid-cols-2"><div className="panel-block"><h3>선택 레이어 설명</h3><p>{activeLayer ? `${activeLayer.label}: ${activeLayer.explanation}` : '레이어를 클릭해 설명 확인'}</p></div><div className="panel-block"><h3>문장 뼈대</h3><p>{currentSentence.skeleton}</p></div><div className="panel-block"><h3>함정 포인트</h3><p>{currentSentence.trapPoint}</p><p className="mt-2 text-xs">오답 이유: {currentSentence.wrongReason}</p></div><div className="panel-block"><h3>정답 판단 근거</h3><p>{currentSentence.answerLogic}</p><p className="mt-2 text-xs">10초 판단법: {currentSentence.examTip}</p></div><div className="panel-block md:col-span-2"><h3>시험 판단 순서</h3><ol className="mt-2 list-decimal pl-5 text-sm text-slate-700">{currentSentence.decisionSteps.map((step,idx)=><li key={idx}>{idx+1}단계: {step}</li>)}</ol><p className="mt-2 text-xs text-slate-600">기억 포인트: {currentSentence.memoryPoint}</p></div></div></PremiumCard>}
{(desktopSection === 'quiz' || mobileTab === 'quiz') && <PremiumCard><SectionHeader title="시험 함정 훈련소" description="선택지 버튼/피드백/다음 문제 흐름을 모바일에 맞게 최적화." /><p className="mt-3 text-sm text-slate-500">{currentQuiz.level} · {currentQuiz.type} · #{currentQuiz.id}</p><p className="mt-2 text-base font-medium leading-relaxed text-slate-900">{currentQuiz.question}</p><div className="mt-3 grid gap-3">{currentQuiz.choices.map((c, idx) => <button key={idx} onClick={() => setChoice(idx)} className={`quiz-option ${choice === idx ? 'quiz-option-active' : ''}`}>{c}</button>)}</div><div className="mt-3 flex flex-wrap gap-2"><button onClick={submitAnswer} className="btn-primary">정답 확인</button><button onClick={() => { setQuizIndex((p) => p + 1); setChoice(null); setShowExplanation(false); }} className="btn-ghost">다음 문제</button><button className="btn-ghost" onClick={() => setShowExplanation((p) => !p)}>해설 {showExplanation ? '접기' : '펼치기'}</button></div>{choice !== null && showExplanation && <div className={`mt-4 rounded-xl border p-3 text-sm ${choice === currentQuiz.answer ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-amber-200 bg-amber-50 text-amber-900'}`}><p className="font-semibold">정답: {currentQuiz.answer + 1}</p><p className="mt-1">해설: {currentQuiz.explanation}</p></div>}</PremiumCard>}
        {(desktopSection === 'notes' || mobileTab === 'notes') && <PremiumCard><SectionHeader title="오답노트" description="필터 + 접기/펼치기로 긴 목록 부담을 줄였습니다." action={<div className="inline-flex items-center gap-2"><Filter size={14} className="text-slate-500" /><button className={`pill min-h-11 ${wrongFilter === 'all' ? 'pill-active' : ''}`} onClick={() => setWrongFilter('all')}>전체</button><button className={`pill min-h-11 ${wrongFilter === 'chapter' ? 'pill-active' : ''}`} onClick={() => setWrongFilter('chapter')}>현재 챕터</button></div>} /><div className="mt-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-slate-600">오답 {wrongNoteList.length}개 · 정확도 {progress}%</div><div className="mt-3 space-y-2">{wrongNoteList.length === 0 ? <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50/80 p-5 text-sm text-slate-500">기록된 오답이 없습니다.</div> : wrongNoteList.map((item) => { const open = openWrongIds.includes(item.id); return <div key={item.id} className="rounded-xl border border-stone-200 bg-white p-3"><button className="flex w-full items-center justify-between text-left" onClick={() => setOpenWrongIds((prev) => open ? prev.filter((id) => id !== item.id) : [...prev, item.id])}><div><p className="text-sm font-semibold text-slate-900">#{item.id} · {item.type}</p><p className="text-xs text-slate-500">{item.memoryPoint}</p></div><ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} size={16} /></button>{open && <div className="mt-3 flex flex-wrap gap-2"><button className="btn-ghost" onClick={() => setQuizIndex(quizBank.findIndex((q) => q.id === item.id))}>다시 풀기</button><button className="btn-ghost" onClick={() => save(wrongNotes.filter((id) => id !== item.id))}><X size={14} /> 삭제</button></div>}</div>; })}</div><button className="mt-3 btn-ghost" onClick={() => { if (window.confirm('오답노트를 전체 초기화할까요?')) save([]); }}><Trash2 size={14} /> 전체 초기화</button></PremiumCard>}
        {(desktopSection === 'memory' || mobileTab === 'memory') && <PremiumCard><SectionHeader title="기억 포인트" description="그리드 + 북마크 필터 + 2~3줄 요약으로 빠르게 복습." action={<div className="flex gap-2"><button className={`pill min-h-11 ${memoryFilter === 'all' ? 'pill-active' : ''}`} onClick={() => setMemoryFilter('all')}>전체</button><button className={`pill min-h-11 ${memoryFilter === 'bookmarked' ? 'pill-active' : ''}`} onClick={() => setMemoryFilter('bookmarked')}>북마크</button></div>} /><div className="mt-4 grid gap-2 sm:grid-cols-2">{memoryList.map((m) => { const expanded = expandedMemoryIds.includes(m.id); return <button key={m.id} className="memory-card" onClick={() => { const n = bookmarks.includes(m.id) ? bookmarks.filter((v) => v !== m.id) : [...bookmarks, m.id]; setBookmarks(n); saveToStorage('bookmarks', n); }}><p className={`text-sm leading-relaxed text-slate-700 ${expanded ? '' : 'line-clamp-3'}`}>{m.text}</p><div className="flex flex-col items-end gap-2"><Bookmark size={16} className={bookmarks.includes(m.id) ? 'fill-amber-400 text-amber-500' : 'text-slate-400'} /><span className="text-xs text-slate-500" onClick={(e) => { e.stopPropagation(); setExpandedMemoryIds((prev) => expanded ? prev.filter((id) => id !== m.id) : [...prev, m.id]); }}>{expanded ? '접기' : '펼치기'}</span></div></button>; })}</div></PremiumCard>}
      </section>
    </main>
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-stone-200 bg-stone-50/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden"><div className="grid grid-cols-5 gap-1 text-xs">{[['home', Sparkles, '홈'], ['chapters', BookOpen, '챕터'], ['lab', FlaskConical, '해부'], ['quiz', Target, '훈련'], ['notes', TrendingUp, '오답']].map(([key, Icon, label]) => <button key={key} onClick={() => setMobileTab(key as MobileTab)} className={`flex min-h-11 flex-col items-center justify-center rounded-xl ${mobileTab === key ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500'}`}><Icon size={15 as never} /><span>{label}</span></button>)}</div></nav>
  </div>;
}
