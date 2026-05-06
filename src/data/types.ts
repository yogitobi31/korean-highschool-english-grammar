export type Chapter = {
  id: number;
  title: string;
  description: string;
  keyQuestion: string;
  trap: string;
  coreConcept: string;
  examPattern: string;
  memoryHint: string;
  examples: { sentence: string; analysis: string }[];
};

export type QuizItem = {
  id: number;
  chapterId: number;
  level: '내신 기본' | '내신 심화' | '수능 실전' | '수능 킬러';
  type: string;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
  trap: string;
  memoryPoint: string;
};

export type SentenceLayer = {
  text: string;
  tag: string;
  note: string;
  color: string;
};

export type SentenceItem = {
  id: number;
  title: string;
  sentence: string;
  koreanMeaning: string;
  layers: SentenceLayer[];
  trapPoint: string;
  answerLogic: string[];
  examTip: string;
};
