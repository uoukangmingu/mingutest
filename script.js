// 문제 데이터
const multipleChoiceQuestions = [
    { question: "가족의 기본적인 기능 중 하나는 무엇인가?", choices: ["A) 오락 제공", "B) 사회화", "C) 여행 계획", "D) 친구 소개"], answer: 1 },
    { question: "현대 사회에서 가족의 형태는 어떻게 변화하고 있는가?", choices: ["A) 핵가족 증가", "B) 단일 부모 가정 증가", "C) 결혼하지 않은 커플 증가", "D) 모두 해당"], answer: 3 },
    { question: "가족의 법적 정의는 무엇인가?", choices: ["A) 서로 좋아하는 사람들", "B) 결혼한 남녀와 자녀", "C) 혈연 또는 법적으로 연결된 사람들", "D) 같은 지역에 사는 사람들"], answer: 2 },
    { question: "가족의 역할 중 경제적 지원은 무엇을 포함하는가?", choices: ["A) 정서적 지지", "B) 생계 유지", "C) 교육 지원", "D) 취미 공유"], answer: 1 },
    { question: "혼인 가족의 정의는 무엇인가?", choices: ["A) 결혼한 사람들의 집단", "B) 친척 관계가 있는 집단", "C) 친구들 간의 집단", "D) 직장 동료들"], answer: 0 },
    { question: "가족의 기능 중 하나로, 다음 중 정서적 지원을 제공하는 기능은?", choices: ["A) 경제적 기능", "B) 사회적 기능", "C) 교육적 기능", "D) 정서적 기능"], answer: 3 },
    { question: "가족이 제공하는 사회적 지지는 무엇인가?", choices: ["A) 돈", "B) 정보", "C) 감정적 안정", "D) 시간"], answer: 2 },
    { question: "확대 가족의 예로 올바른 것은?", choices: ["A) 부모와 자녀", "B) 조부모, 부모, 자녀", "C) 친구 그룹", "D) 직장 동료"], answer: 1 },
    { question: "다음 중 가족의 기능에 포함되지 않는 것은?", choices: ["A) 정서적 안정", "B) 교육", "C) 범죄 예방", "D) 경제적 지원"], answer: 2 },
    { question: "가족 내에서의 역할 분담은 무엇을 의미하는가?", choices: ["A) 각자의 역할을 정함", "B) 모두 같은 일을 함", "C) 역할이 없는 상태", "D) 역할이 불명확한 상태"], answer: 0 },
    { question: "가족이라는 용어는 어떤 상황에서 사용될 수 있는가?", choices: ["A) 혈연 관계만", "B) 결혼 관계만", "C) 혈연, 결혼, 입양 모두", "D) 친한 친구들 간에"], answer: 2 },
    { question: "가족의 경제적 기능은 무엇인가?", choices: ["A) 정서적 지원 제공", "B) 재정 관리 및 지원", "C) 사회적 네트워크 형성", "D) 문화적 교육 제공"], answer: 1 },
    { question: "가족의 정서적 기능이란 무엇인가?", choices: ["A) 사랑과 지지 제공", "B) 경제적 지원 제공", "C) 정보 제공", "D) 휴식 제공"], answer: 0 },
    { question: "가족의 사회적 지위는 어떻게 형성되는가?", choices: ["A) 경제적 능력", "B) 교육 수준", "C) 가족 구성원 간의 관계", "D) 모두 해당"], answer: 3 },
    { question: "다음 중 가족의 역할로 올바르지 않은 것은?", choices: ["A) 지원과 보살핌", "B) 정서적 연결", "C) 범죄 예방", "D) 개인의 자유 증진"], answer: 2 },
    { question: "가족이 해체되는 이유 중 하나는 무엇인가?", choices: ["A) 서로 사랑하기 때문", "B) 의사소통 부족", "C) 취미가 같기 때문", "D) 같은 직업을 가지고 있기 때문"], answer: 1 },
    { question: "다음 중 가족의 기능을 설명하는 데 올바른 것은?", choices: ["A) 단순히 함께 사는 것", "B) 개인의 정서적, 사회적 필요 충족", "C) 경제적 부담만", "D) 혈연관계만"], answer: 1 },
    { question: "가족의 구성원이 증가할 때 주의해야 할 점은 무엇인가?", choices: ["A) 가족의 관계 유지", "B) 개인의 취미 존중", "C) 돈의 관리", "D) 모두 해당"], answer: 3 },
    { question: "다음 중 가족 내 갈등의 원인은 무엇인가?", choices: ["A) 서로 다른 의견", "B) 비슷한 취향", "C) 같은 목표", "D) 동일한 직업"], answer: 0 },
    { question: "가족의 기능 중 교육은 무엇을 포함하는가?", choices: ["A) 감정적 지원", "B) 사회적 규범의 전수", "C) 경제적 관리", "D) 취미 생활"], answer: 1 },
    { question: "가족의 형태는 어떻게 정의될 수 있는가?", choices: ["A) 혈연관계만", "B) 결혼과 입양", "C) 다양한 사회적 관계", "D) B와 C 모두"], answer: 3 },
    { question: "가족 구성원 간의 소통이 원활할 때 얻는 이점은 무엇인가?", choices: ["A) 정서적 안정", "B) 갈등 증가", "C) 거리감 증가", "D) 의사소통 단절"], answer: 0 },
    { question: "가족 내에서의 갈등 해결 방법으로 올바른 것은?", choices: ["A) 무시하기", "B) 대화와 협력", "C) 서로에게 화내기", "D) 혼자 해결하기"], answer: 1 },
    { question: "가족의 법적 정의는 무엇을 포함하는가?", choices: ["A) 친구들", "B) 동거인", "C) 법적 결혼 또는 혈연관계", "D) 같은 직장 동료"], answer: 2 },
    { question: "다음 중 가족이 사회적 역할을 수행하는 방법은 무엇인가?", choices: ["A) 자녀 교육", "B) 친구 사귀기", "C) 경제적 지원", "D) A와 C 모두"], answer: 3 },
    { question: "가족의 감정적 지원은 무엇을 포함하는가?", choices: ["A) 돈 제공", "B) 정서적 지지와 사랑", "C) 교육적 지원", "D) 정보 제공"], answer: 1 },
    { question: "가족의 기능 중 재정 관리의 중요성은 무엇인가?", choices: ["A) 개인의 독립성 강화", "B) 가족의 안정성과 안전 보장", "C) 사회적 관계 증진", "D) 개인의 취미 증진"], answer: 1 },
    { question: "가족이 사회적 지위를 높이는 방법은 무엇인가?", choices: ["A) 경제적 성공", "B) 교육적 성취", "C) 긍정적인 대인 관계", "D) 모두 해당"], answer: 3 },
    { question: "가족의 교육적 기능은 무엇인가?", choices: ["A) 경제적 지원", "B) 문화적 가치와 규범의 전수", "C) 정서적 지지 제공", "D) 개인의 자유 증진"], answer: 1 },
    { question: "가족의 기능이 약화될 때 어떤 결과가 발생할 수 있는가?", choices: ["A) 사회적 고립", "B) 정서적 안정", "C) 자아 존중감 증가", "D) 경제적 안전"], answer: 0 },
    { question: "가족 내에서의 역할 분담의 이점은 무엇인가?", choices: ["A) 갈등 증가", "B) 효율적인 협력", "C) 소통 단절", "D) 역할 혼란"], answer: 1 },
    { question: "가족의 형태는 어떤 요인에 의해 영향을 받을 수 있는가?", choices: ["A) 경제적 상황", "B) 문화적 배경", "C) 개인의 가치관", "D) 모두 해당"], answer: 3 },
    { question: "가족 내에서의 의사소통 방식 중 가장 중요한 것은?", choices: ["A) 비언어적 의사소통", "B) 감정 표현", "C) 문제 해결 대화", "D) 단순한 대화"], answer: 2 },
    { question: "가족의 구성원 간에 발생할 수 있는 갈등을 해결하기 위한 첫 단계는 무엇인가?", choices: ["A) 무시하기", "B) 대화하기", "C) 이혼하기", "D) 독립하기"], answer: 1 },
    { question: "가족의 구성원이 서로의 필요를 이해하는 것은 무엇을 의미하는가?", choices: ["A) 정서적 연결", "B) 거리감", "C) 소통 단절", "D) 갈등 증가"], answer: 0 },
    { question: "가족의 법적 정의에 따르면, 혈연 관계는 어떤 역할을 하는가?", choices: ["A) 단순한 관계", "B) 가족 관계의 기본", "C) 직장 동료의 관계", "D) 친구 관계"], answer: 1 },
    { question: "가족 내에서의 경제적 지원이 중요한 이유는 무엇인가?", choices: ["A) 개인의 자유를 높이기 위해", "B) 가족의 안정성을 유지하기 위해", "C) 문화적 가치를 전수하기 위해", "D) 정서적 지원을 제공하기 위해"], answer: 1 },
    { question: "다음 중 가족의 기능으로 올바른 것은?", choices: ["A) 가족 간의 갈등을 조장", "B) 감정적 지원 제공", "C) 자아 존중감을 낮춤", "D) 거리감을 증진"], answer: 1 },
    { question: "가족의 구성원이 늘어날 때 유의해야 할 점은 무엇인가?", choices: ["A) 역할 혼란", "B) 경제적 부담", "C) 가족 간의 소통", "D) 모두 해당"], answer: 3 },
    { question: "가족의 기능 중 사회적 역할은 어떤 내용을 포함하는가?", choices: ["A) 정서적 지원", "B) 경제적 지원", "C) 문화적 교육", "D) 모두 해당"], answer: 3 },
    { question: "다음 중 가족의 교육적 기능에 해당하는 것은 무엇인가?", choices: ["A) 정서적 지지 제공", "B) 가족의 규범과 가치 전수", "C) 경제적 지원", "D) 단순한 대화"], answer: 1 },
    { question: "가족의 형성에 영향을 미치는 요인은 무엇인가?", choices: ["A) 경제적 안정", "B) 개인의 가치관", "C) 문화적 배경", "D) 모두 해당"], answer: 3 },
    { question: "가족 내에서의 정서적 지원은 어떻게 제공되는가?", choices: ["A) 돈으로", "B) 사랑과 이해로", "C) 정보를 통해", "D) 모든 방법으로"], answer: 1 },
    { question: "가족이 제공하는 사회적 지지의 예는 무엇인가?", choices: ["A) 경제적 지원", "B) 정서적 안정", "C) 교육적 지원", "D) 모두 해당"], answer: 3 },
    { question: "가족의 기능이 약화될 때 어떤 결과가 발생할 수 있는가?", choices: ["A) 개인의 자아 존중감 감소", "B) 가족 간의 소통 증가", "C) 정서적 안정", "D) 경제적 지원"], answer: 0 },
    { question: "가족의 형성이 법적으로 인정되는 조건은 무엇인가?", choices: ["A) 혈연 관계", "B) 결혼", "C) 입양", "D) 모두 해당"], answer: 3 },
    { question: "가족의 기능 중 정서적 지원의 중요성은 무엇인가?", choices: ["A) 갈등을 조장하기 위해", "B) 감정적 안정을 위해", "C) 경제적 부담을 줄이기 위해", "D) 개인의 자유를 높이기 위해"], answer: 1 },
    { question: "다음 중 가족 내에서의 갈등을 줄이는 방법은 무엇인가?", choices: ["A) 의사소통의 개선", "B) 무시하기", "C) 갈등을 증가시키기", "D) 서로의 감정 표현을 줄이기"], answer: 0 },
    { question: "가족의 기능 중 사회화는 무엇을 의미하는가?", choices: ["A) 개인의 자유를 증진", "B) 사회적 규범과 가치를 전수", "C) 정서적 안정 제공", "D) 경제적 지원 제공"], answer: 1 },
    { question: "가족 내에서의 역할 분담의 중요성은 무엇인가?", choices: ["A) 역할의 혼란", "B) 효율적인 협력", "C) 갈등 증가", "D) 정서적 거리감 증가"], answer: 1 }
];


