
/* =========================================
    ELEMENTS
========================================= */

const opening = document.querySelector("#opening");
const giftScene = document.querySelector("#giftScene");
const flowerScene = document.querySelector("#flowerScene");
const birthdayScene = document.querySelector("#birthdayScene");
const letterScene = document.querySelector("#letterScene");
const finalScene = document.querySelector("#finalScene");

const startBtn = document.querySelector("#startBtn");
const giftBox = document.querySelector("#giftBox");
const flower = document.querySelector("#flower");
const flowerText = document.querySelector("#flowerText");
const flowerBtn = document.querySelector("#flowerBtn");

const candlesContainer = document.querySelector("#candles");
const wishBtn = document.querySelector("#wishBtn");
const confetti = document.querySelector("#confetti");

const envelope = document.querySelector("#envelope");
const letterBtn = document.querySelector("#letterBtn");
const letterText = document.querySelector("#letterText");
const cursor = document.querySelector(".cursor");

const stars = document.querySelector("#stars");
const finalStars = document.querySelector("#finalStars");

const music = document.querySelector("#birthdayMusic");
let audioContext = null;
let birthdaySongInterval = null;


function playBirthdaySong() {

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioContext) {
        audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    if (birthdaySongInterval) {
        clearInterval(birthdaySongInterval);
    }

    const melody = [
        523.25, 659.25, 783.99, 659.25,
        587.33, 659.25, 783.99, 880.00,
        783.99, 659.25, 587.33, 523.25,
        587.33, 659.25, 698.46, 659.25
    ];

    let noteIndex = 0;

    function playTone(frequency, duration = 0.26) {

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration + 0.04);
    }

    const playNextNote = () => {
        playTone(melody[noteIndex % melody.length], 0.28);
        noteIndex++;
    };

    playNextNote();

    birthdaySongInterval = setInterval(playNextNote, 320);
}


/* =========================================
   BIRTHDAY LETTER
========================================= */

const letter = `
Heeeey baby, ❤️

Emm... I don't really know how to start this letter,
but I just wanted to say something that has been on my mind.

First of all, I'm really sorry that I couldn't give you
something as special as you deserve on your birthday.

I know you deserve something much better,
and honestly, I wish I could have prepared something
bigger and more beautiful for you.

And I'm also sorry that I didn't prepare anything
for your birthday before.

I know I should have, and I'm really sorry, baby.
Forgive me, abenti. ❤️

But this time, I wanted to do something different.

Maybe it's not the biggest gift in the world,
and maybe it's not perfect,
but I made it with all my heart.

Because I wanted you to have something
that stays with you,
even if it's just a little memory.

I don't want to make a lot of promises,
but there is one thing I can promise you:

I'll always be there for you, abenti. ❤️

I'll try my best to be with you through everything,
in the good moments and in the difficult ones.

I'll listen to you,
support you,
make you laugh when you're sad,
and remind you that you're never alone.

And I promise I'll make it up to you
for everything that happened before.

For the things I didn't do,
for the moments I missed,
and for everything I should have done better.

I know I can't change the past,
but I can make the future better.

And honestly...

I just hope that when you look back at this day,
14.09.2026,
you'll remember that there was someone
who really wanted to make you smile.

You mean a lot to me, baby.
More than I can probably explain with words.

So today, I just want you to enjoy your day,
smile as much as you can,
make a beautiful wish,
and remember that you deserve
every beautiful thing coming your way.

Happy Birthday, baby. 🎂❤️

I hope this new year of your life
brings you happiness,
peace,
beautiful memories,
and everything you've been wishing for.

And once again...

I'm sorry for everything I couldn't do before.

Forgive me, abenti. ❤️

I'll do better.

I'll be there.

And I'll keep making memories with you.

Happy Birthday, my baby.

MUUUUUUUUUUUH 3LIK ABENTIIII 😭❤️💋

— Rayan
`;


/* =========================================
   SCENE FUNCTION
========================================= */

function showScene(scene) {

    const current = document.querySelector(".scene.active");
    if (current) current.classList.remove("active");

    if (scene) scene.classList.add("active");
}


/* =========================================
   CREATE STARS
========================================= */

