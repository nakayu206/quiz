$(function () {
    clock.init();
});

var clock = {
    init: function () {
        clock.hour = $('.clock-hour')[0];
        clock.min = $('.clock-min')[0];
        clock.sec = $('.clock-sec')[0];
        clock.selectHour = $('.alarm-hour')[0];
        clock.createOption(clock.selectHour, 23);
        clock.selectMin = $('.alarm-min')[0];
        clock.createOption(clock.selectMin, 59);
        clock.selectSec = $('.alarm-sec')[0];
        clock.createOption(clock.selectSec, 59);
        clock.buttonSet = $('#btnSet')[0];
        $(clock.buttonSet).click(clock.set);
        clock.buttonReset = $('#btnReset')[0];
        $(clock.buttonReset).click(clock.reset);
        clock.sound = document.getElementById('alarm-sound');
        clock.soundSource = document.getElementById('alarm-sound-source');
        clock.alarmSound = $('.alarm-sound')[0];
        clock.soundSource.src = clock.alarmSound.value;
        clock.sound.load();
        clock.alarm = null;
        setInterval(clock.tick, 1000);
    },
    createOption: function (selector, max) {
        for (var i = 0; i <= max; i++) {
            i = clock.padZero(i);
            $(selector).append($('<option>', {
                value: i,
                text: i
            }));
        }
    },
    padZero: function (num) {
        if (num < 10) {
            num = '0' + num;
        } else {
            num = num.toString();
        }
        return num;
    },
    tick: function () {
        var now = new Date();
        var hr = clock.padZero(now.getHours());
        var min = clock.padZero(now.getMinutes());
        var sec = clock.padZero(now.getSeconds());
        clock.hour.innerHTML = hr;
        clock.min.innerHTML = min;
        clock.sec.innerHTML = sec;
        if (clock.alarm != null) {
            now = hr + min + sec;
            if (now == clock.alarm) {
                if (clock.sound.paused) {
                    clock.sound.play();
                    // アラームが鳴ったら問題を表示
                    alarmRinging = true;
                    showQuizOnAlarm();
                }
            }
        }
    },
    set: function () {
        if (clock.alarm == null) {
            clock.alarm = clock.selectHour.value + clock.selectMin.value + clock.selectSec.value;
            clock.soundSource.src = clock.alarmSound.value;
            clock.sound.load();
            clock.selectHour.disabled = true;
            clock.selectMin.disabled = true;
            clock.selectSec.disabled = true;
            clock.buttonSet.disabled = true;
            clock.buttonReset.disabled = false;
            clock.alarmSound.disabled = true;
        }
    },
    reset: function () {
        if (!clock.sound.paused) {
            clock.sound.pause();
            // アラームが止まったらメッセージを表示
            const main = document.querySelector('main');
            const home= document.createElement('h1');
            home.innerHTML = 'おはよう！';
            main.appendChild(home);
        }
        clock.alarm = null;
        clock.selectHour.disabled = false;
        clock.selectMin.disabled = false;
        clock.selectSec.disabled = false;
        clock.buttonSet.disabled = false;
        clock.buttonReset.disabled = true;
        clock.alarmSound.disabled = false;
        // アラーム解除時にアラーム鳴動状態をリセット
        resetAlarmState();
    }
};

document.addEventListener('click', function(event) {
    // クリックされた要素が「おはよう！」メッセージであるか確認
    if (event.target.matches('h1') && event.target.innerHTML === 'おはよう！') {
        // ホームに戻る処理（例としてページのURLを指定）
        window.location.href = ''; // ホームページのURLに変更する
    }
});

// クイズの正解数をカウントする変数を追加
let correctAnswers = 0;

// アラームが鳴ったかどうかを示すフラグ
let alarmRinging = false;

// アラームが鳴ったら問題を表示する関数
function showQuizOnAlarm() {
    // アラームが鳴っている場合に問題を表示
    if (alarmRinging) {
        const randomQuizzes = quizzes.sort(() => Math.random() - 0.5).slice(0, 3);
        randomQuizzes.forEach((quiz) => {
            render(quiz);
        });
    }
}
function showQuizOnAlarm() {
    // アラームが鳴っている場合に問題を表示
    if (alarmRinging) {
        // 時計を非表示にする
        $('.alarm-clock').hide(); // jQueryを使用して非表示にする例
        // クイズを表示する
        $('.quiz').show(); // クイズの要素を表示する

        const randomQuizzes = quizzes.sort(() => Math.random() - 0.5).slice(0, 3);
        randomQuizzes.forEach((quiz) => {
            render(quiz);
        });
    }
}
// アラーム解除時にアラーム鳴動状態をリセット
function resetAlarmState() {
    alarmRinging = false;
}

function render(quiz) {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = quiz[0];
    const ul = document.createElement('ul');

    // 正解したらアラーム解除
    const addAnswerClickHandler = (li, answerIndex) => {
        li.addEventListener('click', () => {
            if (quiz[4] === answerIndex) {
                li.classList.add('correct');
                // 正解の場合、正解数を増やす
                correctAnswers++;
                if (correctAnswers === 3) {
                    // 3問正解したらアラームを解除
                    clock.reset();
                }
            } else {
                li.classList.add('wrong');
            }
        });
    }

    const li0 = document.createElement('li');
    li0.textContent = quiz[1];
    addAnswerClickHandler(li0, 0);

    const li1 = document.createElement('li');
    li1.textContent = quiz[2];
    addAnswerClickHandler(li1, 1);

    const li2 = document.createElement('li');
    li2.textContent = quiz[3];
    addAnswerClickHandler(li2, 2);

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);

}

const quizzes = [
    ['要素の角を丸くするには、どのプロパティと値を指定すればよいですか？', 'border-radius: 5px;', 'border-top-left-radius: 5px;', 'border-bottom-right-radius: 5px;', 0],
    ['<button>要素のtype属性にsubmitを指定した場合、そのボタンをクリックすると、どのように動作する？', 'フォームを送信する', 'ページをリロードする', '新しいタブを開く', 0],
    ['要素の背景画像を、要素のサイズに合わせてリサイズするには、どのプロパティと値を指定すればよいですか？', 'background-size: contain;', 'background-size: 100%;', 'background-size: cover', 2],
    ['要素にアニメーションを適用するには、どのプロパティと値を指定すればよいですか？', 'transition: transform 1s;', 'animation: bounce 1s infinite;', 'transform: translate(0, 10px)', 1],
    ['HTMLで、画像を表示する際に使用する機能がある属性は？', 'src', 'img', 'image', 0],
];
