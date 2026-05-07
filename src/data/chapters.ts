import { Chapter } from './types';

const chapterSeeds: Array<{
  id: number;
  title: string;
  description: string;
  keyQuestion: string;
  trap: string;
  coreConcept: string;
  examPattern: string;
  memoryHint: string;
  intuition: string;
  structureMap: string;
  examAlgorithm: string[];
  traps: string[];
}> = [
  {
    id: 1,
    title: '문장의 뼈대',
    description: '주어·동사·목적어·보어를 먼저 잡아 1~5형식과 동사 개수를 판단한다.',
    keyQuestion: '진짜 동사는 무엇이고, 그 동사가 요구하는 성분은 무엇인가?',
    trap: '긴 수식어, 전치사구 명사, 준동사/관계사절 동사 착각',
    coreConcept: '어법 문제의 시작은 문장 뼈대 찾기다.',
    examPattern: '수일치, 자동사/타동사, 5형식 목적격보어 함정',
    memoryHint: '동사 찾기 → 동사 개수 → 연결 장치 확인',
    intuition: '동사를 찾고 주어·목적어/보어를 맞추면 절반은 풀린다.',
    structureMap: 'S(주어) + V(동사) + O/C + M(수식어)로 색상 분해',
    examAlgorithm: ['진짜 동사를 찾는다.', '동사 개수를 센다.', '2개 이상이면 연결 장치를 확인한다.', '주어-동사 수일치를 확인한다.', '동사 뒤 목적어/보어 필요 여부를 판단한다.', '남는 말이 수식어인지 보어인지 구분한다.'],
    traps: ['전치사구 안 명사를 주어로 착각', '준동사를 본동사로 착각'],
  },
  {
    id: 2, title: '명사와 명사의 확장', description: '명사절·동명사·to부정사가 주어/목적어/보어 자리를 채운다.', keyQuestion: '빈칸이 명사 자리인가?', trap: 'that절 vs 관계대명사 that, if 명사절/조건절 혼동', coreConcept: '긴 덩어리도 명사처럼 기능한다.', examPattern: '가주어/진주어, 가목적어/진목적어, 목적어 준동사', memoryHint: '자리 확인 → 명사 역할 덩어리 선택', intuition: '명사 자리는 단어 하나가 아니라 덩어리 자리다.', structureMap: '명사 자리 슬롯: [주어][목적어][보어]', examAlgorithm: ['빈칸이 주어/목적어/보어 자리인지 확인', '명사 역할 덩어리 필요 여부 확인', '동사 포함이면 명사절 검토', '의미만 명사화면 동명사/to부정사 검토', '긴 주어/목적어의 it 가주어/가목적어 여부 확인'], traps: ['동명사와 현재분사 혼동', '가목적어 it 뒤 목적격보어 누락'] },
  { id: 3, title: '형용사와 명사 수식', description: '명사를 앞/뒤에서 수식하는 구·절의 구조를 판별한다.', keyQuestion: '수식받는 명사와 뒤 절의 완전성은?', trap: '관계대명사/관계부사, what/that 혼동', coreConcept: '길어진 수식어는 뒤로 가며 완전성 판단이 핵심이다.', examPattern: '관계사, 분사, 전치사+관계대명사', memoryHint: '선행사 찾기 → 뒤 절 완전성', intuition: '명사 뒤 설명 덩어리를 정확히 해석하면 고난도도 풀린다.', structureMap: 'N + [관계절/분사구] 후치수식 구조', examAlgorithm: ['수식받는 명사를 찾는다.', '뒤 덩어리가 명사 설명인지 확인한다.', '동사 유무로 구/절 구분한다.', '절이면 관계사 필요 여부를 본다.', '불완전절=관계대명사, 완전절=관계부사 가능성 검토', '분사 능동(-ing)/수동(p.p.) 판단'], traps: ['interesting/interested 감정분사 오류', '삽입구로 선행사-동사 관계 착각'] },
  { id: 4, title: '부사와 문장 확장', description: '부사/부사절/분사구문으로 상황 정보를 덧붙이는 법을 다룬다.', keyQuestion: '뒤에 절인가, 명사구인가?', trap: 'because/because of, although/despite, during/while 혼동', coreConcept: '부사는 뼈대가 아니라 상황 정보다.', examPattern: '부사절 접속사, 전치사 vs 접속사, 분사구문', memoryHint: '필수 성분 완성 확인 후 부가 정보 판단', intuition: '언제·왜·어떻게를 설명하는 확장 장치를 구분한다.', structureMap: 'Main clause + adverbial chunk', examAlgorithm: ['문장 필수 성분 완성 여부 확인', '남은 덩어리의 의미(시간/이유/조건 등) 확인', '주어+동사 있으면 접속사, 명사만 있으면 전치사', '분사구문은 접속사+주어 생략 구조인지 점검', '분사구문 주체와 주절 주어 일치 확인'], traps: ['분사구문 주어 불일치', 'to부정사 목적/결과/판단근거 혼동'] },
  { id: 5, title: '동사의 시간과 태도', description: '시제·완료·조동사·가정법으로 화자의 관점을 읽는다.', keyQuestion: '기준 시점과 사건의 앞뒤 관계는?', trap: 'since-현재완료, ago-과거, 가정법/진짜과거 혼동', coreConcept: '시제는 시간표가 아니라 관점 표시다.', examPattern: '시제일치, 완료, 조동사 추론', memoryHint: '시간표현 → 기준시점 → 앞뒤관계', intuition: '같은 사건도 시제로 거리감과 태도가 달라진다.', structureMap: '기준점(now/past)에서 사건 위치 배치', examAlgorithm: ['시간 표현 찾기', '기준 시점(현재/과거) 확인', '두 사건의 선후관계 판단', '완료의 연결감 유무 확인', '가정법의 사실 반대 여부 확인', '조동사의 태도(추측/의무/후회) 판단'], traps: ['must have p.p.와 cannot have p.p. 혼동', '시제일치 예외 누락'] },
  { id: 6, title: '능동과 수동 / 특수동사', description: '태 판단과 사역/지각동사의 목적어-보어 관계를 훈련한다.', keyQuestion: '주어가 행동을 하는가, 당하는가?', trap: '자동사 수동태, make/see 수동태에서 to 복원', coreConcept: '수동태는 be p.p. 암기가 아니라 역할 판단이다.', examPattern: '3·4·5형식 수동태, have/get 사역', memoryHint: '주어 역할 + 동사의 타동성 체크', intuition: '주어 관점에서 행동의 방향을 보면 태가 정리된다.', structureMap: '능동(S→V→O) vs 수동(S←be p.p.)', examAlgorithm: ['주어를 찾는다.', '주어의 행동 주체/피동 여부 판단', '목적어 필요한 동사인지 확인', '수동태 뒤 목적어가 남는지 점검', '사역/지각동사 O-OC 관계 확인', 'O가 직접/당함에 따라 원형·-ing·p.p. 선택'], traps: ['be p.p. 뒤 목적어 오류', '4형식 수동태 남는 목적어 처리 실패'] },
  { id: 7, title: '비교와 병렬', description: '비교구문과 병렬 구조에서 A/B 균형을 맞춘다.', keyQuestion: 'A와 B의 문법 모양이 균형적인가?', trap: '이중비교, not only A but also B 불균형', coreConcept: '뜻보다 구조의 균형이 먼저다.', examPattern: '비교급, 배수사, 상관접속사, 수일치', memoryHint: '연결어 양쪽 품사·구조 대칭', intuition: '비교와 병렬은 모양 맞추기 게임이다.', structureMap: 'A = B / A > B 및 병렬 축 정렬', examAlgorithm: ['비교 대상 A/B 찾기', '동일 종류 비교인지 확인', 'as/than 뒤 생략 복원', '병렬 연결어 앞뒤 구조 맞춤', '상관접속사 짝 확인', 'either/or·neither/nor 수일치 주의'], traps: ['than 뒤 대명사 격 오류', 'the 비교급, the 비교급 어순 혼동'] },
  { id: 8, title: '일치와 어순', description: '진짜 주어 기반 수일치와 도치/강조/간접의문문 복원을 다룬다.', keyQuestion: '평서문 기본 어순으로 복원하면 맞는가?', trap: 'a number of/the number of, 부정어 도치, 간접의문문 어순', coreConcept: '수일치는 주어 찾기, 어순은 복원 싸움이다.', examPattern: '도치, 강조구문, 삽입구, 관계사절 수일치', memoryHint: '괄호 제거 후 주어·동사 맞추기', intuition: '복잡한 수식어를 지우고 기본 어순으로 돌아오면 답이 보인다.', structureMap: '[(수식어)] 제거 → S V 확인 → 도치 복원', examAlgorithm: ['진짜 주어를 찾는다.', '전치사구/관계사절/분사구 제거', '주어 단복수 판단', '도치를 원래 어순으로 복원', '간접의문문이 평서문 어순인지 확인', 'It is/was ~ that 강조 대상을 확인'], traps: ['관계사절 동사를 본동사로 착각', 'only/부정어 도치 누락'] },
];

