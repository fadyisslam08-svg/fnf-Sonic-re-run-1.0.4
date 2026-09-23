/* ============================================================
   SONIC.EXE // RE-RUN
   HORROR WEBSITE
============================================================ */


/* ============================================================
   REAL DOWNLOAD URL
============================================================ */

const DOWNLOAD_URL =
    "https://github.com/fadyisslam08-svg/fnf-Sonic-re-run-1.0.4/releases/download/fnf/Rerun.-.BACK.FROM.CODE.rar";


/* ============================================================
   CONSOLE
============================================================ */

console.clear();

console.log(
    "%cSONIC.EXE // RE-RUN",
    "color:#900;font-size:20px;font-weight:bold;"
);

console.log(
    "%cBACK FROM THE CODE",
    "color:#555;"
);

console.log(
    "%cSomething is watching this page.",
    "color:#600;"
);


/* ============================================================
   ELEMENTS
============================================================ */

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

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalStatus =
    document.getElementById("modalStatus");

const modalAction =
    document.getElementById("modalAction");

const jumpscare =
    document.getElementById("jumpscare");

const downloadScene =
    document.getElementById("downloadScene");

const downloadLines =
    document.getElementById("downloadLines");

const downloadCursor =
    document.getElementById("downloadCursor");

const downloadProgressContainer =
    document.getElementById("downloadProgressContainer");

const downloadProgress =
    document.getElementById("downloadProgress");

const downloadPercent =
    document.getElementById("downloadPercent");

const downloadFinal =
    document.getElementById("downloadFinal");

const downloadFinalText =
    document.getElementById("downloadFinalText");

const realDownloadButton =
    document.getElementById("realDownloadButton");

const executeButton =
    document.getElementById("executeButton");

const enterCode =
    document.getElementById("enterCode");

const watchButton =
    document.getElementById("watchButton");


/* ============================================================
   INTRO
============================================================ */

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

    if (!introDynamic) {
        finishIntro();
        return;
    }

    if (introIndex >= introLines.length) {
        return;
    }

    introDynamic.textContent =
        "> " + introLines[introIndex];

    introIndex++;

    setTimeout(
        playIntro,
        700
    );
}

function finishIntro() {

    if (!intro) return;

    intro.classList.add("hidden");

    setTimeout(() => {

        intro.style.display = "none";

    }, 900);
}

setTimeout(
    playIntro,
    700
);

intro.addEventListener(
    "click",
    finishIntro
);


/* ============================================================
   NAVIGATION
============================================================ */

document
    .querySelectorAll("[data-page]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById(
                        button.dataset.page
                    );

                if (!target) return;

                target.scrollIntoView({
                    behavior: "smooth"
                });

                glitch();

            }
        );

    });


/* ============================================================
   EYE TRACKING
============================================================ */

document.addEventListener(
    "mousemove",
    event => {

        if (!entity) return;

        const rect =
            entity.getBoundingClientRect();

        const centerX =
            rect.left + rect.width / 2;

        const centerY =
            rect.top + rect.height / 2;

        const dx =
            event.clientX - centerX;

        const dy =
            event.clientY - centerY;

        const angle =
            Math.atan2(dy, dx);

        const distance =
            Math.min(
                Math.hypot(dx, dy) / 12,
                15
            );

        const moveX =
            Math.cos(angle) * distance;

        const moveY =
            Math.sin(angle) * distance;

        if (eyeLeft) {

            const pupil =
                eyeLeft.querySelector(".pupil");

            if (pupil) {

                pupil.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }

        }

        if (eyeRight) {

            const pupil =
                eyeRight.querySelector(".pupil");

            if (pupil) {

                pupil.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }

        }

    }
);


/* ============================================================
   HORROR MESSAGES
============================================================ */

const horrorMessages = [

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

    "THE CODE IS ALIVE.",

    "HE KNOWS.",

    "YOU SHOULD NOT BE HERE."

];

function showRandomMessage() {

    if (!randomMessage) return;

    const message =
        horrorMessages[
            Math.floor(
                Math.random() *
                horrorMessages.length
            )
        ];

    randomMessage.textContent =
        message;

}

setInterval(
    showRandomMessage,
    3500
);


/* ============================================================
   GLITCH
============================================================ */

