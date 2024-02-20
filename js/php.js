// 問題文、選択肢、解答
const quiz = [
  {
    question: 'Windowでアプリケーションの開発環境をローカルで簡単に構築できたり、開発に欠かせないソフトウェアはなんですか？',//問題を入力
    answers: [
      'XAMPP', //選択入力
      'MAMP', //選択入力
      'ZAMPP'//選択入力
    ],
    correct: 'XAMPP',//回答入力
    explanation: 'XAMPPは、Apache HTTP Server、MySQL、PHP、Perlのオープンソースソフトウェアをまとめたパッケージです。Window、Mac、Linuxなど、さまざまなプラットフォームで動作します。XAMPPをインストールすると、これらのソフトウェアがローカル環境に簡単に構築できます。そのため、WebアプリケーションやPHPアプリケーションの開発に欠かせないソフトウェアと言えます。MAMPは、XAMPPのMac版です。ZAMPPは、XAMPPの架空の名称です。したがって、正解は「XAMPP」です。'//解説入力
  },{
      question: 'PHPのファイル拡張子は何ですか？',//問題を入力
      answers: [
        '.html', //選択入力
        '.php', //選択入力
        '.js'//選択入力
      ],
      correct: '.php',//回答入力
      explanation: 'PHPのファイル拡張子は、.phpです。PHPのプログラムは、この拡張子を付けてファイルに保存します。Webブラウザがこの拡張子のファイルを要求すると、WebサーバはPHP処理エンジンに処理を依頼します。'//解説入力
  },{
      question: 'PHPの変数を宣言するためのキーワードは何ですか？',//問題を入力
      answers: [
        'var', //選択入力
        'let', //選択入力
        '$'//選択入力
      ],
      correct: '$',//回答入力
      explanation: 'PHPの変数を宣言するためのキーワードは、です。変数名は、記号の後に任意の文字列を指定します。変数名は、大文字と小文字が区別されます。'//解説入力
  },{
      question: 'PHPでプログラムとしての処理をさせる記述はなんですか？',
    answers: [
      '<?php', 
      '<.php', 
      '<$php'
    ],
    correct: '<?php',
    explanation: 'PHPでプログラムとしての処理をさせる記述は、<?phpです。この記述を記述すると、PHP処理エンジンがプログラムを実行するようになります。<.php：PHPのファイル拡張子です。PHPのプログラムは、この拡張子を付けてファイルに保存します。しかし、この記述だけでは、プログラムとしての処理をさせるわけではありません。<<span class="math-inline">php\：PHPの変数名ではありません。PHPの変数名は、記号の後に任意の文字列を指定します。'
    },{
      question: '画面に出力するための記述は次のうちどれですか？',
      answers: [
        '?echo', 
        'echo', 
        'display'
      ],
      correct: 'echo',
      explanation: '画面に出力するための記述は、echoです。echoは、文字列や変数の内容を画面に表示する関数です。?echo：PHPの記述ではありません。display：PHPでは、displayという関数は存在しません。'
    },{
      question: 'PHPで累乗はどう使いますか？',
      answers: [
        '++', 
        '*2', 
        '**'
      ],
      correct: '**',
      explanation: 'PHPで累乗を使用するには、**演算子を使用します。**演算子は、左辺の変数を右辺の数だけ乗算します。++：変数の値を1増やす演算子です。*2：変数を2倍にする演算子です。これらの演算子は、累乗ではありません。'
    },{
      question: 'echo文を使って複数の要素を出力する場合、要素間に何を使用しますか？',
    answers: [
      ';', 
      ',', 
      '.'
    ],
    correct: ',',
    explanation: 'セミコロン（;）は、PHPの文の終わりに使用します。ドット（.）は、文字列の連結演算子として使用します。したがって、echo文を使って複数の要素を出力する場合は、カンマ（,）を使用します。'
    },{
      question: 'PHPでの変数を宣言するためのキーワードは何ですか？',
    answers: [
      'var', 
      'let', 
      '$'
    ],
    correct: '$',
    explanation: 'varは、PHP 7.0 以前の変数宣言キーワードです。PHP 7.1 以降は非推奨です。letは、JavaScriptの変数宣言キーワードです。PHPでは使用できません。したがって、PHPでの変数を宣言するためのキーワードは、$です。'
    },{
      question: 'PHPで関数を宣言するためのキーワードは何ですか？',
    answers: [
      'define', 
      'function', 
      'declare'
    ],
    correct: 'function',
    explanation: 'PHPで関数を宣言するには、functionキーワードを使用します。functionキーワードの後に、関数名、引数、処理内容を指定します。defineは、定数の定義キーワードです。declareは、変数のスコープの宣言キーワードです'
    },{
      question: 'PHPでの文字列連結に使用される演算子は何ですか？',
    answers: [
      '+', 
      '-', 
      '.'
    ],
    correct: '.',
    explanation: 'PHPでは、文字列連結に.演算子を使用します。.演算子は、左辺の変数と右辺の変数を連結して、新しい文字列を作成します。'
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
  