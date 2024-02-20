const quiz = [
    {
        question: 'Webページに画像を表示するには、次のタグのうちどれを使えばよいですか？',
        answers: [
          '<body>', 
          '<img>', 
          '<h1>'
        ],
        correct: '<img>',
        explanation: '<body>タグは、Webページの本文を表すタグです。Webページの見出しを設定するには、<h1>タグを使用します'
      },{
          question: 'この問題はHTMLの初級です,「この問題は」で改行するにはどれを使えば良いですか',
          answers: [
            '<br>',
            '<hr>',
            '<ul>'
          ],
          correct: '<br>',
          explanation: '<hr>タグは、水平線を表示するために使用されるタグです。<ul>タグは、箇条書きリストを作成するために使用されるタグです。'
        },{
          question: 'ブロック要素はどれ？',
          answers: [
            'a',
            'img',
            'ul',
          
          ],
          correct: 'ul',
          explanation: 'ブロック要素は「ul」。他にも「div」「p」「form」などもブロック要素である。'
        },{
          question: '<img> タグの属性 alt の目的は、次のどれですか？',
          answers: [
            '画像の代替テキストを設定すること', 
            '画像の URL を設定すること', 
            '画像のサイズを設定すること'
          
          ],
          correct: '画像の代替テキストを設定すること',
          explanation: '<img>タグの属性altは、画像の代替テキストを設定するために使用されます'
        },{
          question: 'HTMLで、画像を表示する際に使用する機能がある属性は？',
          answers: [
            'src', 
            'img', 
            'image'
          
          ],
          correct: 'src',
          explanation: '「img」は、HTMLの画像タグの名前です。属性ではありません、「image」は、HTMLの画像タグの別の名前です。属性ではありません'
        },{
          question: '要素で囲むと、数字が連番で付くのはどれか',
          answers: [
            '<ul>', 
            '<ol>', 
            '<li>'
          
          ],
          correct: '<ol>',
          explanation: '<li>要素は、囲む要素によって種類が変わるという特徴を持っています。<ul>要素で囲むと、黒点が先頭につきます'
        },{
          question: 'HTMLのバージョンを宣言するための正しいものはどれか',
          answers: [
            '<DOCTYPE html!>',
            '<!DOCTYPE> <html>',
            '<!DOCTYPE html>',
          
          ],
          correct: '<!DOCTYPE html>',
          explanation: '宣言するための正しいものは<!DOCTYPE html>です'
        },{
          question: 'HTML ファイルの構成は、次のどれですか？',
          answers: [
            '.html', 
            '.htm', 
            '.js'
          
          ],
          correct: '.html',
          explanation: '今回は最新バージョンのHTMLを使うため、<!DOCTYPE html>を使用します。'
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
          question: '要素を左右に20pxずつ余白を設定するには、どのプロパティを使用するべきでしょうか？',
          answers: [
            'margin',
            'padding',
            'border',
          
          ],
          correct: 'margin',
          explanation: '要素の外側に余白を設定するには、marginプロパティを使用します。'
          
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