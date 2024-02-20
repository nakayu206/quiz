// 問題文、選択肢、解答
const quiz = [
  {
    question: 'javascriptについて<br>JavaScriptは、主にどのような用途で使用されますか？',
    answers: [
      'Webページの動きを制御する',
      'Webページの骨組みを作るもの', 
      'Webページのデザイン、見た目を作るもの',
    ],
    correct: 'Webページの動きを制御する',
    explanation: 'Webページの骨組みを作るものHTMLの説明です。Webページのデザイン、見た目を作るものcssの説明です',
    
  },{
    question: 'JavaScriptは、ブラウザ上で動作するプログラム言語です。これは何を意味しますか？',
    answers: [
      'インターネット接続なしでも動作する', 
      '特別なソフトウェアをインストールする必要がない', 
      'サーバ側で動作する',
    ],
    correct: '特別なソフトウェアをインストールする必要がない',
    explanation: 'JavaScriptは、主要なブラウザ（Chrome、Firefox、Safari、Edgeなど）に標準搭載されています<br>そのため、特別なソフトウェアをインストールすることなく、Webページ上で動作させることができます。',
  },{
    question: 'JavaScriptのファイル拡張子は？',
    answers: [
      '.js', 
      '.html', 
      '.css',
    ],
    correct: '.js',
    explanation: '.html: HTMLファイル.css: CSSファイル',
  },{
    question: 'console.log("Hello world!");',
    answers: [
      'Hello world!',
      '1', 
      'Hello',
    ],
    correct: 'Hello world!',
    explanation: 'console.log()関数は、引数の文字列を出力します。',
    
  },{
    question: '文字列の意味を答えてください',
    answers: [
      '「’」または「”」で囲まれた0個以上の文字の集合', 
      '１やー１などの整列と0.1などの少数を含めた数値', 
      '値が空未定義である'
    
    ],
    correct: '「’」または「”」で囲まれた0個以上の文字の集合',
    explanation: '「’」または「”」で囲まれた0個以上の文字の集合を文字列といいます<br>１やー１などの整列と0.1などの少数を含めた数値(number)の説明<br>値が空未定義である特殊型の説明'
  },{
    question: 'javascript数値の扱いについて次のうちどれか',
    answers: [
      'console.log(3);', 
      'console.log(”3”);', 
      'console.3;',
    ],
    correct: 'console.log(3);',
    explanation: '数値は文字列と違いクォーテーションで囲みません。',
  },{
    question: 'javascriptで計算をしよう<br>console.log(3 + 5);この答えを選んでください',
    answers: [
      '8', 
      '3 + 5', 
      '(8)',
    ],
    correct: '8',
    explanation: 'console.log() は、引数で渡された値をコンソールに出力する関数です,<br>3 + 5 は、3と5を足す演算です,演算の結果は、8になります',
  },{
    question: 'javascriptで計算をしよう<br>console.log("4 + 5");この答えを選んでください',
    answers: [
      '9', 
      '4 + 5', 
      'null',
    ],
    correct: '4 + 5',
    explanation: 'クォーテーションをつけると、文字列と解釈されそのまま出力されます<br>プログラミングをする上では文字列と数値は明確に違うものであることを意識しましょう。',
  },{
    question: '次のコードの答えは何でしょう<br>const a = 10;<br>const b = 5;<br>console.log(a - b);',
    answers: [
      '5', 
      '10', 
      '15',
    ],
    correct: '5',
    explanation: 'const キーワードを使って、変数 a と b を宣言しています。<br>a には 10、b には 5 が代入されています。<br>a - b は、a から b を引いた値です',
  },{
    question: 'javascriptで次の計算をしてください<br>console.log(3 * 7);',
    answers: [
      '21', 
      '10', 
      '3 * 7',
    ],
    correct: '21',
    explanation: 'この問題は掛け算です、掛け算は「*」（アスタリスク）を使用します',
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

setupQuiz();

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
  }else {
    // 問題がなければ終了
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！');
    window.location.href = 'JavaScript_qs.html';
  }
}

document.getElementById('js-nextQuestion').addEventListener('click', (e) => {
  nextClick(e);
});
