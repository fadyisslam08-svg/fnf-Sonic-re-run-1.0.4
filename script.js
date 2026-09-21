/* ============================================================
   SONIC RE-RUN WEBSITE
   Version: 1.0000.4
============================================================ */


/* ============================================================
   CONFIG
============================================================ */

const CONFIG = {

    version: "1.0000.4",

    logoPNG:
        "assets/menu/title/logoRERUN.png",

    logoXML:
        "assets/menu/title/logoRERUN.xml",

    sonicBG:
        "assets/menu/title/sonic_bg.png",

    enterFPS: 12,

    enterFrameCount: 25,

    idleFrame: 24

};


/* ============================================================
   DOM
============================================================ */

const bootScreen =
    document.getElementById("bootScreen");

const bootProgressBar =
    document.getElementById("bootProgressBar");

const bootStatus =
    document.getElementById("bootStatus");

const titleScreen =
    document.getElementById("titleScreen");

const mainMenu =
    document.getElementById("mainMenu");

const titleLogo =
    document.getElementById("titleLogo");

const titleGlow =
    document.getElementById("titleGlow");

const pressEnter =
    document.getElementById("pressEnter");

const menuOptions =
    [...document.querySelectorAll(".menuOption")];

const panel =
    document.getElementById("panel");

const panelTitle =
    document.getElementById("panelTitle");

const panelText =
    document.getElementById("panelText");


/* ============================================================
   STATE
============================================================ */

let state = "boot";

let logoFrames = [];

let currentLogoFrame = 24;

let logoAnimationTimer = null;

let menuIndex = 0;

let glitchActive = false;

let titleCanSkip = false;


/* ============================================================
   BOOT
============================================================ */

function startBoot() {

    let progress = 0;

    const messages = [
        "INITIALIZING...",
        "LOADING CODE...",
        "LOADING ASSETS...",
        "LOADING SONIC...",
        "RESTORING DATA...",
        "SYSTEM READY"
    ];

    const timer = setInterval(() => {

        progress += Math.random() * 8 + 4;

        if (progress >= 100) {

            progress = 100;

            clearInterval(timer);

            bootProgressBar.style.width = "100%";

            bootStatus.textContent =
                messages[messages.length - 1];

            setTimeout(() => {

                bootScreen.classList.add("hidden");

                startTitleScreen();

            }, 500);

            return;
        }

        bootProgressBar.style.width =
            `${progress}%`;

        const index =
            Math.min(
                messages.length - 1,
                Math.floor(
                    progress /
                    (100 / messages.length)
                )
            );

        bootStatus.textContent =
            messages[index];

    }, 120);

}


/* ============================================================
   LOAD XML
============================================================ */

async function loadLogoXML() {

    try {

        const response =
            await fetch(CONFIG.logoXML);

        if (!response.ok)
            throw new Error(
                "Could not load logo XML"
            );

        const xmlText =
            await response.text();

        const parser =
            new DOMParser();

        const xml =
            parser.parseFromString(
                xmlText,
                "application/xml"
            );

        const frames =
            [...xml.querySelectorAll("SubTexture")];

        const parsed = [];

        for (const frame of frames) {

            const name =
                frame.getAttribute("name");

            const x =
                Number(frame.getAttribute("x"));

            const y =
                Number(frame.getAttribute("y"));

            const width =
                Number(frame.getAttribute("width"));

            const height =
                Number(frame.getAttribute("height"));

            if (!name)
                continue;

            /*
             * Same idea as:
             *
             * addByPrefix("enter", "TITLE0", ...)
             *
             * in Codename Engine.
             */

            if (name.startsWith("TITLE0")) {

                parsed.push({

                    name,
                    x,
                    y,
                    width,
                    height

                });

            }

        }

        parsed.sort(
            (a, b) =>
                extractFrameNumber(a.name) -
                extractFrameNumber(b.name)
        );

        logoFrames = parsed;

        console.log(
            "[SONIC RE-RUN] Loaded Sparrow frames:",
            logoFrames
        );

        return true;

    }
    catch (error) {

        console.error(
            "[SONIC RE-RUN] XML ERROR:",
            error
        );

        return false;

    }

}


/* ============================================================
   FRAME NUMBER
============================================================ */

function extractFrameNumber(name) {

    const match =
        name.match(/(\d+)$/);

    if (!match)
        return 0;

    return Number(match[1]);

}


