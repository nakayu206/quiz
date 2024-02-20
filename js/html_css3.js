const quiz = [
    {
        question: '「ようこそ東京へ」この文のしたに下線を引きたい場合どのタグを使用すれば良いか',
        answers: [
            '<hr>',
            '<br>',
            '<boarder>',

        ],
        correct: '<hr>',
        explanation: '<br>は改行をする、<boarder>タグはない'

    },{
        question: '表示形式を変えて要素ごとなくす指定はどれですか？',
        answers: [
          'hidden',
          'none',
          'opacity'
        ],
        correct: 'none',
        explanation: 'display: noneプロパティは、要素の表示形式をnoneに指定して、要素ごとなくすことができます。visibility: hiddenプロパティは、要素の表示・非表示をhiddenに指定して、要素を非表示にすることができますが、要素自体は存在します。opacity: 0プロパティは、要素の透明度を0に指定して、要素を透明にすることができますが、要素自体は存在します。'
      }, {
        question: 'フォントの太さを変えたい時の指定はどれですか？',
        answers: [
          'font-style',
          'font-weight',
          'font-size'
        ],
        correct: 'font-weight',
        explanation: 'font-weightプロパティは、フォントの太さを指定するためのCSSプロパティです。font-styleプロパティは、フォントの書体を指定するためのCSSプロパティです。font-sizeプロパティは、フォントのサイズを指定するためのCSSプロパティです。'
      }, {
        question: '枠を丸くする指定はどれですか？',
        answers: [
          'border-radius',
          'border-width',
          'border-circle'
        ],
        correct: 'border-radius',
        explanation: 'border-radius プロパティは、要素のボーダーの角丸みを指定するための CSS プロパティです。border-width プロパティは、要素のボーダーの幅を指定するための CSS プロパティです。border-circle プロパティは存在しない CSS プロパティです。'
      }, {
        question: 'HTMLブロックを横並びにすることができる指定はどれですか？',
        answers: [
          'flex',
          'box',
          'block'
        ],
        correct: 'flex',
        explanation: 'flex プロパティは、要素をフレックスレイアウトにする指定です。フレックスレイアウトでは、要素は行方向または列方向に並べられます。box プロパティは、要素をボックスレイアウトにする指定です。ボックスレイアウトでは、要素は縦に並べられます。block プロパティは、要素をブロック要素にする指定です。ブロック要素は、デフォルトで縦に並べられます。'
      }, {
        question: 'CSSでレイアウトを組む手法の1つで、要素を格子状に並べて配置することができるしていはどれですか？',
        answers: [
          'block',
          'box',
          'grid'
        ],
        correct: 'grid',
        explanation: 'CSS のグリッドレイアウトは、要素を格子状に並べて配置することができるレイアウト手法です。グリッドレイアウトでは、要素は行と列に配置され、各要素はグリッドセルに配置されます。ブロック と ボックス は、CSS のレイアウトの基本となる要素の表示形式を指定するためのプロパティです。ブロック要素は、デフォルトで縦に並べられ、ボックス要素は、デフォルトで横に並べられます。grid プロパティは、要素をグリッドレイアウトにする指定です。グリッドレイアウトでは、要素は行と列に配置され、各要素はグリッドセルに配置されます。'
      }, {
        question: '背景画像の指定するためには次のうちどれを使えばよいですか？',
        answers: [
          'background-img:url(../img.jpg)',
          'background-image:url(../img.jpg)',
          'background-image:../img.jpg'
        ],
        correct: 'background-image:url(../img.jpg)',
        explanation: 'background-image プロパティは、要素の背景画像を指定するためのプロパティです。url() 関数は、画像のパスまたは URL を指定するための関数です。 ../img.jpg は、現在のディレクトリから 1 つ上のディレクトリにある img.jpg という画像ファイルを指定しています。'
      }, {
        question: '画像に影をつけたい時の指定はどれですか？',
        answers: [
          'box-shadow',
          'text-shadow',
          'image-shadow'
        ],
        correct: 'box-shadow',
        explanation: 'box-shadow プロパティは、要素のボックス領域（ボーダーとその内側）に対する影を指定するための CSS プロパティです。text-shadow プロパティは、テキストの影を指定するための CSS プロパティです。image-shadow プロパティは、存在しない CSS プロパティです。'
      }, {
        question: 'display プロパティの値が inline の場合、要素はどのように表示されますか？',
        answers: [
          '新しい行で始まり、新しい行で終わる',
          '他の要素と同じ行に表示',
          '画面上には表示されず、非表示になる'
        ],
        correct: '他の要素と同じ行に表示',
        explanation: 'display プロパティの値が inline の場合、要素はインライン要素として扱われます。インライン要素は、他の要素と同じ行に表示されます。'
      },{
        question: 'position プロパティの値が relative の場合、要素はどのように配置されますか？',
        answers: [
          '画面上で他の要素に対して相対的な位置に配置',
          '要素を画面から完全に削除',
          '画面上で要素を中央に配置'
        ],
        correct: '画面上で他の要素に対して相対的な位置に配置',
        explanation: '画面上で他の要素に対して相対的な位置に配置 です。position プロパティの値が relative の場合、要素は画面上の他の要素に対して相対的な位置に配置されます'
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
  window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！詳しい解説を見る　ホームに戻る');
  window.location.href = 'html_css_qs.html';
}

}
  






document.getElementById('js-nextQuestion').addEventListener('click', (e) => {
nextClick(e);
});