const oxQuestions = [
    { question: "모든 가족은 혈연으로만 연결되어야 한다.", answer: false },
    { question: "결혼한 커플은 가족으로 인정된다.", answer: true },
    { question: "입양한 자녀는 가족의 일원으로 포함된다.", answer: true },
    { question: "가족의 경제적 지원은 항상 필요하다.", answer: false },
    { question: "가족의 기능은 정서적 지원을 포함한다.", answer: true },
    { question: "가족 구성원 간의 갈등은 불가피하다.", answer: true },
    { question: "가족은 반드시 함께 살아야만 인정받는다.", answer: false },
    { question: "가족 내에서의 소통이 원활하면 갈등이 줄어든다.", answer: true },
    { question: "가족의 형성은 법적으로 인정되어야만 한다.", answer: true },
    { question: "가족 내에서의 역할 분담은 효율성을 높인다.", answer: true },
    { question: "현대 사회에서는 전통적인 가족 형태만 인정된다.", answer: false },
    { question: "가족은 친구나 직장 동료와 다르다.", answer: true },
    { question: "가족의 기능 중 교육적 지원이 있다.", answer: true },
    { question: "가족의 정서적 기능은 사랑과 지지다.", answer: true },
    { question: "가족은 사회적 지위를 제공하지 않는다.", answer: false },
    { question: "모든 가족은 경제적 지원을 필요로 한다.", answer: false },
    { question: "가족 내에서의 갈등은 반드시 해결해야 한다.", answer: true },
    { question: "가족의 역할은 사회적 관계를 포함한다.", answer: true },
    { question: "가족 내에서의 갈등은 주로 의사소통 부족에서 발생한다.", answer: true },
    { question: "가족의 형태는 개인의 가치관에 따라 다를 수 있다.", answer: true },
    { question: "가족 구성원 간의 소통이 부족하면 정서적 안정이 위협받는다.", answer: true },
    { question: "가족의 역할은 고정되어 있다.", answer: false },
    { question: "모든 가족 구성원은 법적 권리를 가진다.", answer: true },
    { question: "가족의 기능은 다양한 형태로 나타날 수 있다.", answer: true },
    { question: "가족의 교육적 기능은 문화 전수이다.", answer: true },
    { question: "가족 내에서의 역할 혼란은 긍정적인 결과를 초래한다.", answer: false },
    { question: "가족의 법적 정의는 혈연관계만 포함된다.", answer: false },
    { question: "가족은 단순히 함께 사는 사람들이다.", answer: false },
    { question: "가족 내에서의 정서적 지원은 중요하다.", answer: true },
    { question: "가족의 기능이 약화되면 사회적 고립이 증가할 수 있다.", answer: true }
];


