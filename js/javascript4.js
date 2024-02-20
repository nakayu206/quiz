// 問題文、選択肢、解答
const quiz = [
  {
    question: '以下のコードは何を出力しますか？<br>const num = 5;<br>if (num % 2 === 0) {<br>console.log("偶数");<br>} else {<br>console.log("奇数");<br>}',
    answers: [
      '偶数', 
      '奇数', 
      'エラー',
    ],
    correct: '奇数',
    explanation: 'num の値は5なので、5 ÷ 2 の余りは1です。<br>よって、num は偶数ではないため、else 文が実行され、「奇数」が出力されます。',
  },{
    question: '以下のコードは何を出力しますか？<br>const num = null;<br>if (num) {<br>console.log("存在します");<br>} else {<br>console.log("存在しません");<br>}',
    answers: [
      '存在します', 
      '存在しません', 
      'エラー',
    ],
    correct: '存在しません',
    explanation: 'null は値がないことを示す特殊な値です。<br>よって、num は存在しないため、else 文が実行され、「存在しません」が出力されます。',
  },{
    question: '以下のコードは何を出力しますか？<br>const str = "";<br>if (str) {<br>console.log("空ではありません");<br>} else {<br>console.log("空です");<br>}',
    answers: [
      '空ではありません', 
      '空です', 
      'エラー',
    ],
    correct: '空です',
    explanation: '空の文字列は、長さ0の文字列です。<br>よって、str は空であるため、else 文が実行され、「空です」が出力されます。',
  },{
    question: '以下のコードは何を出力しますか？<br>const num = undefined;<br>if (num) {<br>console.log("存在します");<br>} else {<br>console.log("存在しません");<br>}',
    answers: [
      ' 存在します', 
      ' 存在しません', 
      'エラー',
    ],
    correct: '存在しません',
    explanation: 'undefined は変数に値が割り当てられていないことを示す特殊な値です。<br>undefined は変数に値が割り当てられていないことを示す特殊な値です。',
  },{
    question: '以下のコードは何を出力しますか？<br>const num = 6;<br>if (num > 5) {<br>console.log("大きい");<br>}',
    answers: [
      '5', 
      '小さい', 
      '大きい',
    ],
    correct: '大きい',
    explanation: 'num 6は5より大きいです',
  },
  {
    question: '以下のコードは何を出力しますか？<br>const num = 10;<br>if (num > 5) {<br>console.log("大きい");<br>} else {<br>console.log("小さい");<br>}',
    answers: [
      '大きい', 
      '小さい', 
      'エラー',
    ],
    correct: '大きい',
    explanation: 'num の値は10なので、5より大きいです。',
  },{
    question: '以下のコードは何を出力しますか？<br>const num = 0;<br>if (num > 0) {<br>console.log("プラス");<br>} else {<br>console.log("マイナス");<br>}',
    answers: [
      'エラー', 
      'プラス', 
      'マイナス',
    ],
    correct: 'マイナス',
    explanation: 'num の値は0なので、0より大きくありません',
  },{
    question: '以下のコードは何を出力しますか？<br>const str = "hello";<br>if (str === "world") {<br>console.log("こんにちは");<br>} else {<br>console.log("それ以外");<br>}',
    answers: [
      'エラー', 
      'それ以外', 
      'こんにちは',
    ],
    correct: 'それ以外',
    explanation: 'str の値は "hello" なので、"world" とは等しくありません。<br>そのため、else 文が実行され、「それ以外」が出力されます。',
  },{
    question: '以下のコードは何を出力しますか？<br>const num1 = 10;<br>const num2 = 20;<br>if (num1 > num2) {<br>console.log("大きい");<br>} else {<br>console.log("小さい");<br>}',
    answers: [
      '小さい', 
      '大きい', 
      'エラー',
    ],
    correct: '小さい',
    explanation: 'num1 の値は10で、num2 の値は20なので、num1 は num2 より大きくありません。',
  },{
    question: '以下のコードは何を出力しますか？<br>const isTrue = true;<br>if (isTrue) {<br>console.log("真です");<br>} else {<br>console.log("偽です");<br>}',
    answers: [
      'エラー', 
      '偽です', 
      '真です',
    ],
    correct: '真です',
    explanation: 'isTrue の値は true なので、if 文の条件式が真となり、「真です」が出力されます。',
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
  