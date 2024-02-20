// 問題文、選択肢、解答
const quiz = [
  {
    question: '__DIR__ は何を表しますか？',
  answers: [
    '現在のファイルの名前', 
    '現在のディレクトリの絶対パス', 
    '環境変数の値'
  ],
  correct: '現在のディレクトリの絶対パス',
  explanation: 'DIR は、PHP の予約語で、現在のファイルが存在するディレクトリの絶対パスを表します。現在のファイルの名前は、FILE によって取得できます。環境変数の値は、$_ENV によって取得できます。'
  },  {
    question: 'foreachは何を行うために使用されますか？',
  answers: [
    'データベースのテーブルを作成する', 
    '配列内の要素を順番に処理するために使用される。', 
    'ファイルを圧縮するための圧縮アルゴリズムを適用する。'
  ],
  correct: '配列内の要素を順番に処理するために使用される。',
  explanation: 'foreach は、配列内の要素を順番に処理するためのループ構文です。foreach は、配列の要素をキーと値のペアとして処理します。CREATE TABLE ステートメントによって行われます。ファイルを圧縮するための圧縮アルゴリズムを適用する compress() 関数などによって行われます。'
  },  {
    question: 'データを追加または合算する操作の指定は何か？',
  answers: [
    'and', 
    'end', 
    'add'
  ],
  correct: 'add',
  explanation: 'データを追加または合算する操作の指定は、addです。and は、論理演算子です。end は、配列の末尾を表すキーワードです。'
  },  {
    question: 'キャメルケース（CamelCase）とは何ですか？',
  answers: [
    'すべての文字を大文字で書かれたテキスト', 
    '単語を連結し、最初の単語を小文字で始め、その後の単語の最初の文字を大文字で表現する命名規則', 
    '単語を連結し、最初の単語を大文字で始め、その後の単語もすべて大文字で表現する命名規則'
  ],
  correct: '単語を連結し、最初の単語を小文字で始め、その後の単語の最初の文字を大文字で表現する命名規則',
  explanation: 'キャメルケースは、プログラミング言語でよく使用される命名規則です。クラス名、変数名、関数名などに使用されます。'
  },  {
    question: 'プログラミングの文脈で "value" は通常何を指しますか？',
  answers: [
    'ウェブサイトのデザインの要素', 
    'データの値そのもの', 
    '関数の名前'
  ],
  correct: 'データの値そのもの',
  explanation: 'プログラミングの文脈で "value" は、データの値そのものを指します。変数に代入された値、関数に渡された引数、計算の結果など、データの値そのものを "value" と呼びます。ウェブサイトのデザインの要素"element" と呼ばれます。関数の名前"function name" と呼ばれます。'
  },  {
    question: 'ハッシュ化とは何か',
  answers: [
    '元の文字がわからないように別の文字に変換すること', 
    'データを圧縮するプロセス', 
    'データを暗号化するプロセス'
  ],
  correct: '元の文字がわからないように別の文字に変換すること',
  explanation: 'ハッシュ化とは、データを特定のアルゴリズムを用いて、元のデータを復元できないように別の文字列に変換するプロセスです。ハッシュ化された文字列は、元の文字列と一意に関連付けられていますが、元の文字列を復元することはできません。データを圧縮するデータのサイズを小さくするプロセスです。データを暗号化するデータを秘密にするプロセスです。暗号化されたデータは、復号化キーを使用してのみ復元できます。'
  },  {
    question: 'PHPコードで、$fruits配列からランダムに1つの要素を取得する方法はどれですか？<br>$fruits = ["apple", "banana", "cherry", "orange"];',
  answers: [
    '$fruits[rand(0, count($fruits))];', 
    '$fruits[random_int(0, count($fruits))];', 
    '$fruits[array_rand($fruits)];'
  ],
  correct: '$fruits[array_rand($fruits)];',
  explanation: ''
  },  {
    question: 'PHPコードの実行結果は何になりますか？<br>$numbers = [5, 2, 7, 1, 9, 3];<br>usort($numbers, function($a, $b) {<br>return $a <=> $b;<br>});<br>echo implode(",", $numbers);',
  answers: [
    '5, 2, 7, 1, 9, 3', 
    '1, 2, 3, 5, 7, 9', 
    '9, 7, 5, 3, 2, 1'
  ],
  correct: '1, 2, 3, 5, 7, 9',
  explanation: 'array_rand() 関数は、配列からランダムな要素のキーを取得します。このキーを配列の要素のインデックスとして使用することで、ランダムな要素を取得できます。$fruits[rand(0, count($fruits))]は、配列の要素数までの範囲内でランダムな整数を生成して、それを配列のインデックスとして使用します。この方法は、配列の要素数が大きい場合に効率的ではありません。$fruits[random_int(0, count($fruits))];は、rand() 関数のラッパー関数です。この関数は、array_rand() 関数と同様の方法で動作します。'
  },  {
    question: 'PHPコードで、$animals配列の要素数を取得する正しい方法はどれですか？<br>$animals = ["dog", "cat", "elephant", "giraffe"];',
  answers: [
    'count($animals)', 
    'sizeof($animals)', 
    '$animals.length'
  ],
  correct: 'count($animals)',
  explanation: 'count() 関数は、配列の要素数を取得します。sizeof($animals)は、PHP 5.6 以前で使用されていた関数です。PHP 7 以降では、count() 関数を使用するのが推奨されています。$animals.lengthは、JavaScript のコードです。PHP コードでは使用できません。'
  }, {
    question: 'PHPコードの実行結果は何になりますか？<br>function calculate($a, $b = 5) {<br>return $a + $b;<br>}<br>echo calculate(3);',
  answers: [
    'エラー', 
    '15', 
    '8'
  ],
  correct: '8',
  explanation: 'calculate() 関数には、2つの引数があります。最初の引数は必須で、2番目の引数は省略可能です。省略可能な引数にデフォルト値を指定すると、引数を渡さなかった場合でも、デフォルト値が使用されます。エラーは、関数の引数の数が不足している場合に発生します。15は、関数の引数に 2 つの値を渡した場合の実行結果です。'
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
  