const subjectiveQuestions = [
    { question: "가족의 형태 중 부모와 자녀로 구성된 전통적인 가족 단위를 무엇이라고 할까요?", answer: "핵가족" },
    { question: "현대 사회에서 증가하는 가족 형태로, 부모 중 한 명이 자녀를 양육하는 가족을 무엇이라고 할까요?", answer: "단일 부모 가족" },
    { question: "가족 내에서의 정서적 지원은 주로 무엇을 통해 이루어지나요?", answer: "사랑" },
    { question: "가족의 기능 중 하나로, 다음 세대에게 사회적 규범과 가치를 전수하는 과정을 무엇이라고 하나요?", answer: "사회화" },
    { question: "가족 내 갈등의 주요 원인으로, 서로의 감정을 이해하지 못하게 하는 요소는 무엇인가요?", answer: "의사소통 부족" },
    { question: "가족의 법적 정의에 포함되는 관계로, 혈연 또는 법적으로 연결된 사람들을 무엇이라고 하나요?", answer: "가족 관계" },
    { question: "가족의 경제적 기능 중, 구성원들이 필요한 자원을 제공하는 역할을 무엇이라고 하나요?", answer: "경제적 지원" },
    { question: "현대 사회에서 전통적인 가족 형태 외에 새롭게 인정받고 있는 가족 형태는 무엇인가요?", answer: "동거 가족" },
    { question: "고령화 사회에서 가족 구조의 변화로 인해 증가하는 세대는 무엇인가요?", answer: "노인 세대" },
    { question: "가족의 기능 중 하나로, 구성원 간의 유대감과 지지를 형성하는 역할을 하는 것은 무엇인가요?", answer: "사회적 지원" }
];

