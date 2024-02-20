const quizData = [
    {
        question: "console.logを使ってHello Worldを出力させて下さい",
        answer: `console.log("Hello World");`,
        answerText: "Hello World",
        display: "Hello World"
    },
    {
        question: "計算3と5を使って右の合計と同じにして下さい",
        answer:`console.log(3 + 5);`, 
        display:"8"
    },
    {
        question:"計算3と5を使って右の合計と同じにして下さい",
        answer:`console.log(3 - 5);`,
        display:"2"
    },
    {
        question: "計算3と5を使って右の合計と同じにして下さい",
        answer:`console.log(3 * 5);`,
        display:"15",
    },
    {
        question: "計算6と3を使って右の合計と同じにして下さい",
        answer:`console.log(6 / 3);`,
        display:"2",
    },
    {
        question: "計算9と2を使って右の合計と同じにして下さい",
        answer:`console.log(9 % 2);`,
        display:"4余り1",
    },
    {
        question: "if文 const number = 12;を使って右のように表示して下さい",
        answer:
`const number = 12;
if(number > 10){
    console.log("numberは10より大きいです")
}`,
        display:`
        numberは10より大きいです
        `
    },
    {
        question: "if文 const number = 12;を使って右のように表して下さい",
        answer:
`const number = 12;
if(number > 15){
    console.log("numberは15より大きいです")
}else{
    console.log("numberは15以下です");
}`,
        display:"numberは15より大きいです<br>numberは15以下です",
    },
    {
        question: "const number = 15を使って右のようのに表示して下さい",
        answer:
`const number = 15;
if(number >= 10 && number < b100){
    console.log("numberは2桁の数字です");
}`,
        display:"numberは2桁の数字です",
    },
    {
        question: "オブジェクトを要素に持つ配列 <br>定数を使い定数名itemで指定して下さい<br>配列0には本、2000を指定し配列1にはパソコン、2000指定して下さい",
        answer:
`const item = [
    {name: "本",price:2000},
    {name: "パソコン",price:20000}
];
console.log(item[1];)`,
        
        display:"パソコン,20000",
    },
    {
        question: "関数を呼び出しましょう 右のように表して下さい<br>(introduceという名前の定数名を定義して下さい）",
        answer:
`const introduce = function(){
    console.log("こんにちわ");
    console.log("私はHALの生徒です");
};
introduce();`,
        display:"こんにちは<br>私はHALの生徒です",
    },
    {
        question: "アロー関数を使ってみよう！！ 右のように表して下さい<br>(introduceという名前の定数名を定義して下さい）",
        answer:
`const introduce = () =>{
    console.log("HAL東京");
    console.log("javascriptを勉強しましょう");
};`,
        display:"HAL東京<br>javascriptを勉強しましょう",
    },
    {
        question: "引数を受け取る関数の定義 右のように表して下さい<br>(introduceという名前の定数名を定義して下さい<br>定数introduceに代入されている関数の引数に文字列にHAL東京を渡して呼び出して下さい）",
        answer:
`const introduce = (name) =>{
    console.log("こんにちは、${name}さん");
};
introduce("HAL東京");`,
        display:"こんにちはHAL東京さん",
    },
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
        displayElement.innerHTML = "";
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
        submitButton.disabled = false;
    } else {
        questionElement.innerHTML = "クイズ終了";
        displayElement.innerHTML = "";
        answerElement.style.display = "none";
        submitButton.style.display = "none";
        nextButton.style.display = "none";
        displayElement.style.display = "none";
        resultElement.style.display = "";
        resultElement.innerHTML += "<a href='/index.html'>TOPページへ戻る</a>";
        resultElement.style.textAlign = "center";
        questionElement.style.textAlign = "center";
}
}

// 送信ボタンがクリックされたときに回答をチェック
submitButton.addEventListener("click", checkAnswer);

// 次へボタンがクリックされたときに次の質問を表示
nextButton.addEventListener("click", displayNextQuestion);

// 最初の質問を表示
displayQuestion();
