const quiz = [
{
        question: 'レイアウトはどの要素によって構成していきます。',
        answers: [
            '<div>',
            'img',
            'ul',

        ],
        correct: '<div>',
        explanation: '<div>要素の「div」は「division」の略で、要素をグループ化するために使用されます。'
    }, {
        question: '＜input＞要素はの意味を答えろ',
        answers: [
            '１行のテキスト入力を受け取るための要素',
            '複数行のテキスト入力を受け取るための要素',
            '3行のテキスト入力を受け取るための要素',

        ],
        correct: '１行のテキスト入力を受け取るための要素',
        explanation: '複数行のテキスト入力を受け取るための要素は<textarea>3行のテキスト入力を受け取るための要素ない　'
    }, {
        question: '＜p＞ タグの目的は、次のどれですか？',
        answers: [
            'リストを設定すること',
            '段落を設定すること',
            '見出しを設定すること'

        ],
        correct: '段落を設定すること',
        explanation: '＜p＞タグは、HTMLの段落タグであり、段落を設定するために使用されます。'
    }, {
        question: 'HTMLにJavaScriptを読み込むためにはどのタグを使用しますか？',
        answers: [
            '<script>',
            '<js>',
            '<javaScript>',

        ],
        correct: '<script>',
        explanation: 'HTMLにJavaScriptを読み込む時は<script>を使用します'
    }, {
        question: 'HTMLの正式名称を答えろ',
        answers: [
            'HyperText Markup Language',
            'HyperText Mark Level',
            'HyperText many learn'

        ],
        correct: 'HyperText Markup Language',
        explanation: 'HTMLは、ハイパーテキストを記述するためのマークアップ言語です。ハイパーテキストとは、相互にリンクされたテキストのことです。'
    }, {
        question: '＜table＞ タグの目的は、次のどれですか？',
        answers: [
            '段落を設定すること',
            '画像を挿入すること',
            '表形式のデータを表現すること',

        ],
        correct: '表形式のデータを表現すること',
        explanation: '段落を設定すること<P>タグ、画像を挿入することimgタグ'
    }, {
        question: '＜tr＞ タグの目的は、次のどれですか？',
        answers: [
            '表の行を設定すること',
            '表の列を設定すること',
            '表のセルを設定すること',

        ],
        correct: '表の行を設定すること',
        explanation: '表の列はセル、<th>タグや<td>タグで設定する'
    }, {
        question: 'textareaタグについて正しいものを選べ',
        answers: [
            '複数行の入力を許可するテキストエリアを作成するためのタグ',
            '1行のみ入力を許可するテキストエリアを作成するためのタグ',
            '10行のみ入力を許可するテキストエリアを作成するためのタグ',

        ],
        correct: '複数行の入力を許可するテキストエリアを作成するためのタグです',
        explanation: '1行のみ入力を許可するテキストエリアを作成するためのタグは<input>要素です。10行のみ入力を許可するテキストエリアを作成するためのタグはありません'
    }, {
        question: 'HTMLのコードにコメントしてメモを残したい時はどのタグを使用すればよいですか',
        answers: [
            '<!--- -->',
            '<komento>',
            '<memo>',

        ],
        correct: '<!--- -->',
        explanation: 'HTMLのコードにコメントする際には<!--- -->を使用します'
    }, {
        question: '<a> タグの目的は、次のどれですか？',
        answers: [
            'ハイパーリンクを設定すること',
            '段落を設定すること',
            'スタイルを設定すること',

        ],
        correct: 'ハイパーリンクを設定すること',
        explanation: '段落は、<p>タグで設定します、スタイルは、<style>タグで設定します'
    }, 
];





const quizLength = quiz.length;
let quizIndex = 0;


// 正答数
let score = 0;

// 問題文を表示させる
const $button = document.getElementsByClassName('js-questionItem');
const buttonLength = $button.length;
// クイズの問題文、選択肢を定義
const setupQuiz = () => {

    // 何問目なのかを表示させる
    document.getElementById('js-questionNumber').textContent = '第' + (quizIndex + 1) + '問';

    // 問題文を表示させる
    document.getElementById('js-questionText').innerHTML = quiz[quizIndex].question;

    // 選択肢を表示させる
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

// ボタンをクリックされたら正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        document.getElementById('js-answerResult').textContent = '正解です！';
        // 解説文を表示
        document.getElementById('js-answerExplanation').textContent = quiz[quizIndex].explanation;
        score++;
    } else {
        document.getElementById('js-answerResult').textContent = '不正解です！';
    }

}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};

// 「次の問題に進む」ボタンをクリックされたら次の問題に行く
const nextClick = (e) => {

    quizIndex++;
    if (quizIndex < quizLength) {
        // 問題があれば解説文を消して次の問題を表示
        document.getElementById('js-answerResult').textContent = '';
        document.getElementById('js-answerExplanation').textContent = '';
        setupQuiz();
    } else {
        // 10問目で終了
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！詳しい解説を見る　ホームに戻る');
        window.location.href = 'html_css_qs.html';
    }

}







document.getElementById('js-nextQuestion').addEventListener('click', (e) => {
    nextClick(e);
});