/* ============================================================
   CREATE FRAME
============================================================ */

async function createFrameImage(frame) {

    return new Promise(
        (resolve, reject) => {

            const image =
                new Image();

            image.onload = () => {

                const canvas =
                    document.createElement("canvas");

                canvas.width =
                    frame.width;

                canvas.height =
                    frame.height;

                const ctx =
                    canvas.getContext("2d");

                ctx.drawImage(
                    image,

                    frame.x,
                    frame.y,
                    frame.width,
                    frame.height,

                    0,
                    0,
                    frame.width,
                    frame.height
                );

                resolve(
                    canvas.toDataURL("image/png")
                );

            };

            image.onerror =
                reject;

            image.src =
                CONFIG.logoPNG;

        }
    );

}


/* ============================================================
   PREPARE LOGO
============================================================ */

async function prepareLogo() {

    const loaded =
        await loadLogoXML();

    if (!loaded ||
        logoFrames.length === 0) {

        /*
         * Fallback if XML is unavailable.
         */

        titleLogo.src =
            CONFIG.logoPNG;

        titleGlow.src =
            CONFIG.logoPNG;

        return;

    }


    const generatedFrames = [];

    for (const frame of logoFrames) {

        const src =
            await createFrameImage(frame);

        generatedFrames.push(src);

    }

    logoFrames =
        generatedFrames.map(
            (src, index) => ({
                src,
                index
            })
        );


    /*
     * Initial idle frame:
     *
     * TITLE0024
     */

    showLogoFrame(
        CONFIG.idleFrame
    );

}


/* ============================================================
   SHOW LOGO FRAME
============================================================ */

function showLogoFrame(index) {

    if (!logoFrames.length)
        return;

    index =
        Math.max(
            0,
            Math.min(
                index,
                logoFrames.length - 1
            )
        );

    currentLogoFrame =
        index;

    const src =
        logoFrames[index].src;

    titleLogo.src = src;

    titleGlow.src = src;

}


/* ============================================================
   ENTER ANIMATION
============================================================ */

function playEnterAnimation() {

    stopLogoAnimation();

    if (!logoFrames.length)
        return;


    let frame = 0;

    const frameTime =
        1000 / CONFIG.enterFPS;


    showLogoFrame(frame);


    logoAnimationTimer =
        setInterval(() => {

            frame++;

            if (
                frame >=
                Math.min(
                    CONFIG.enterFrameCount,
                    logoFrames.length
                )
            ) {

                stopLogoAnimation();

                /*
                 * Same idea as:
                 *
                 * addByIndices(
                 *     "idle",
                 *     "TITLE0",
                 *     [24],
                 *     "",
                 *     24,
                 *     false
                 * )
                 */

                showLogoFrame(
                    CONFIG.idleFrame
                );

                titleCanSkip = true;

                return;

            }

            showLogoFrame(frame);

        }, frameTime);

}


/* ============================================================
   STOP LOGO ANIMATION
============================================================ */

function stopLogoAnimation() {

    if (logoAnimationTimer !== null) {

        clearInterval(
            logoAnimationTimer
        );

        logoAnimationTimer = null;

    }

}


/* ============================================================
   TITLE SCREEN
============================================================ */

async function startTitleScreen() {

    state = "title";

    titleScreen.classList.remove(
        "hidden"
    );

    titleCanSkip = false;

    await prepareLogo();

    /*
     * Simulate:
     *
     * step 4
     */

    setTimeout(() => {

        playEnterAnimation();

        forceGlitch();

    }, 350);


    /*
     * Simulate:
     *
     * step 14
     */

    setTimeout(() => {

        pressEnter.style.opacity = "1";

    }, 1500);

}


/* ============================================================
   ENTER TITLE
============================================================ */

function enterTitle() {

    if (state !== "title")
        return;

    if (!titleCanSkip)
        return;

    stopLogoAnimation();

    flashScreen();

    setTimeout(() => {

        titleScreen.classList.add(
            "hidden"
        );

        openMainMenu();

    }, 450);

}


/* ============================================================
   FLASH
============================================================ */

