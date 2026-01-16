Grimoires-Of-Divination/
│
├── index.html
├── styles.css
├── script.js
│
├── assets/
│   ├── backgrounds/
│   │     ├── grimoire-texture.png
│   │     ├── celestial.png
│   │     ├── druidic.png
│   │     └── gothic.png
│   │
│   ├── effects/
│   │     ├── particles.gif
│   │     └── runes.png
│   │
│   └── spirit-animals/
│         ├── wolf/
│         │     ├── baby.png
│         │     ├── young.png
│         │     ├── adult.png
│         │     └── ascended.png
│         ├── cat/
│         ├── dragonling/
│         ├── raven/
│         ├── owl/
│         ├── deer/
│         ├── fox/
│         ├── rabbit/
│         ├── serpent/
│         └── shadow-panther/
│
└── README.md

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Grimoire of Divination</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet">
</head>

<body class="theme-grimoire">

<div class="magic-particles"></div>

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

    <!-- Spirit Sanctuary -->
    <section id="spirit-sanctuary" class="panel">
        <h2>Spirit Animal Sanctuary</h2>
        <div id="animal-grid"></div>
    </section>

    <!-- Active Spirit Animal -->
    <section id="active-animal" class="panel">
        <h2 id="active-name">Select a Spirit Animal</h2>

        <div class="animal-display">
            <img id="active-image" src="" alt="">
        </div>

        <div class="stats">
            <p><strong>Level:</strong> <span id="active-level">—</span></p>
            <p><strong>XP:</strong> <span id="active-xp">—</span></p>
            <p><strong>Mood:</strong> <span id="active-mood">—</span></p>
            <p><strong>Energy:</strong> <span id="active-energy">—</span></p>
        </div>

        <div class="actions">
            <button id="feed-btn">Feed</button>
            <button id="play-btn">Play</button>
            <button id="rest-btn">Rest</button>
        </div>
    </section>

    <!-- Species Selection -->
    <section id="species-select" class="panel">
        <h2>Select a Spirit Animal</h2>
        <div id="species-grid"></div>
    </section>

    <!-- Quest Board -->
    <section id="quest-board" class="panel">
        <h2>Spirit Animal Quests</h2>
        <p id="quest-active-name">Select a spirit animal to see quests.</p>
        <div id="quest-list"></div>
    </section>

    <!-- Ritual Circle -->
    <section id="ritual-circle" class="panel">
        <h2>Ritual Circle</h2>
        <p id="ritual-status">Select a ritual to begin.</p>

        <div id="ritual-list"></div>

        <div id="ritual-circle-visual">
            <div class="circle"></div>
            <div class="rune-layer"></div>
            <div class="glow-layer"></div>
        </div>

        <button id="perform-ritual-btn" disabled>Perform Ritual</button>
    </section>

</main>

<script src="script.js"></script>
</body>
</html>



/* ---------------------------------------------------------
   GLOBAL RESET + FONTS
--------------------------------------------------------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Uncial Antiqua", serif;
    color: white;
    min-height: 100vh;
    transition: background 1s ease, color 1s ease;
    overflow-x: hidden;
}

/* ---------------------------------------------------------
   THEMES
--------------------------------------------------------- */