// 문제 리스트
let allQuestions = [];
let wrongQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;
let currentQuestionType = "";
let totalQuestions = 0;
let isRetryMode = false;

// 문제 배열들을 합치고 섞기 (객관식, OX, 주관식 랜덤 순서)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeQuiz() {
    // 모든 문제 배열을 결합하여 초기화
    allQuestions = [
        ...multipleChoiceQuestions.map(q => ({ ...q, type: "multiple" })),
        ...oxQuestions.map(q => ({ ...q, type: "ox" })),
        ...subjectiveQuestions.map(q => ({ ...q, type: "subjective" }))
    ];

    shuffleArray(allQuestions);  // 문제를 랜덤으로 섞음
    totalQuestions = allQuestions.length;  // 총 문제 수 설정
    currentQuestionIndex = 0;  // 첫 번째 문제로 초기화
    wrongQuestions = [];  // 틀린 문제 배열 초기화
    userAnswers = [];  // 사용자의 답변 기록 초기화
    
    updateProgress();
    displayQuestion();  // 첫 번째 문제 표시
}

// 문제를 화면에 표시
function displayQuestion() {
    const question = allQuestions[currentQuestionIndex];
    currentQuestionType = question.type;
    document.getElementById("question").innerText = question.question;

    if (currentQuestionType === "multiple") {
        displayMultipleChoice(question);
    } else if (currentQuestionType === "ox") {
        displayOXChoice();
    } else if (currentQuestionType === "subjective") {
        displaySubjectiveInput();
    }

    updateProgress();
}

