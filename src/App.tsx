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
type QuizFilter = { level: string; type: string; chapter: string; wrongOnly: boolean };

function SectionHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <div className="section-header"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>;
}
const PremiumCard = ({ className = '', children }: { className?: string; children: React.ReactNode }) => <article className={`premium-card ${className}`}>{children}</article>;

export function App() {
  const [selectedChapter, setSelectedChapter] = useState(1); const [activeTab, setActiveTab] = useState('개념');
  const [wrongNotes, setWrongNotes] = useState<number[]>([]); const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [done, setDone] = useState({ total: 0, correct: 0 }); const [query, setQuery] = useState('');
  const [desktopSection, setDesktopSection] = useState<MainSection>('home'); const [mobileTab, setMobileTab] = useState<MainSection>('home');
  const [quizIndex, setQuizIndex] = useState(0); const [choice, setChoice] = useState<number | null>(null); const [showExplanation, setShowExplanation] = useState(false);
  const [memoryFilter, setMemoryFilter] = useState<'all' | 'bookmarked'>('all'); const [wrongFilter, setWrongFilter] = useState<'all' | 'chapter'>('all');
  const [quizFilter, setQuizFilter] = useState<QuizFilter>({ level: 'all', type: 'all', chapter: 'all', wrongOnly: false });
  const [expandedMemoryIds, setExpandedMemoryIds] = useState<number[]>([]); const [openWrongIds, setOpenWrongIds] = useState<number[]>([]);
  const section = desktopSection || mobileTab;

  useEffect(() => { setWrongNotes(loadFromStorage<number[]>('wrongNotes', [])); setBookmarks(loadFromStorage<number[]>('bookmarks', [])); setDone(loadFromStorage('progress', { total: 0, correct: 0 })); }, []);

  const progress = Math.round((done.correct / Math.max(done.total, 1)) * 100);
  const save = (nextWrong: number[], nextDone = done) => { setWrongNotes(nextWrong); setDone(nextDone); saveToStorage('wrongNotes', nextWrong); saveToStorage('progress', nextDone); };

  const quizLevels = ['all', ...new Set(quizBank.map((q) => q.level))]; const quizTypes = ['all', ...new Set(quizBank.map((q) => q.type))];
  const filteredQuiz = useMemo(() => quizBank.filter((q) => (quizFilter.level === 'all' || q.level === quizFilter.level) && (quizFilter.type === 'all' || q.type === quizFilter.type) && (quizFilter.chapter === 'all' || q.chapterId === Number(quizFilter.chapter)) && (!quizFilter.wrongOnly || wrongNotes.includes(q.id))), [quizFilter, wrongNotes]);
  const currentQuiz = filteredQuiz.length ? filteredQuiz[quizIndex % filteredQuiz.length] : quizBank[0];
  const currentChapter = chapters[selectedChapter - 1];

  const submitAnswer = () => { if (choice === null || !currentQuiz) return; const correct = choice === currentQuiz.answer; const nextDone = { total: done.total + 1, correct: done.correct + (correct ? 1 : 0) }; save(correct ? wrongNotes : [...new Set([...wrongNotes, currentQuiz.id])], nextDone); setShowExplanation(true); };

  const memoryList = memoryPoints.filter((m) => memoryFilter === 'bookmarked' ? bookmarks.includes(m.id) : true);
  const wrongNoteList = quizBank.filter((q) => wrongNotes.includes(q.id) && (wrongFilter === 'all' || q.chapterId === selectedChapter));

  const chapterJump = chapters;

  return <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-slate-100 text-slate-800">
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8"><div><p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Premium Grammar Lab</p><h1 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">궁극의 고등학생 영어 어법</h1></div><div className="hidden items-center gap-2 rounded-xl border border-stone-200 bg-white/90 px-3 py-2 shadow-sm md:flex"><Search size={16} className="text-slate-400" /><input className="w-64 bg-transparent text-sm outline-none" placeholder="검색" value={query} onChange={(e) => setQuery(e.target.value)} /></div></div></header>
    <main className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-4 md:grid md:grid-cols-[280px_minmax(0,1fr)] md:px-8 md:pb-10">
      <aside className="hidden md:block"><PremiumCard className="space-y-4"><div className="space-y-1"><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Navigation</p></div>{[['home','홈',Sparkles],['chapters','챕터',BookOpen],['lab','문장 해부',FlaskConical],['quiz','시험 훈련',Target],['notes','오답노트',TrendingUp],['memory','기억 포인트',Brain]].map(([key,label,Icon]) => <button key={key} onClick={() => setDesktopSection(key as MainSection)} className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm ${desktopSection===key?'bg-indigo-50 font-semibold text-indigo-700':'text-slate-600 hover:bg-stone-100'}`}><Icon size={15 as never}/>{label}</button>)}<div className="border-t border-stone-200 pt-3"><button className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">챕터 바로가기 <ChevronDown size={13}/></button><div className="mt-2 max-h-56 space-y-1 overflow-y-auto pr-1">{chapterJump.map((c)=><button key={c.id} onClick={()=>{setSelectedChapter(c.id);setDesktopSection('chapters');}} className={`w-full rounded-lg px-2 py-1 text-left text-xs ${selectedChapter===c.id?'bg-indigo-50 text-indigo-700':'text-slate-600 hover:bg-stone-100'}`}>CH {c.id} {c.title}</button>)}</div></div></PremiumCard></aside>
      <section className="space-y-4">
        {(desktopSection === 'home' || mobileTab === 'home') && <>
          <PremiumCard className="hero-panel"><SectionHeader title="오늘의 학습 홈" description="진행률, 추천 복습, 약점을 한 번에 정리하는 대시보드" action={<span className="pill pill-active">오늘 추천 복습 <ChevronRight size={14}/></span>} /><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><PremiumCard className="stat-card"><Target size={15}/>진행률 {progress}%</PremiumCard><PremiumCard className="stat-card"><ClipboardCheck size={15}/>오답 {wrongNotes.length}</PremiumCard><PremiumCard className="stat-card"><Bookmark size={15}/>북마크 {bookmarks.length}</PremiumCard><PremiumCard className="stat-card"><Brain size={15}/>오늘 훈련 {Math.min(done.total, 20)}문제</PremiumCard></div></PremiumCard>
        </>}

        {(desktopSection === 'chapters' || mobileTab === 'chapters') && <PremiumCard><SectionHeader title="챕터 맵" description="선택한 챕터의 개념·함정·예문·퀴즈를 연결해서 학습합니다."/><div className="mt-4 grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]"><div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">{chapters.map((c)=><button key={c.id} onClick={()=>setSelectedChapter(c.id)} className={`chapter-item ${selectedChapter===c.id?'chapter-item-active':''}`}><p className="text-xs text-slate-500">CH {c.id}</p><p className="font-semibold">{c.title}</p><p className="text-xs text-slate-500 mt-1 line-clamp-1">{c.keyQuestion}</p></button>)}</div><div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4"><p className="text-xs font-semibold uppercase text-indigo-700">선택된 챕터</p><h3 className="mt-1 text-lg font-semibold">{currentChapter.title}</h3><p className="text-sm text-slate-600">{currentChapter.description}</p><div className="mt-3 flex gap-2 overflow-x-auto">{['개념','알고리즘','함정','비교','실전','암기'].map((t)=><button key={t} className={`pill ${activeTab===t?'pill-active':''}`} onClick={()=>setActiveTab(t)}>{t}</button>)}</div><div className="mt-3 panel-block">{activeTab==='개념' && <div className="space-y-3 text-sm"><div><h3>직관</h3><p>{currentChapter.intuition}</p></div><div><h3>구조 감각</h3><p>{currentChapter.structureMap}</p></div><div><h3>핵심 아이디어</h3><p>{currentChapter.coreIdea}</p></div></div>}
{activeTab==='알고리즘' && <div className="space-y-2 text-sm">{currentChapter.examAlgorithm.map((step,idx)=><div key={idx} className="rounded-lg border border-stone-200 bg-white p-2"><span className="mr-2 text-indigo-600 font-semibold">{idx+1}.</span>{step}</div>)}</div>}
{activeTab==='함정' && <div className="space-y-3 text-sm">{currentChapter.commonTraps.map((trap,idx)=><div key={idx} className="rounded-lg border border-rose-200 bg-rose-50 p-3"><p className="font-semibold">{trap.title}</p><p className="mt-1">{trap.explanation}</p><p className="mt-1 text-xs">시험 팁: {trap.examTip}</p></div>)}</div>}
{activeTab==='비교' && <div className="space-y-3 text-sm">{currentChapter.comparisonExamples.map((ex,idx)=><div key={idx} className="rounded-lg border border-stone-200 bg-white p-3"><p>A. {ex.a}</p><p className="mt-1">B. {ex.b}</p><p className="mt-2 text-indigo-700">판단 포인트: {ex.point}</p></div>)}</div>}
{activeTab==='실전' && <div className="space-y-3 text-sm"><div className="rounded-lg border border-stone-200 bg-white p-3"><p className="font-semibold">대표 예문</p><p className="mt-1">{currentChapter.examples[0]?.sentence}</p><p className="mt-1 text-slate-600">{currentChapter.examples[0]?.meaning}</p><p className="mt-1">{currentChapter.examples[0]?.explanation}</p></div><div className="rounded-lg border border-indigo-200 bg-indigo-50 p-3"><p className="font-semibold">실전 문제</p><p className="mt-1">{currentChapter.quiz[0]?.question}</p><p className="mt-1 text-xs">정답: {currentChapter.quiz[0]?.answer}</p><p className="mt-1">해설: {currentChapter.quiz[0]?.explanation}</p></div><button className="btn-primary" onClick={()=>setDesktopSection('quiz')}>관련 문제로 이동</button></div>}
{activeTab==='암기' && <div className="space-y-2 text-sm">{currentChapter.mustRemember.map((m,idx)=><div key={idx} className="rounded-lg border border-amber-200 bg-amber-50 p-2">• {m}</div>)}</div>}</div></div></div></PremiumCard>}

        {(desktopSection === 'quiz' || mobileTab === 'quiz') && <PremiumCard><SectionHeader title="시험 함정 훈련소" description="수능/내신 빈출 어법 함정을 빠르게 훈련합니다." action={<div className="flex gap-2 overflow-x-auto"><button className="pill" onClick={()=>{setQuizIndex(Math.floor(Math.random()*Math.max(filteredQuiz.length,1)));setChoice(null);setShowExplanation(false);}}>랜덤 문제</button><button className={`pill ${quizFilter.wrongOnly?'pill-active':''}`} onClick={()=>setQuizFilter((p)=>({...p,wrongOnly:!p.wrongOnly}))}>오답만</button></div>}/><div className="mt-3 flex gap-2 overflow-x-auto"><select className="pill" value={quizFilter.level} onChange={(e)=>setQuizFilter((p)=>({...p,level:e.target.value}))}>{quizLevels.map((v)=><option key={v}>{v}</option>)}</select><select className="pill" value={quizFilter.type} onChange={(e)=>setQuizFilter((p)=>({...p,type:e.target.value}))}>{quizTypes.map((v)=><option key={v}>{v}</option>)}</select><select className="pill" value={quizFilter.chapter} onChange={(e)=>setQuizFilter((p)=>({...p,chapter:e.target.value}))}><option value="all">챕터 전체</option>{chapters.map((c)=><option key={c.id} value={c.id}>CH {c.id}</option>)}</select></div><div className="mt-4 quiz-shell"><div className="mb-3 flex flex-wrap gap-2 text-xs"><span className="badge">{currentQuiz.level}</span><span className="badge">{currentQuiz.type}</span><span className="badge">CH {currentQuiz.chapterId}</span><span className="badge">단일 선택</span></div><p className="text-base font-semibold">{currentQuiz.question}</p><div className="mt-4 grid gap-2">{currentQuiz.choices.map((c, idx)=><button key={idx} onClick={()=>setChoice(idx)} className={`quiz-option ${choice===idx?'quiz-option-active':''}`}><span className="mr-2 text-xs text-slate-500">◉</span>{c}</button>)}</div><div className="mt-4 flex flex-wrap gap-2"><button className="btn-primary" onClick={submitAnswer}>정답 확인</button><button className="btn-ghost" onClick={()=>{setQuizIndex((p)=>p+1);setChoice(null);setShowExplanation(false);}}>다음 문제</button><button className="btn-ghost" onClick={()=>setShowExplanation((p)=>!p)}>{showExplanation?'해설 접기':'해설 펼치기'}</button></div>{showExplanation && choice!==null && <div className={`mt-4 rounded-xl border p-4 ${choice===currentQuiz.answer?'border-emerald-200 bg-emerald-50':'border-rose-200 bg-rose-50'}`}><p className="font-semibold">{choice===currentQuiz.answer?'정답입니다':'오답입니다'} · 정답 {currentQuiz.answer+1}번</p><p className="mt-2 text-sm">해설: {currentQuiz.explanation}</p><p className="mt-2 text-sm">함정 포인트: {currentQuiz.trap}</p><p className="mt-2 text-sm">기억 포인트: {currentQuiz.memoryPoint}</p></div>}</div></PremiumCard>}

        {(desktopSection === 'memory' || mobileTab === 'memory') && <PremiumCard><SectionHeader title="기억 포인트" description="핵심 규칙을 카드 아카이브로 빠르게 복습합니다." action={<div className="flex gap-2 overflow-x-auto"><button className={`pill ${memoryFilter==='all'?'pill-active':''}`} onClick={()=>setMemoryFilter('all')}>전체</button><button className={`pill ${memoryFilter==='bookmarked'?'pill-active':''}`} onClick={()=>setMemoryFilter('bookmarked')}>북마크</button></div>}/><div className="mt-4 grid gap-3 sm:grid-cols-2">{memoryList.slice(0,24).map((m)=>{const expanded=expandedMemoryIds.includes(m.id); const marked=bookmarks.includes(m.id); return <div key={m.id} className="memory-card"><div className="space-y-2"><div className="flex gap-2 text-xs"><span className="badge">CH {m.chapterId}</span><span className="badge">핵심 규칙</span></div><p className={`text-sm ${expanded?'':'line-clamp-3'}`}>{m.text}</p>{expanded && <div className="text-xs text-slate-600"><p>챕터 연결: CH {m.chapterId}</p><p className="mt-1">설명: {m.text}</p></div>}</div><div className="flex flex-col items-end gap-2"><button onClick={()=>{const n=marked?bookmarks.filter((b)=>b!==m.id):[...bookmarks,m.id]; setBookmarks(n); saveToStorage('bookmarks',n);}}><Bookmark size={17} className={marked?'fill-amber-400 text-amber-500':'text-slate-400'}/></button><button className="text-xs text-slate-500" onClick={()=>setExpandedMemoryIds((p)=>expanded?p.filter((id)=>id!==m.id):[...p,m.id])}>{expanded?'접기':'펼치기'}</button></div></div>;})}</div></PremiumCard>}

        {(desktopSection === 'notes' || mobileTab === 'notes') && <PremiumCard><SectionHeader title="오답노트" description="약점 분석과 틀린 문제 재도전을 위한 기록" action={<div className="inline-flex items-center gap-2"><Filter size={14}/><button className={`pill ${wrongFilter==='all'?'pill-active':''}`} onClick={()=>setWrongFilter('all')}>전체</button><button className={`pill ${wrongFilter==='chapter'?'pill-active':''}`} onClick={()=>setWrongFilter('chapter')}>현재 챕터</button></div>}/><div className="mt-3 space-y-2">{wrongNoteList.map((item)=>{const open=openWrongIds.includes(item.id); return <div key={item.id} className="rounded-xl border border-stone-200 bg-white p-3"><button className="flex w-full justify-between" onClick={()=>setOpenWrongIds((p)=>open?p.filter((id)=>id!==item.id):[...p,item.id])}><span className="text-sm font-semibold">#{item.id} {item.type}</span><ChevronDown className={open?'rotate-180':''} size={14}/></button>{open && <div className="mt-2 flex gap-2"><button className="btn-ghost" onClick={()=>setDesktopSection('quiz')}>다시 풀기</button><button className="btn-ghost" onClick={()=>save(wrongNotes.filter((id)=>id!==item.id))}><X size={14}/>삭제</button></div>}</div>;})}</div><button className="mt-3 btn-ghost" onClick={()=>save([])}><Trash2 size={14}/>전체 초기화</button></PremiumCard>}

        {(desktopSection === 'lab' || mobileTab === 'lab') && <PremiumCard><SectionHeader title="문장 해부 실험실" description="문장 선택, 구조 시각화, 설명 패널 중심으로 학습합니다."/><p className="mt-3 text-sm text-slate-600">총 {sentenceBank.length}문장 데이터 학습 가능</p></PremiumCard>}
      </section>
    </main>
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-stone-200 bg-stone-50/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden"><div className="grid grid-cols-5 gap-1 text-xs">{[['home', Sparkles, '홈'], ['chapters', BookOpen, '챕터'], ['lab', FlaskConical, '해부'], ['quiz', Target, '훈련'], ['notes', TrendingUp, '오답']].map(([key, Icon, label]) => <button key={key} onClick={() => setMobileTab(key as MainSection)} className={`flex min-h-11 flex-col items-center justify-center rounded-xl ${mobileTab === key ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500'}`}><Icon size={15 as never} /><span>{label}</span></button>)}</div></nav>
  </div>;
}
