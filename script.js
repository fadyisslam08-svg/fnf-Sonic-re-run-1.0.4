"use strict";


/* =========================================================
   SONIC.EXE // RE-RUN
   HORROR SYSTEM
========================================================= */

console.clear();

console.log(
    "%c SONIC.EXE // RE-RUN ",
    "background:#000;color:#a00000;font-size:22px;font-weight:bold;"
);

console.log(
    "%c BACK FROM THE CODE ",
    "color:#700000;font-weight:bold;"
);

console.log(
    "%cYou shouldn't be reading this.",
    "color:#555;font-style:italic;"
);


/* =========================================================
   ELEMENTS
========================================================= */

const intro =
    document.getElementById("intro");

const introDynamic =
    document.getElementById("introDynamic");

const site =
    document.getElementById("site");

const entity =
    document.getElementById("entity");

const eyeLeft =
    document.getElementById("eyeLeft");

const eyeRight =
    document.getElementById("eyeRight");

const randomMessage =
    document.getElementById("randomMessage");

const redFlash =
    document.getElementById("redFlash");

const distortion =
    document.getElementById("distortion");

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const closeModal =
    document.getElementById("closeModal");

const modalAction =
    document.getElementById("modalAction");

const jumpscare =
    document.getElementById("jumpscare");

const systemStatus =
    document.getElementById("systemStatus");


/* =========================================================
   INTRO
========================================================= */

const introLines = [

    "RESTORING MEMORY...",
    "MEMORY BLOCK 01: FAILED",
    "MEMORY BLOCK 02: FAILED",
    "MEMORY BLOCK 03: UNKNOWN",
    "SEARCHING FOR OWNER...",
    "OWNER FOUND.",
    "SONIC.EXE"
];


let introIndex = 0;


function playIntro() {

    if (
        introIndex >=
        introLines.length
    ) {

        setTimeout(
            finishIntro,
            700
        );

        return;
    }

    introDynamic.textContent =
        "> " +
        introLines[introIndex];

    introIndex++;

    setTimeout(
        playIntro,
        430
    );
}


function finishIntro() {

    intro.classList.add(
        "hidden"
    );

    site.classList.add(
        "loaded"
    );

    systemStatus.textContent =
        "CONNECTED";

    systemStatus.style.color =
        "#850000";

    console.log(
        "%cENTITY CONNECTION ESTABLISHED",
        "color:#a00000;font-weight:bold;"
    );

}


setTimeout(
    playIntro,
    700
);


/* =========================================================
   CLICK INTRO
========================================================= */

intro.addEventListener(
    "click",
    () => {

        if (
            !intro.classList.contains(
                "hidden"
            )
        ) {

            finishIntro();

        }

    }
);


/* =========================================================
   NAVIGATION
========================================================= */

document
    .querySelectorAll(
        "[data-page]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    button.dataset.page;

                const target =
                    document.getElementById(
                        id
                    );

                if (!target) {

                    console.error(
                        "PAGE NOT FOUND:",
                        id
                    );

                    return;
                }

                target.scrollIntoView({
                    behavior: "smooth"
                });

                console.log(
                    "PAGE:",
                    id
                );

            }
        );

    });


/* =========================================================
   ENTITY EYES FOLLOW MOUSE
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX /
                window.innerWidth) -
            0.5;

        const y =
            (event.clientY /
                window.innerHeight) -
            0.5;

        const moveX =
            x * 18;

        const moveY =
            y * 10;

        document
            .querySelectorAll(
                ".pupil"
            )
            .forEach(pupil => {

                pupil.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            });

        if (entity) {

            entity.style.transform =
                `
                translateY(-50%)
                translate(${x * 10}px, ${y * 5}px)
                `;

        }

    }
);


/* =========================================================
   RANDOM HORROR MESSAGES
========================================================= */

const messages = [

    "DON'T LOOK BEHIND YOU.",

    "HE CAN SEE THE CURSOR.",

    "WHY DID YOU COME BACK?",

    "THE FILE REMEMBERS YOU.",

    "THIS WAS NOT HERE BEFORE.",

    "I REMEMBER YOU.",

    "DO NOT CLOSE THE TAB.",

    "YOU ARE NOT ALONE.",

    "STOP READING.",

    "HE IS WAITING.",

    "RUN.",

    "LOOK AT HIS EYES.",

    "THE CODE IS ALIVE."

];


function showRandomMessage() {

    const message =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];

    randomMessage.textContent =
        message;

    randomMessage.classList.add(
        "visible"
    );

    setTimeout(
        () => {

            randomMessage.classList.remove(
                "visible"
            );

        },
        1800
    );

}


setInterval(
    () => {

        if (
            Math.random() <
            0.65
        ) {

            showRandomMessage();

        }

    },
    7000
);


/* =========================================================
   RANDOM GLITCH
========================================================= */

function glitch() {

    document.body.classList.add(
        "glitch"
    );

    distortion.style.opacity =
        "1";

    redFlash.style.opacity =
        ".04";

    setTimeout(
        () => {

            document.body.classList.remove(
                "glitch"
            );

            distortion.style.opacity =
                "0";

            redFlash.style.opacity =
                "0";

        },
        500
    );

}


setInterval(
    () => {

        if (
            Math.random() <
            0.4
        ) {

            glitch();

        }

    },
    9000
);


/* =========================================================
   ENTER THE CODE
========================================================= */