const levels: Chapter['level'][] = ['고1 기본', '고1 심화', '고2 수능형', '내신 고난도'];

export const chapters: Chapter[] = chapterSeeds.map((c, idx) => ({
  ...c,
  level: levels[idx % levels.length],
  category: c.title,
  coreIdea: `${c.coreConcept} 시험에서는 정의 암기보다 판단 순서가 점수를 만든다.`,
  mustRemember: [c.memoryHint, c.keyQuestion, c.examPattern],
  commonTraps: c.traps.map((t) => ({ title: t, explanation: t, examTip: '선택지 보기 전에 구조를 먼저 확정한다.' })),
  comparisonExamples: [{ a: 'I know that he is honest.', b: 'I know the boy that is honest.', point: 'A의 that은 명사절 접속사, B의 that은 관계대명사다.' }],
  examples: [{ sentence: 'The quality of the students is improving.', meaning: '학생들의 질이 향상되고 있다.', explanation: 'of the students는 수식어이고 진짜 주어는 The quality다.' }],
  quiz: [{ question: '이 챕터의 1순위 판단은?', choices: ['어휘 난도 확인', '문장 구조와 자리 판단', '해석만 빠르게 하기'], answer: '문장 구조와 자리 판단', explanation: '수능/내신 어법은 구조 근거를 먼저 잡아야 오답 함정을 피할 수 있다.', trapPoint: '뜻만 보고 선택하면 함정에 걸린다.' }],
  writingDrills: [{ korean: '핵심 뼈대만 남겨 한 줄로 써 보세요.', targetStructure: 'S + V + (O/C)', modelAnswer: 'The rule works for me.', explanation: '수식어를 걷어내는 연습이 실전 정답률을 올린다.' }],
}));
