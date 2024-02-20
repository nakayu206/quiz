// 問題文、選択肢、解答
const quiz = [
  {
    question: '以下のコードは何を出力しますか？<br>const arr = [1, 2, 3];<br>arr.pop();<br>console.log(arr);',
    answers: [
      ' []',
      '[1, 2, 3]',
      '[1, 2]',
    
    ],
    correct: '[1, 2]',
    explanation: 'pop()メソッドは、配列の末尾の要素を削除します。そのため、答えは[1, 2]となります。'
  },{
    question: '以下のコードは何を出力しますか？<br>const arr = [1, 2, 3];<br>arr.shift();<br>console.log(arr);',
    answers: [
      '[2, 3]',
      '[1, 2]',
      '[1, 2, 3]',
    
    ],
    correct: '[2、3]',
    explanation: 'shift()メソッドは、配列の先頭の要素を削除します。そのため、答えは[2, 3]となります。'
  },{
    question: '以下のコードは何を出力しますか？<br>const arr = [1, 2, 3, 4, 5];<br>const newArr = arr.slice(2, 5);<br>console.log(newArr);',
    answers: [
      '[3, 4, 5]', 
      '[2, 3, 4, 5]', 
      '[4, 5]'
    
    ],
    correct: '[3, 4, 5]',
    explanation: 'このコードは arr 配列の3番目から5番目までの要素 ([3, 4, 5]) を新しい配列 newArr に代入していることになります。'
  }, {
    question: '以下のコードは何を出力しますか？<br>const arr = [1, 2, 3, 4, 5];<br>const newArr = arr.filter(x => x % 2 === 1);<br>console.log(newArr);',
    answers: [
      '[1, 3, 5]',
      '[1, 2, 3, 4, 5]',
      '[1, 3, 4,5]',
    
    ],
    correct: '[1, 3, 5]',
    explanation: 'filter()メソッドは、指定した条件を満たす要素のみを新しい配列として返します。そのため、答えは[1, 3, 5]となります'
  },{
    question: '以下のコードは何を出力しますか？<br>const x = 10;<br>if (x > 10) {<br>console.log("xは10より大きい");<br>} else {<br>console.log("xは10以下");<br>}',
    answers: [
      'xは10より大きい', 
      'xは10以下', 
      'エラー'
    
    ],
    correct:  'xは10以下',
    explanation: 'if文の条件式がfalseの場合、elseブロック内の処理が実行されます。そのため、答えはxは10以下となります。'
  },{
    question: 'const x = 10;<br>if (x > 10) {<br>console.log("xは10より大きい");<br>}',
    answers: [
      'xは10より大きい',
      'xは10以下',
      'エラー',
    
    ],
    correct: 'エラー',
    explanation: 'if文の条件式がfalseの場合、ifブロック内の処理は実行されません。そのため、答えはエラーとなります。'
  },{
    question: '繰り返し処理を行うためには次のうちどれを使いますか',
    answers: [
      'if文', 
      'switch文', 
      'while文',
    
    ],
    correct: 'while文',
    explanation: 'if文を用いると「もし○○ならば●●を行う」という条件分岐が可能になります。<br>「switch(条件の値){ 処理 }」とすることでswitch文を書くことができます。'
  },{
    question: '&&の意味について答えろ',
    answers: [
      '「条件1 && 条件2」は「条件1かつ条件2」という意味で、複数の条件がすべてtrueならtrueになる',
      '「条件1 && 条件2」は「条件1かつ条件2」という意味で、複数の条件がどちらかがtrueならtrueになる',
      '「条件1 && 条件2」は「条件1かつ条件2」という意味で、複数の条件がすべてfalseならtrueになる',
    
    ],
    correct: '「条件1 && 条件2」は「条件1かつ条件2」という意味で、複数の条件がすべてtrueならtrueになる',
    explanation: '「条件1 && 条件2」は「条件1かつ条件2」という意味で、複数の条件がすべてtrueならtrueになります'
  },{
    question: '||の意味について答えろ',
    answers: [
      '条件1 || 条件2」は「条件1または条件2という意味で、複数の条件のどちらかがtrueならtrueになる',
      '条件1 || 条件2」は「条件1または条件2という意味で、複数の条件がすべてならtrueならfalseになる',
      '条件1 || 条件2」は「条件1かつ条件2という意味で、複数の条件がどちらかがfalseならtrueになる',
    
    ],
    correct: '条件1 || 条件2」は「条件1または条件2という意味で、複数の条件のどちらかがtrueならtrueになる',
    explanation: '「条件1 || 条件2」は「条件1または条件2」という意味です。この場合は、複数の条件のうち1つでもtrueならtrueになります。'
  },{
    question: 'switch文で使用するbreakの意味について答えろ',
    answers: [
      'breakとは処理を繰り返し行うこと',
      'breakとはもし○○ならば●●を行うこと',
      'breakとはswitch文を終了する命令のこと',
    
    ],
    correct: 'breakとはswitch文を終了する命令のこと',
    explanation: '合致したcaseの処理を行った後、その次のcaseの処理も実行してしまいます。そのため、switch文を使うときにはbreakを使用し命令を中断させることが大事'
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
      window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！詳しい解説を見る　ホームに戻る');
      window.location.href = 'JavaScript_qs.html';
    }
  }
  
  document.getElementById('js-nextQuestion').addEventListener('click', (e) => {
    nextClick(e);
  });
  