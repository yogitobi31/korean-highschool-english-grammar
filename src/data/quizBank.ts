import { QuizItem } from './types';

export const quizBank: QuizItem[] = [
  {
    "id": 1,
    "chapterId": 1,
    "level": "내신 기본",
    "type": "to부정사/동명사",
    "question": "빈칸에 알맞은 것을 고르시오: He decided ____ abroad.",
    "choices": [
      "to study",
      "studying",
      "study",
      "studied",
      "to studying"
    ],
    "answer": 0,
    "explanation": "decide는 목적어로 to부정사를 취한다. 동명사나 원형은 문형에 맞지 않는다.",
    "trap": "동사별 목적어 형태 암기 부족",
    "memoryPoint": "decide to V",
    "wrongChoiceExplanations": {
      "to study": "정답.",
      "studying": "decide는 동명사를 목적어로 취하지 않는다.",
      "study": "to 없이 원형만 오지 않는다.",
      "studied": "시제형은 목적어 자리에 올 수 없다.",
      "to studying": "to 뒤에는 동사원형이 와야 한다."
    },
    "examTip": "동사-준동사 짝을 문장째로 암기한다."
  },
  {
    "id": 2,
    "chapterId": 1,
    "level": "내신 심화",
    "type": "동격 that",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The fact that he was absent surprised us.",
      "The fact what he was absent surprised us.",
      "The fact which he was absent surprised us.",
      "The fact that was absent surprised us.",
      "The fact of he was absent surprised us."
    ],
    "answer": 0,
    "explanation": "the fact 뒤 that절은 동격으로 fact의 내용을 설명한다. 절은 완전해야 하며 관계대명사 구조가 아니다.",
    "trap": "동격 that을 관계대명사로 오해",
    "memoryPoint": "명사+that+완전절=동격 가능",
    "wrongChoiceExplanations": {
      "The fact that he was absent surprised us.": "정답.",
      "The fact what he was absent surprised us.": "what은 선행사를 포함하므로 fact와 함께 못 쓴다.",
      "The fact which he was absent surprised us.": "which 뒤 절이 불완전하지 않다.",
      "The fact that was absent surprised us.": "that 뒤 주어가 없어 비문.",
      "The fact of he was absent surprised us.": "of 뒤에는 명사구가 와야 한다."
    },
    "examTip": "동격 that은 의미상 \"~라는 사실\"로 해석해 확인한다."
  },
  {
    "id": 3,
    "chapterId": 1,
    "level": "수능 실전",
    "type": "가주어/진주어",
    "question": "다음 중 어법상 옳은 문장은?",
    "choices": [
      "It is important to review your mistakes daily.",
      "It is important reviewing your mistakes daily.",
      "That is important to review your mistakes daily.",
      "It important is to review your mistakes daily.",
      "To review your mistakes daily are important."
    ],
    "answer": 0,
    "explanation": "긴 to부정사 주어를 뒤로 보내고 it을 가주어로 쓴 구조가 자연스럽다.",
    "trap": "형식주어 it 누락",
    "memoryPoint": "It is + 형용사 + to V",
    "wrongChoiceExplanations": {
      "It is important to review your mistakes daily.": "정답.",
      "It is important reviewing your mistakes daily.": "important 뒤에는 to부정사가 자연스럽다.",
      "That is important to review your mistakes daily.": "that은 형식주어 역할이 아니다.",
      "It important is to review your mistakes daily.": "어순 오류.",
      "To review your mistakes daily are important.": "to부정사구 주어는 단수 취급이므로 are 불가."
    },
    "examTip": "가주어 it은 해석보다 구조로 판단한다."
  },
  {
    "id": 4,
    "chapterId": 1,
    "level": "수능 킬러",
    "type": "what/that",
    "question": "다음 빈칸에 알맞은 말을 고르시오: ____ she said was true.",
    "choices": [
      "What",
      "That",
      "Which",
      "How",
      "If"
    ],
    "answer": 0,
    "explanation": "what은 선행사를 포함한 관계대명사로 절 전체를 주어로 만든다. That은 접속사라 주어 역할을 하지 못한다.",
    "trap": "that절을 주어로 착각하는 함정",
    "memoryPoint": "what=the thing(s) that",
    "wrongChoiceExplanations": {
      "What": "정답. 선행사를 포함한 관계대명사로 주어절을 만든다.",
      "That": "접속사 that은 절을 이끌 뿐 절 내부 성분이 되지 못한다.",
      "Which": "선행사가 없어 쓸 수 없다.",
      "How": "방법 의미로 문맥에 맞지 않는다.",
      "If": "조건 접속사로 사실 진술 문맥과 맞지 않는다."
    },
    "examTip": "what절은 자체로 명사절이므로 문장 성분을 채우는지 먼저 본다."
  },
  {
    "id": 5,
    "chapterId": 1,
    "level": "내신 기본",
    "type": "what/that",
    "question": "다음 빈칸에 알맞은 말을 고르시오: ____ she said was true.",
    "choices": [
      "What",
      "That",
      "Which",
      "How",
      "If"
    ],
    "answer": 0,
    "explanation": "what은 선행사를 포함한 관계대명사로 절 전체를 주어로 만든다. That은 접속사라 주어 역할을 하지 못한다.",
    "trap": "that절을 주어로 착각하는 함정",
    "memoryPoint": "what=the thing(s) that",
    "wrongChoiceExplanations": {
      "What": "정답. 선행사를 포함한 관계대명사로 주어절을 만든다.",
      "That": "접속사 that은 절을 이끌 뿐 절 내부 성분이 되지 못한다.",
      "Which": "선행사가 없어 쓸 수 없다.",
      "How": "방법 의미로 문맥에 맞지 않는다.",
      "If": "조건 접속사로 사실 진술 문맥과 맞지 않는다."
    },
    "examTip": "what절은 자체로 명사절이므로 문장 성분을 채우는지 먼저 본다."
  },
  {
    "id": 6,
    "chapterId": 1,
    "level": "내신 심화",
    "type": "what/that",
    "question": "다음 빈칸에 알맞은 말을 고르시오: ____ she said was true.",
    "choices": [
      "What",
      "That",
      "Which",
      "How",
      "If"
    ],
    "answer": 0,
    "explanation": "what은 선행사를 포함한 관계대명사로 절 전체를 주어로 만든다. That은 접속사라 주어 역할을 하지 못한다.",
    "trap": "that절을 주어로 착각하는 함정",
    "memoryPoint": "what=the thing(s) that",
    "wrongChoiceExplanations": {
      "What": "정답. 선행사를 포함한 관계대명사로 주어절을 만든다.",
      "That": "접속사 that은 절을 이끌 뿐 절 내부 성분이 되지 못한다.",
      "Which": "선행사가 없어 쓸 수 없다.",
      "How": "방법 의미로 문맥에 맞지 않는다.",
      "If": "조건 접속사로 사실 진술 문맥과 맞지 않는다."
    },
    "examTip": "what절은 자체로 명사절이므로 문장 성분을 채우는지 먼저 본다."
  },
  {
    "id": 7,
    "chapterId": 1,
    "level": "수능 실전",
    "type": "to부정사/동명사",
    "question": "빈칸에 알맞은 것을 고르시오: He decided ____ abroad.",
    "choices": [
      "to study",
      "studying",
      "study",
      "studied",
      "to studying"
    ],
    "answer": 0,
    "explanation": "decide는 목적어로 to부정사를 취한다. 동명사나 원형은 문형에 맞지 않는다.",
    "trap": "동사별 목적어 형태 암기 부족",
    "memoryPoint": "decide to V",
    "wrongChoiceExplanations": {
      "to study": "정답.",
      "studying": "decide는 동명사를 목적어로 취하지 않는다.",
      "study": "to 없이 원형만 오지 않는다.",
      "studied": "시제형은 목적어 자리에 올 수 없다.",
      "to studying": "to 뒤에는 동사원형이 와야 한다."
    },
    "examTip": "동사-준동사 짝을 문장째로 암기한다."
  },
  {
    "id": 8,
    "chapterId": 1,
    "level": "수능 킬러",
    "type": "what/that",
    "question": "다음 빈칸에 알맞은 말을 고르시오: ____ she said was true.",
    "choices": [
      "What",
      "That",
      "Which",
      "How",
      "If"
    ],
    "answer": 0,
    "explanation": "what은 선행사를 포함한 관계대명사로 절 전체를 주어로 만든다. That은 접속사라 주어 역할을 하지 못한다.",
    "trap": "that절을 주어로 착각하는 함정",
    "memoryPoint": "what=the thing(s) that",
    "wrongChoiceExplanations": {
      "What": "정답. 선행사를 포함한 관계대명사로 주어절을 만든다.",
      "That": "접속사 that은 절을 이끌 뿐 절 내부 성분이 되지 못한다.",
      "Which": "선행사가 없어 쓸 수 없다.",
      "How": "방법 의미로 문맥에 맞지 않는다.",
      "If": "조건 접속사로 사실 진술 문맥과 맞지 않는다."
    },
    "examTip": "what절은 자체로 명사절이므로 문장 성분을 채우는지 먼저 본다."
  },
  {
    "id": 9,
    "chapterId": 1,
    "level": "내신 기본",
    "type": "동격 that",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The fact that he was absent surprised us.",
      "The fact what he was absent surprised us.",
      "The fact which he was absent surprised us.",
      "The fact that was absent surprised us.",
      "The fact of he was absent surprised us."
    ],
    "answer": 0,
    "explanation": "the fact 뒤 that절은 동격으로 fact의 내용을 설명한다. 절은 완전해야 하며 관계대명사 구조가 아니다.",
    "trap": "동격 that을 관계대명사로 오해",
    "memoryPoint": "명사+that+완전절=동격 가능",
    "wrongChoiceExplanations": {
      "The fact that he was absent surprised us.": "정답.",
      "The fact what he was absent surprised us.": "what은 선행사를 포함하므로 fact와 함께 못 쓴다.",
      "The fact which he was absent surprised us.": "which 뒤 절이 불완전하지 않다.",
      "The fact that was absent surprised us.": "that 뒤 주어가 없어 비문.",
      "The fact of he was absent surprised us.": "of 뒤에는 명사구가 와야 한다."
    },
    "examTip": "동격 that은 의미상 \"~라는 사실\"로 해석해 확인한다."
  },
  {
    "id": 10,
    "chapterId": 1,
    "level": "내신 심화",
    "type": "what/that",
    "question": "다음 빈칸에 알맞은 말을 고르시오: ____ she said was true.",
    "choices": [
      "What",
      "That",
      "Which",
      "How",
      "If"
    ],
    "answer": 0,
    "explanation": "what은 선행사를 포함한 관계대명사로 절 전체를 주어로 만든다. That은 접속사라 주어 역할을 하지 못한다.",
    "trap": "that절을 주어로 착각하는 함정",
    "memoryPoint": "what=the thing(s) that",
    "wrongChoiceExplanations": {
      "What": "정답. 선행사를 포함한 관계대명사로 주어절을 만든다.",
      "That": "접속사 that은 절을 이끌 뿐 절 내부 성분이 되지 못한다.",
      "Which": "선행사가 없어 쓸 수 없다.",
      "How": "방법 의미로 문맥에 맞지 않는다.",
      "If": "조건 접속사로 사실 진술 문맥과 맞지 않는다."
    },
    "examTip": "what절은 자체로 명사절이므로 문장 성분을 채우는지 먼저 본다."
  },
  {
    "id": 11,
    "chapterId": 1,
    "level": "수능 실전",
    "type": "what/that",
    "question": "다음 빈칸에 알맞은 말을 고르시오: ____ she said was true.",
    "choices": [
      "What",
      "That",
      "Which",
      "How",
      "If"
    ],
    "answer": 0,
    "explanation": "what은 선행사를 포함한 관계대명사로 절 전체를 주어로 만든다. That은 접속사라 주어 역할을 하지 못한다.",
    "trap": "that절을 주어로 착각하는 함정",
    "memoryPoint": "what=the thing(s) that",
    "wrongChoiceExplanations": {
      "What": "정답. 선행사를 포함한 관계대명사로 주어절을 만든다.",
      "That": "접속사 that은 절을 이끌 뿐 절 내부 성분이 되지 못한다.",
      "Which": "선행사가 없어 쓸 수 없다.",
      "How": "방법 의미로 문맥에 맞지 않는다.",
      "If": "조건 접속사로 사실 진술 문맥과 맞지 않는다."
    },
    "examTip": "what절은 자체로 명사절이므로 문장 성분을 채우는지 먼저 본다."
  },
  {
    "id": 12,
    "chapterId": 1,
    "level": "수능 킬러",
    "type": "가주어/진주어",
    "question": "다음 중 어법상 옳은 문장은?",
    "choices": [
      "It is important to review your mistakes daily.",
      "It is important reviewing your mistakes daily.",
      "That is important to review your mistakes daily.",
      "It important is to review your mistakes daily.",
      "To review your mistakes daily are important."
    ],
    "answer": 0,
    "explanation": "긴 to부정사 주어를 뒤로 보내고 it을 가주어로 쓴 구조가 자연스럽다.",
    "trap": "형식주어 it 누락",
    "memoryPoint": "It is + 형용사 + to V",
    "wrongChoiceExplanations": {
      "It is important to review your mistakes daily.": "정답.",
      "It is important reviewing your mistakes daily.": "important 뒤에는 to부정사가 자연스럽다.",
      "That is important to review your mistakes daily.": "that은 형식주어 역할이 아니다.",
      "It important is to review your mistakes daily.": "어순 오류.",
      "To review your mistakes daily are important.": "to부정사구 주어는 단수 취급이므로 are 불가."
    },
    "examTip": "가주어 it은 해석보다 구조로 판단한다."
  },
  {
    "id": 13,
    "chapterId": 1,
    "level": "내신 기본",
    "type": "가주어/진주어",
    "question": "다음 중 어법상 옳은 문장은?",
    "choices": [
      "It is important to review your mistakes daily.",
      "It is important reviewing your mistakes daily.",
      "That is important to review your mistakes daily.",
      "It important is to review your mistakes daily.",
      "To review your mistakes daily are important."
    ],
    "answer": 0,
    "explanation": "긴 to부정사 주어를 뒤로 보내고 it을 가주어로 쓴 구조가 자연스럽다.",
    "trap": "형식주어 it 누락",
    "memoryPoint": "It is + 형용사 + to V",
    "wrongChoiceExplanations": {
      "It is important to review your mistakes daily.": "정답.",
      "It is important reviewing your mistakes daily.": "important 뒤에는 to부정사가 자연스럽다.",
      "That is important to review your mistakes daily.": "that은 형식주어 역할이 아니다.",
      "It important is to review your mistakes daily.": "어순 오류.",
      "To review your mistakes daily are important.": "to부정사구 주어는 단수 취급이므로 are 불가."
    },
    "examTip": "가주어 it은 해석보다 구조로 판단한다."
  },
  {
    "id": 14,
    "chapterId": 1,
    "level": "내신 심화",
    "type": "what/that",
    "question": "다음 빈칸에 알맞은 말을 고르시오: ____ she said was true.",
    "choices": [
      "What",
      "That",
      "Which",
      "How",
      "If"
    ],
    "answer": 0,
    "explanation": "what은 선행사를 포함한 관계대명사로 절 전체를 주어로 만든다. That은 접속사라 주어 역할을 하지 못한다.",
    "trap": "that절을 주어로 착각하는 함정",
    "memoryPoint": "what=the thing(s) that",
    "wrongChoiceExplanations": {
      "What": "정답. 선행사를 포함한 관계대명사로 주어절을 만든다.",
      "That": "접속사 that은 절을 이끌 뿐 절 내부 성분이 되지 못한다.",
      "Which": "선행사가 없어 쓸 수 없다.",
      "How": "방법 의미로 문맥에 맞지 않는다.",
      "If": "조건 접속사로 사실 진술 문맥과 맞지 않는다."
    },
    "examTip": "what절은 자체로 명사절이므로 문장 성분을 채우는지 먼저 본다."
  },
  {
    "id": 15,
    "chapterId": 1,
    "level": "수능 실전",
    "type": "동격 that",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The fact that he was absent surprised us.",
      "The fact what he was absent surprised us.",
      "The fact which he was absent surprised us.",
      "The fact that was absent surprised us.",
      "The fact of he was absent surprised us."
    ],
    "answer": 0,
    "explanation": "the fact 뒤 that절은 동격으로 fact의 내용을 설명한다. 절은 완전해야 하며 관계대명사 구조가 아니다.",
    "trap": "동격 that을 관계대명사로 오해",
    "memoryPoint": "명사+that+완전절=동격 가능",
    "wrongChoiceExplanations": {
      "The fact that he was absent surprised us.": "정답.",
      "The fact what he was absent surprised us.": "what은 선행사를 포함하므로 fact와 함께 못 쓴다.",
      "The fact which he was absent surprised us.": "which 뒤 절이 불완전하지 않다.",
      "The fact that was absent surprised us.": "that 뒤 주어가 없어 비문.",
      "The fact of he was absent surprised us.": "of 뒤에는 명사구가 와야 한다."
    },
    "examTip": "동격 that은 의미상 \"~라는 사실\"로 해석해 확인한다."
  },
  {
    "id": 16,
    "chapterId": 2,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (1번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 17,
    "chapterId": 2,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (2번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 18,
    "chapterId": 2,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (3번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 19,
    "chapterId": 2,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (4번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 20,
    "chapterId": 2,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (5번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 21,
    "chapterId": 2,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (6번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 22,
    "chapterId": 2,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (7번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 23,
    "chapterId": 2,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (8번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 24,
    "chapterId": 2,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (9번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 25,
    "chapterId": 2,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (10번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 26,
    "chapterId": 2,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (11번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 27,
    "chapterId": 2,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (12번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 28,
    "chapterId": 2,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (13번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 29,
    "chapterId": 2,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (14번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 30,
    "chapterId": 2,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[2단원] 다음 중 어법상 옳은 문장을 고르시오 (15번).",
    "choices": [
      "The sentence pattern in chapter 2 is applied correctly.",
      "The sentence pattern in chapter 2 are applied correctly.",
      "The sentence pattern in chapter 2 apply correctly.",
      "The sentence pattern in chapter 2 applying correctly.",
      "The sentence pattern in chapter 2 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 2 is applied correctly.": "정답.",
      "The sentence pattern in chapter 2 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 2 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 2 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 2 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 31,
    "chapterId": 3,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (1번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 32,
    "chapterId": 3,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (2번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 33,
    "chapterId": 3,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (3번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 34,
    "chapterId": 3,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (4번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 35,
    "chapterId": 3,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (5번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 36,
    "chapterId": 3,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (6번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 37,
    "chapterId": 3,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (7번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 38,
    "chapterId": 3,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (8번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 39,
    "chapterId": 3,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (9번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 40,
    "chapterId": 3,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (10번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 41,
    "chapterId": 3,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (11번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 42,
    "chapterId": 3,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (12번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 43,
    "chapterId": 3,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (13번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 44,
    "chapterId": 3,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (14번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 45,
    "chapterId": 3,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[3단원] 다음 중 어법상 옳은 문장을 고르시오 (15번).",
    "choices": [
      "The sentence pattern in chapter 3 is applied correctly.",
      "The sentence pattern in chapter 3 are applied correctly.",
      "The sentence pattern in chapter 3 apply correctly.",
      "The sentence pattern in chapter 3 applying correctly.",
      "The sentence pattern in chapter 3 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 3 is applied correctly.": "정답.",
      "The sentence pattern in chapter 3 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 3 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 3 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 3 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 46,
    "chapterId": 4,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (1번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 47,
    "chapterId": 4,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (2번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 48,
    "chapterId": 4,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (3번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 49,
    "chapterId": 4,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (4번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 50,
    "chapterId": 4,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (5번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 51,
    "chapterId": 4,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (6번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 52,
    "chapterId": 4,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (7번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 53,
    "chapterId": 4,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (8번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 54,
    "chapterId": 4,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (9번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 55,
    "chapterId": 4,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (10번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 56,
    "chapterId": 4,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (11번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 57,
    "chapterId": 4,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (12번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 58,
    "chapterId": 4,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (13번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 59,
    "chapterId": 4,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (14번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 60,
    "chapterId": 4,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[4단원] 다음 중 어법상 옳은 문장을 고르시오 (15번).",
    "choices": [
      "The sentence pattern in chapter 4 is applied correctly.",
      "The sentence pattern in chapter 4 are applied correctly.",
      "The sentence pattern in chapter 4 apply correctly.",
      "The sentence pattern in chapter 4 applying correctly.",
      "The sentence pattern in chapter 4 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 4 is applied correctly.": "정답.",
      "The sentence pattern in chapter 4 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 4 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 4 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 4 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 61,
    "chapterId": 5,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (1번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 62,
    "chapterId": 5,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (2번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 63,
    "chapterId": 5,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (3번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 64,
    "chapterId": 5,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (4번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 65,
    "chapterId": 5,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (5번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 66,
    "chapterId": 5,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (6번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 67,
    "chapterId": 5,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (7번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 68,
    "chapterId": 5,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (8번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 69,
    "chapterId": 5,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (9번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 70,
    "chapterId": 5,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (10번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 71,
    "chapterId": 5,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (11번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 72,
    "chapterId": 5,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (12번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 73,
    "chapterId": 5,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (13번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 74,
    "chapterId": 5,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (14번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 75,
    "chapterId": 5,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (15번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 76,
    "chapterId": 5,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (16번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 77,
    "chapterId": 5,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (17번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 78,
    "chapterId": 5,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (18번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 79,
    "chapterId": 5,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (19번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 80,
    "chapterId": 5,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[5단원] 다음 중 어법상 옳은 문장을 고르시오 (20번).",
    "choices": [
      "The sentence pattern in chapter 5 is applied correctly.",
      "The sentence pattern in chapter 5 are applied correctly.",
      "The sentence pattern in chapter 5 apply correctly.",
      "The sentence pattern in chapter 5 applying correctly.",
      "The sentence pattern in chapter 5 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 5 is applied correctly.": "정답.",
      "The sentence pattern in chapter 5 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 5 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 5 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 5 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 81,
    "chapterId": 6,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (1번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 82,
    "chapterId": 6,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (2번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 83,
    "chapterId": 6,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (3번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 84,
    "chapterId": 6,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (4번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 85,
    "chapterId": 6,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (5번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 86,
    "chapterId": 6,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (6번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 87,
    "chapterId": 6,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (7번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 88,
    "chapterId": 6,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (8번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 89,
    "chapterId": 6,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (9번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 90,
    "chapterId": 6,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (10번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 91,
    "chapterId": 6,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (11번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 92,
    "chapterId": 6,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (12번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 93,
    "chapterId": 6,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (13번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 94,
    "chapterId": 6,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (14번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 95,
    "chapterId": 6,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (15번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 96,
    "chapterId": 6,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (16번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 97,
    "chapterId": 6,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (17번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 98,
    "chapterId": 6,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (18번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 99,
    "chapterId": 6,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (19번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 100,
    "chapterId": 6,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[6단원] 다음 중 어법상 옳은 문장을 고르시오 (20번).",
    "choices": [
      "The sentence pattern in chapter 6 is applied correctly.",
      "The sentence pattern in chapter 6 are applied correctly.",
      "The sentence pattern in chapter 6 apply correctly.",
      "The sentence pattern in chapter 6 applying correctly.",
      "The sentence pattern in chapter 6 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 6 is applied correctly.": "정답.",
      "The sentence pattern in chapter 6 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 6 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 6 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 6 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 101,
    "chapterId": 7,
    "level": "내신 기본",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 102,
    "chapterId": 7,
    "level": "내신 심화",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: Neither the teacher nor the students ____ ready.",
    "choices": [
      "were",
      "was",
      "is",
      "has",
      "be"
    ],
    "answer": 0,
    "explanation": "either A or B / neither A nor B는 가까운 주어에 동사를 맞춘다. students가 가까워 복수동사 were가 맞다.",
    "trap": "가까운 주어 원칙 미적용",
    "memoryPoint": "상관접속사는 근접 일치",
    "wrongChoiceExplanations": {
      "were": "정답.",
      "was": "가까운 주어 students와 불일치.",
      "is": "시제/수 불일치.",
      "has": "be동사 계열 문맥 불일치.",
      "be": "활용되지 않은 원형."
    },
    "examTip": "상관접속사는 B에 동사를 맞춘다."
  },
  {
    "id": 103,
    "chapterId": 7,
    "level": "수능 실전",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 104,
    "chapterId": 7,
    "level": "수능 킬러",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 105,
    "chapterId": 7,
    "level": "내신 기본",
    "type": "수일치",
    "question": "어법상 옳은 것을 고르시오.",
    "choices": [
      "A number of students are waiting outside.",
      "A number of students is waiting outside.",
      "The number of students are increasing.",
      "Each of the students are ready.",
      "Every of the students is ready."
    ],
    "answer": 0,
    "explanation": "a number of는 많은 + 복수명사이므로 복수동사와 호응한다.",
    "trap": "the number와 혼동",
    "memoryPoint": "a number of + 복수동사",
    "wrongChoiceExplanations": {
      "A number of students are waiting outside.": "정답.",
      "A number of students is waiting outside.": "복수동사 are가 맞다.",
      "The number of students are increasing.": "the number는 단수동사 is가 맞다.",
      "Each of the students are ready.": "each는 단수 취급.",
      "Every of the students is ready.": "every는 of와 직접 결합하지 않는다."
    },
    "examTip": "수일치는 의미보다 문형 암기가 빠르다."
  },
  {
    "id": 106,
    "chapterId": 7,
    "level": "내신 심화",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 107,
    "chapterId": 7,
    "level": "수능 실전",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: Neither the teacher nor the students ____ ready.",
    "choices": [
      "were",
      "was",
      "is",
      "has",
      "be"
    ],
    "answer": 0,
    "explanation": "either A or B / neither A nor B는 가까운 주어에 동사를 맞춘다. students가 가까워 복수동사 were가 맞다.",
    "trap": "가까운 주어 원칙 미적용",
    "memoryPoint": "상관접속사는 근접 일치",
    "wrongChoiceExplanations": {
      "were": "정답.",
      "was": "가까운 주어 students와 불일치.",
      "is": "시제/수 불일치.",
      "has": "be동사 계열 문맥 불일치.",
      "be": "활용되지 않은 원형."
    },
    "examTip": "상관접속사는 B에 동사를 맞춘다."
  },
  {
    "id": 108,
    "chapterId": 7,
    "level": "수능 킬러",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 109,
    "chapterId": 7,
    "level": "내신 기본",
    "type": "수일치",
    "question": "어법상 옳은 것을 고르시오.",
    "choices": [
      "A number of students are waiting outside.",
      "A number of students is waiting outside.",
      "The number of students are increasing.",
      "Each of the students are ready.",
      "Every of the students is ready."
    ],
    "answer": 0,
    "explanation": "a number of는 많은 + 복수명사이므로 복수동사와 호응한다.",
    "trap": "the number와 혼동",
    "memoryPoint": "a number of + 복수동사",
    "wrongChoiceExplanations": {
      "A number of students are waiting outside.": "정답.",
      "A number of students is waiting outside.": "복수동사 are가 맞다.",
      "The number of students are increasing.": "the number는 단수동사 is가 맞다.",
      "Each of the students are ready.": "each는 단수 취급.",
      "Every of the students is ready.": "every는 of와 직접 결합하지 않는다."
    },
    "examTip": "수일치는 의미보다 문형 암기가 빠르다."
  },
  {
    "id": 110,
    "chapterId": 7,
    "level": "내신 심화",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 111,
    "chapterId": 7,
    "level": "수능 실전",
    "type": "수일치",
    "question": "어법상 옳은 것을 고르시오.",
    "choices": [
      "A number of students are waiting outside.",
      "A number of students is waiting outside.",
      "The number of students are increasing.",
      "Each of the students are ready.",
      "Every of the students is ready."
    ],
    "answer": 0,
    "explanation": "a number of는 많은 + 복수명사이므로 복수동사와 호응한다.",
    "trap": "the number와 혼동",
    "memoryPoint": "a number of + 복수동사",
    "wrongChoiceExplanations": {
      "A number of students are waiting outside.": "정답.",
      "A number of students is waiting outside.": "복수동사 are가 맞다.",
      "The number of students are increasing.": "the number는 단수동사 is가 맞다.",
      "Each of the students are ready.": "each는 단수 취급.",
      "Every of the students is ready.": "every는 of와 직접 결합하지 않는다."
    },
    "examTip": "수일치는 의미보다 문형 암기가 빠르다."
  },
  {
    "id": 112,
    "chapterId": 7,
    "level": "수능 킬러",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: Each of the books ____ useful.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "each는 개별 항목을 하나씩 보므로 단수동사를 취한다.",
    "trap": "복수명사 books에 끌리는 함정",
    "memoryPoint": "each/every/either/neither는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "each는 단수 취급.",
      "were": "시제 및 수 불일치.",
      "have been": "복수 형태.",
      "being": "서술동사 불가."
    },
    "examTip": "each of + 복수명사 + 단수동사를 자동화한다."
  },
  {
    "id": 113,
    "chapterId": 7,
    "level": "내신 기본",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: Neither the teacher nor the students ____ ready.",
    "choices": [
      "were",
      "was",
      "is",
      "has",
      "be"
    ],
    "answer": 0,
    "explanation": "either A or B / neither A nor B는 가까운 주어에 동사를 맞춘다. students가 가까워 복수동사 were가 맞다.",
    "trap": "가까운 주어 원칙 미적용",
    "memoryPoint": "상관접속사는 근접 일치",
    "wrongChoiceExplanations": {
      "were": "정답.",
      "was": "가까운 주어 students와 불일치.",
      "is": "시제/수 불일치.",
      "has": "be동사 계열 문맥 불일치.",
      "be": "활용되지 않은 원형."
    },
    "examTip": "상관접속사는 B에 동사를 맞춘다."
  },
  {
    "id": 114,
    "chapterId": 7,
    "level": "내신 심화",
    "type": "수일치",
    "question": "어법상 옳은 것을 고르시오.",
    "choices": [
      "A number of students are waiting outside.",
      "A number of students is waiting outside.",
      "The number of students are increasing.",
      "Each of the students are ready.",
      "Every of the students is ready."
    ],
    "answer": 0,
    "explanation": "a number of는 많은 + 복수명사이므로 복수동사와 호응한다.",
    "trap": "the number와 혼동",
    "memoryPoint": "a number of + 복수동사",
    "wrongChoiceExplanations": {
      "A number of students are waiting outside.": "정답.",
      "A number of students is waiting outside.": "복수동사 are가 맞다.",
      "The number of students are increasing.": "the number는 단수동사 is가 맞다.",
      "Each of the students are ready.": "each는 단수 취급.",
      "Every of the students is ready.": "every는 of와 직접 결합하지 않는다."
    },
    "examTip": "수일치는 의미보다 문형 암기가 빠르다."
  },
  {
    "id": 115,
    "chapterId": 7,
    "level": "수능 실전",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 116,
    "chapterId": 7,
    "level": "수능 킬러",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: Each of the books ____ useful.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "each는 개별 항목을 하나씩 보므로 단수동사를 취한다.",
    "trap": "복수명사 books에 끌리는 함정",
    "memoryPoint": "each/every/either/neither는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "each는 단수 취급.",
      "were": "시제 및 수 불일치.",
      "have been": "복수 형태.",
      "being": "서술동사 불가."
    },
    "examTip": "each of + 복수명사 + 단수동사를 자동화한다."
  },
  {
    "id": 117,
    "chapterId": 7,
    "level": "내신 기본",
    "type": "수일치",
    "question": "어법상 옳은 것을 고르시오.",
    "choices": [
      "A number of students are waiting outside.",
      "A number of students is waiting outside.",
      "The number of students are increasing.",
      "Each of the students are ready.",
      "Every of the students is ready."
    ],
    "answer": 0,
    "explanation": "a number of는 많은 + 복수명사이므로 복수동사와 호응한다.",
    "trap": "the number와 혼동",
    "memoryPoint": "a number of + 복수동사",
    "wrongChoiceExplanations": {
      "A number of students are waiting outside.": "정답.",
      "A number of students is waiting outside.": "복수동사 are가 맞다.",
      "The number of students are increasing.": "the number는 단수동사 is가 맞다.",
      "Each of the students are ready.": "each는 단수 취급.",
      "Every of the students is ready.": "every는 of와 직접 결합하지 않는다."
    },
    "examTip": "수일치는 의미보다 문형 암기가 빠르다."
  },
  {
    "id": 118,
    "chapterId": 7,
    "level": "내신 심화",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: The number of applicants ____ increasing every year.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "the number of + 복수명사는 \"~의 수\"로 단수 취급한다. 따라서 단수동사 is가 맞다.",
    "trap": "of 뒤 복수명사에 끌리는 함정",
    "memoryPoint": "the number of는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "a number of와 혼동한 오답.",
      "were": "시제와 수가 모두 맞지 않는다.",
      "have been": "복수 주어일 때 가능.",
      "being": "서술동사 자리 불가."
    },
    "examTip": "the number of / a number of를 세트로 구분한다."
  },
  {
    "id": 119,
    "chapterId": 7,
    "level": "수능 실전",
    "type": "수일치",
    "question": "어법상 옳은 것을 고르시오.",
    "choices": [
      "A number of students are waiting outside.",
      "A number of students is waiting outside.",
      "The number of students are increasing.",
      "Each of the students are ready.",
      "Every of the students is ready."
    ],
    "answer": 0,
    "explanation": "a number of는 많은 + 복수명사이므로 복수동사와 호응한다.",
    "trap": "the number와 혼동",
    "memoryPoint": "a number of + 복수동사",
    "wrongChoiceExplanations": {
      "A number of students are waiting outside.": "정답.",
      "A number of students is waiting outside.": "복수동사 are가 맞다.",
      "The number of students are increasing.": "the number는 단수동사 is가 맞다.",
      "Each of the students are ready.": "each는 단수 취급.",
      "Every of the students is ready.": "every는 of와 직접 결합하지 않는다."
    },
    "examTip": "수일치는 의미보다 문형 암기가 빠르다."
  },
  {
    "id": 120,
    "chapterId": 7,
    "level": "수능 킬러",
    "type": "수일치",
    "question": "빈칸에 알맞은 동사를 고르시오: Each of the books ____ useful.",
    "choices": [
      "is",
      "are",
      "were",
      "have been",
      "being"
    ],
    "answer": 0,
    "explanation": "each는 개별 항목을 하나씩 보므로 단수동사를 취한다.",
    "trap": "복수명사 books에 끌리는 함정",
    "memoryPoint": "each/every/either/neither는 단수",
    "wrongChoiceExplanations": {
      "is": "정답.",
      "are": "each는 단수 취급.",
      "were": "시제 및 수 불일치.",
      "have been": "복수 형태.",
      "being": "서술동사 불가."
    },
    "examTip": "each of + 복수명사 + 단수동사를 자동화한다."
  },
  {
    "id": 121,
    "chapterId": 8,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (1번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 122,
    "chapterId": 8,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (2번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 123,
    "chapterId": 8,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (3번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 124,
    "chapterId": 8,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (4번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 125,
    "chapterId": 8,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (5번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 126,
    "chapterId": 8,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (6번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 127,
    "chapterId": 8,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (7번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 128,
    "chapterId": 8,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (8번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 129,
    "chapterId": 8,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (9번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 130,
    "chapterId": 8,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (10번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 131,
    "chapterId": 8,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (11번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 132,
    "chapterId": 8,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (12번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 133,
    "chapterId": 8,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (13번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 134,
    "chapterId": 8,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (14번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 135,
    "chapterId": 8,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[8단원] 다음 중 어법상 옳은 문장을 고르시오 (15번).",
    "choices": [
      "The sentence pattern in chapter 8 is applied correctly.",
      "The sentence pattern in chapter 8 are applied correctly.",
      "The sentence pattern in chapter 8 apply correctly.",
      "The sentence pattern in chapter 8 applying correctly.",
      "The sentence pattern in chapter 8 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 8 is applied correctly.": "정답.",
      "The sentence pattern in chapter 8 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 8 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 8 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 8 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 136,
    "chapterId": 9,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (1번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 137,
    "chapterId": 9,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (2번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 138,
    "chapterId": 9,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (3번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 139,
    "chapterId": 9,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (4번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 140,
    "chapterId": 9,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (5번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 141,
    "chapterId": 9,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (6번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 142,
    "chapterId": 9,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (7번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 143,
    "chapterId": 9,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (8번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 144,
    "chapterId": 9,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (9번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 145,
    "chapterId": 9,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (10번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 146,
    "chapterId": 9,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (11번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 147,
    "chapterId": 9,
    "level": "수능 킬러",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (12번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 148,
    "chapterId": 9,
    "level": "내신 기본",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (13번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 149,
    "chapterId": 9,
    "level": "내신 심화",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (14번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 150,
    "chapterId": 9,
    "level": "수능 실전",
    "type": "어법상 틀린 것 고치기",
    "question": "[9단원] 다음 중 어법상 옳은 문장을 고르시오 (15번).",
    "choices": [
      "The sentence pattern in chapter 9 is applied correctly.",
      "The sentence pattern in chapter 9 are applied correctly.",
      "The sentence pattern in chapter 9 apply correctly.",
      "The sentence pattern in chapter 9 applying correctly.",
      "The sentence pattern in chapter 9 to apply correctly."
    ],
    "answer": 0,
    "explanation": "핵심 주어 pattern이 단수이므로 is applied가 맞다. 나머지는 수일치 또는 서술 구조가 무너진다. 실제 풀이에서는 주어·동사 뼈대를 먼저 확인해야 한다.",
    "trap": "복수처럼 보이는 주변 단어에 끌려 동사 형태를 잘못 고르는 함정",
    "memoryPoint": "주어-동사 뼈대 먼저",
    "wrongChoiceExplanations": {
      "The sentence pattern in chapter 9 is applied correctly.": "정답.",
      "The sentence pattern in chapter 9 are applied correctly.": "pattern은 단수이므로 are는 불가.",
      "The sentence pattern in chapter 9 apply correctly.": "수일치 오류.",
      "The sentence pattern in chapter 9 applying correctly.": "동사 자리에서 분사 단독 사용 불가.",
      "The sentence pattern in chapter 9 to apply correctly.": "to부정사는 서술동사 역할 불가."
    },
    "examTip": "문장을 괄호로 줄여 핵심 주어와 동사만 남겨 판단한다."
  },
  {
    "id": 151,
    "chapterId": 10,
    "level": "내신 기본",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: ____ he was sick, he came to school.",
    "choices": [
      "Although",
      "Despite",
      "Because of",
      "However",
      "In spite"
    ],
    "answer": 0,
    "explanation": "뒤가 절(he was sick)이므로 접속사 although가 필요하다. despite/because of는 명사구를 받는다.",
    "trap": "절/명사구 구분 실패",
    "memoryPoint": "접속사는 절, 전치사는 명사구",
    "wrongChoiceExplanations": {
      "Although": "정답.",
      "Despite": "뒤에 명사구가 와야 한다.",
      "Because of": "명사구와 결합해야 한다.",
      "However": "접속부사로 절을 직접 이을 수 없다.",
      "In spite": "in spite of가 완전형."
    },
    "examTip": "빈칸 뒤 첫 단어가 주어인지 명사인지 먼저 본다."
  },
  {
    "id": 152,
    "chapterId": 10,
    "level": "내신 심화",
    "type": "접속사/전치사",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The plan looked simple; however, it was hard to carry out.",
      "The plan looked simple, however it was hard to carry out.",
      "The plan looked simple however it was hard to carry out.",
      "The plan looked simple, but however it was hard to carry out.",
      "However the plan looked simple, it was hard to carry out."
    ],
    "answer": 0,
    "explanation": "however는 접속사가 아니라 접속부사이므로 세미콜론+however, 또는 마침표+However 패턴이 필요하다.",
    "trap": "however를 등위접속사처럼 쓰는 함정",
    "memoryPoint": "however 앞뒤 문장부호 체크",
    "wrongChoiceExplanations": {
      "The plan looked simple; however, it was hard to carry out.": "정답.",
      "The plan looked simple, however it was hard to carry out.": "comma splice 오류.",
      "The plan looked simple however it was hard to carry out.": "문장 경계가 없다.",
      "The plan looked simple, but however it was hard to carry out.": "but와 however 중복.",
      "However the plan looked simple, it was hard to carry out.": "however가 양보접속사 의미가 되려면 문맥/형태가 다르다."
    },
    "examTip": "however는 문장 접착제가 아니라 전환 신호다."
  },
  {
    "id": 153,
    "chapterId": 10,
    "level": "수능 실전",
    "type": "접속사/전치사",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The plan looked simple; however, it was hard to carry out.",
      "The plan looked simple, however it was hard to carry out.",
      "The plan looked simple however it was hard to carry out.",
      "The plan looked simple, but however it was hard to carry out.",
      "However the plan looked simple, it was hard to carry out."
    ],
    "answer": 0,
    "explanation": "however는 접속사가 아니라 접속부사이므로 세미콜론+however, 또는 마침표+However 패턴이 필요하다.",
    "trap": "however를 등위접속사처럼 쓰는 함정",
    "memoryPoint": "however 앞뒤 문장부호 체크",
    "wrongChoiceExplanations": {
      "The plan looked simple; however, it was hard to carry out.": "정답.",
      "The plan looked simple, however it was hard to carry out.": "comma splice 오류.",
      "The plan looked simple however it was hard to carry out.": "문장 경계가 없다.",
      "The plan looked simple, but however it was hard to carry out.": "but와 however 중복.",
      "However the plan looked simple, it was hard to carry out.": "however가 양보접속사 의미가 되려면 문맥/형태가 다르다."
    },
    "examTip": "however는 문장 접착제가 아니라 전환 신호다."
  },
  {
    "id": 154,
    "chapterId": 10,
    "level": "수능 킬러",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: ____ he was sick, he came to school.",
    "choices": [
      "Although",
      "Despite",
      "Because of",
      "However",
      "In spite"
    ],
    "answer": 0,
    "explanation": "뒤가 절(he was sick)이므로 접속사 although가 필요하다. despite/because of는 명사구를 받는다.",
    "trap": "절/명사구 구분 실패",
    "memoryPoint": "접속사는 절, 전치사는 명사구",
    "wrongChoiceExplanations": {
      "Although": "정답.",
      "Despite": "뒤에 명사구가 와야 한다.",
      "Because of": "명사구와 결합해야 한다.",
      "However": "접속부사로 절을 직접 이을 수 없다.",
      "In spite": "in spite of가 완전형."
    },
    "examTip": "빈칸 뒤 첫 단어가 주어인지 명사인지 먼저 본다."
  },
  {
    "id": 155,
    "chapterId": 10,
    "level": "내신 기본",
    "type": "접속사/전치사",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The plan looked simple; however, it was hard to carry out.",
      "The plan looked simple, however it was hard to carry out.",
      "The plan looked simple however it was hard to carry out.",
      "The plan looked simple, but however it was hard to carry out.",
      "However the plan looked simple, it was hard to carry out."
    ],
    "answer": 0,
    "explanation": "however는 접속사가 아니라 접속부사이므로 세미콜론+however, 또는 마침표+However 패턴이 필요하다.",
    "trap": "however를 등위접속사처럼 쓰는 함정",
    "memoryPoint": "however 앞뒤 문장부호 체크",
    "wrongChoiceExplanations": {
      "The plan looked simple; however, it was hard to carry out.": "정답.",
      "The plan looked simple, however it was hard to carry out.": "comma splice 오류.",
      "The plan looked simple however it was hard to carry out.": "문장 경계가 없다.",
      "The plan looked simple, but however it was hard to carry out.": "but와 however 중복.",
      "However the plan looked simple, it was hard to carry out.": "however가 양보접속사 의미가 되려면 문맥/형태가 다르다."
    },
    "examTip": "however는 문장 접착제가 아니라 전환 신호다."
  },
  {
    "id": 156,
    "chapterId": 10,
    "level": "내신 심화",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: ____ he was sick, he came to school.",
    "choices": [
      "Although",
      "Despite",
      "Because of",
      "However",
      "In spite"
    ],
    "answer": 0,
    "explanation": "뒤가 절(he was sick)이므로 접속사 although가 필요하다. despite/because of는 명사구를 받는다.",
    "trap": "절/명사구 구분 실패",
    "memoryPoint": "접속사는 절, 전치사는 명사구",
    "wrongChoiceExplanations": {
      "Although": "정답.",
      "Despite": "뒤에 명사구가 와야 한다.",
      "Because of": "명사구와 결합해야 한다.",
      "However": "접속부사로 절을 직접 이을 수 없다.",
      "In spite": "in spite of가 완전형."
    },
    "examTip": "빈칸 뒤 첫 단어가 주어인지 명사인지 먼저 본다."
  },
  {
    "id": 157,
    "chapterId": 10,
    "level": "수능 실전",
    "type": "접속사/전치사",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The plan looked simple; however, it was hard to carry out.",
      "The plan looked simple, however it was hard to carry out.",
      "The plan looked simple however it was hard to carry out.",
      "The plan looked simple, but however it was hard to carry out.",
      "However the plan looked simple, it was hard to carry out."
    ],
    "answer": 0,
    "explanation": "however는 접속사가 아니라 접속부사이므로 세미콜론+however, 또는 마침표+However 패턴이 필요하다.",
    "trap": "however를 등위접속사처럼 쓰는 함정",
    "memoryPoint": "however 앞뒤 문장부호 체크",
    "wrongChoiceExplanations": {
      "The plan looked simple; however, it was hard to carry out.": "정답.",
      "The plan looked simple, however it was hard to carry out.": "comma splice 오류.",
      "The plan looked simple however it was hard to carry out.": "문장 경계가 없다.",
      "The plan looked simple, but however it was hard to carry out.": "but와 however 중복.",
      "However the plan looked simple, it was hard to carry out.": "however가 양보접속사 의미가 되려면 문맥/형태가 다르다."
    },
    "examTip": "however는 문장 접착제가 아니라 전환 신호다."
  },
  {
    "id": 158,
    "chapterId": 10,
    "level": "수능 킬러",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: ____ he was sick, he came to school.",
    "choices": [
      "Although",
      "Despite",
      "Because of",
      "However",
      "In spite"
    ],
    "answer": 0,
    "explanation": "뒤가 절(he was sick)이므로 접속사 although가 필요하다. despite/because of는 명사구를 받는다.",
    "trap": "절/명사구 구분 실패",
    "memoryPoint": "접속사는 절, 전치사는 명사구",
    "wrongChoiceExplanations": {
      "Although": "정답.",
      "Despite": "뒤에 명사구가 와야 한다.",
      "Because of": "명사구와 결합해야 한다.",
      "However": "접속부사로 절을 직접 이을 수 없다.",
      "In spite": "in spite of가 완전형."
    },
    "examTip": "빈칸 뒤 첫 단어가 주어인지 명사인지 먼저 본다."
  },
  {
    "id": 159,
    "chapterId": 10,
    "level": "내신 기본",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: He failed the test ____ his effort.",
    "choices": [
      "despite",
      "although",
      "because",
      "however",
      "since of"
    ],
    "answer": 0,
    "explanation": "effort는 명사구이므로 전치사 despite가 맞다. although/because는 절을 이끈다.",
    "trap": "although/despite 혼동",
    "memoryPoint": "despite + 명사구",
    "wrongChoiceExplanations": {
      "despite": "정답.",
      "although": "절 필요.",
      "because": "because of가 필요.",
      "however": "연결 부사라 전치사 자리 불가.",
      "since of": "존재하지 않는 형태."
    },
    "examTip": "despite=in spite of를 세트로 기억한다."
  },
  {
    "id": 160,
    "chapterId": 10,
    "level": "내신 심화",
    "type": "접속사/전치사",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The plan looked simple; however, it was hard to carry out.",
      "The plan looked simple, however it was hard to carry out.",
      "The plan looked simple however it was hard to carry out.",
      "The plan looked simple, but however it was hard to carry out.",
      "However the plan looked simple, it was hard to carry out."
    ],
    "answer": 0,
    "explanation": "however는 접속사가 아니라 접속부사이므로 세미콜론+however, 또는 마침표+However 패턴이 필요하다.",
    "trap": "however를 등위접속사처럼 쓰는 함정",
    "memoryPoint": "however 앞뒤 문장부호 체크",
    "wrongChoiceExplanations": {
      "The plan looked simple; however, it was hard to carry out.": "정답.",
      "The plan looked simple, however it was hard to carry out.": "comma splice 오류.",
      "The plan looked simple however it was hard to carry out.": "문장 경계가 없다.",
      "The plan looked simple, but however it was hard to carry out.": "but와 however 중복.",
      "However the plan looked simple, it was hard to carry out.": "however가 양보접속사 의미가 되려면 문맥/형태가 다르다."
    },
    "examTip": "however는 문장 접착제가 아니라 전환 신호다."
  },
  {
    "id": 161,
    "chapterId": 10,
    "level": "수능 실전",
    "type": "접속사/전치사",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The plan looked simple; however, it was hard to carry out.",
      "The plan looked simple, however it was hard to carry out.",
      "The plan looked simple however it was hard to carry out.",
      "The plan looked simple, but however it was hard to carry out.",
      "However the plan looked simple, it was hard to carry out."
    ],
    "answer": 0,
    "explanation": "however는 접속사가 아니라 접속부사이므로 세미콜론+however, 또는 마침표+However 패턴이 필요하다.",
    "trap": "however를 등위접속사처럼 쓰는 함정",
    "memoryPoint": "however 앞뒤 문장부호 체크",
    "wrongChoiceExplanations": {
      "The plan looked simple; however, it was hard to carry out.": "정답.",
      "The plan looked simple, however it was hard to carry out.": "comma splice 오류.",
      "The plan looked simple however it was hard to carry out.": "문장 경계가 없다.",
      "The plan looked simple, but however it was hard to carry out.": "but와 however 중복.",
      "However the plan looked simple, it was hard to carry out.": "however가 양보접속사 의미가 되려면 문맥/형태가 다르다."
    },
    "examTip": "however는 문장 접착제가 아니라 전환 신호다."
  },
  {
    "id": 162,
    "chapterId": 10,
    "level": "수능 킬러",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: He failed the test ____ his effort.",
    "choices": [
      "despite",
      "although",
      "because",
      "however",
      "since of"
    ],
    "answer": 0,
    "explanation": "effort는 명사구이므로 전치사 despite가 맞다. although/because는 절을 이끈다.",
    "trap": "although/despite 혼동",
    "memoryPoint": "despite + 명사구",
    "wrongChoiceExplanations": {
      "despite": "정답.",
      "although": "절 필요.",
      "because": "because of가 필요.",
      "however": "연결 부사라 전치사 자리 불가.",
      "since of": "존재하지 않는 형태."
    },
    "examTip": "despite=in spite of를 세트로 기억한다."
  },
  {
    "id": 163,
    "chapterId": 10,
    "level": "내신 기본",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: He failed the test ____ his effort.",
    "choices": [
      "despite",
      "although",
      "because",
      "however",
      "since of"
    ],
    "answer": 0,
    "explanation": "effort는 명사구이므로 전치사 despite가 맞다. although/because는 절을 이끈다.",
    "trap": "although/despite 혼동",
    "memoryPoint": "despite + 명사구",
    "wrongChoiceExplanations": {
      "despite": "정답.",
      "although": "절 필요.",
      "because": "because of가 필요.",
      "however": "연결 부사라 전치사 자리 불가.",
      "since of": "존재하지 않는 형태."
    },
    "examTip": "despite=in spite of를 세트로 기억한다."
  },
  {
    "id": 164,
    "chapterId": 10,
    "level": "내신 심화",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: He failed the test ____ his effort.",
    "choices": [
      "despite",
      "although",
      "because",
      "however",
      "since of"
    ],
    "answer": 0,
    "explanation": "effort는 명사구이므로 전치사 despite가 맞다. although/because는 절을 이끈다.",
    "trap": "although/despite 혼동",
    "memoryPoint": "despite + 명사구",
    "wrongChoiceExplanations": {
      "despite": "정답.",
      "although": "절 필요.",
      "because": "because of가 필요.",
      "however": "연결 부사라 전치사 자리 불가.",
      "since of": "존재하지 않는 형태."
    },
    "examTip": "despite=in spite of를 세트로 기억한다."
  },
  {
    "id": 165,
    "chapterId": 10,
    "level": "수능 실전",
    "type": "접속사/전치사",
    "question": "어법상 옳은 문장을 고르시오.",
    "choices": [
      "The plan looked simple; however, it was hard to carry out.",
      "The plan looked simple, however it was hard to carry out.",
      "The plan looked simple however it was hard to carry out.",
      "The plan looked simple, but however it was hard to carry out.",
      "However the plan looked simple, it was hard to carry out."
    ],
    "answer": 0,
    "explanation": "however는 접속사가 아니라 접속부사이므로 세미콜론+however, 또는 마침표+However 패턴이 필요하다.",
    "trap": "however를 등위접속사처럼 쓰는 함정",
    "memoryPoint": "however 앞뒤 문장부호 체크",
    "wrongChoiceExplanations": {
      "The plan looked simple; however, it was hard to carry out.": "정답.",
      "The plan looked simple, however it was hard to carry out.": "comma splice 오류.",
      "The plan looked simple however it was hard to carry out.": "문장 경계가 없다.",
      "The plan looked simple, but however it was hard to carry out.": "but와 however 중복.",
      "However the plan looked simple, it was hard to carry out.": "however가 양보접속사 의미가 되려면 문맥/형태가 다르다."
    },
    "examTip": "however는 문장 접착제가 아니라 전환 신호다."
  },
  {
    "id": 166,
    "chapterId": 10,
    "level": "수능 킬러",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: He failed the test ____ his effort.",
    "choices": [
      "despite",
      "although",
      "because",
      "however",
      "since of"
    ],
    "answer": 0,
    "explanation": "effort는 명사구이므로 전치사 despite가 맞다. although/because는 절을 이끈다.",
    "trap": "although/despite 혼동",
    "memoryPoint": "despite + 명사구",
    "wrongChoiceExplanations": {
      "despite": "정답.",
      "although": "절 필요.",
      "because": "because of가 필요.",
      "however": "연결 부사라 전치사 자리 불가.",
      "since of": "존재하지 않는 형태."
    },
    "examTip": "despite=in spite of를 세트로 기억한다."
  },
  {
    "id": 167,
    "chapterId": 10,
    "level": "내신 기본",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: He failed the test ____ his effort.",
    "choices": [
      "despite",
      "although",
      "because",
      "however",
      "since of"
    ],
    "answer": 0,
    "explanation": "effort는 명사구이므로 전치사 despite가 맞다. although/because는 절을 이끈다.",
    "trap": "although/despite 혼동",
    "memoryPoint": "despite + 명사구",
    "wrongChoiceExplanations": {
      "despite": "정답.",
      "although": "절 필요.",
      "because": "because of가 필요.",
      "however": "연결 부사라 전치사 자리 불가.",
      "since of": "존재하지 않는 형태."
    },
    "examTip": "despite=in spite of를 세트로 기억한다."
  },
  {
    "id": 168,
    "chapterId": 10,
    "level": "내신 심화",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: He failed the test ____ his effort.",
    "choices": [
      "despite",
      "although",
      "because",
      "however",
      "since of"
    ],
    "answer": 0,
    "explanation": "effort는 명사구이므로 전치사 despite가 맞다. although/because는 절을 이끈다.",
    "trap": "although/despite 혼동",
    "memoryPoint": "despite + 명사구",
    "wrongChoiceExplanations": {
      "despite": "정답.",
      "although": "절 필요.",
      "because": "because of가 필요.",
      "however": "연결 부사라 전치사 자리 불가.",
      "since of": "존재하지 않는 형태."
    },
    "examTip": "despite=in spite of를 세트로 기억한다."
  },
  {
    "id": 169,
    "chapterId": 10,
    "level": "수능 실전",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: ____ he was sick, he came to school.",
    "choices": [
      "Although",
      "Despite",
      "Because of",
      "However",
      "In spite"
    ],
    "answer": 0,
    "explanation": "뒤가 절(he was sick)이므로 접속사 although가 필요하다. despite/because of는 명사구를 받는다.",
    "trap": "절/명사구 구분 실패",
    "memoryPoint": "접속사는 절, 전치사는 명사구",
    "wrongChoiceExplanations": {
      "Although": "정답.",
      "Despite": "뒤에 명사구가 와야 한다.",
      "Because of": "명사구와 결합해야 한다.",
      "However": "접속부사로 절을 직접 이을 수 없다.",
      "In spite": "in spite of가 완전형."
    },
    "examTip": "빈칸 뒤 첫 단어가 주어인지 명사인지 먼저 본다."
  },
  {
    "id": 170,
    "chapterId": 10,
    "level": "수능 킬러",
    "type": "접속사/전치사",
    "question": "빈칸에 알맞은 말을 고르시오: ____ he was sick, he came to school.",
    "choices": [
      "Although",
      "Despite",
      "Because of",
      "However",
      "In spite"
    ],
    "answer": 0,
    "explanation": "뒤가 절(he was sick)이므로 접속사 although가 필요하다. despite/because of는 명사구를 받는다.",
    "trap": "절/명사구 구분 실패",
    "memoryPoint": "접속사는 절, 전치사는 명사구",
    "wrongChoiceExplanations": {
      "Although": "정답.",
      "Despite": "뒤에 명사구가 와야 한다.",
      "Because of": "명사구와 결합해야 한다.",
      "However": "접속부사로 절을 직접 이을 수 없다.",
      "In spite": "in spite of가 완전형."
    },
    "examTip": "빈칸 뒤 첫 단어가 주어인지 명사인지 먼저 본다."
  }
];
