import { useEffect, useMemo, useState } from 'react';
import { Bookmark, Search, BookOpen, Target, Brain } from 'lucide-react';
import { chapters } from './data/chapters';
import { memoryPoints } from './data/memoryPoints';
import { quizBank } from './data/quizBank';
import { sentenceBank } from './data/sentenceBank';
import { loadFromStorage, saveToStorage } from './utils/storage';

export function App() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [quizIndex, setQuizIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [wrongNotes, setWrongNotes] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [query, setQuery] = useState('');
  const [done, setDone] = useState<{ total: number; correct: number }>({ total: 0, correct: 0 });
  const [sentenceId, setSentenceId] = useState(1);

  useEffect(() => {
    setWrongNotes(loadFromStorage<number[]>('wrongNotes', []));
    setBookmarks(loadFromStorage<number[]>('bookmarks', []));
    setDone(loadFromStorage('progress', { total: 0, correct: 0 }));
  }, []);

  const currentQuiz = quizBank[quizIndex % quizBank.length];
  const currentSentence = sentenceBank.find((s) => s.id === sentenceId) ?? sentenceBank[0];

  const filteredQuiz = useMemo(() => quizBank.filter((q) => q.chapterId === selectedChapter), [selectedChapter]);
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

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <header className="sticky top-0 z-10 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div><h1 className="text-xl font-semibold">궁극의 고등학생 영어 어법</h1><p className="text-sm text-slate-500">수능·내신 어법을 구조로 이해하는 마스터 앱</p></div>
          <div className="hidden md:flex items-center gap-2 rounded-xl border px-3 py-2"><Search size={16}/><input aria-label="검색" className="bg-transparent outline-none" placeholder="챕터/유형/예문 검색" value={query} onChange={(e)=>setQuery(e.target.value)} /></div>
        </div>
      </header>
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 md:grid-cols-12 md:px-8">
        <aside className="md:col-span-3 space-y-3">{chapters.map(c=><button key={c.id} className={`w-full rounded-2xl border p-4 text-left ${selectedChapter===c.id?'bg-white border-indigo-300':'bg-white/70'}`} onClick={()=>setSelectedChapter(c.id)}><p className="text-xs text-slate-500">Chapter {c.id}</p><p className="font-medium">{c.title}</p><p className="text-xs mt-1 text-slate-500">{c.trap}</p></button>)}</aside>
        <section className="md:col-span-9 space-y-4">
          <div className="grid gap-4 md:grid-cols-3"> 
            <div className="card"><Target/>오늘의 어법 훈련<br/>진행률 {progress}%</div>
            <div className="card"><BookOpen/>오답노트 {wrongNotes.length}개</div>
            <div className="card"><Brain/>북마크 {bookmarks.length}개</div>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">챕터 상세 · {chapters[selectedChapter-1].title}</h2>
            <p>{chapters[selectedChapter-1].description}</p><p className="text-sm text-slate-500">핵심 질문: {chapters[selectedChapter-1].keyQuestion}</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">문장 해부 실험실</h2>
            <div className="flex gap-2 overflow-auto py-2">{sentenceBank.map(s=><button key={s.id} className="rounded-lg border px-3 py-1 text-sm" onClick={()=>setSentenceId(s.id)}>{s.title}</button>)}</div>
            <p className="mt-2 leading-8">{currentSentence.layers.map((l,idx)=><span key={idx} className={`mr-1 rounded px-2 py-1 ${l.color}`} title={`${l.tag}: ${l.note}`}>{l.text}</span>)}</p>
            <p className="mt-2 text-sm">함정: {currentSentence.trapPoint}</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">시험 함정 훈련소</h2>
            <p className="text-sm text-slate-500">{currentQuiz.level} · {currentQuiz.type} · #{currentQuiz.id}</p>
            <p className="my-2">{currentQuiz.question}</p>
            <div className="grid gap-2">{currentQuiz.choices.map((c,idx)=><button aria-label={`선택지 ${idx+1}`} key={idx} onClick={()=>setChoice(idx)} className={`rounded-xl border px-3 py-2 text-left ${choice===idx?'border-indigo-400 bg-indigo-50':''}`}>{c}</button>)}</div>
            <div className="mt-3 flex gap-2"><button onClick={submitAnswer} className="rounded-xl bg-slate-900 px-4 py-2 text-white">정답 확인</button><button onClick={()=>{setQuizIndex((p)=>p+1);setChoice(null);}} className="rounded-xl border px-4 py-2">다음 문제</button></div>
            {choice!==null && <p className="mt-2 text-sm">정답: {currentQuiz.answer+1} / 해설: {currentQuiz.explanation}</p>}
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">기억 포인트 카드</h2>
            <div className="grid gap-2 md:grid-cols-2">{memoryPoints.slice(0,20).map(m=><button key={m.id} className="rounded-xl border p-3 text-left" onClick={()=>{const n=bookmarks.includes(m.id)?bookmarks.filter(v=>v!==m.id):[...bookmarks,m.id];setBookmarks(n);saveToStorage('bookmarks', n);}}><div className="flex justify-between"><span className="text-sm">{m.text}</span><Bookmark size={16} className={bookmarks.includes(m.id)?'fill-amber-400 text-amber-500':'text-slate-400'}/></div></button>)}</div>
          </div>
          <div className="card"><h2 className="text-lg font-semibold">검색 결과</h2>{searchResults.length===0?<p className="text-sm text-slate-500">검색어를 입력하세요.</p>:<ul className="list-disc pl-5">{searchResults.map((r,i)=><li key={i}>{r}</li>)}</ul>}</div>
          <div className="card"><h2 className="text-lg font-semibold">오답노트</h2><p>저장된 오답: {wrongNotes.join(', ') || '없음'}</p><button className="mt-2 rounded-xl border px-3 py-2" onClick={()=>{setWrongNotes([]);saveToStorage('wrongNotes', []);}}>전체 초기화</button></div>
        </section>
      </main>
    </div>
  );
}