/* A — Dark Mystical Grimoire */
.theme-grimoire {
    background:
        url("assets/backgrounds/grimoire-texture.png"),
        radial-gradient(circle at center, #2a0033, #0a0011);
    background-size: cover;
    background-blend-mode: overlay;
}

/* B — Soft Celestial Witchcore */
.theme-celestial {
    background:
        url("assets/backgrounds/celestial.png"),
        linear-gradient(180deg, #d8caff, #a7d8ff, #ffffff);
    color: #222;
}

/* C — Forest Druidic Magic */
.theme-druidic {
    background:
        url("assets/backgrounds/druidic.png"),
        linear-gradient(180deg, #0f3d1e, #1a5e2a, #0b2412);
}

/* D — Gothic Occult */
.theme-gothic {
    background:
        url("assets/backgrounds/gothic.png"),
        linear-gradient(180deg, #000000, #1a1a1a, #000000);
}

/* ---------------------------------------------------------
   HEADER + NAV
--------------------------------------------------------- */
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
    background: rgba(80, 0, 120, 0.6);
    border: 1px solid rgba(200, 120, 255, 0.6);
    color: #fff;
    box-shadow: 0 0 10px rgba(200, 120, 255, 0.4);
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
}

nav button:hover {
    transform: scale(1.15);
    box-shadow: 0 0 20px rgba(220, 160, 255, 0.8);
}

/* ---------------------------------------------------------
   MAGICAL PARTICLES
--------------------------------------------------------- */
.magic-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url("assets/effects/particles.gif");
    opacity: 0.4;
    mix-blend-mode: screen;
    z-index: 1;
}

/* ---------------------------------------------------------
   PANELS
--------------------------------------------------------- */
.panel {
    max-width: 700px;
    margin: 60px auto;
    padding: 40px;
    background: rgba(20, 0, 30, 0.6);
    border: 2px solid rgba(180, 80, 255, 0.4);
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(180, 80, 255, 0.3);
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 2;
}

/* Animated runes behind panels */
.panel::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("assets/effects/runes.png") center/contain no-repeat;
    opacity: 0.15;
    animation: rotateRunes 40s linear infinite;
    z-index: -1;
}

@keyframes rotateRunes {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* ---------------------------------------------------------
   SPIRIT ANIMAL SANCTUARY GRID
--------------------------------------------------------- */
#animal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.animal-card {
    background: rgba(255,255,255,0.05);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
}

.animal-card:hover {
    transform: scale(1.1);
    filter: brightness(1.3);
}

.animal-card img {
    width: 80px;
    filter: drop-shadow(0 0 6px rgba(255,255,255,0.3));
}

/* ---------------------------------------------------------
   ACTIVE ANIMAL PANEL
--------------------------------------------------------- */
.animal-display img {
    width: 200px;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.4));
    transition: 0.5s ease;
}

.stats p {
    margin: 8px 0;
    font-size: 1.1rem;
}

.actions button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    transition: 0.3s;
    background: rgba(80, 0, 120, 0.6);
    border: 1px solid rgba(200, 120, 255, 0.6);
    color: #fff;
    box-shadow: 0 0 10px rgba(200, 120, 255, 0.4);
}

.actions button:hover {
    transform: scale(1.1);
}

/* ---------------------------------------------------------
   SPECIES SELECTION GRID
--------------------------------------------------------- */
#species-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.species-option {
    padding: 15px;
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
}

.species-option:hover {
    transform: scale(1.1);
    filter: brightness(1.3);
}

/* ---------------------------------------------------------
   QUEST BOARD
--------------------------------------------------------- */
#quest-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.quest {
    background: rgba(255,255,255,0.05);
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.quest:hover {
    transform: scale(1.03);
    filter: brightness(1.2);
}

.quest.completed {
    opacity: 0.4;
    text-decoration: line-through;
}

/* ---------------------------------------------------------
   RITUAL CIRCLE
--------------------------------------------------------- */
#ritual-circle-visual {
    position: relative;
    width: 250px;
    height: 250px;
    margin: 30px auto;
}

.circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(180, 80, 255, 0.4);
    border-radius: 50%;
    animation: slowRotate 20s linear infinite;
}

.rune-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("assets/effects/runes.png");
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.4;
    animation: reverseRotate 25s linear infinite;
}

.glow-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 25px 10px rgba(180, 80, 255, 0.5);
    opacity: 0;
    transition: 0.6s ease;
}

@keyframes slowRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes reverseRotate {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
}

/* Ritual list */
#ritual-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.ritual {
    background: rgba(255,255,255,0.05);
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.ritual:hover {
    transform: scale(1.03);
    filter: brightness(1.2);
}

.ritual.locked {
    opacity: 0.3;
    pointer-events: none;
}

/* ---------------------------------------------------------
   ANIMATIONS
--------------------------------------------------------- */

