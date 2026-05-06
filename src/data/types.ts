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
  wrongChoiceExplanations: Record<string, string>;
  examTip: string;
};

export type LayerRole =
  | '주어'
  | '동사'
  | '목적어'
  | '보어'
  | '전치사구'
  | '관계절'
  | '명사절'
  | '부사절'
  | '분사구'
  | 'to부정사구'
  | '동명사구'
  | '병렬 구조'
  | '삽입구'
  | '수식어';

export type SentenceLayer = {
  id: string;
  label: string;
  text: string;
  role: LayerRole;
  startHint: string;
  endHint: string;
  explanation: string;
  colorType: 'core' | 'modifier' | 'clause' | 'trap' | 'logic';
};

export type SentenceItem = {
  id: number;
  title: string;
  level: QuizItem['level'];
  type: string;
  sentence: string;
  koreanMeaning: string;
  examSourceStyle: string;
  layers: SentenceLayer[];
  skeleton: string;
  trapPoint: string;
  wrongReason: string;
  answerLogic: string;
  decisionSteps: string[];
  examTip: string;
  memoryPoint: string;
};
