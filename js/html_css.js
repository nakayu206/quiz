// 問題文、選択肢、解答
const quiz = [
  {
    question: 'Webページのタイトルを設定するには,次のタグのうちどれを使えばよいですか？',
    answers: [
      '<title>',
      '<head>', 
      '<body>'
    ],
    correct: '<title>',
    explanation: 'head要素は、文章のタイトルや基準となるURLを表示する。body要素は、文書の本文を表す'
    
  },{
    question: 'Webページの見出しを設定するには、次のタグのうちどれを使えばよいですか？',
    answers: [
      '<body>', 
      '<header>', 
      '<h1>'
    ],
    correct: '<h1>',
    explanation: '<body>タグは、Webページの本文を表すタグです。<header>タグは、Webページのヘッダー部分を表すタグです。'
  },{
      question: 'HTMLのテーブルのセル幅を指定するには、以下のどれを使用します？',
      answers: [
        'style属性',
        'height属性',
        'width属性',
      
      ],
      correct: 'width属性',
      explanation: 'HTMLのテーブルのセル幅を指定するには、width属性を使用します。height属性は、セルの高さを指定します。style属性は、セルのスタイルを指定しますが、width属性やheight属性を指定することもできます。'
      
    },{
      question: 'HTMLの要素の属性は、以下のどれに指定しますか？',
      answers: [
        '要素の開始タグ',
        '要素の終了タグ',
        '要素のコンテンツ',
      
      ],
      correct: '要素の開始タグ',
      explanation: 'HTMLの要素の属性は、要素の開始タグに指定します。属性は、要素の動作や外観を変更するために使用されます。'
      
    },{
      question: 'HTMLのフォームの入力値を検証するには、以下のどれを使用します？',
      answers: [
        'required属性',
        'pattern属性',
        'min属性',
      
      ],
      correct: '要素の開始タグ',
      explanation: 'HTMLのフォームの入力値を検証するには、pattern属性を使用します。required属性は、入力値が必須であることを指定します。min属性は、入力値が指定した値以上であることを指定します。'
      
    },{
      question: 'CSSの略は何ですか？',
      answers: [
        'Cascading Style Sheet',
        'Computer Style System',
        'Creative Style Syntax'
      ],
      correct: 'Cascading Style Sheet',
      explanation: '「Computer Style System」は、CSSの機能や用途を正確に表したものではありません。CSSは、コンピューターではなく、Webページのデザインやレイアウトを指定するための言語です。<br>「Creative Style Syntax」は、CSSの機能や用途を誤解したものです。CSSは、創造的なスタイルを指定するための言語ではありません。CSSは、Webページのデザインやレイアウトを指定するための言語です。したがって、この問題の正解は「Cascading Style Sheet」です。'
    },{
      question: '文字の色を変えたい時にどの指定をすればよいですか？',//問題を入力
      answers: [
        'color', //選択入力
        'body-color', //選択入力
        'font'//選択入力
      ],
      correct: 'color',//回答入力
      explanation: 'colorプロパティは、文字の色を指定するためのプロパティです。color: red;のように記述することで、文字を赤色にすることができます。body-colorは、body要素の背景色を指定するためのプロパティです。文字の色を指定するものではありません。fontプロパティは、フォントファミリーやフォントサイズなどを指定するためのプロパティです。文字の色を指定するものではありません。'//解説入力
    }, {
      question: '文字の大きさを指定したい時はどうすればよいですか？',//問題を入力
      answers: [
        'size', //選択入力
        'font-size', //選択入力
        'font-family'//選択入力
      ],
      correct: 'font-size',//回答入力
      explanation: '正解はfont-sizeです。font-sizeプロパティは、文字の大きさを指定するためのプロパティです。font-size: 24px;のように記述することで、文字を24pxにすることができます。sizeは、CSS2で定義されたプロパティですが、現在は非推奨とされています。font-familyプロパティは、フォントファミリーを指定するためのプロパティです。文字の大きさを指定するものではありません。'//解説入力
    }, {
      question: '背景の色を変えるときはどの指定をしますか？',
      answers: [
        'background-color',
        'back-color',
        'background-image'
      ],
      correct: 'background-color',
      explanation: 'background-colorプロパティは、要素の背景色を変更するために使用するCSSプロパティです。<body>要素を含む、すべてのHTML要素で使用できます。back-colorプロパティは有効なCSSプロパティではありません。background-imageプロパティは、要素に背景画像を設定するために使用するCSSプロパティです。'
    }, {
      question: 'サイズ指定を絶対値にするにはどの単位を使いますか？',
      answers: [
        '%',
        'rem',
        'px'
      ],
      correct: 'px',
      explanation: '正解はpxです。pxは、ピクセルの略で、画面上の物理的なサイズを指定します。そのため、サイズ指定を絶対値にするには、px単位を使用します。%は、親要素のサイズに対する相対的なサイズを指定します。remは、ルート要素のサイズに対する相対的なサイズを指定します。'
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

setupQuiz(10,21);

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
  } else {
    // 10問目で終了
    // window.location.href = 'http://127.0.0.1:5502/allquize.html';
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength );
    window.location.href = 'html_css_qs.html';
  }
  
}
    



 


document.getElementById('js-nextQuestion').addEventListener('click', (e) => {
  nextClick(e);
});