function glitch() {

    document.body.classList.add(
        "glitching"
    );

    const redFlash =
        document.getElementById(
            "redFlash"
        );

    if (redFlash) {

        redFlash.style.opacity =
            ".15";

        setTimeout(() => {

            redFlash.style.opacity =
                "0";

        }, 100);

    }

    setTimeout(() => {

        document.body.classList.remove(
            "glitching"
        );

    }, 350);

}

setInterval(
    () => {

        if (
            Math.random() < .6
        ) {
            glitch();
        }

    },
    9000
);


/* ============================================================
   ENTER THE CODE
============================================================ */

if (enterCode) {

    enterCode.addEventListener(
        "click",
        () => {

            const story =
                document.getElementById(
                    "story"
                );

            if (story) {

                story.scrollIntoView({
                    behavior: "smooth"
                });

            }

            glitch();

        }
    );

}


/* ============================================================
   DON'T CLICK
============================================================ */

if (watchButton) {

    watchButton.addEventListener(
        "click",
        () => {

            if (
                Math.random() < .75
            ) {

                triggerJumpscare();

            } else {

                glitch();

            }

        }
    );

}


/* ============================================================
   SONG MODALS
============================================================ */

document
    .querySelectorAll(".song")
    .forEach(song => {

        song.addEventListener(
            "click",
            () => {

                const name =
                    song.dataset.song;

                if (!modal) return;

                modal.classList.add(
                    "active"
                );

                modalTitle.textContent =
                    name;

                if (
                    name === "LAST CHANCE"
                ) {

                    modalStatus.textContent =
                        "RECOVERED AUDIO";

                    modalText.textContent =
                        "165 BPM // FILE INTACT // LAST ACCESS UNKNOWN.";

                }

                else if (
                    name === "ZALGO"
                ) {

                    modalStatus.textContent =
                        "CORRUPTED AUDIO";

                    modalText.textContent =
                        "THE FILE SHOULD NOT EXIST. SOMETHING IS STILL PLAYING.";

                }

                else {

                    modalStatus.textContent =
                        "ACCESS DENIED";

                    modalText.textContent =
                        "YOU ARE NOT SUPPOSED TO OPEN THIS FILE.";

                }

                glitch();

            }
        );

    });


/* ============================================================
   CLOSE MODAL
============================================================ */

const closeModal =
    document.getElementById(
        "closeModal"
    );

if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            modal.classList.remove(
                "active"
            );

        }
    );

}

if (modal) {

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

}


/* ============================================================
   MODAL ACTION
============================================================ */

if (modalAction) {

    modalAction.addEventListener(
        "click",
        () => {

            modal.classList.remove(
                "active"
            );

            glitch();

        }
    );

}


/* ============================================================
   JUMPSCARE
============================================================ */

function triggerJumpscare() {

    if (!jumpscare) return;

    jumpscare.classList.add(
        "active"
    );

    const scareText =
        document.getElementById(
            "scareText"
        );

    if (scareText) {

        const texts = [

            "I SAW YOU",

            "DON'T LOOK AWAY",

            "YOU CAME BACK",

            "RUN",

            "I REMEMBER"

        ];

        scareText.textContent =
            texts[
                Math.floor(
                    Math.random() *
                    texts.length
                )
            ];

    }

    setTimeout(
        () => {

            jumpscare.classList.remove(
                "active"
            );

        },
        1300
    );

}


/* ============================================================
   DOWNLOAD SCENE
============================================================ */

let downloadStarted = false;

if (executeButton) {

    executeButton.addEventListener(
        "click",
        startDownloadScene
    );

}

function startDownloadScene() {

    if (downloadStarted) {
        return;
    }

    downloadStarted = true;

    if (!downloadScene) {
        return;
    }

    downloadScene.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

    glitch();

    runDownloadSequence();

}


/* ============================================================
   GET USER NAME
============================================================ */

function getUserName() {

    /*
        Browsers do NOT expose the real
        Windows account/device owner name.

        We first check information that
        can safely exist in the browser.
    */

    let possibleName = "";

    if (
        navigator.userAgentData &&
        navigator.userAgentData.platform
    ) {

        possibleName =
            navigator.userAgentData.platform;

    }

    /*
        Do not show a fake personal name.
        If no useful name exists, use UNKNOWN USER.
    */

    if (
        !possibleName ||
        possibleName.length > 40
    ) {

        possibleName =
            "UNKNOWN USER";

    }

    return possibleName
        .toString()
        .toUpperCase();

}


