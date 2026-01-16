Grimoires-Of-Divination/
│
├── index.html
├── styles.css
├── script.js
│
└── assets/
    ├── images/
    ├── cursors/
    └── icons/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grimoire of Divination</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body class="theme-grimoire">

    <header>
        <h1>Grimoire of Divination</h1>
        <nav>
            <button data-theme="grimoire">Grimoire</button>
            <button data-theme="celestial">Celestial</button>
            <button data-theme="druidic">Druidic</button>
            <button data-theme="gothic">Gothic</button>
        </nav>
    </header>

    <main>
        <section class="intro">
            <h2>Welcome, Mystic</h2>
            <p>Choose your path and let the magic unfold.</p>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
/* GLOBAL RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Cinzel", serif;
    color: white;
    min-height: 100vh;
    transition: background 1s ease, color 1s ease;
}

/* HEADER */
header {
    text-align: center;
    padding: 20px;
}

nav button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    border-radius: 6px;
    transition: 0.3s;
}

/* THEMES */

/* A — Dark Mystical Grimoire */
.theme-grimoire {
    background: radial-gradient(circle at center, #2a0033, #0a0011);
}
.theme-grimoire nav button[data-theme="grimoire"] {
    background: #5a1a8a;
    color: white;
}

/* B — Soft Celestial Witchcore */
.theme-celestial {
    background: linear-gradient(180deg, #d8caff, #a7d8ff, #ffffff);
    color: #222;
}
.theme-celestial nav button[data-theme="celestial"] {
    background: #b8aaff;
    color: #222;
}

/* C — Forest Druidic Magic */
.theme-druidic {
    background: linear-gradient(180deg, #0f3d1e, #1a5e2a, #0b2412);
}
.theme-druidic nav button[data-theme="druidic"] {
    background: #3fa34d;
    color: #0b2412;
}

/* D — Gothic Occult */
.theme-gothic {
    background: linear-gradient(180deg, #000000, #1a1a1a, #000000);
}
.theme-gothic nav button[data-theme="gothic"] {
    background: #444;
    color: #eee;
}

/* BUTTON HOVER */
nav button:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
}

/* INTRO SECTION */
.intro {
    text-align: center;
    margin-top: 100px;
}
const buttons = document.querySelectorAll("nav button");
const body = document.body;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;
        body.className = `theme-${theme}`;
    });
});