/* Loading glow */
@keyframes arcanePulse {
    0% { filter: drop-shadow(0 0 2px #a066ff); }
    50% { filter: drop-shadow(0 0 12px #d0aaff); }
    100% { filter: drop-shadow(0 0 2px #a066ff); }
}

.loading-glow {
    animation: arcanePulse 2s infinite;
}

/* Summoning burst */
@keyframes summonBurst {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}

.summon {
    animation: summonBurst 0.6s ease-out;
}

/* ---------------------------------------------------------
   SPECIES-SPECIFIC BACKGROUNDS
--------------------------------------------------------- */
.bg-wolf { background: radial-gradient(circle, #1a0022, #0a0011); }
.bg-cat { background: radial-gradient(circle, #220022, #0a0011); }
.bg-dragonling { background: radial-gradient(circle, #220033, #0a0011); }
.bg-raven { background: radial-gradient(circle, #110022, #000000); }
.bg-owl { background: radial-gradient(circle, #332255, #0a0011); }
.bg-deer { background: radial-gradient(circle, #112211, #0a0011); }
.bg-fox { background: radial-gradient(circle, #331122, #0a0011); }
.bg-rabbit { background: radial-gradient(circle, #332244, #0a0011); }
.bg-serpent { background: radial-gradient(circle, #000000, #111111); }
.bg-shadow-panther { background: radial-gradient(circle, #000011, #000000); }

/* ---------------------------------------------------------
   DARK VIGNETTE
--------------------------------------------------------- */
body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle, transparent 60%, rgba(0,0,0,0.7));
    z-index: 0;
}


/* ---------------------------------------------------------
   THEME SWITCHING
--------------------------------------------------------- */
const buttons = document.querySelectorAll("nav button");
const body = document.body;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;
        body.className = `theme-${theme}`;
    });
});

/* ---------------------------------------------------------
   SPECIES LIST
--------------------------------------------------------- */
const speciesList = [
    "wolf", "cat", "dragonling", "raven", "owl",
    "deer", "fox", "rabbit", "serpent", "shadow-panther"
];

/* ---------------------------------------------------------
   LOAD OR CREATE SPIRIT ANIMALS
--------------------------------------------------------- */
let animals = JSON.parse(localStorage.getItem("spiritAnimals")) || {};

speciesList.forEach(species => {
    if (!animals[species]) {
        animals[species] = {
            species,
            level: 1,
            xp: 0,
            xpNeeded: 50,
            mood: "Calm",
            energy: 100,
            stage: "baby",
            completedQuests: []
        };
    }
});

function saveAnimals() {
    localStorage.setItem("spiritAnimals", JSON.stringify(animals));
}

/* ---------------------------------------------------------
   SANCTUARY GRID
--------------------------------------------------------- */
const grid = document.getElementById("animal-grid");

speciesList.forEach(species => {
    const card = document.createElement("div");
    card.className = "animal-card";

    const img = document.createElement("img");
    img.src = `assets/spirit-animals/${species}/baby.png`;

    const label = document.createElement("p");
    label.textContent = species;

    card.appendChild(img);
    card.appendChild(label);

    card.addEventListener("click", () => selectAnimal(species));

    grid.appendChild(card);
});

/* ---------------------------------------------------------
   ACTIVE ANIMAL
--------------------------------------------------------- */
let active = null;

function selectAnimal(species) {
    active = animals[species];

    // Loading glow animation
    const img = document.getElementById("active-image");
    img.classList.add("loading-glow");

    setTimeout(() => {
        img.classList.remove("loading-glow");
        updateActiveUI();
        loadQuestsFor(species);
    }, 800);
}

function updateActiveUI() {
    if (!active) return;

    const panel = document.getElementById("active-animal");
    panel.className = `panel bg-${active.species}`;

    document.getElementById("active-name").textContent = active.species;
    document.getElementById("active-level").textContent = active.level;
    document.getElementById("active-xp").textContent = active.xp;
    document.getElementById("active-mood").textContent = active.mood;
    document.getElementById("active-energy").textContent = active.energy;

    document.getElementById("active-image").src =
        `assets/spirit-animals/${active.species}/${active.stage}.png`;
}

/* ---------------------------------------------------------
   XP + EVOLUTION
--------------------------------------------------------- */
function addXP(amount) {
    if (!active) return;

    active.xp += amount;

    if (active.xp >= active.xpNeeded) {
        active.level++;
        active.xp = 0;
        active.xpNeeded = Math.floor(active.xpNeeded * 1.4);
        evolve(active);
    }

    saveAnimals();
    updateActiveUI();
}

function evolve(animal) {
    if (animal.level < 5) animal.stage = "baby";
    else if (animal.level < 10) animal.stage = "young";
    else if (animal.level < 20) animal.stage = "adult";
    else animal.stage = "ascended";

    // Summoning animation
    const img = document.getElementById("active-image");
    img.classList.add("summon");
    setTimeout(() => img.classList.remove("summon"), 600);
}

/* ---------------------------------------------------------
   ACTION BUTTONS
--------------------------------------------------------- */
document.getElementById("feed-btn").addEventListener("click", () => {
    if (!active) return;
    active.energy = Math.min(100, active.energy + 10);
    active.mood = "Content";
    addXP(10);
});

document.getElementById("play-btn").addEventListener("click", () => {
    if (!active) return;
    active.energy = Math.max(0, active.energy - 10);
    active.mood = "Happy";
    addXP(15);
});

document.getElementById("rest-btn").addEventListener("click", () => {
    if (!active) return;
    active.energy = 100;
    active.mood = "Rested";
    saveAnimals();
    updateActiveUI();
});

/* ---------------------------------------------------------
   SPECIES SELECTION GRID
--------------------------------------------------------- */
const speciesGrid = document.getElementById("species-grid");

speciesList.forEach(species => {
    const option = document.createElement("div");
    option.className = "species-option";

    const img = document.createElement("img");
    img.src = `assets/spirit-animals/${species}/baby.png`;
    img.style.width = "100px";

    const label = document.createElement("p");
    label.textContent = species;

    option.appendChild(img);
    option.appendChild(label);

    option.addEventListener("click", () => selectAnimal(species));

    speciesGrid.appendChild(option);
});

/* ---------------------------------------------------------
   UNLOCK RULES
--------------------------------------------------------- */
let totalXP = 0; // You can expand this later

let currentMoonPhase = "full"; // Placeholder — can be replaced with real moon logic

let completedRituals = JSON.parse(localStorage.getItem("completedRituals")) || [];

const unlockRules = {
    wolf: { moon: "full" },
    cat: { xp: 100 },
    dragonling: { ritual: "fire" },
    raven: { moon: "new" },
    owl: { xp: 200 },
    deer: { ritual: "earth" },
    fox: { xp: 150 },
    rabbit: { moon: "waxing" },
    serpent: { ritual: "shadow" },
    "shadow-panther": { ritual: "forbidden" }
};

function isUnlocked(species) {
    const rule = unlockRules[species];

    if (rule.moon && currentMoonPhase !== rule.moon) return false;
    if (rule.xp && totalXP < rule.xp) return false;
    if (rule.ritual && !completedRituals.includes(rule.ritual)) return false;

    return true;
}

/* ---------------------------------------------------------
   QUEST SYSTEM
--------------------------------------------------------- */
const quests = {
    wolf: [
        { id: "moon-howl", text: "Howl at the arcane moon to strengthen your bond.", xp: 20 },
        { id: "track-shadows", text: "Track a shadow creature through the forest.", xp: 30 }
    ],
    cat: [
        { id: "candle-watch", text: "Guard a flickering candle flame from spirits.", xp: 15 },
        { id: "rune-pounce", text: "Pounce on moving runes in the ritual circle.", xp: 25 }
    ],
    dragonling: [
        { id: "ember-spark", text: "Ignite a small ember with your breath.", xp: 20 },
        { id: "wing-practice", text: "Practice wing flaps to strengthen flight.", xp: 30 }
    ],
    raven: [
        { id: "deliver-message", text: "Carry a secret message across the night sky.", xp: 20 },
        { id: "shadow-dive", text: "Dive through a shadow portal.", xp: 35 }
    ],
    owl: [
        { id: "star-gaze", text: "Study constellations to gain wisdom.", xp: 25 },
        { id: "silent-flight", text: "Fly silently through the arcane woods.", xp: 30 }
    ],
    deer: [
        { id: "antler-glow", text: "Charge your antlers with druidic energy.", xp: 20 },
        { id: "forest-path", text: "Guide lost spirits through the forest.", xp: 35 }
    ],
    fox: [
        { id: "trick-light", text: "Create a playful illusion of light.", xp: 15 },
        { id: "tail-flare", text: "Ignite your tail runes in a trickster dance.", xp: 25 }
    ],
    rabbit: [
        { id: "moon-hop", text: "Leap through moonlit patches.", xp: 15 },
        { id: "burrow-rune", text: "Dig up a buried rune stone.", xp: 30 }
    ],
    serpent:

[10.4 ascended panther.txt](https://github.com/user-attachments/files/24658890/10.4.ascended.panther.txt)
[1.1 Baby wolf.txt](https://github.com/user-attachments/files/24658891/1.1.Baby.wolf.txt)[10.3 adult panther.txt](https://github.com/user-attachments/files/24658930/10.3.adult.panther.txt)
[10.2 young panther.txt](https://github.com/user-attachments/files/24658929/10.2.young.panther.txt)
[10.1 baby panther.txt](https://github.com/user-attachments/files/24658928/10.1.baby.panther.txt)
[9.4 ascended snake.txt](https://github.com/user-attachments/files/24658927/9.4.ascended.snake.txt)
[9.3 adult snake.txt](https://github.com/user-attachments/files/24658926/9.3.adult.snake.txt)
[9.2 young snake.txt](https://github.com/user-attachments/files/24658925/9.2.young.snake.txt)
[9.1 baby snake.txt](https://github.com/user-attachments/files/24658924/9.1.baby.snake.txt)
[8.4 ascended rabbit.txt](https://github.com/user-attachments/files/24658923/8.4.ascended.rabbit.txt)
[8.3 adult rabbit.txt](https://github.com/user-attachments/files/24658922/8.3.adult.rabbit.txt)
[8.2 young rabbit.txt](https://github.com/user-attachments/files/24658921/8.2.young.rabbit.txt)
[8.1 baby rabbit.txt](https://github.com/user-attachments/files/24658920/8.1.baby.rabbit.txt)
[7.4 ascended fox.txt](https://github.com/user-attachments/files/24658919/7.4.ascended.fox.txt)
[7.3 adult fox.txt](https://github.com/user-attachments/files/24658918/7.3.adult.fox.txt)
[7.2 young fox.txt](https://github.com/user-attachments/files/24658917/7.2.young.fox.txt)
[7.1 BABY FOX.txt](https://github.com/user-attachments/files/24658916/7.1.BABY.FOX.txt)
[6.4 ascended deer.txt](https://github.com/user-attachments/files/24658915/6.4.ascended.deer.txt)
[6.3 adult deer.txt](https://github.com/user-attachments/files/24658914/6.3.adult.deer.txt)
[6.2  young deer.txt](https://github.com/user-attachments/files/24658913/6.2.young.deer.txt)
[6.1 baby deer.txt](https://github.com/user-attachments/files/24658912/6.1.baby.deer.txt)
[5.4 ascended owl.txt](https://github.com/user-attachments/files/24658911/5.4.ascended.owl.txt)
[5.3 adult owl.txt](https://github.com/user-attachments/files/24658910/5.3.adult.owl.txt)
[5.2 young owl.txt](https://github.com/user-attachments/files/24658909/5.2.young.owl.txt)
[5.1 baby owl.txt](https://github.com/user-attachments/files/24658908/5.1.baby.owl.txt)
[4.4 ascended raven.txt](https://github.com/user-attachments/files/24658907/4.4.ascended.raven.txt)
[4.3 adult raven.txt](https://github.com/user-attachments/files/24658906/4.3.adult.raven.txt)
[4.2 young raven.txt](https://github.com/user-attachments/files/24658905/4.2.young.raven.txt)
[4.1 baby raven.txt](https://github.com/user-attachments/files/24658904/4.1.baby.raven.txt)
[3.4 ascended dragon.txt](https://github.com/user-attachments/files/24658903/3.4.ascended.dragon.txt)
[3.3 adult dragon.txt](https://github.com/user-attachments/files/24658902/3.3.adult.dragon.txt)
[3.2 young dragon.txt](https://github.com/user-attachments/files/24658901/3.2.young.dragon.txt)
[3.1 Baby Dragon.txt](https://github.com/user-attachments/files/24658900/3.1.Baby.Dragon.txt)
[2.4 ascended cat.txt](https://github.com/user-attachments/files/24658899/2.4.ascended.cat.txt)
[2.3 adult cat.txt](https://github.com/user-attachments/files/24658898/2.3.adult.cat.txt)
[2.2 young cat.txt](https://github.com/user-attachments/files/24658896/2.2.young.cat.txt)
[2.1 Baby cat.txt](https://github.com/user-attachments/files/24658895/2.1.Baby.cat.txt)
[1.4 Ascended wolf.txt](https://github.com/user-attachments/files/24658894/1.4.Ascended.wolf.txt)
[1.3 Adult wolf.txt](https://github.com/user-attachments/files/24658893/1.3.Adult.wolf.txt)
[1.2Young wolf.txt](https://github.com/user-attachments/files/24658892/1.2Young.wolf.txt)
