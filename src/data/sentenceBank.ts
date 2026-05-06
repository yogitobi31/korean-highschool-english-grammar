import { SentenceItem } from './types';

const makeLayers = (parts: SentenceItem['layers']) => parts;

export const sentenceBank: SentenceItem[] = [
  {
    id: 1,
    title: '수일치 거리 함정 1',
    level: '내신 기본',
    type: '수일치',
    sentence: 'The list of items that the manager requested was posted on the wall.',
    koreanMeaning: '관리자가 요청한 항목 목록이 벽에 게시되었다.',
    examSourceStyle: '내신 서술형 변형',
    layers: makeLayers([
      { id: '1-s', label: '핵심 주어', text: 'The list', role: '주어', startHint: 'The', endHint: 'list', explanation: 'of 이하를 걷어내면 단수 주어 list만 남는다.', colorType: 'core' },
      { id: '1-pp', label: '수식 전치사구', text: 'of items', role: '전치사구', startHint: 'of', endHint: 'items', explanation: '복수 items는 수식어일 뿐 동사 수 결정에 관여하지 않는다.', colorType: 'modifier' },
      { id: '1-rc', label: '관계절', text: 'that the manager requested', role: '관계절', startHint: 'that', endHint: 'requested', explanation: 'items를 꾸미는 관계절.', colorType: 'clause' },
      { id: '1-v', label: '동사', text: 'was posted', role: '동사', startHint: 'was', endHint: 'posted', explanation: '단수 주어와 맞는 단수 동사.', colorType: 'core' }
    ]),
    skeleton: 'The list was posted.', trapPoint: 'items에 끌려 were를 고르기 쉽다.', wrongReason: '가까운 명사 일치 오류(근접 일치).', answerLogic: '주어는 list(단수) → 동사는 was.', decisionSteps: ['진짜 주어 찾기', '중간 수식어 제거', '주어 수 확인', '동사 수 맞추기'], examTip: 'of + 복수명사는 자주 미끼다.', memoryPoint: '전치사구는 괄호 처리'
  },
  {
    id: 2, title: '수일치 거리 함정 2', level: '내신 심화', type: '수일치', sentence: 'A series of lectures on climate change has attracted many students.', koreanMeaning: '기후 변화에 관한 일련의 강의가 많은 학생들을 끌어모았다.', examSourceStyle: '내신 객관식', layers: makeLayers([{ id:'2-s',label:'주어',text:'A series',role:'주어',startHint:'A',endHint:'series',explanation:'series는 단복수 동형이지만 here 단수.',colorType:'core'},{id:'2-pp',label:'전치사구',text:'of lectures on climate change',role:'전치사구',startHint:'of',endHint:'change',explanation:'강의들 정보 제공 수식어.',colorType:'modifier'},{id:'2-v',label:'동사',text:'has attracted',role:'동사',startHint:'has',endHint:'attracted',explanation:'단수 동사.',colorType:'core'}]), skeleton:'A series has attracted many students.', trapPoint:'lectures에 끌려 have를 택함.', wrongReason:'주어 핵심어 미확인.', answerLogic:'series 단수 취급.', decisionSteps:['핵심 명사 표시','전치사구 제거','시제/수 일치 확인','목적어 확인'], examTip:'A series of + 복수 = 단수 빈출', memoryPoint:'핵심어 우선 규칙' },
  {
    id:3,title:'관계대명사 vs 관계부사 1',level:'수능 실전',type:'관계사',sentence:'This is the house where my grandmother was born.',koreanMeaning:'이곳은 우리 할머니가 태어난 집이다.',examSourceStyle:'수능 어법',layers:makeLayers([{id:'3-c',label:'보어 명사',text:'the house',role:'보어',startHint:'the',endHint:'house',explanation:'선행사는 장소.',colorType:'core'},{id:'3-rc',label:'관계부사절',text:'where my grandmother was born',role:'관계절',startHint:'where',endHint:'born',explanation:'in which 대체 가능.',colorType:'clause'},{id:'3-v',label:'연결동사',text:'is',role:'동사',startHint:'is',endHint:'is',explanation:'This와 보어를 연결.',colorType:'core'}]),skeleton:'This is the house.',trapPoint:'where 대신 which를 쓰며 전치사 누락.',wrongReason:'장소 선행사 + 완전절 구조 오판.',answerLogic:'where=in which.',decisionSteps:['선행사 의미 파악','뒤 절 완전/불완전 확인','관계사 선택','전치사 필요성 점검'],examTip:'장소+완전절이면 where.',memoryPoint:'where = in which'},
  {
    id:4,title:'관계대명사 vs 관계부사 2',level:'수능 실전',type:'관계사',sentence:'I remember the day when we first met.',koreanMeaning:'나는 우리가 처음 만났던 날을 기억한다.',examSourceStyle:'수능 기출 변형',layers:makeLayers([{id:'4-s',label:'주어',text:'I',role:'주어',startHint:'I',endHint:'I',explanation:'문장 주체.',colorType:'core'},{id:'4-v',label:'동사',text:'remember',role:'동사',startHint:'remember',endHint:'remember',explanation:'목적어절을 받는다.',colorType:'core'},{id:'4-o',label:'목적어',text:'the day',role:'목적어',startHint:'the',endHint:'day',explanation:'시간 선행사.',colorType:'core'},{id:'4-rc',label:'관계부사절',text:'when we first met',role:'관계절',startHint:'when',endHint:'met',explanation:'on which로 바꿀 수 있다.',colorType:'clause'}]),skeleton:'I remember the day.',trapPoint:'when을 that으로 바꾸며 전치사 처리 누락.',wrongReason:'시간 선행사 판정 실패.',answerLogic:'when=on which.',decisionSteps:['선행사 확인','뒤 절 성분 체크','관계사 확정','의미 검증'],examTip:'day/time + 완전절 = when',memoryPoint:'시간관계부사 패턴'},
  ...Array.from({ length: 16 }).map((_, i) => ({
    id: i + 5,
    title: ['현재분사 vs 과거분사','접속사 vs 전치사','명사절 that','what vs that','병렬 구조','부정어 도치','가주어 it','분사구문'][Math.floor(i / 2)] + ` ${i % 2 ? 2 : 1}`,
    level: (['내신 기본','내신 심화','수능 실전','수능 킬러'] as const)[i % 4],
    type: ['분사','접속사','명사절','명사절','병렬','도치','준동사','분사'][Math.floor(i / 2)],
    sentence: [
      'The boy standing by the gate is my cousin.',
      'The books written by Dr. Kim are difficult.',
      'Because he was ill, he stayed home.',
      'Despite his illness, he attended the class.',
      'I believe that she will pass the exam.',
      'That he lied surprised everyone.',
      'What she said was true.',
      'I know that she said the truth.',
      'She likes reading, writing, and speaking English.',
      'He is not only smart but also diligent.',
      'Never have I seen such a confusing question.',
      'Little did she know the rule had changed.',
      'It is important to review grammar daily.',
      'It seems that the answer is wrong.',
      'Feeling tired, he went to bed early.',
      'Given enough time, students can solve it.'
    ][i],
    koreanMeaning: '문장 구조 훈련용 예문.',
    examSourceStyle: '유형 집중 훈련',
    layers: makeLayers([
      { id: `${i + 5}-a`, label: '핵심 요소', text: [
        'The boy','The books','he','his illness','I','That he lied','What she said','I','She','He','I','she','It','It','he','students'
      ][i], role: '주어', startHint: '', endHint: '', explanation: '문장 뼈대 판단의 시작점.', colorType: 'core' },
      { id: `${i + 5}-b`, label: '핵심 동사/구조', text: [
        'is','are','stayed','attended','believe','surprised','was','know','likes','is','have I seen','did she know','is','seems','went','can solve'
      ][i], role: '동사', startHint: '', endHint: '', explanation: '시제/수/도치 여부를 확인.', colorType: 'core' },
      { id: `${i + 5}-c`, label: '구조 포인트', text: [
        'standing by the gate','written by Dr. Kim','Because he was ill','Despite his illness','that she will pass the exam','That he lied','What she said','that she said the truth','reading, writing, and speaking','not only smart but also diligent','Never','Little','to review grammar daily','that the answer is wrong','Feeling tired','Given enough time'
      ][i], role: ['분사구','분사구','부사절','전치사구','명사절','명사절','명사절','명사절','병렬 구조','병렬 구조','부사절','부사절','to부정사구','명사절','분사구','분사구'][i] as any, startHint: '', endHint: '', explanation: '선택지 함정이 걸리는 구간.', colorType: 'clause' }
    ]),
    skeleton: '핵심 주어 + 핵심 동사',
    trapPoint: '겉보기 가까운 단어/형태에 끌려 판단하기 쉽다.',
    wrongReason: '문장 기능(절/구/수식어) 분리가 안 되면 오답으로 연결된다.',
    answerLogic: '뼈대 우선 → 구조 판별 → 선택지 대입.',
    decisionSteps: ['핵심 주어 표시', '핵심 동사 찾기', '절/구 분리', '함정 포인트 배제', '정답 확정'],
    examTip: '10초 안에 뼈대부터 보라.',
    memoryPoint: '기능별 색 분리 학습'
  }))
];