// 객관식 문제 표시
function displayMultipleChoice(question) {
    const choicesBox = document.getElementById("choices-box");
    choicesBox.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => checkAnswer(index);
        choicesBox.appendChild(button);
    });
    document.getElementById("input-box").classList.add("hidden");
}

// OX 문제 표시
function displayOXChoice() {
    const choicesBox = document.getElementById("choices-box");
    choicesBox.innerHTML = `
        <button onclick="checkAnswer(true)">O</button>
        <button onclick="checkAnswer(false)">X</button>
    `;
    document.getElementById("input-box").classList.add("hidden");
}

// 주관식 문제 표시
function displaySubjectiveInput() {
    const inputBox = document.getElementById("input-box");
    inputBox.classList.remove("hidden");
    document.getElementById("choices-box").innerHTML = "";
}

// 정답 확인
function checkAnswer(selectedAnswer) {
    const question = allQuestions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuestionType === "multiple" && selectedAnswer === question.answer) {
        isCorrect = true;
    } else if (currentQuestionType === "ox" && selectedAnswer === question.answer) {
        isCorrect = true;
    } else if (currentQuestionType === "subjective" && selectedAnswer.toLowerCase() === question.answer.toLowerCase()) {
        isCorrect = true;
    }

    // 사용자가 틀린 문제는 wrongQuestions 배열에 추가하고, 답을 기록
    userAnswers.push({
        question: question.question,
        correctAnswer: currentQuestionType === "multiple" ? question.choices[question.answer] : question.answer,
        userAnswer: selectedAnswer,
        isCorrect: isCorrect
    });

    if (!isCorrect) {
        wrongQuestions.push(question);
    }

    nextQuestion();
}

