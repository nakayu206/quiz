// 問題文、選択肢、解答
const quiz = [
  {
    question: 'javascriptで次の計算をしてください<br>console.log(6 / 3);',
    answers: [
      '9', 
      '18', 
      '2',
    ],
    correct: '2',
    explanation: 'この問題は割り算です、割り算は「/」（スラッシュ）を使用します',
  },{
    question: 'javascriptで次の計算をしてください<br>console.log(9 % 2);',
    answers: [
      '1', 
      '18', 
      '3',
    ],
    correct: '1',
    explanation: 'この問題は余りを出す計算です、「%」記号を使うと、割ったときの余りを求めることができます。',
  },{
    question: '文字列の連結問題<br>const a = "Hello";<br>const b = "World";<br>console.log(a + b);',
    answers: [
      'Hello', 
      'Hello World', 
      'World',
    ],
    correct: 'Hello World',
    explanation: 'avaScriptでは、+ 演算子は文字列の連結にも使用できます。<br>2つの文字列を + 演算子で連結すると、1つの文字列になります',
  },{
    question: '次のコードの答えは何でしょう<br>const a = "Hello";<br>const b = 10;<br>console.log(a + b);',
    answers: [
      'Hello10', 
      'Hello World', 
      'エラーが発生',
    ],
    correct: 'Hello10',
    explanation: 'JavaScriptでは、数値も文字列に変換できます。<br>数値を + 演算子で文字列に連結すると、数値が文字列に変換されます',
  },{
    question: '比較演算子の意味を答えてください',
    answers: [
      '左辺と右辺の値を比較し、その結果をtrueまたはfalseで返す', 
      '条件によって処理内容を変え、結果を振り分けるプログラムのパターンのこと', 
      '複数の条件を結合し、「変数の中身が0以上10未満だったら」の様に複雑な条件を表現するとき使う'
    
    ],
    correct: '左辺と右辺の値を比較し、その結果をtrueまたはfalseで返す',
    explanation: '条件によって処理内容を変え、結果を振り分けるプログラムのパターンのこと条件分岐の説明<br>複数の条件を結合し、「変数の中身が0以上10未満だったら」の様に複雑な条件を表現するとき使う理論演算子の説明'
  },{
    question: '以下のコードの答えは何でしょう<br>const a = 10;<br>const b = 5;<br>console.log(a > b);',
    answers: [
      'true', 
      'false', 
      'エラーが発生',
    ],
    correct: 'true',
    explanation: '10は5よりも大きいので、true が返されます。',
  },{
    question: '以下のコードの答えは何でしょう<br>const a = 10;<br>const b = 10;<br>console.log(a > b);',
    answers: [
      'true', 
      'false', 
      'エラーが発生',
    ],
    correct: 'false',
    explanation: 'const a = 10;はconst b = 10;と同じ値のため == を使うとtrueになります',
  },{
    question: '以下のコードの答えは何でしょう<br>const a = 10;<br>const b = 10;<br>console.log(a != b);',
    answers: [
      'true', 
      'false', 
      'エラーが発生',
    ],
    correct: 'エラーが発生',
    explanation: '!=演算子は2つの値が厳密に等しくないかどうかを判断します',
  },{
    question: '以下のコードの答えは何でしょう<br>const a = 10;<br>const b = 10;<br>console.log(a >< b);',
    answers: [
      'true', 
      'エラーが発生',
      'false', 
    ],
    correct: 'エラーが発生',
    explanation: 'エラーが発生します ><演算子はない',
  },{
    question: '以下のコードの答えは何でしょう<br>const a = 10;<br>const b = 1;<br>console.log(a < b);',
    answers: [
      'true', 
      'エラーが発生',
      'false', 
    ],
    correct: 'false',
    explanation: '1より10の方が大きいのでfalseになります',
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
