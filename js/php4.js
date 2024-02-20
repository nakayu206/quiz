// 問題文、選択肢、解答
const quiz = [
  {
    question: 'PHPで特定の条件に応じて分岐を制御するためのキーワードは何ですか？',
  answers: [
    'switch', 
    'if', 
    'while'
  ],
  correct: 'switch',
  explanation: 'PHPで論理和演算子は、||です。||演算子は、左辺または右辺が真である場合に真になります。'
  },  {
    question: 'switch文の各caseブロックの最後に通常どのキーワードを使用してブロックを終了しますか？&&演算子は、論理積演算子です。&&演算子は、左辺と右辺がともに真である場合に真になります。!演算子は、論理否定演算子です。!演算子は、真を偽に、偽を真に変換します。',
  answers: [
    'case', 
    'if', 
    'break'
  ],
  correct: 'break',
  explanation: 'switch文の各caseブロックの最後には、通常、breakキーワードを使用してブロックを終了します。breakキーワードは、switch文の処理を終了し、次のcaseブロックの処理に進まないようにします。caseキーワードは、caseブロックを開始するためのキーワードです。ifキーワードは、条件分岐を行うためのキーワードです。'
  },  {
    question: 'switch文で特定の条件に一致する場合の処理を記述するために使用するキーワードは何ですか？',
  answers: [
    'case', 
    'if', 
    'for'
  ],
  correct: 'case',
  explanation: 'switch文で特定の条件に一致する場合の処理を記述するために使用するキーワードは、caseです。caseキーワードは、caseブロックを開始するためのキーワードです。caseブロックでは、条件に合致した処理を記述します。ifキーワードは、条件分岐を行うためのキーワードです。forキーワードは、反復処理を行うためのキーワードです。'
  },  {
    question: 'switch文でdefaultブロックはどのように使用されますか？',
  answers: [
    '特定の条件に一致する場合の処理を記述するため', 
    '条件に一致しない場合のデフォルトの処理を記述するため', 
    '条件が一致した場合のデフォルトの処理を記述するため'
  ],
  correct: '条件に一致しない場合のデフォルトの処理を記述するため',
  explanation: 'switch文のdefaultブロックは、特定の条件に一致しなかった場合に実行される処理を記述するために使用されます。defaultブロックは、switch文の最後に記述するのが一般的です。特定の条件に一致する場合の処理を記述するためは、caseブロックが使用されます.条件が一致した場合のデフォルトの処理を記述するためという選択肢は存在しません'
  },  {
    question: 'PHPで関数から値を返すためのキーワードは何ですか？',
  answers: [
    'exit', 
    'yield', 
    'return'
  ],
  correct: 'return',
  explanation: 'PHPで関数から値を返すためのキーワードは、returnです。returnキーワードの後に、関数から返す値を記述します。exitキーワードは、プログラムの実行を終了するためのキーワードです。yieldキーワードは、ジェネレータ関数の値を返すためのキーワードです。'
  },  {
    question: '処理を繰り返し行うときに繰り返す回数が決まっている場合に使用する処理は何ですか？',
  answers: [
    'loop', 
    'for', 
    'if'
  ],
  correct: 'for',
  explanation: '処理を繰り返し行うときに繰り返す回数が決まっている場合に使用する処理は、for文です。for文は、指定した回数だけ処理を繰り返し実行します。loopは、繰り返し処理を行うための一般的な用語ですが、具体的な処理方法は言語によって異なります。PHPでは、for文、while文、do-while文などの繰り返し処理があります。if文は、条件分岐を行うための処理です。繰り返し処理を行う場合は、for文やwhile文などの繰り返し処理を使用します。'
  },  {
    question: 'PHPで配列内の要素を出力するために使用される主要な関数は次のうちどれですか？',
  answers: [
    'show_array()', 
    'print_r()', 
    'display_array()'
  ],
  correct: 'print_r()',
  explanation: 'PHPで配列内の要素を出力するために使用される主要な関数は、print_r()です。print_r()関数は、配列の値と型を整形して出力しますshow_array()関数は、配列の値をそのまま出力します。display_array()関数は、配列の値を整形して出力しますが、print_r()関数ほど詳細ではありません。'
  },  {
    question: '連想配列の要素へアクセスする時に何を指定しますか？',
  answers: [
    'key', 
    'name', 
    'index'
  ],
  correct: 'key',
  explanation: '連想配列の要素へアクセスするときには、要素のキーを指定します。キーは、任意の文字列を指定できます。nameは、連想配列の要素のキーに付けられる名前です。indexは、連想配列の要素の番号です。連想配列では、要素の番号は順番に割り当てられますが、キーとは一致しません。'
  },  {
    question: 'var_dump関数は何を行いますか？',
  answers: [
    '変数の内容を詳細に表示し、デバッグに役立つ情報を提供します。', 
    '変数を削除します。', 
    '変数を変更し、新しい値を代入します。'
  ],
  correct: '変数の内容を詳細に表示し、デバッグに役立つ情報を提供します。',
  explanation: 'var_dump関数は、指定した変数の内容を詳細に表示する関数です。変数の型、値、サイズ、属性などの情報を表示します。var_dump関数は、PHPのデバッグによく使用されます。変数の値が正しく代入されているか、変数の型が正しいかを確認するのに役立ちます。変数を削除します。unset関数によって行われます。変数を変更し、新しい値を代入します。assign関数によって行われます'
  },  {
    question: 'include関数は何を行いますか？',
  answers: [
    '外部ファイルを読み込むために使用され、他のファイルのコードを組み込みます。', 
    '変数の内容を詳細に表示し、デバッグに役立つ情報を提供します。', 
    'データベースから情報を取得し、表示します。'
  ],
  correct: '外部ファイルを読み込むために使用され、他のファイルのコードを組み込みます。',
  explanation: 'include関数は、指定したファイルを読み込み、そのファイルのコードが現在のファイルに組み込まれます。include関数は、他のファイルのコードを再利用するためによく使用されます。変数の内容を詳細に表示し、デバッグに役立つ情報を提供します。var_dump関数によって行われます。データベースから情報を取得し、表示します。mysqli_query関数などによって行われます'
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
  