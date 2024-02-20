const quizData = [
    {
        question: "hello,worldをダブルクオテーションを使って出力して下さい、",
        answer:`echo("Hello World");`,
        display: "Hello World"
    },
    {
        question: "計算をしてみよう、6 と 3を使って足し算、引き算、掛け算、割り算、余りのある計算をして下さい[余りのある計算]は５と２を使って下さい",
        answer:`
echo 6 + 3;
echo 6 - 3;
echo 6 * 3;
echo 6 / 3;
echo 5 % 2;`, 
        display:
`足し算、答え 9
引き算、答え  3
掛け算、答え  18
割り算、答え  2
余りのある計算 答え 2余り5`
    },
    {
        question: "変数の使い方 変数名にnameを指定してHAL東京を代入して下さい",
        answer:
`$name = "HAL東京";
echo $name;`,
        display:
`変数とは、データの入れ物です。<br>「＝」はプログラミングの世界では、右辺を左辺に代入するという意味です。<br>答えHAL東京`
    },
    {
        question: "変数に数字を足してみよう $x = 1;に10を足して下さい「省略形で書いて下さい」",
        answer:
`$x = 1;
$x += 10;
echo $x;`,
        display:
`答え11<br>値が１の時だけ「＄x＋＋」「＄xーー」と省略できます`,
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
