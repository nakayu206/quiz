// 問題文、選択肢、解答
const quiz = [
  {
    question: 'PHPで条件分岐を行う際、複数の条件を順番に評価するためのキーワードは何ですか？',
  answers: [
    'else', 
    'elseif', 
    'switch'
  ],
  correct: 'elseif',
  explanation: '正解は、elseifです。PHPで条件分岐を行う際、複数の条件を順番に評価するには、elseifキーワードを使用します。elseifキーワードは、if文の後に使用することで、複数の条件を順番に評価できます。elseキーワードは、if文またはelseif文の条件がいずれも偽の場合に実行する処理を記述するために使用されます。switch文は、変数の値によって複数の処理を分岐させるための文です。'
  },  {
    question: 'PHPで条件を偽と評価するためのキーワードは何ですか？',
  answers: [
    'false', 
    'true', 
    'lie'
  ],
  correct: 'false',
  explanation: 'PHPで条件を偽と評価するには、falseキーワードを使用します。falseキーワードは、偽の値を示す定数です。trueキーワードは、真の値を示す定数です。lieは、嘘を意味する単語ですが、PHPでの条件を偽と評価するためのキーワードではありません。'
  },  {
    question: 'PHPで文字列を表すためのキーワードは何ですか？',
  answers: [
    'str', 
    'string', 
    'text'
  ],
  correct: 'string',
  explanation: 'PHPで文字列を表すためのキーワードは、stringです。stringキーワードは、文字列型の変数を宣言するために使用されます。strキーワードは、PHP 5.3 以前のバージョンで使用されていたキーワードです。PHP 5.4 以降は使用できません。textは、文字列を意味する単語ですが、PHPで文字列を表すためのキーワードではありません。'
  },  {
    question: 'PHPで整数を表すためのキーワードは何ですか？',
  answers: [
    'int', 
    'integer', 
    'number'
  ],
  correct: 'int',
  explanation: 'PHPで整数を表すためのキーワードは、intです。intキーワードは、整数型の変数を宣言するために使用されます。integerキーワードは、PHP 5.3 以前のバージョンで使用されていたキーワードです。PHP 5.4 以降は使用できません。numberは、数字を意味する単語ですが、PHPで整数を表すためのキーワードではありません。'
  },  {
    question: 'PHPで浮動小数点数（浮動小数点数または小数）を表すためのキーワードは何ですか？',
  answers: [
    'decimal', 
    'double', 
    'float'
  ],
  correct: 'float',
  explanation: 'PHPで浮動小数点数（浮動小数点数または小数）を表すためのキーワードは、floatです。floatキーワードは、浮動小数点型の変数を宣言するために使用されます。decimalキーワードは、PHP 5.3 以前のバージョンで使用されていたキーワードです。PHP 5.4 以降は使用できません。doubleキーワードも浮動小数点型の変数を宣言するために使用できますが、floatキーワードと互換性があります。'
  },  {
    question: 'var_dump()関数の主な目的は何ですか？',
  answers: [
    '変数を文字列に変換する', 
    '変数のデータ型と値を表示する', 
    '変数を削除する'
  ],
  correct: '変数のデータ型と値を表示する',
  explanation: 'var_dump()関数の主な目的は、変数のデータ型と値を表示することです。var_dump()関数は、引数に指定した変数のデータを、人間が読みやすい形式で出力します。'
  },  {
    question: 'PHP 7.0以降でランダムな整数を生成するための関数は何ですか？var_dump()関数は、デバッグやテストで、変数の値を確認するために役立ちます。変数を文字列に変換するは、var_export()関数の主な目的です。変数を削除するは、unset()関数の主な目的です。',
  answers: [
    'random_int()', 
    'mt_rand()', 
    'lcg_value()'
  ],
  correct: 'random_int()',
  explanation: 'PHP 7.0以降では、ランダムな整数を生成するための関数として、random_int()関数が追加されました。random_int()関数は、指定した最小値と最大値の範囲で、等確率にランダムな整数を生成します。mt_rand()関数は、PHP 5.3以降で使用できるランダムな整数を生成するための関数です。mt_rand()関数は、メルセンヌ・ツイスター乱数生成器を使用して、ランダムな整数を生成します。lcg_value()関数は、PHP 5.3以降で使用できるランダムな整数を生成するための関数です。lcg_value()関数は、線形合同法を使用して、ランダムな整数を生成します。'
  },  {
    question: 'PHPで不等号を表すための演算子は何ですか',
  answers: [
    '===', 
    '<>', 
    '><'
  ],
  correct: '<>',
  explanation: 'PHPで不等号を表すための演算子は、<>です。<>演算子は、左辺と右辺が等しくない場合に真になります。===演算子は、左辺と右辺が等しく、かつデータ型も等しい場合に真になります。><演算子は、左辺が右辺より大きい場合に真になります。'
  },  {
    question: 'PHPで論理積演算子は何ですか？',
  answers: [
    '||', 
    '!', 
    '&&'
  ],
  correct: '&&',
  explanation: 'PHPで論理積演算子は、&&です。&&演算子は、左辺と右辺がともに真である場合に真になります||演算子は、論理和演算子です。||演算子は、左辺または右辺が真である場合に真になります。!演算子は、論理否定演算子です。!演算子は、真を偽に、偽を真に変換します。'
  },  {
    question: 'PHPで論理和演算子は何ですか？',
  answers: [
    '||', 
    '!', 
    '&&'
  ],
  correct: '||',
  explanation: ''
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
      score++;
       // 解説文を表示
    document.getElementById('js-answerExplanation').textContent = quiz[quizIndex].explanation;
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
      window.location.href = 'php_qs.html';
    }
  }
  
  document.getElementById('js-nextQuestion').addEventListener('click', (e) => {
    nextClick(e);
  });
  