// 다음 문제로 넘어감
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= allQuestions.length) {
        showResult();  // 마지막 문제를 풀면 오답 노트 출력
    } else {
        displayQuestion();  // 다음 문제 표시
    }
}

function showResult() {
    // 모든 문제와 버튼 숨기기
    document.querySelector('.container').classList.add('hidden');
    
    // 오답 노트 표시
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    
    if (wrongQuestions.length > 0) {
        // 오답이 있는 경우 오답 노트와 버튼을 표시
        document.getElementById("result-message").innerText = "오답 노트";
        displayWrongAnswers();  // 틀린 문제 목록을 표시
        document.getElementById("retry-wrong").classList.remove("hidden");
    } else {
        // 모든 문제를 맞춘 경우
        document.getElementById("result-message").innerText = "모두 정답입니다!";
        document.getElementById("retry-wrong").classList.add("hidden");
    }
    
    // resultBox 내의 기존 내용을 덮어쓰지 않고, 오답 노트만 추가
}


// 틀린 문제 다시 풀기
document.getElementById("retry-wrong").onclick = function () {
    if (wrongQuestions.length > 0) {
        allQuestions = [...wrongQuestions];  // 틀린 문제 배열로 allQuestions 재설정
        totalQuestions = wrongQuestions.length;  // 총 문제 수를 틀린 문제 수로 설정
        wrongQuestions = [];  // 틀린 문제 배열 초기화
        currentQuestionIndex = 0;  // 첫 번째 문제로 초기화
        userAnswers = [];  // 사용자의 답변 기록 초기화
        document.getElementById("result-box").classList.add("hidden");  // 오답 노트 숨기기
        document.querySelector('.container').classList.remove('hidden');  // 문제 표시
        updateProgress();  // 진행 상태 업데이트
        displayQuestion();  // 첫 번째 문제 다시 표시
    }
};

// 진행 상태 업데이트
function updateProgress() {
    document.getElementById("question-number").innerText = currentQuestionIndex + 1;
    document.getElementById("total-questions").innerText = totalQuestions;  // 총 문제 수는 현재 틀린 문제 수로 설정
}

// 틀린 문제와 정답을 표시
function displayWrongAnswers() {
    const wrongAnswerContainer = document.getElementById("wrong-answers"); // 오답 노트 영역
    let wrongAnswerHTML = "<ul style='max-height: 400px; overflow-y: scroll;'>";

    userAnswers.forEach((entry, index) => {
        if (!entry.isCorrect) {
            wrongAnswerHTML += `<li><strong>문제 ${index + 1}:</strong> ${entry.question}<br>
                                <strong>정답:</strong> ${entry.correctAnswer}<br>
                                <strong>내 답변:</strong> ${entry.userAnswer}</li><br>`;
        }
    });

    wrongAnswerHTML += "</ul>";
    wrongAnswerContainer.innerHTML = wrongAnswerHTML;  // 오답 노트 내용만 업데이트
}

// SKIP 버튼 클릭 시 틀린 문제로 처리
document.getElementById("skip").onclick = function () {
    const question = allQuestions[currentQuestionIndex];
    wrongQuestions.push(question);  // 스킵한 문제는 틀린 것으로 처리
    userAnswers.push({ question: question.question, correctAnswer: question.answer, userAnswer: "SKIPPED", isCorrect: false });
    nextQuestion();
};

// 주관식 답 제출 버튼
document.getElementById("submit-answer").onclick = function () {
    const input = document.getElementById("answer-input").value;
    if (input) {
        checkAnswer(input);
        document.getElementById("answer-input").value = "";  // 입력란 초기화
    }
};

// 초기화 및 퀴즈 시작
initializeQuiz();