/* ============================================================
   TERMINAL LINE
============================================================ */

function addDownloadLine(
    text,
    className = ""
) {

    if (!downloadLines) {
        return;
    }

    const p =
        document.createElement(
            "p"
        );

    if (className) {

        p.className =
            className;

    }

    p.textContent =
        text;

    downloadLines.appendChild(
        p
    );

    downloadLines.scrollTop =
        downloadLines.scrollHeight;

}


/* ============================================================
   TYPE LINE
============================================================ */

function typeDownloadLine(
    text,
    speed = 35,
    className = ""
) {

    return new Promise(
        resolve => {

            if (!downloadLines) {
                resolve();
                return;
            }

            const p =
                document.createElement(
                    "p"
                );

            if (className) {
                p.className =
                    className;
            }

            downloadLines.appendChild(
                p
            );

            let index = 0;

            const interval =
                setInterval(
                    () => {

                        p.textContent =
                            text.slice(
                                0,
                                index
                            );

                        index++;

                        if (
                            index >
                            text.length
                        ) {

                            clearInterval(
                                interval
                            );

                            resolve();

                        }

                    },
                    speed
                );

        }
    );

}


/* ============================================================
   DOWNLOAD SEQUENCE
============================================================ */

async function runDownloadSequence() {

    const userName =
        getUserName();


    /* CLEAR */

    if (downloadLines) {

        downloadLines.innerHTML =
            "";

    }


    /* FIRST MESSAGE */

    await wait(700);

    await typeDownloadLine(
        "> CONNECTION ACCEPTED",
        30
    );

    await wait(500);


    /* HELLO */

    await typeDownloadLine(
        "> HELLO, " + userName,
        65,
        "dangerLine"
    );

    await wait(1000);


    /* STRANGE MESSAGES */

    await typeDownloadLine(
        "> IDENTIFYING USER...",
        30
    );

    await wait(400);

    await typeDownloadLine(
        "> USER PROFILE: UNKNOWN",
        25
    );

    await wait(500);

    await typeDownloadLine(
        "> MEMORY ACCESS: GRANTED",
        30
    );

    await wait(600);


    /* GLITCH */

    glitch();

    await typeDownloadLine(
        "> ̷̢̛͉̓R̸͓̎Ę̷͇͝C̶͙͌O̷̬͐V̵̜͐E̸͎͛Ṟ̴͌Y̷͎͒",
        20,
        "glitchLine"
    );

    await wait(350);

    await typeDownloadLine(
        "> K̷E̶E̸P̴ ̷L̶O̷O̴K̷I̶N̵G̷",
        20,
        "glitchLine"
    );

    await wait(500);

    await typeDownloadLine(
        "> HE IS STILL HERE.",
        45,
        "dangerLine"
    );

    await wait(900);


    /* MORE CORRUPTION */

    glitch();

    await typeDownloadLine(
        "> 0x00000000",
        25
    );

    await typeDownloadLine(
        "> 0x534F4E4943",
        25
    );

    await typeDownloadLine(
        "> 0x455845",
        25
    );

    await wait(500);

    await typeDownloadLine(
        "> DON'T CLOSE THIS WINDOW.",
        35,
        "dangerLine"
    );

    await wait(800);


    /* FINAL */

    await typeDownloadLine(
        "> FILE FOUND.",
        35,
        "dangerLine"
    );

    await wait(500);

    await typeDownloadLine(
        "> PREPARING DOWNLOAD...",
        35
    );

    await wait(800);


    /* PROGRESS */

    startFakeProgress();

}


/* ============================================================
   FAKE DOWNLOAD PROGRESS
============================================================ */

function startFakeProgress() {

    if (
        !downloadProgressContainer ||
        !downloadProgress ||
        !downloadPercent
    ) {
        return;
    }

    downloadProgressContainer.style.display =
        "block";

    let progress = 0;

    const interval =
        setInterval(
            () => {

                let amount =
                    Math.floor(
                        Math.random() * 5
                    ) + 1;

                progress += amount;

                if (
                    progress >= 100
                ) {

                    progress = 100;

                    clearInterval(
                        interval
                    );

                    finishDownloadScene();

                }

                downloadProgress.style.width =
                    progress + "%";

                downloadPercent.textContent =
                    progress + "%";

                /*
                    Random corruption during
                    the fake download.
                */

                if (
                    Math.random() < .12
                ) {

                    glitch();

                }

            },
            90
        );

}