function flashScreen() {

    const flash =
        document.createElement("div");

    flash.style.position =
        "fixed";

    flash.style.inset =
        "0";

    flash.style.background =
        "#fff";

    flash.style.zIndex =
        "9999";

    flash.style.pointerEvents =
        "none";

    document.body.appendChild(
        flash
    );

    flash.animate(
        [
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ],
        {
            duration: 450,
            easing: "ease-out"
        }
    );

    setTimeout(() => {

        flash.remove();

    }, 500);

}


/* ============================================================
   GLITCH
============================================================ */

function forceGlitch() {

    if (glitchActive)
        return;

    glitchActive = true;

    titleLogo.classList.add(
        "glitch"
    );

    titleGlow.classList.add(
        "glitch"
    );


    let count = 0;

    const timer =
        setInterval(() => {

            count++;

            if (count >= 10) {

                clearInterval(timer);

                titleLogo.classList.remove(
                    "glitch"
                );

                titleGlow.classList.remove(
                    "glitch"
                );

                glitchActive = false;

                return;

            }

            /*
             * Small random displacement.
             */

            const x =
                Math.floor(
                    Math.random() * 50
                ) - 25;

            const y =
                Math.floor(
                    Math.random() * 20
                ) - 10;

            titleLogo.style.translate =
                `${x}px ${y}px`;

            titleGlow.style.translate =
                `${x - 3}px ${y - 3}px`;

        }, 50);

}


/* ============================================================
   MAIN MENU
============================================================ */

function openMainMenu() {

    state = "menu";

    mainMenu.classList.remove(
        "hidden"
    );

    menuIndex = 0;

    updateMenu();

}


/* ============================================================
   UPDATE MENU
============================================================ */

function updateMenu() {

    menuOptions.forEach(
        (option, index) => {

            option.classList.toggle(
                "selected",
                index === menuIndex
            );

        }
    );

}


/* ============================================================
   MENU NAVIGATION
============================================================ */

function menuUp() {

    if (state !== "menu")
        return;

    menuIndex--;

    if (menuIndex < 0)
        menuIndex =
            menuOptions.length - 1;

    updateMenu();

}


function menuDown() {

    if (state !== "menu")
        return;

    menuIndex++;

    if (
        menuIndex >=
        menuOptions.length
    )
        menuIndex = 0;

    updateMenu();

}


/* ============================================================
   MENU SELECT
============================================================ */

function selectMenu() {

    if (state !== "menu")
        return;

    switch (menuIndex) {

        case 0:

            openPanel(
                "STORY MODE",
                "STORY MODE\n\nThe Sonic RE-RUN story will be available here."
            );

            break;


        case 1:

            openPanel(
                "FREEPLAY",
                "FREEPLAY\n\nSelect a song to begin."
            );

            break;


        case 2:

            openPanel(
                "OPTIONS",
                "OPTIONS\n\nSettings will be added here."
            );

            break;


        case 3:

            openPanel(
                "CREDITS",
                "SONIC RE-RUN\n\nBACK FROM THE CODE\n\nCreated by Fadi."
            );

            break;

    }

}


/* ============================================================
   PANEL
============================================================ */

function openPanel(title, text) {

    state = "panel";

    panelTitle.textContent =
        title;

    panelText.textContent =
        text;

    panel.classList.remove(
        "hidden"
    );

}


function closePanel() {

    if (state !== "panel")
        return;

    panel.classList.add(
        "hidden"
    );

    state = "menu";

}


/* ============================================================
   KEYBOARD
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        switch (event.key) {

            case "Enter":

                if (state === "title") {

                    enterTitle();

                }
                else if (state === "menu") {

                    selectMenu();

                }

                break;


            case "ArrowUp":

                if (state === "menu") {

                    menuUp();

                }

                break;


            case "ArrowDown":

                if (state === "menu") {

                    menuDown();

                }

                break;


            case "Escape":

                if (state === "panel") {

                    closePanel();

                }

                break;


            case "g":
            case "G":

                if (state === "title") {

                    forceGlitch();

                }

                break;

        }

    }
);


/* ============================================================
   MOUSE
============================================================ */

menuOptions.forEach(
    (option, index) => {

        option.addEventListener(
            "mouseenter",
            () => {

                menuIndex = index;

                updateMenu();

            }
        );


        option.addEventListener(
            "click",
            () => {

                menuIndex = index;

                selectMenu();

            }
        );

    }
);


pressEnter.addEventListener(
    "click",
    () => {

        enterTitle();

    }
);


/* ============================================================
   START
============================================================ */

startBoot();
