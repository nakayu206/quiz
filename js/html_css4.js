const quiz = [
    {
        question: 'pタグを指定するときはどのような指定をすればよいですか？',//問題を入力
        answers: [
          '#p{',
          '.p{',
          'p{'
        ],
        correct: 'p{',
        explanation: '正解はp{です。 pタグは、段落を表現するHTML要素です。CSSでpタグを指定するには、p{のように記述します。#は、IDセレクタを表します。IDセレクタは、HTML要素に付与されたID属性を使って要素を指定します。.は、クラスセレクタを表します。クラスセレクタは、HTML要素に付与されたクラス属性を使って要素を指定します。'
      }, {
        question: 'ボーダーの外側に余白を作りたい時の指定はどれですか？',
        answers: [
          'margin',
          'padding',
          'border'
        ],
        correct: 'margin',
        explanation: 'marginプロパティは、要素の外側にスペースを追加するために使用するCSSプロパティです。すべてのHTML要素で使用できます。paddingプロパティは、要素の内側にスペースを追加するために使用するCSSプロパティです。borderプロパティは、要素の周りにボーダーを追加するために使用するCSSプロパティです。'
      }, {
        question: 'ボーダーと表示領域の間に余白を作りたい時の指定はどれですか？',
        answers: [
          'margin',
          'padding',
          'border'
        ],
        correct: 'padding',
        explanation: 'するCSSプロパティです。すべてのHTML要素で使用できます。marginプロパティは、要素の外側にスペースを追加するために使用するCSSプロパティです。borderプロパティは、要素の周りにボーダーを追加するために使用するCSSプロパティです。'
      }, {
        question: 'h1 {font-size: 24px;} 記述の中でプロパティの部分に該当する記述はどれですか？' ,
        answers: [
          'h1',
          'font-size',
          '24px'
        ],
        correct: 'font-size',
        explanation: 'h1 {font-size: 24px;}という記述は、h1要素のフォントサイズを24pxに指定するCSSです。この記述の中で、プロパティの部分は、フォントサイズを指定するためのfont-sizeです。セレクタは、CSSを適用する要素を指定します。この記述では、セレクタはh1であり、h1要素にCSSを適用します。値は、プロパティの値を指定します。この記述では、値は24pxであり、h1要素のフォントサイズを24pxに指定します。'
      }, {
        question: 'フォントの書式を変えたい時に使う指定はどれですか？',
        answers: [
          'font-family',
          'font-format',
          'font-text'
        ],
        correct: 'font-family',
        explanation: 'font-familyプロパティは、フォントファミリーを指定するためのCSSプロパティです。フォントファミリーは、フォントの書体やデザインを指定します。font-formatプロパティは、フォントの形式を指定するためのCSSプロパティですが、このプロパティは非推奨とされています。font-textプロパティは、フォントのプロパティを指定するためのCSSプロパティですが、このプロパティは存在しません。'
      }, {
        question: 'ブロック要素内にある文字の位置を変えるときの指定はどれですか？',
        answers: [
          'text-align',
          'text-decoration',
          'text-transform'
        ],
        correct: 'text-align',
        explanation: 'text-alignプロパティは、ブロック要素内にある文字の水平方向の位置を指定するためのCSSプロパティです。text-decorationプロパティは、文字に装飾を追加するためのCSSプロパティです。text-transformプロパティは、文字の書体を変更するためのCSSプロパティです。'
      }, {
        question: '内容領域の幅を指定するときの記述はどれですか？',
        answers: [
          'height',
          'width',
          'max-width'
        ],
        correct: 'width',
        explanation: 'widthプロパティは、要素の内容領域の幅を指定するためのCSSプロパティです。heightプロパティは、要素の高さを指定するためのCSSプロパティです。max-widthプロパティは、要素の最大幅を指定するためのCSSプロパティです。'
      }, {
        question: '内容領域の最大の高さを指定するときの記述はどれですか？',
        answers: [
          'height',
          'max-height',
          'width'
        ],
        correct: 'max-height',
        explanation: 'heightプロパティは、要素の高さを指定するためのCSSプロパティです。max-heightプロパティは、要素の最大の高さを指定するためのCSSプロパティです。widthプロパティは、要素の幅を指定するためのCSSプロパティです。'
      }, {
        question: 'テキストの行間を調節する時の指定はどれですか？',
        answers: [
          'line',
          'font-height',
          'line-height'
        ],
        correct: 'line-height',
        explanation: 'line-heightプロパティは、テキストの行間の高さを指定するためのCSSプロパティです。font-heightプロパティは、フォントサイズと行間の比率を指定するためのCSSプロパティですが、このプロパティは非推奨とされています。lineプロパティは、文字と文字の間隔を指定するためのCSSプロパティですが、このプロパティはテキストの行間を調整するためには使用されません。'
      }, {
        question: '画面幅が768px以下になった場合に、main要素を縦並びに変更するには、どのメディアクエリのプロパティを使用するべきでしょうか？',
        answers: [
          'max-width',
          'min-width',
          'width'
        ],
        correct: 'max-width',
        explanation: '画面幅の最大値を指定するには、max-widthプロパティを使用します。'
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
const setupQuiz = ()=> {

// 何問目なのかを表示させる
document.getElementById('js-questionNumber').textContent = '第' + (quizIndex + 1) +'問';

// 問題文を表示させる
document.getElementById('js-questionText').innerHTML = quiz[quizIndex].question;

// 選択肢を表示させる
let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}

setupQuiz(10,21);

// ボタンをクリックされたら正誤判定
const clickHandler = (e) => {
if(quiz[quizIndex].correct === e.target.textContent){
  document.getElementById('js-answerResult').textContent = '正解です！';
  // 解説文を表示
document.getElementById('js-answerExplanation').textContent = quiz[quizIndex].explanation;
  score++;
}else {
  document.getElementById('js-answerResult').textContent = '不正解です！';
}

}

let handlerIndex = 0;
while(handlerIndex < buttonLength){
$button[handlerIndex].addEventListener('click', (e) => {
  clickHandler(e);
});
handlerIndex++;
};

// 「次の問題に進む」ボタンをクリックされたら次の問題に行く
const nextClick = (e) => {

quizIndex++;
if(quizIndex < quizLength){
  // 問題があれば解説文を消して次の問題を表示
  document.getElementById('js-answerResult').textContent = '';
  document.getElementById('js-answerExplanation').textContent = '';
  setupQuiz();
} else {
  // 10問目で終了
  window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！詳しい解説を見る　ホームに戻る');
  window.location.href = 'html_css_qs.html';
}

}
  






document.getElementById('js-nextQuestion').addEventListener('click', (e) => {
nextClick(e);
});