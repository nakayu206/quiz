// 問題文、選択肢、解答
const quiz = [
    {
        question: 'PHPでのフォームデータの受信方法は何ですか？',
        answers: [
          '$_FORM', 
          '$_POST', 
          '$_GET'
        ],
        correct: '$_POST',
        explanation: 'フォームデータの受信には、$_POSTスーパーグローバル変数を使用します。$_POST変数には、フォームから送信されたデータが連想配列として格納されます。$_FORMは、PHP 4 以前のバージョンで使用されていた変数です。PHP 5 以降は使用できません。$_GETは、フォームデータの受信にも使用できますが、$_POSTよりセキュリティ上の問題があるため、一般的には$_POSTが使用されます。'
      },{
        question: 'PHPでの配列の要素数を取得する関数は何ですか？array_count()は、PHP 4 以前のバージョンで使用されていた関数です。PHP 5 以降は使用できません。size()は、配列の要素数を取得するためのキーワードです。count()関数と同様に、配列を渡すと、その配列の要素数を返します。',
        answers: [
        'array_count()', 
        'count()', 
        'size()'
      ],
      correct: 'count()',
      explanation: '配列の要素数を取得するには、count()関数を使用します。count()関数は、配列を渡すと、その配列の要素数を返します。'
      }, {
        question: 'PHPでの条件分岐に使用されるキーワードは何ですか？',
      answers: [
        'if', 
        'condition', 
        'cose'
      ],
      correct: 'if',
      explanation: 'ifキーワードの後に、条件を指定します。条件が真の場合に、ifブロック内の処理が実行されます。conditionは、条件分岐の条件を記述するためのキーワードではありません。coseは、PHPで使用されていないキーワードです。'
      },{
        question: 'PHPでの配列を宣言するための方法は何ですか？',
      answers: [
        'array()', 
        'list()', 
        'collection()'
      ],
      correct: 'array()',
      explanation: 'PHPでの配列を宣言するには、array()関数を使用します。array()関数の後に、配列の要素をカンマで区切って指定しますlist()関数は、配列の要素を変数に代入するために使用されます。collection()は、PHP 8.1 以降で追加された関数です。collection()関数を使用して、配列を作成できます。'
      },{
        question: 'PHPでの変数の値を比較するための演算子は何ですか？',
      answers: [
        '=', 
        '!=', 
        '=='
      ],
      correct: '==',
      explanation: 'PHPでの変数の値を比較するには演算子を使用します。演算子は、左辺の変数の値と右辺の変数の値が等しいかどうかを判定します=演算子は、変数に値を代入するために使用されます。`!=演算子は、変数の値が等しくないかを判定するために使用されます。'
      },{
        question: 'PHPでの無限ループを作成するための宣言は何ですか？',
      answers: [
        'while', 
        'infinite', 
        'endless'
      ],
      correct: 'while',
      explanation: 'PHPでの無限ループを作成するには、while文を使用します。while文の条件式が常に真になるように記述することで、無限ループを作成できます。infiniteとendlessは、無限ループを意味する単語ですが、PHPでの無限ループを作成するための宣言ではありません。'
      },{
        question: 'PHPで変数が存在するかどうかを確認するための関数は何ですか？',
      answers: [
        'is_set()', 
        'isset()', 
        'is_defined()'
      ],
      correct: 'isset()',
      explanation: 'PHPで変数が存在するかどうかを確認するには、isset()関数を使用します。isset()関数は、変数を渡すと、その変数が存在し、値がNULL以外である場合にtrue、存在しない場合にはfalseを返します。is_set()関数は、PHP 5.3 以前のバージョンで使用されていた関数です。PHP 5.4 以降は使用できません。is_defined()関数は、変数が定義されているかどうかを確認する関数です。isset()関数と異なり、変数が値を持っていなくてもtrueを返す場合があります。'
      },{
        question: 'PHPでの条件文を逆に評価するための演算子は何ですか？',
        answers: [
          '||', 
          '&&', 
          '!'
        ],
        correct: '!',
        explanation: 'PHPでの条件文を逆に評価するには、!演算子を使用します。!演算子は、条件式の真偽を反転します。||演算子は、2つの条件式のいずれかが真である場合に真を返す演算子です。&&演算子は、2つの条件式の両方が真である場合に真を返す演算子です。'
      },{
        question: 'PHPで条件を真と評価するためのキーワードは何ですか？',
      answers: [
        'false', 
        'true', 
        'truth'
      ],
      correct: 'true',
      explanation: 'PHPで条件を真と評価するには、trueキーワードを使用します。trueキーワードは、真の値を示す定数です。falseキーワードは、偽の値を示す定数です。truthは、真を意味する単語ですが、PHPでの条件を真と評価するためのキーワードではありません。'
      },{
        question: 'PHPで定数を定義するためのキーワードは何ですか？',
      answers: [
        'constant', 
        'const', 
        'define'
      ],
      correct: 'define',
      explanation: 'PHPで定数を定義するには、define()関数を使用します。define()関数は、定数の名と値を指定することで、定数を定義できます。constant()キーワードは、PHP 5.3 以前のバージョンで使用されていたキーワードです。PHP 5.4 以降は使用できません。constキーワードは、PHP 5.3 以降で追加されたキーワードです。define()関数と同様に、定数を定義できます。'
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
  