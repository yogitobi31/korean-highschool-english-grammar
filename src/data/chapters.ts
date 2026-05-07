import { Chapter } from './types';

const levels: Chapter['level'][] = ['고1 기본', '고1 심화', '고2 수능형', '내신 고난도'];

const base: Omit<Chapter, 'level' | 'category' | 'intuition' | 'coreIdea' | 'structureMap' | 'examAlgorithm' | 'mustRemember' | 'commonTraps' | 'comparisonExamples' | 'quiz' | 'writingDrills' | 'examples'>[] = [
  { id: 1, title: '명사와 그 확장', description: '명사는 문장에서 자리(주어/목적어/보어)를 채우는 핵심 덩어리다.', keyQuestion: '이 덩어리가 문장에서 명사 자리(주어/목적어/보어)에 들어갔는가?', trap: 'A of B에서 B를 주어처럼 착각하거나, 동명사/to부정사의 명사 역할을 놓치는 함정', coreConcept: '명사 문제는 뜻보다 자리부터 본다.', examPattern: '주어 찾기, that절/what절 구분, 동격 that, toV/V-ing가 빈출.', memoryHint: '자리 확인 → 덩어리 경계 → 동사 호응', examples: [] },
  { id: 2, title: '형용사와 그 확장', description: '형용사는 명사를 꾸미거나 보어로 쓰인다.', keyQuestion: '이 구조가 앞의 명사를 꾸미는가, 보어 자리인가?', trap: '형용사/부사 혼동, 후치수식 연결 대상을 잘못 잡는 함정', coreConcept: '형용사는 누구를 꾸미는지 화살표를 그리면 풀린다.', examPattern: '형용사/부사 선택, 후치수식, -ed/-ing가 빈출.', memoryHint: '꾸밈 대상 먼저', examples: [] },
  { id: 3, title: '부사와 그 확장', description: '부사는 수식 범위를 바꿔 정답을 갈라낸다.', keyQuestion: '이 부사가 무엇을 수식하는지 범위를 정확히 잡았는가?', trap: 'only, even, almost 위치 함정 / however 오용', coreConcept: '뜻보다 범위를 본다.', examPattern: '부사 위치, 접속부사 문장부호 출제', memoryHint: '무엇을 제한하는지 표시', examples: [] },
  { id: 4, title: '동사와 문장의 심장', description: '동사는 뒤에 필요한 구조를 결정한다.', keyQuestion: '이 동사는 목적어/보어/전치사를 무엇까지 요구하는가?', trap: '자동사·타동사 혼동, toV/V-ing 목적어 함정', coreConcept: '동사는 뒤 구조까지 세트 암기.', examPattern: '문형, 5형식, 준동사 목적어 선택', memoryHint: '동사+뒤구조 세트', examples: [] },
  { id: 5, title: '관계사 정복', description: '관계사는 뒤 절 완전성 판단이 핵심이다.', keyQuestion: '관계사 뒤 문장이 완전한가, 불완전한가?', trap: 'where/which, what/that, that 역할 혼동', coreConcept: '완전절이면 관계부사, 불완전절이면 관계대명사.', examPattern: '관계사 빈칸, 전치사+관계대명사', memoryHint: '뒤 절 완전성 1번 버튼', examples: [] },
  { id: 6, title: '분사와 분사구문', description: '분사는 능동/수동 관계를 묻는다.', keyQuestion: '수식받는 명사와 분사 사이가 능동인가 수동인가?', trap: '-ing/-ed 혼동, 분사구문 의미상 주어 불일치', coreConcept: '명사가 하는가/당하는가를 본다.', examPattern: '분사 형태, 분사구문 변형 출제', memoryHint: '관계 먼저, 해석은 나중', examples: [] },
  { id: 7, title: '수일치와 거리 함정', description: '동사는 가까운 명사가 아니라 진짜 주어와 맞춘다.', keyQuestion: '수식어를 걷어냈을 때 남는 진짜 주어는 무엇인가?', trap: 'A of B, each/every, there be 함정', coreConcept: '수일치는 구조 판단 문제.', examPattern: '주어-동사 일치', memoryHint: '삽입구 제거 후 판단', examples: [] },
  { id: 8, title: '병렬과 균형', description: '병렬은 형태 균형이 먼저다.', keyQuestion: 'and/or/but 앞뒤가 같은 문법 형태인가?', trap: 'toV/V-ing 섞기, 전치사 누락', coreConcept: '같은 급끼리 병렬.', examPattern: '어색한 부분 찾기 빈출', memoryHint: 'and 양쪽 품사 비교', examples: [] },
  { id: 9, title: '도치·강조·생략', description: '특수 어순은 강조 신호다.', keyQuestion: '왜 어순이 바뀌었고 무엇을 강조하는가?', trap: '부정어 도치 누락, 강조구문 혼동', coreConcept: '문두 신호를 보면 어순이 보인다.', examPattern: '도치, It is~that, 생략', memoryHint: '문두 부정어=도치', examples: [] },
  { id: 10, title: '접속사·전치사·부사 구분', description: '품사는 뜻이 아니라 뒤 구조로 판별한다.', keyQuestion: '뒤에 절이 오는가, 명사구가 오는가?', trap: 'because/because of, although/despite, however', coreConcept: '접속사=절, 전치사=명사구, 접속부사=문장 연결.', examPattern: '연결어 빈칸, 문장부호', memoryHint: '뒤 형태를 체크', examples: [] },
];

