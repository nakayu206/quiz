const quizData = [
    {
        question: "右の表示のようにh1タグを使って表示できるようにしてください",
        answer: "<h1>Hello World</h1>",
        answerText: "Hello World",
        display: "Hello World"
    },
    {
        question: "",
        answer: "",
        display: ""
    },
    {
        question: "",
        answer: "",
        display: ""
    }
];

// HTML要素を取得
var questionElement = document.getElementById("question");
var answerElement = document.getElementById("answer");
var answerTextElement = document.getElementById("answerText");
var displayElement = document.getElementById("display");
var submitButton = document.getElementById("submit");
var resultElement = document.getElementById("result");
var nextButton = document.getElementById("next");

let currentQuestionIndex = 0;

answerElement.value = quizData[currentQuestionIndex].answerText;


// 質問と回答を表示する関数
function displayQuestion() {
    if (currentQuestionIndex < quizData.length) {
        questionElement.innerHTML = quizData[currentQuestionIndex].question;
        displayElement.innerHTML = quizData[currentQuestionIndex].display;
    } else {
        questionElement.innerHTML = "クイズ終了";
        displayElement.style.display = "none";
    }
}

// 回答をチェックする関数
function checkAnswer() {
    var userAnswer = answerElement.value;
    var correctAnswer = quizData[currentQuestionIndex].answer;
    resultElement.innerHTML = userAnswer.toLowerCase() === correctAnswer.toLowerCase() ? "正解！" : "不正解";
    submitButton.disabled = true;

    // 結果メッセージを非表示にし、送信ボタンを再度有効にする
    setTimeout(() => {
        resultElement.style.display = "none";
        submitButton.disabled = false;
        resultElement.style.display = "block";
    }, 1000);
}

// 次の質問を表示する関数
function displayNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++; // 次の質問へ進む
        displayQuestion(); // 次の質問を表示
        resultElement.innerHTML = "";
        answerElement.value = "";
        resultElement.style.display = "block";
        submitButton.disabled = false;
    } else {
        questionElement.innerHTML = "クイズ終了";
        answerElement.style.display = "none";
        submitButton.style.display = "none";
        nextButton.style.display = "none";
    }
}

// 送信ボタンがクリックされたときに回答をチェック
submitButton.addEventListener("click", checkAnswer);

// 次へボタンがクリックされたときに次の質問を表示
nextButton.addEventListener("click", displayNextQuestion);

// 最初の質問を表示
displayQuestion();