function createStars() {

    if (!stars) return;

    for (let i = 0; i < 90; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.transform =
            `scale(${Math.random() + 0.5})`;

        stars.appendChild(star);
    }
}


/* =========================================
   CREATE FINAL STARS
========================================= */

function createFinalStars() {

    if (!finalStars) return;

    for (let i = 0; i < 40; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        finalStars.appendChild(star);
    }
}


/* =========================================
   CREATE 14 CANDLES
========================================= */

function createCandles() {

    if (!candlesContainer) return;

    for (let i = 0; i < 14; i++) {

        const candle = document.createElement("div");

        candle.className = "candle";

        const flame = document.createElement("div");

        flame.className = "flame";

        candle.appendChild(flame);

        candlesContainer.appendChild(candle);
    }
}


/* =========================================
   OPENING
========================================= */

if (startBtn) {
    startBtn.addEventListener("click", function () {

        playBirthdaySong();
        showScene(giftScene);

    });
}


/* =========================================
   GIFT
========================================= */

if (giftBox) {
    giftBox.addEventListener("click", function () {

        giftBox.classList.add("opened");

        giftBox.style.pointerEvents = "none";

        setTimeout(function () {

            showScene(flowerScene);

            if (flower) flower.classList.add("bloom");

            setTimeout(function () {

                if (flowerText) flowerText.textContent =
                    "Sometimes, it's the thought behind them.";

                if (flowerBtn) flowerBtn.classList.remove("hidden");

            }, 1800);

        }, 1200);

    });
}


/* =========================================
   FLOWER
========================================= */

if (flowerBtn) {
    flowerBtn.addEventListener("click", function () {

        showScene(birthdayScene);

    });
}


/* =========================================
   CANDLES
========================================= */

createCandles();


/* =========================================
   WISH
========================================= */

if (wishBtn) {
    wishBtn.addEventListener("click", function () {

        const candles = document.querySelectorAll(".candle");

        candles.forEach(function (candle, index) {

            setTimeout(function () {

                candle.classList.add("off");

            }, index * 100);

        });

        createConfetti();

        wishBtn.textContent = "Wish made ✨";

        setTimeout(function () {

            showScene(letterScene);

        }, 2800);

    });
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    if (!confetti) return;

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confetti.appendChild(piece);

    }
}


/* =========================================
   OPEN LETTER
========================================= */

if (letterBtn) {
    letterBtn.addEventListener("click", function () {

        if (envelope) envelope.classList.add("open");

        letterBtn.style.display = "none";

        setTimeout(function () {

            typeLetter();

        }, 700);

    });
}


/* =========================================
   TYPING EFFECT
========================================= */

function typeLetter() {

    let index = 0;

    const speed = 25;

    const interval = setInterval(function () {

        if (letterText) letterText.textContent += letter[index] || "";

        index++;

        if (index >= letter.length) {

            clearInterval(interval);

            if (cursor) cursor.style.display = "none";

            setTimeout(function () {

                showScene(finalScene);

                createFinalStars();

            }, 2500);

        }

    }, speed);

}


/* =========================================
    START
========================================= */

createStars();




/* =========================================
   AUDIO: PLAY SEGMENT
   Plays an audio element from `startSec` to `endSec` (seconds).
========================================= */

let _segmentEndListener = null;

function playAudioSegment(startSec, endSec, loop = false) {

    if (!music) return;

    // ensure valid numbers
    startSec = Number(startSec) || 0;
    endSec = Number(endSec) || music.duration || (startSec + 1);

    try {
        // jump to start and play
        music.currentTime = Math.max(0, startSec);
        const playPromise = music.play();
        if (playPromise && playPromise.catch) playPromise.catch(() => { });
    } catch (e) { }

    // remove previous listener
    if (_segmentEndListener) {
        music.removeEventListener('timeupdate', _segmentEndListener);
        _segmentEndListener = null;
    }

    _segmentEndListener = function () {
        if (music.currentTime >= endSec - 0.1) {
            if (loop) {
                music.currentTime = startSec;
            } else {
                music.pause();
                music.removeEventListener('timeupdate', _segmentEndListener);
                _segmentEndListener = null;
            }
        }
    };

    music.addEventListener('timeupdate', _segmentEndListener);

}