export const chapters: Chapter[] = base.map((c, idx) => ({
  ...c,
  level: levels[idx % 4],
  category: c.title,
  intuition: `${c.title}는 용어 암기가 아니라, 문장 뼈대를 빠르게 분해해서 정답 근거를 찾는 훈련이다.`,
  coreIdea: `${c.coreConcept} 수능/내신에서는 '뜻'보다 '구조 신호'를 먼저 잡는 학생이 이긴다.`,
  structureMap: `1) 핵심 주어/동사 표시 → 2) 구/절 경계 표시 → 3) 함정 단어(${c.trap.split(',')[0]}) 체크 → 4) 선택지 대입 검증`,
  examAlgorithm: ['핵심 주어·동사 먼저 표시', '수식어(전치사구/삽입구) 걷어내기', '절과 구를 구분해 빈칸 자리 확인', '오답 유도 포인트를 먼저 배제', '정답 근거를 한 문장으로 말해 보기'],
  mustRemember: [c.memoryHint, c.keyQuestion, c.examPattern],
  commonTraps: [
    {
      title: '가까운 단어 끌림 함정',
      explanation: `학생들이 ${c.title} 문제에서 가장 많이 틀리는 이유는, 눈에 먼저 보이는 단어에 끌려 구조 판단을 생략하기 때문이다.`,
      wrongExample: '겉으로 그럴듯한 형태를 바로 선택함',
      correctExample: '자리/완전성/수식관계를 먼저 체크한 뒤 선택함',
      examTip: '정답을 고르기 전에 "내가 지금 구조 근거를 말할 수 있나?"를 자문한다.',
    },
  ],
  comparisonExamples: [
    { a: 'Because he was late, he ran.', b: 'Because of his delay, he ran.', point: '절 vs 명사구를 구분하면 선택이 즉시 갈린다.' },
    { a: 'What she said was right.', b: 'That she said was right. (X)', point: 'what은 성분, that은 연결 역할이라는 차이를 체감한다.' },
  ],
  examples: [
    {
      sentence: 'The list of items is on the desk.',
      meaning: '항목 목록이 책상 위에 있다.',
      explanation: 'of items는 수식어이므로 진짜 주어는 list다. 시험은 이 지점에서 수일치/품사를 흔든다.',
    },
    {
      sentence: 'It is important to review errors daily.',
      meaning: '매일 오답을 복습하는 것은 중요하다.',
      explanation: '긴 주어를 뒤로 보내고 가주어 it으로 문장 뼈대를 안정화한 대표 구조다.',
    },
  ],
  quiz: [
    {
      question: `${c.title} 유형에서 가장 먼저 할 행동은?`,
      choices: ['뜻부터 해석한다', '핵심 주어/동사와 구·절 경계를 먼저 본다', '어휘 난도 높은 단어를 찾는다'],
      answer: '핵심 주어/동사와 구·절 경계를 먼저 본다',
      explanation: '실전 어법은 해석보다 구조 우선 판단이 정답률을 올린다.',
      trapPoint: '뜻풀이식 접근에 끌려 시간과 정확도를 동시에 잃는다.',
    },
  ],
  writingDrills: [
    {
      korean: '수식어를 빼고 핵심 뼈대만 남겨 문장을 써 봐라.',
      targetStructure: '주어 + 동사 + (목적어/보어)',
      modelAnswer: 'The rule works.',
      explanation: '복잡한 문장을 볼수록 먼저 뼈대를 단문으로 복원하는 습관이 필요하다.',
    },
  ],
}));
