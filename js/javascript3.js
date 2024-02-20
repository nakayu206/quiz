// 問題文、選択肢、解答
const quiz = [
  {
    question: 'JavaScriptのコメントはどのように表示するか',
    answers: [
      '//',
      '/!',
      '*/',
    
    ],
    correct: '//',
    explanation: 'javascriptでは//このようにしてコメントを表示します'
    
  },{
    question: '変数の命名ルールについて答えてください',
    answers: [
      '英単語を使用する',
      '最初の文字を数字にする',
      '日本語を使用する',
    
    ],
    correct: '英単語を使用する',
    explanation: '最初の文字を数字にする、日本語を使用するこれらはエラーが起きる場合があります'
    
  },{
    question: '比較演算子についてただし物はどれか',
    answers: [
      'a < b aはbより大きい',
      'a < b　aはbより小さい',
      'a <= b　aはbの方が大きいまたは等しい',
    
    ],
    correct: 'a < b　aはbより小さい',
    explanation: 'a <= baはbの方が小さいまたは等しいが正解になる'
    
  },{
    question: '等価演算子について正しいものはどれか',
    answers: [
      'a == b はaとbが等しい',
      'a != bはaとbが等しい',
      'a == b はaとbが等しくない',
    
    ],
    correct: 'a == b はaとbが等しい',
    explanation: 'a != bはaとbが異なる'
    
  },{
    question: 'JavaScriptでは引数に関数を渡すことができます。引数に渡される関数を何関数と呼びますか？',
    answers: [
      'バックエンド関数',
      'コールバック関数',
      'ギブバック関数',
    
    ],
    correct: 'コールバック関数',
    explanation: '引数に渡される関数をコールバック関数という'
    
  },{
    question: 'ドット記法について正のはどれ',
    answers: [
      'document.getElementBy(id)',
      '.document getElementBy(id)',
      '.document.getElementBy.(id)',
    
    ],
    correct: 'document.getElementBy(id)',
    explanation: 'これは、document オブジェクトの getElementBy() メソッドを呼び出した後、その戻り値から document オブジェクトを取得しようとしています。しかし、getElementBy() メソッドは、要素を取得するメソッドであり、オブジェクトを取得するメソッドではありません。したがって、このコードはエラーになります。'
    
  },{
    question: 'ブラケット記法について正しいものはどれ',
    answers: [
      'obj.name',
      'obj[’name’]',
      'obj[name]',
    
    ],
    correct: 'obj[’name’]',
    explanation: 'obj.nameドット記法であり、オブジェクトの属性を参照するために使用しますobj[name]不正な構文です'
    
  },{
    question: 'JavaScript と Java のどちらが、動的型付けであるか',
    answers: [
      'JavaScript',
      'Java',
      'どちらも動的型付けである',
    
    ],
    correct: 'JavaScript',
    explanation: 'JavaScript は動的型付けであるが、Java は静的型付けである。<br>JavaScriptとjavaは別言語です,javascriptをjavaとは略さないようにしましょう'
    
  },{
    question: '文字列と数値の違いのうち、正しいものはどれですか？',
    answers: [
      '文字列は、数値を文字列に変換したものである。',
      '数値は、文字列を数値に変換したものである。',
      '文字列と数値は、異なるデータ型である',
    
    ],
    correct: '文字列と数値は、異なるデータ型である',
    explanation: '文字列は、文字の集合である。一方、数値は、数値の集合である。文字列と数値は、異なるデータ型であるため、異なる処理を行う必要があります'
    
  },{
    question: 'letで宣言した変数は、スコープ外でも参照できるか？',
    answers: [
      'できる',
      '場合による',
      'できない',
    
    ],
    correct: 'できない',
    explanation: 'letで宣言した変数は、スコープ外では参照できません。letで宣言した変数は、ブロックスコープでのみ有効です。ブロックスコープとは、{}で囲まれたコードブロックのことです'
    
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
  