document
    .getElementById("enterCode")
    .addEventListener(
        "click",
        () => {

            console.warn(
                "USER ENTERED THE CODE."
            );

            document
                .getElementById("story")
                .scrollIntoView({
                    behavior: "smooth"
                });

            glitch();

        }
    );


/* =========================================================
   DON'T CLICK
========================================================= */

document
    .getElementById("watchButton")
    .addEventListener(
        "click",
        () => {

            console.log(
                "BAD DECISION."
            );

            showRandomMessage();

            setTimeout(
                () => {

                    if (
                        Math.random() <
                        .65
                    ) {

                        triggerJumpscare();

                    }

                },
                700
            );

        }
    );


/* =========================================================
   SONG SYSTEM
========================================================= */

const songs =
    document.querySelectorAll(
        ".song"
    );


songs.forEach(song => {

    song.addEventListener(
        "click",
        () => {

            const name =
                song.dataset.song;

            openSong(name);

        }
    );

});


function openSong(name) {

    modalTitle.textContent =
        name;

    modal.classList.add(
        "active"
    );

    if (
        name === "LAST CHANCE"
    ) {

        modalText.textContent =
            "FILE RECOVERED. THE AUDIO IS STILL INTACT.";

        console.log(
            "LAST CHANCE accessed."
        );

    }

    else if (
        name === "ZALGO"
    ) {

        modalText.textContent =
            "WARNING. DATA CORRUPTION LEVEL: CRITICAL.";

        glitch();

        console.warn(
            "ZALGO FILE IS CORRUPTED."
        );

    }

    else {

        modalText.textContent =
            "ACCESS DENIED. THIS FILE HAS NO NAME.";

        console.warn(
            "UNKNOWN FILE REQUESTED."
        );

    }

}


/* =========================================================
   CLOSE MODAL
========================================================= */

closeModal.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "active"
        );

    }
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "active"
            );

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
            "EXECUTION REQUESTED."
        );

        modal.classList.remove(
            "active"
        );

        glitch();

        setTimeout(
            () => {

                showRandomMessage();

            },
            300
        );

    }
);


/* =========================================================
   EXECUTE BUTTON
========================================================= */

document
    .getElementById("executeButton")
    .addEventListener(
        "click",
        () => {

            console.warn(
                "EXECUTABLE START REQUESTED."
            );

            glitch();

            setTimeout(
                () => {

                    triggerJumpscare();

                },
                600
            );

        }
    );


/* =========================================================
   JUMPSCARE
========================================================= */

let scareRunning = false;


function triggerJumpscare() {

    if (scareRunning) {
        return;
    }

    scareRunning = true;

    console.warn(
        "%cI SAW YOU.",
        "background:#900;color:#fff;font-size:25px;"
    );

    jumpscare.classList.add(
        "active"
    );

    document.body.style.cursor =
        "none";

    setTimeout(
        () => {

            jumpscare.classList.remove(
                "active"
            );

            document.body.style.cursor =
                "default";

            scareRunning = false;

        },
        1300
    );

}


/* =========================================================
   SECRET KEY SYSTEM
========================================================= */

let secretSequence = "";

const secretCode =
    "rerun";


document.addEventListener(
    "keydown",
    event => {

        secretSequence +=
            event.key.toLowerCase();

        if (
            secretSequence.length >
            secretCode.length
        ) {

            secretSequence =
                secretSequence.slice(
                    -secretCode.length
                );

        }

        console.log(
            "KEY BUFFER:",
            secretSequence
        );

        if (
            secretSequence ===
            secretCode
        ) {

            activateSecret();

            secretSequence = "";

        }

    }
);


/* =========================================================
   SECRET EVENT
========================================================= */

function activateSecret() {

    console.warn(
        "%cSECRET CODE ACCEPTED.",
        "color:#ff0000;font-size:20px;"
    );

    glitch();

    const terminal =
        document.getElementById(
            "terminal"
        );

    terminal.innerHTML += `

        <p class="red">
        > SECRET COMMAND ACCEPTED.
        </p>

        <p class="red">
        > RE-RUN PROTOCOL ACTIVE.
        </p>

        <p class="red">
        > ENTITY IS AWARE.
        </p>

    `;

    showRandomMessage();

}


/* =========================================================
   IDLE DETECTION
========================================================= */

let lastActivity =
    Date.now();


document.addEventListener(
    "mousemove",
    () => {

        lastActivity =
            Date.now();

    }
);


document.addEventListener(
    "keydown",
    () => {

        lastActivity =
            Date.now();

    }
);


setInterval(
    () => {

        const idleTime =
            Date.now() -
            lastActivity;

        if (
            idleTime >
            20000 &&
            Math.random() <
            .3
        ) {

            showRandomMessage();

            console.log(
                "USER IDLE."
            );

        }

    },
    5000
);


/* =========================================================
   CONSOLE EASTER EGG
========================================================= */

console.log(
    "%cThere are things hidden here.",
    "color:#444;font-style:italic;"
);

console.log(
    "%cType: rerun",
    "color:#700000;font-weight:bold;"
);

console.log(
    "%cBut don't expect anything good.",
    "color:#333;"
);


/* =========================================================
   FINAL STATUS
========================================================= */

console.log(
    "%cRE-RUN HORROR SYSTEM READY.",
    "color:#a00000;font-weight:bold;"
);
