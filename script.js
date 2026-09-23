"use strict";

console.log("=================================");
console.log(" FNF FAN GAME WEBSITE");
console.log(" JavaScript loaded successfully");
console.log("=================================");


/* ================= NAVIGATION ================= */

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const sectionId = button.dataset.section;

        const section = document.getElementById(sectionId);

        if (!section) {
            console.error("Section not found:", sectionId);
            return;
        }

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ================= VIEW SONGS ================= */

const scrollSongs =
    document.getElementById("scrollSongs");

if (scrollSongs) {

    scrollSongs.addEventListener("click", () => {

        document
            .getElementById("songs")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


/* ================= MODAL ================= */

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const closeModal =
    document.getElementById("closeModal");

const modalPlay =
    document.getElementById("modalPlay");


function openSong(songName) {

    console.log("Opening song:", songName);

    modalTitle.textContent = songName;

    modalText.textContent =
        "This is a website demo. The actual game will be connected later.";

    modal.classList.add("active");

}


function closeSongModal() {

    modal.classList.remove("active");

}


document.querySelectorAll(".song-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const song =
                button.dataset.song;

            openSong(song);

        });

    });


closeModal.addEventListener(
    "click",
    closeSongModal
);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeSongModal();

    }

});


/* ================= PLAY NOW ================= */

const playButton =
    document.getElementById("playButton");

playButton.addEventListener("click", () => {

    console.log("PLAY NOW clicked");

    openSong("FNF FAN GAME");

});


/* ================= MODAL PLAY ================= */

modalPlay.addEventListener("click", () => {

    console.log("START clicked");

    modalText.textContent =
        "Game launch system is ready.";

    modalPlay.textContent =
        "GAME READY";

});


/* ================= DOWNLOAD ================= */

const downloadButton =
    document.getElementById("downloadButton");

downloadButton.addEventListener("click", () => {

    console.log("DOWNLOAD clicked");

    alert(
        "Download system will be connected to the game files later."
    );

});


/* ================= CONSOLE TEST ================= */

console.log(
    "Navigation buttons:",
    navButtons.length
);

console.log(
    "Song buttons:",
    document.querySelectorAll(".song-button").length
);

console.log(
    "Modal:",
    modal ? "OK" : "ERROR"
);

console.log(
    "Website initialized successfully."
);
