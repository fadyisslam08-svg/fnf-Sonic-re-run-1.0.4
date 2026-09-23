* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #08080d;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}


/* ================= NAVBAR ================= */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 6%;

    background: rgba(8, 8, 13, 0.85);

    border-bottom: 1px solid #292936;

    backdrop-filter: blur(12px);

    z-index: 1000;
}

.logo {
    font-size: 25px;
    font-weight: 900;
    letter-spacing: -1px;
}

.logo span {
    color: #ff2bd6;
}

nav {
    display: flex;
    gap: 10px;
}

nav button {
    border: none;
    background: transparent;

    color: #aaa;

    padding: 10px 14px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

nav button:hover {
    color: #ffffff;
}


/* ================= SECTIONS ================= */

.section {
    min-height: 100vh;

    padding: 120px 8% 80px;

    position: relative;
}


/* ================= HERO ================= */

.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;

    background:
        radial-gradient(circle at 80% 50%, #ff2bd622, transparent 35%),
        radial-gradient(circle at 20% 80%, #20e8ff18, transparent 35%),
        #08080d;
}

.hero-content {
    max-width: 650px;

    position: relative;

    z-index: 2;
}

.tag {
    display: inline-block;

    padding: 7px 12px;

    border: 1px solid #444452;

    color: #20e8ff;

    font-size: 11px;

    letter-spacing: 3px;

    margin-bottom: 25px;
}

.hero h1 {
    font-size: clamp(70px, 10vw, 150px);

    line-height: 0.78;

    font-weight: 1000;

    letter-spacing: -8px;
}

.hero h1 span {
    color: #ff2bd6;

    text-shadow:
        5px 5px 0 #20e8ff;
}

.hero p {
    max-width: 500px;

    margin-top: 35px;

    color: #a5a5b0;

    font-size: 18px;

    line-height: 1.6;
}

.buttons {
    display: flex;
    gap: 15px;

    margin-top: 35px;
}


/* ================= BUTTONS ================= */

.main-button,
.secondary-button {
    padding: 15px 28px;

    border: none;

    font-weight: 900;

    cursor: pointer;

    transition: 0.2s;
}

.main-button {
    background: #ff2bd6;

    color: white;

    box-shadow: 5px 5px 0 #20e8ff;
}

.main-button:hover {
    transform: translate(3px, 3px);

    box-shadow: 2px 2px 0 #20e8ff;
}

.secondary-button {
    background: #20202b;

    color: white;

    border: 1px solid #41414d;
}

.secondary-button:hover {
    background: #292936;
}


/* ================= HERO VISUAL ================= */

.hero-visual {
    width: 420px;
    height: 420px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
}

.disc {
    width: 330px;
    height: 330px;

    border-radius: 50%;

    background:
        repeating-radial-gradient(
            circle,
            #171722 0px,
            #171722 7px,
            #242432 8px,
            #242432 12px
        );

    border: 8px solid #30303d;

    animation: spin 12s linear infinite;

    box-shadow:
        0 0 80px #ff2bd633;
}

.disc-center {
    width: 70px;
    height: 70px;

    border-radius: 50%;

    background: #ff2bd6;

    border: 15px solid #20e8ff;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.note {
    position: absolute;

    font-size: 60px;

    font-weight: 900;

    text-shadow: 4px 4px 0 #000;

    animation: float 2s ease-in-out infinite;
}

.note1 {
    top: 25px;
    left: 20px;

    color: #20e8ff;
}

.note2 {
    bottom: 30px;
    left: 50px;

    color: #ff2bd6;

    animation-delay: .3s;
}

.note3 {
    top: 80px;
    right: 0;

    color: #20e8ff;

    animation-delay: .6s;
}

.note4 {
    bottom: 30px;
    right: 35px;

    color: #ff2bd6;

    animation-delay: .9s;
}

@keyframes float {
    50% {
        transform: translateY(-15px) rotate(5deg);
    }
}


/* ================= TITLES ================= */

.section-title {
    display: flex;

    gap: 20px;

    align-items: flex-start;

    margin-bottom: 60px;
}

.section-title > span {
    color: #ff2bd6;

    font-size: 14px;

    font-weight: bold;
}

.section-title h2 {
    font-size: 55px;

    letter-spacing: -3px;
}

.section-title p {
    margin-top: 5px;

    color: #777;
}


/* ================= SONGS ================= */

.song-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.song-card {
    min-height: 240px;

    padding: 25px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    background: #12121a;

    border: 1px solid #2d2d3a;

    transition: .25s;
}

.song-card:hover {
    transform: translateY(-8px);

    border-color: #ff2bd6;

    box-shadow: 0 15px 40px #ff2bd61a;
}

.song-number {
    color: #20e8ff;

    font-size: 13px;

    font-weight: bold;
}

.song-info h3 {
    font-size: 25px;

    margin-bottom: 8px;
}

.song-info p {
    color: #777;
}

.song-button {
    width: 100%;

    padding: 12px;

    background: #20202b;

    border: 1px solid #3b3b49;

    color: white;

    font-weight: bold;

    cursor: pointer;
}

.song-button:hover {
    background: #ff2bd6;

    border-color: #ff2bd6;
}


/* ================= CHARACTERS ================= */

.characters {
    background: #0d0d14;
}

.character-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.character-card {
    padding: 45px 25px;

    text-align: center;

    background: #14141d;

    border: 1px solid #2b2b36;
}

.character-icon {
    width: 120px;
    height: 120px;

    margin: auto auto 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px;

    background: #20202c;

    font-size: 35px;

    font-weight: 1000;

    transform: rotate(-4deg);
}

.boyfriend .character-icon {
    color: #20e8ff;
}

.opponent .character-icon {
    color: #ff2bd6;
}

.gf .character-icon {
    color: #ffdb4d;
}

.character-card h3 {
    margin-bottom: 10px;
}

.character-card p {
    color: #777;
}


/* ================= DOWNLOAD ================= */

.download {
    display: flex;

    justify-content: center;
    align-items: center;

    text-align: center;

    background:
        radial-gradient(circle, #20e8ff10, transparent 50%),
        #08080d;
}

.download-box {
    max-width: 650px;
}

.download h2 {
    font-size: clamp(60px, 9vw, 120px);

    line-height: .8;

    letter-spacing: -7px;

    margin-bottom: 35px;
}

.download h2 span {
    color: #20e8ff;
}

.download p {
    color: #999;

    margin-bottom: 30px;
}


/* ================= FOOTER ================= */

footer {
    min-height: 90px;

    padding: 30px 8%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    border-top: 1px solid #252530;

    color: #666;

    font-size: 12px;
}


/* ================= MODAL ================= */

.modal {
    position: fixed;

    inset: 0;

    display: none;

    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, .75);

    backdrop-filter: blur(8px);

    z-index: 2000;
}

.modal.active {
    display: flex;
}

.modal-box {
    width: min(90%, 450px);

    padding: 40px;

    text-align: center;

    background: #15151f;

    border: 1px solid #444;

    box-shadow: 0 30px 100px #000;
}

.close {
    float: right;

    background: transparent;

    border: none;

    color: #888;

    font-size: 30px;

    cursor: pointer;
}

.modal-icon {
    font-size: 70px;

    color: #ff2bd6;

    margin: 20px;
}

.modal-box h2 {
    font-size: 35px;
}

.modal-box p {
    margin: 15px 0 25px;

    color: #999;
}


/* ================= MOBILE ================= */

@media (max-width: 850px) {

    .navbar {
        padding: 0 4%;
    }

    nav button {
        display: none;
    }

    .hero {
        flex-direction: column;

        justify-content: center;

        text-align: center;
    }

    .hero p {
        margin-left: auto;
        margin-right: auto;
    }

    .buttons {
        justify-content: center;
    }

    .hero-visual {
        width: 300px;
        height: 300px;

        margin-top: 50px;
    }

    .disc {
        width: 220px;
        height: 220px;
    }

    .song-grid,
    .character-grid {
        grid-template-columns: 1fr;
    }

    .section-title h2 {
        font-size: 42px;
    }

    footer {
        flex-direction: column;

        gap: 10px;
    }
}
