const quizData = [
    {
        question:"右の表示のようにh1タグを使って表示できるようにしてください<br>",
        answer: "<h1>HAL東京</h1>",
        display: "<h1>HAL東京</h1>"
    },
    {
        question: "見出しタグと段落タグを使い右のように表してください",
        answer: `<h1>HAL東京</h1>
<p>東京都新宿区・愛知県名古屋市中村区・大阪府大阪市北区にそれぞれの校舎を置く</p>`,
        display: "<h1>HAL東京</h1><br><p>東京都新宿区・愛知県名古屋市中村区・大阪府大阪市北区にそれぞれの校舎を置く</p>"
    },
    {
        question:"右の表示のようにh1タグを使って表示できるようにしてください",
        answer:`<h1>HAL東京</h1>
<p>東京都新宿区・愛知県名古屋市中村区・大阪府大阪市北区にそれぞれの校舎を置く</p>
<small>HAL(ハル、英略:HAL)は、日本の私立専門学校(専修学校専門課程)である</small>`,
        display: `<h1>HAL東京</h1>
<p>東京都新宿区・愛知県名古屋市中村区・大阪府大阪市北区にそれぞれの校舎を置く</p>
<small>HAL(ハル、英略:HAL)は、日本の私立専門学校(専修学校専門課程)である</small>
        `
    },
    {
        question: "設置学科を右のように作って下さい",
        answer:
`<ul>
    <li>ゲームデザイン学科</li>
    <li>ゲーム企画学科</li>
    <li>CG映像学科</li>
    <li>グラフィックデザイン学科</li>
    <li>アニメ・イラスト学科</li>
    <li>ミュージック学科</li>
    <li>カーデザイン学科</li>
    <li>高度情報処理学科</li>
    <li>WEB開発学科</li>
</ul>`,
        display:`<ul>
    <li>ゲームデザイン学科</li>
    <li>ゲーム企画学科</li>
    <li>CG映像学科</li>
    <li>グラフィックデザイン学科</li>
    <li>アニメ・イラスト学科</li>
    <li>ミュージック学科</li>
    <li>カーデザイン学科</li>
    <li>高度情報処理学科</li>
    <li>WEB開発学科</li>
</ul>`
    },
    {
        question: "右のようなリストを作成して下さい",
        answer:
`<ol>
    <li>HAL東京</li>
    <li>HAL大阪</li>
    <li>HAL名古屋</li>
</ol>`,
    display:
`<ol>
    <li>HAL東京</li>
    <li>HAL大阪</li>
    <li>HAL名古屋</li>
</ol>`,
    },
    {
        question: "右のように作成して下さい",
        answer:
`<table>
    <tr>
        <th>キャンパス</th>
    </tr>
    <tr>
        <td>HAL大阪 - 大阪市北区梅田3-3-1</td>
    </tr>
    <tr>
        <td>HAL名古屋 - 名古屋市中村区名駅4-27-1
    </tr>
    <tr>
        <td>HAL東京 - 東京都新宿区西新宿1-7-2</td>
    </tr>
</table>`,
        display: 
`<table>
    <tr>
        <th>キャンパス</th>
    </tr>
    <tr>
        <td>HAL大阪 - 大阪市北区梅田3-3-1</td>
    </tr>
    <tr>
        <td>HAL名古屋 - 名古屋市中村区名駅4-27-1
    </tr>
    <tr>
        <td>HAL東京 - 東京都新宿区西新宿1-7-2</td>
    </tr>
</table>`,
    },
    {
        question:"お問い合わせページを作ろう",
        answer: 
`<form>
    <p>名前を入力して</p>
    <input type="name">
    <p>お問い合わせ</p>
    <textarea></textarea>
    <input type="checkbox">html
    <input type="checkbox">javascript
    <input type="checkbox">php
    <select>
        <option>html</option>
        <option>css</option>
        <option>javascript</option>
    </select>
    <input type="submit">
</form>`,
        display: 
`<form>
    <div><p>名前を入力して</p></div>
    <div><input type="name"></div>
    <p>お問い合わせ</p>
    <div><textarea></textarea></div>
    <input type="checkbox">html
    <input type="checkbox">javascript
    <input type="checkbox">php
    <div>
    <select>
        <option>html</option>
        <option>css</option>
        <option>javascript</option>
    </select>
    </div>
    <input type="submit">
</form> `,
    },
];

// HTML要素を取得
var questionElement = document.getElementById("question");
var answerElement = document.getElementById("answer");
var displayElement = document.getElementById("display");
var submitButton = document.getElementById("submit");
var resultElement = document.getElementById("result");
var nextButton = document.getElementById("next");
var topButton = document.getElementById("top");
let currentQuestionIndex = 0;




function displayQuestion() {
    if (currentQuestionIndex < quizData.length) {
        questionElement.innerHTML = quizData[currentQuestionIndex].question;

        // displayElement の内容を span 要素で囲む
        displayElement.innerHTML = '<span id="displayText">' + quizData[currentQuestionIndex].display + '</span>';

        // span 要素にスタイルを適用
        var displayTextElement = document.getElementById("displayText");
        
        if (currentQuestionIndex === 0) {
            displayTextElement.style.width = "30%";
        } else if (currentQuestionIndex === 6) {
            displayTextElement.style.margin = "3px";
            
        
        } else if (currentQuestionIndex === 7) {
            displayTextElement.style.color = "red";
            displayTextElement.style.textAlign = "center";
        }
    } else if (currentQuestionIndex === 8) {
        displayTextElement.style.listStyle = "nome";
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
