"use strict";


/* =========================================================
   SONIC.EXE RE-RUN
   WEBSITE SYSTEM
========================================================= */

console.log(
    "%c SONIC.EXE: RE-RUN ",
    "background:#700000;color:white;font-size:20px;font-weight:bold;"
);

console.log(
    "%c BACK FROM THE CODE ",
    "color:#a00000;font-weight:bold;"
);

console.log("> Initializing system...");
console.log("> Loading corrupted data...");
console.log("> Checking entity...");
console.log("> ENTITY STATUS: UNKNOWN");


/* =========================================================
   INTRO
========================================================= */

const introScreen =
    document.getElementById("introScreen");

const introText =
    document.getElementById("introText");


const introMessages = [
    "CONNECTION ESTABLISHED",
    "READING MEMORY...",
    "CORRUPTED DATA DETECTED",
    "RESTORING FILES...",
    "ENTITY FOUND",
    "SONIC.EXE"
];


let introIndex = 0;


function runIntro() {

    if (introIndex >= introMessages.length) {

        setTimeout(() => {

            introScreen.classList.add("hidden");

        }, 500);

        return;
    }

    introText.textContent =
        introMessages[introIndex];

    introIndex++;

    setTimeout(
        runIntro,
        550
    );
}


setTimeout(
    runIntro,
    500
);


/* =========================================================
   NAVIGATION
========================================================= */

const navigationButtons =
    document.querySelectorAll(
        "[data-target]"
    );


navigationButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const targetId =
                button.dataset.target;

            const target =
                document.getElementById(
                    targetId
                );

            if (!target) {

                console.error(
                    "Target section not found:",
                    targetId
                );

                return;
            }

            target.scrollIntoView({
                behavior: "smooth"
            });

            console.log(
                "Navigation:",
                targetId
            );

        }
    );

});


/* =========================================================
   ENTER THE CODE
========================================================= */

const enterButton =
    document.getElementById(
        "enterButton"
    );


enterButton.addEventListener(
    "click",
    () => {

        console.warn(
            "WARNING: USER ENTERED THE CODE."
        );

        document
            .getElementById("story")
            .scrollIntoView({
                behavior: "smooth"
            });

        createGlitch();

    }
);


/* =========================================================
   SONG MODAL
========================================================= */

const modal =
    document.getElementById(
        "modal"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalMessage =
    document.getElementById(
        "modalMessage"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const modalAction =
    document.getElementById(
        "modalAction"
    );


const songButtons =
    document.querySelectorAll(
        ".song-button"
    );


songButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const songName =
                button.dataset.song;

            console.log(
                "Attempting to access:",
                songName
            );

            openSong(
                songName
            );

        }
    );

});


function openSong(songName) {

    modalTitle.textContent =
        songName;

    if (songName === "UNKNOWN") {

        modalMessage.textContent =
            "ACCESS DENIED. THIS FILE DOES NOT WANT TO BE FOUND.";

    } else if (songName === "ZALGO") {

        modalMessage.textContent =
            "WARNING: FILE IS HEAVILY CORRUPTED.";

    } else {

        modalMessage.textContent =
            "FILE RECOVERED. CONNECTION READY.";

    }

    modal.classList.add(
        "active"
    );

}


function closeSong() {

    modal.classList.remove(
        "active"
    );

}


closeModal.addEventListener(
    "click",
    closeSong
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeSong();

        }

    }
);


/* =========================================================
   MODAL ACTION
========================================================= */

modalAction.addEventListener(
    "click",
    () => {

        console.log(
            "GAME EXECUTION REQUESTED."
        );

        modalTitle.textContent =
            "EXECUTION";

        modalMessage.textContent =
            "The actual game executable will be connected here.";

        modalAction.textContent =
            "SYSTEM READY";

        createGlitch();

    }
);


/* =========================================================
   DOWNLOAD
========================================================= */

const downloadButton =
    document.getElementById(
        "downloadButton"
    );


downloadButton.addEventListener(
    "click",
    () => {

        console.log(
            "Download requested."
        );

        alert(
            "The download link will be connected to the RE-RUN game files."
        );

    }
);


/* =========================================================
   RANDOM GLITCH
========================================================= */

function createGlitch() {

    const title =
        document.querySelector(
            ".glitch-title"
        );

    if (!title) {
        return;
    }

    title.style.transform =
        "translate(" +
        ((Math.random() * 10) - 5) +
        "px," +
        ((Math.random() * 6) - 3) +
        "px)";

    title.style.textShadow =
        "5px 0 #ff0000, -5px 0 #222";

    setTimeout(() => {

        title.style.transform =
            "translate(0,0)";

        title.style.textShadow =
            "3px 0 #b00000, -3px 0 #222";

    }, 120);

}


/* =========================================================
   RANDOM GLITCH TIMER
========================================================= */

setInterval(
    () => {

        if (
            Math.random() < .35
        ) {

            createGlitch();

        }

    },
    3500
);


/* =========================================================
   TERMINAL SECRET
========================================================= */

const terminalText =
    document.getElementById(
        "terminalText"
    );


let secretCounter = 0;


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key.toLowerCase() === "r"
        ) {

            secretCounter++;

            console.log(
                "R detected:",
                secretCounter
            );

            if (
                secretCounter >= 5
            ) {

                terminalText.innerHTML +=
                    `
                    <p class="red">
                    > SECRET COMMAND ACCEPTED.
                    </p>
                    <p class="red">
                    > HE IS WATCHING.
                    </p>
                    `;

                console.warn(
                    "SECRET EVENT TRIGGERED."
                );

                secretCounter = 0;

            }

        }

    }
);


/* =========================================================
   CONSOLE EASTER EGG
========================================================= */

console.log(
    "%cIf you found this console...",
    "color:#777;font-style:italic;"
);

console.log(
    "%c...you were not supposed to.",
    "color:#900;font-weight:bold;"
);

console.log(
    "%cTry pressing R five times.",
    "color:#555;"
);


/* =========================================================
   SYSTEM READY
========================================================= */

console.log(
    "%c WEBSITE SYSTEM READY ",
    "background:#111;color:#a00000;font-weight:bold;"
);