/* ============================================================
   FINISH DOWNLOAD SCENE
============================================================ */

function finishDownloadScene() {

    if (!downloadFinal) {
        return;
    }

    glitch();

    downloadFinal.style.display =
        "block";

    if (downloadFinalText) {

        downloadFinalText.textContent =
            "THE FILE IS READY.";

    }

    /*
        The user gets a short final
        horror pause before the actual
        download button appears.
    */

    if (realDownloadButton) {

        realDownloadButton.style.display =
            "none";

        setTimeout(
            () => {

                if (realDownloadButton) {

                    realDownloadButton.style.display =
                        "inline-block";

                }

                if (downloadFinalText) {

                    downloadFinalText.textContent =
                        "DOWNLOAD RE-RUN";

                }

            },
            1800
        );

    }

}


/* ============================================================
   REAL DOWNLOAD
============================================================ */

if (realDownloadButton) {

    realDownloadButton.addEventListener(
        "click",
        () => {

            addDownloadLine(
                "> TRANSFERRING FILE..."
            );

            addDownloadLine(
                "> GOODBYE.",
                "dangerLine"
            );

            glitch();

            setTimeout(
                () => {

                    /*
                        Open the actual GitHub
                        release file.
                    */

                    window.location.href =
                        DOWNLOAD_URL;

                },
                500
            );

        }
    );

}


/* ============================================================
   WAIT
============================================================ */

function wait(ms) {

    return new Promise(
        resolve => {

            setTimeout(
                resolve,
                ms
            );

        }
    );

}


/* ============================================================
   SECRET KEYBOARD EVENT
============================================================ */

let secretInput = "";

const secretCode =
    "rerun";

document.addEventListener(
    "keydown",
    event => {

        secretInput +=
            event.key.toLowerCase();

        if (
            secretInput.length >
            secretCode.length
        ) {

            secretInput =
                secretInput.slice(
                    -secretCode.length
                );

        }

        if (
            secretInput === secretCode
        ) {

            activateSecret();

            secretInput = "";

        }

    }
);


/* ============================================================
   SECRET
============================================================ */

function activateSecret() {

    const terminal =
        document.getElementById(
            "terminal"
        );

    if (!terminal) {
        return;
    }

    const lines = [

        "> SECRET COMMAND ACCEPTED",

        "> YOU FOUND THE BACK DOOR.",

        "> HE WAS WAITING FOR THIS.",

        "> DO NOT TRUST THE DOWNLOAD."

    ];

    lines.forEach(
        line => {

            const p =
                document.createElement(
                    "p"
                );

            p.className =
                "dangerText";

            p.textContent =
                line;

            terminal.appendChild(
                p
            );

        }
    );

    glitch();

}


/* ============================================================
   IDLE DETECTION
============================================================ */

let idleTimer;

function resetIdleTimer() {

    clearTimeout(
        idleTimer
    );

    idleTimer =
        setTimeout(
            () => {

                if (
                    Math.random() < .5
                ) {

                    showRandomMessage();

                }

            },
            20000
        );

}

[
    "mousemove",
    "keydown",
    "click",
    "scroll"
].forEach(
    event => {

        document.addEventListener(
            event,
            resetIdleTimer
        );

    }
);

resetIdleTimer();


/* ============================================================
   TAB TITLE
============================================================ */

let originalTitle =
    document.title;

setInterval(
    () => {

        if (
            Math.random() < .25
        ) {

            document.title =
                "DON'T LOOK AWAY";

            setTimeout(
                () => {

                    document.title =
                        originalTitle;

                },
                700
            );

        }

    },
    7000
);


/* ============================================================
   RANDOM CONSOLE MESSAGE
============================================================ */

setTimeout(
    () => {

        console.log(
            "%c[RE-RUN] USER DETECTED.",
            "color:#900;"
        );

    },
    5000
);

setTimeout(
    () => {

        console.log(
            "%c[RE-RUN] HE IS WAITING.",
            "color:#600;"
        );

    },
    10000
);


/* ============================================================
   READY
============================================================ */

console.log(
    "%cSYSTEM READY.",
    "color:#555;"
);
