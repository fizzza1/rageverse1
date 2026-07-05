// ===============================
// RAGEVERSE - IMPOSSIBLE BUTTON
// PART 1
// ===============================

const area = document.getElementById("gameArea");
const attemptsEl = document.getElementById("attempts");
const buttonsEl = document.getElementById("buttons");
const rageEl = document.getElementById("rage");
const messageBox = document.getElementById("messageBox");

let attempts = 0;
let buttonCount = 1;
let realButton = 0;

const rageMessages = [
    "Too slow.",
    "Seriously?",
    "You almost had it.",
    "The button saw you coming.",
    "That wasn't even close.",
    "I expected better.",
    "Try harder.",
    "Still missing?",
    "Keep chasing.",
    "Not today."
];

const buttonTexts = [
    "CLICK ME",
    "NO",
    "MISS",
    "TOO LATE",
    "OVER HERE",
    "TRY AGAIN",
    "NOT THIS ONE",
    "CATCH ME"
];

//============================
// START GAME
//============================

createButtons(buttonCount);

//============================
// CREATE BUTTONS
//============================

function createButtons(count) {

    // remove old buttons
    document.querySelectorAll(".gameButton").forEach(btn => btn.remove());

    buttonsEl.textContent = count;

    realButton = Math.floor(Math.random() * count);

    for (let i = 0; i < count; i++) {

        const btn = document.createElement("button");

        btn.className = "gameButton";

        btn.innerText =
            buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

        btn.style.position = "absolute";

        btn.style.left =
            Math.random() * (area.clientWidth - 180) + "px";

        btn.style.top =
            Math.random() * (area.clientHeight - 80) + "px";

        // REAL BUTTON
        if (i === realButton) {

            btn.addEventListener("mouseenter", moveButton);

            btn.addEventListener("click", winGame);

        }

        // FAKE BUTTON
        else {

            btn.addEventListener("click", fakeButton);

        }

        area.appendChild(btn);

    }

}

//============================
// MOVE REAL BUTTON
//============================

function moveButton(e) {

    attempts++;

    attemptsEl.textContent = attempts;

    updateRage();

    randomMessage();

    const btn = e.target;

    btn.style.left =
        Math.random() * (area.clientWidth - 180) + "px";

    btn.style.top =
        Math.random() * (area.clientHeight - 80) + "px";

    btn.innerText =
        buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    increaseDifficulty();

}

//============================
// RANDOM MESSAGE
//============================

function randomMessage() {

    messageBox.innerText =
        rageMessages[
            Math.floor(Math.random() * rageMessages.length)
        ];

}

//============================
// RAGE BAR
//============================

function updateRage() {

    let rage = Math.min(attempts * 4, 100);

    rageEl.innerText = rage + "%";

}

//============================
// FAKE BUTTON
//============================

function fakeButton() {

    const fakeMessages = [

        "Wrong one.",

        "Really?",

        "That looked convincing.",

        "Nice guess.",

        "Still wrong.",

        "Not even close."

    ];

    messageBox.innerText =
        fakeMessages[
            Math.floor(Math.random() * fakeMessages.length)
        ];

}

//============================
// WIN
//============================

function winGame() {

    messageBox.innerText =
        "Wait... You actually clicked it?";

}