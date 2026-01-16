[4.11 quest script.txt](https://github.com/user-attachments/files/24658043/4.11.quest.script.txt)[2.4 quest.txt](https://github.com/user-attachments/files/24658031/2.4.quest.txt)[4.1 script.txt](https://github.com/user-attachments/files/24657538/4.1.script.txt)[2 Html.txt](https://github.com/user-attachments/files/24657514/2.Html.txt)
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
[3 Styles Css.txt](https://github.com/user-attachments/files/24657523/3.Styles.Css.txt)
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
[4 script.js.txt](https://github.com/user-attachments/files/24657536/4.script.js.txt)

const buttons = document.querySelectorAll("nav button");
const body = document.body;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;
        body.className = `theme-${theme}`;
    });
});

[Uploading// SPIRIT ANIMAL SYSTEM
let animal = {
    name: "Your Spirit",
    level: 1,
    xp: 0,
    xpNeeded: 50,
    mood: "Calm",
    energy: 100,
    stage: "baby" // baby → young → adult → ascended
};

// Load saved data
if (localStorage.getItem("spiritAnimal")) {
    animal = JSON.parse(localStorage.getItem("spiritAnimal"));
    updateUI();
}

// Save data
function saveAnimal() {
    localStorage.setItem("spiritAnimal", JSON.stringify(animal));
}

// Update UI
function updateUI() {
    document.getElementById("animal-name").textContent = animal.name;
    document.getElementById("animal-level").textContent = animal.level;
    document.getElementById("animal-xp").textContent = animal.xp;
    document.getElementById("animal-xp-needed").textContent = animal.xpNeeded;
    document.getElementById("animal-mood").textContent = animal.mood;
    document.getElementById("animal-energy").textContent = animal.energy;

    document.getElementById("animal-image").src =
        `assets/images/spirit-${animal.stage}.png`;
}

// XP + Leveling
function addXP(amount) {
    animal.xp += amount;

    if (animal.xp >= animal.xpNeeded) {
        animal.level++;
        animal.xp = 0;
        animal.xpNeeded = Math.floor(animal.xpNeeded * 1.4);
        evolve();
    }

    saveAnimal();
    updateUI();
}

// Evolution logic
function evolve() {
    if (animal.level >= 1 && animal.level < 5) animal.stage = "baby";
    if (animal.level >= 5 && animal.level < 10) animal.stage = "young";
    if (animal.level >= 10 && animal.level < 20) animal.stage = "adult";
    if (animal.level >= 20) animal.stage = "ascended";
}

// Actions
document.getElementById("feed-btn").addEventListener("click", () => {
    if (animal.energy < 100) animal.energy += 10;
    addXP(10);
    animal.mood = "Content";
    saveAnimal();
    updateUI();
});

document.getElementById("play-btn").addEventListener("click", () => {
    if (animal.energy > 0) animal.energy -= 10;
    addXP(15);
    animal.mood = "Happy";
    saveAnimal();
    updateUI();
});

document.getElementById("rest-btn").addEventListener("click", () => {
    animal.energy = 100;
    animal.mood = "Rested";
    saveAnimal();
    updateUI();
});
 4.1 script.txt…]()
[2.1 Html spirit animals.txt](https://github.com/user-attachments/files/24657542/2.1.Html.spirit.animals.txt)

<section id="spirit-animal" class="panel">
    <h2>Your Spirit Animal</h2>

    <div class="animal-display">
        <img id="animal-image" src="assets/images/spirit-baby.png" alt="Spirit Animal">
    </div>

    <div class="stats">
        <p><strong>Name:</strong> <span id="animal-name">Unnamed</span></p>
        <p><strong>Level:</strong> <span id="animal-level">1</span></p>
        <p><strong>XP:</strong> <span id="animal-xp">0</span> / <span id="animal-xp-needed">50</span></p>
        <p><strong>Mood:</strong> <span id="animal-mood">Calm</span></p>
        <p><strong>Energy:</strong> <span id="animal-energy">100</span>%</p>
    </div>

    <div class="actions">
        <button id="feed-btn">Feed</button>
        <button id="play-btn">Play</button>
        <button id="rest-btn">Rest</button>
    </div>
</section>
[3.1 Css.txt](https://github.com/user-attachments/files/24657561/3.1.Css.txt)

/* SPIRIT ANIMAL PANEL */
.panel {
    max-width: 600px;
    margin: 60px auto;
    padding: 30px;
    background: rgba(0,0,0,0.4);
    border-radius: 12px;
    backdrop-filter: blur(6px);
    text-align: center;
}

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
}

.actions button:hover {
    transform: scale(1.1);
}
  [4.1 script.txt](https://github.com/user-attachments/files/24657629/4.1.script.txt)
// SPIRIT ANIMAL SYSTEM
let animal = {
    name: "Your Spirit",
    level: 1,
    xp: 0,
    xpNeeded: 50,
    mood: "Calm",
    energy: 100,
    stage: "baby" // baby → young → adult → ascended
};

// Load saved data
if (localStorage.getItem("spiritAnimal")) {
    animal = JSON.parse(localStorage.getItem("spiritAnimal"));
    updateUI();
}

// Save data
function saveAnimal() {
    localStorage.setItem("spiritAnimal", JSON.stringify(animal));
}

// Update UI
function updateUI() {
    document.getElementById("animal-name").textContent = animal.name;
    document.getElementById("animal-level").textContent = animal.level;
    document.getElementById("animal-xp").textContent = animal.xp;
    document.getElementById("animal-xp-needed").textContent = animal.xpNeeded;
    document.getElementById("animal-mood").textContent = animal.mood;
    document.getElementById("animal-energy").textContent = animal.energy;

    document.getElementById("animal-image").src =
        `assets/images/spirit-${animal.stage}.png`;
}

// XP + Leveling
function addXP(amount) {
    animal.xp += amount;

    if (animal.xp >= animal.xpNeeded) {
        animal.level++;
        animal.xp = 0;
        animal.xpNeeded = Math.floor(animal.xpNeeded * 1.4);
        evolve();
    }

    saveAnimal();
    updateUI();
}

// Evolution logic
function evolve() {
    if (animal.level >= 1 && animal.level < 5) animal.stage = "baby";
    if (animal.level >= 5 && animal.level < 10) animal.stage = "young";
    if (animal.level >= 10 && animal.level < 20) animal.stage = "adult";
    if (animal.level >= 20) animal.stage = "ascended";
}

// Actions
document.getElementById("feed-btn").addEventListener("click", () => {
    if (animal.energy < 100) animal.energy += 10;
    addXP(10);
    animal.mood = "Content";
    saveAnimal();
    updateUI();
});

document.getElementById("play-btn").addEventListener("click", () => {
    if (animal.energy > 0) animal.energy -= 10;
    addXP(15);
    animal.mood = "Happy";
    saveAnimal();
    updateUI();
});

document.getElementById("rest-btn").addEventListener("click", () => {
    animal.energy = 100;
    animal.mood = "Rested";
    saveAnimal();
    updateUI();
});

[Uplo<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grimoire of Divination</title>
    <link rel="stylesheet" href="styles.css">
</head>

[Uploadin<body class="theme-grimoire">
g 2.0.txt…]()

[Uploading .theme-grimoire {
    background: radial-gradient(circle at center, #2a0033, #0a0011);
}

3.o.txt…]()
[U<section id="spirit-animal" class="panel">
    <h2>Your Spirit Animal</h2>

    <div class="animal-display">
        <img id="animal-image" src="assets/images/spirit-baby.png" alt="Spirit Animal">
    </div>

    <div class="stats">
        <p><strong>Name:</strong> <span id="animal-name">Unnamed</span></p>
        <p><strong>Level:</strong> <span id="animal-level">1</span></p>
        <p><strong>XP:</strong> <span id="animal-xp">0</span> / <span id="animal-xp-needed">50</span></p>
        <p><strong>Mood:</strong> <span id="animal-mood">Calm</span></p>
        <p><strong>Energy:</strong> <span id="animal-energy">100</span>%</p>
    </div>

    <div class="actions">
        <button id="feed-btn">Feed</button>
        <button id="play-btn">Play</button>
        <button id="rest-btn">Rest</button>
    </div>
</section>
ploading 2.1 Html spirit animals.txt…]()

[Up#animal-grid {
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
loading 3.2.txt…]()

[Up// List of all species
const speciesList = [
    "wolf", "cat", "dragonling", "raven", "owl",
    "deer", "fox", "rabbit", "serpent", "shadow-panther"
];

// Load or create animal data
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
            stage: "baby"
        };
    }
});

function saveAnimals() {
    localStorage.setItem("spiritAnimals", JSON.stringify(animals));
}

// Build sanctuary grid
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

// Active animal
let active = null;

function selectAnimal(species) {
    active = animals[species];
    updateActiveUI();
}

function updateActiveUI() {
    if (!active) return;

    document.getElementById("active-name").textContent = active.species;
    document.getElementById("active-level").textContent = active.level;
    document.getElementById("active-xp").textContent = active.xp;
    document.getElementById("active-mood").textContent = active.mood;
    document.getElementById("active-energy").textContent = active.energy;

    document.getElementById("active-image").src =
        `assets/spirit-animals/${active.species}/${active.stage}.png`;
}

// XP + Evolution
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
}

// Buttons
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
loading 4.3.txt…]()

[10.4 ascended panther.txt](https://github.com/user-attachments/files/24657683/10.4.ascended.panther.txt)
[1.1 Baby wolf.txt](https://github.com/user-attachments/files/24657684/1.1.Baby.wolf.txt)[4.1 baby raven.txt](https://github.com/user-attachments/files/24657696/4.1.baby.raven.txt)
[3.4 ascended dragon.txt](https://github.com/user-attachments/files/24657695/3.4.ascended.dragon.txt)
[3.3 adult dragon.txt](https://github.com/user-attachments/files/24657694/3.3.adult.dragon.txt)
[3.2 young dragon.txt](https://github.com/user-attachments/files/24657693/3.2.young.dragon.txt)
[3.1 Baby Dragon.txt](https://github.com/user-attachments/files/24657692/3.1.Baby.Dragon.txt)
[2.4 ascended cat.txt](https://github.com/user-attachments/files/24657691/2.4.ascended.cat.txt)
[2.3 adult cat.txt](https://github.com/user-attachments/files/24657690/2.3.adult.cat.txt)
[2.2 young cat.txt](https://github.com/user-attachments/files/24657689/2.2.young.cat.txt)
[2.1 Baby cat.txt](https://github.com/user-attachments/files/24657688/2.1.Baby.cat.txt)
[1.4 Ascended wolf.txt](https://github.com/user-attachments/files/24657687/1.4.Ascended.wolf.txt)
[1.3 Adult wolf.txt](https://github.com/user-attachments/files/24657686/1.3.Adult.wolf.txt)
[1.2Young wolf.txt](https://github.com/user-attachments/files/24657685/1.2Young.wolf.txt)

/* Species-specific backgrounds */
.bg-wolf {
    background: radial-gradient(circle, #1a0022, #0a0011);
}
.bg-cat {
    background: radial-gradient(circle, #220022, #0a0011);
}
.bg-dragonling {
    background: radial-gradient(circle, #220033, #0a0011);
}
.bg-raven {
    background: radial-gradient(circle, #110022, #000000);
}
.bg-owl {
    background: radial-gradient(circle, #332255, #0a0011);
}
.bg-deer {
    background: radial-gradient(circle, #112211, #0a0011);
}
.bg-fox {
    background: radial-gradient(circle, #331122, #0a0011);
}
.bg-rabbit {
    background: radial-gradient(circle, #332244, #0a0011);
}
.bg-serpent {
    background: radial-gradient(circle, #000000, #111111);
}
.bg-shadow-panther {
    background: radial-gradient(circle, #000011, #000000);
}

[Uploading 4.4function updateActiveUI() {
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
 pet background.txt…]()

@keyframes arcanePulse {
    0% { filter: drop-shadow(0 0 2px #a066ff); }
    50% { filter: drop-shadow(0 0 12px #d0aaff); }
    100% { filter: drop-shadow(0 0 2px #a066ff); }
}

.loading-glow {
    animation: arcanePulse 2s infinite;
}

function selectAnimal(species) {
    active = animals[species];

    const img = document.getElementById("active-image");
    img.classList.add("loading-glow");

    setTimeout(() => {
        img.classList.remove("loading-glow");
        updateActiveUI();
    }, 800);
}

[Uploading 3.5@keyframes summonBurst {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}

.summon {
    animation: summonBurst 0.6s ease-out;
}
 summoning pet style.txt…]()

function evolve(animal) {
    if (animal.level < 5) animal.stage = "baby";
    else if (animal.level < 10) animal.stage = "young";
    else if (animal.level < 20) animal.stage = "adult";
    else animal.stage = "ascended";

    const img = document.getElementById("active-image");
    img.classList.add("summon");
    setTimeout(() => img.classList.remove("summon"), 600);
}

<section id="species-select" class="panel">
    <h2>Select a Spirit Animal</h2>
    <div id="species-grid"></div>
</section>

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
[4.8 script.txt](https://github.com/user-attachments/files/24658022/4.8.script.txt)

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

[4.9.txt](https://github.com/user-attachments/files/24658025/4.9.txt)

function isUnlocked(species) {
    const rule = unlockRules[species];

    if (rule.moon && currentMoonPhase !== rule.moon) return false;
    if (rule.xp && totalXP < rule.xp) return false;
    if (rule.ritual && !completedRituals.includes(rule.ritual)) return false;

    return true;
}

[4.10.txt](https://github.com/user-attachments/files/24658028/4.10.txt)
if (!isUnlocked(species)) {
    option.style.opacity = "0.3";
    option.style.pointerEvents = "none";
}

[Uploading <section id="quest-board" class="panel">
    <h2>Spirit Animal Quests</h2>
    <p id="quest-active-name">Select a spirit animal to see quests.</p>

    <div id="quest-list"></div>
</section>
2.4 quest.txt…]()

[3.7 quest.txt](https://github.com/user-attachments/files/24658039/3.7.quest.txt)
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

[Uploadingconst quests = {
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
    serpent: [
        { id: "scale-shine", text: "Polish your runic scales to full glow.", xp: 20 },
        { id: "shadow-slither", text: "Slither through a forbidden shadow path.", xp: 35 }
    ],
    "shadow-panther": [
        { id: "void-step", text: "Step silently through the void.", xp: 40 },
        { id: "rune-hunt", text: "Hunt a rogue rune spirit.", xp: 50 }
    ]
};
 4.11 quest script.txt…]()

[4.12.txt](https://github.com/user-attachments/files/24658051/4.12.txt)
const questList = document.getElementById("quest-list");
const questActiveName = document.getElementById("quest-active-name");

function loadQuestsFor(species) {
    questList.innerHTML = "";
    questActiveName.textContent = `${species} quests`;

    quests[species].forEach(q => {
        const div = document.createElement("div");
        div.className = "quest";

        if (animals[species].completedQuests?.includes(q.id)) {
            div.classList.add("completed");
        }

        div.textContent = q.text;

        div.addEventListener("click", () => completeQuest(species, q));

        questList.appendChild(div);
    });
}

function completeQuest(species, quest) {
    if (!animals[species].completedQuests) {
        animals[species].completedQuests = [];
    }

    if (animals[species].completedQuests.includes(quest.id)) return;

    animals[species].completedQuests.push(quest.id);

    addXP(quest.xp);

    saveAnimals();
    loadQuestsFor(species);

    // Summoning animation on quest completion
    const img = document.getElementById("active-image");
    img.classList.add("summon");
    setTimeout(() => img.classList.remove("summon"), 600);
}

[4.13.txt](https://github.com/user-attachments/files/24658054/4.13.txt)
function selectAnimal(species) {
    active = animals[species];

    updateActiveUI();
    loadQuestsFor(species);
}

[4.14.txt](https://github.com/user-attachments/files/24658055/4.14.txt)
function getDailyQuest(species) {
    const list = quests[species];
    return list[Math.floor(Math.random() * list.length)];
}
[4.15.txt](https://github.com/user-attachments/files/24658058/4.15.txt)

if (quest.id === "void-step") {
    completedRituals.push("forbidden");
}
[2.5 ritual circle.txt](https://github.com/user-attachments/files/24658070/2.5.ritual.circle.txt)

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
[3.8 ritual circle.txt](https://github.com/user-attachments/files/24658075/3.8.ritual.circle.txt)

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
    background-image: url("assets/icons/runes.png");
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

/* Ritual List */
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
[4.16 ritual circles.txt](https://github.com/user-attachments/files/24658080/4.16.ritual.circles.txt)

const rituals = {
    fire: {
        name: "Fire Ritual",
        requirement: { xp: 100 },
        unlocks: ["dragonling"],
        description: "Ignite the arcane flame to awaken fire‑aligned spirits."
    },
    earth: {
        name: "Earth Ritual",
        requirement: { xp: 80 },
        unlocks: ["deer"],
        description: "Channel druidic energy to awaken forest spirits."
    },
    shadow: {
        name: "Shadow Ritual",
        requirement: { xp: 150 },
        unlocks: ["serpent"],
        description: "Step into the void to awaken shadow‑aligned spirits."
    },
    forbidden: {
        name: "Forbidden Ritual",
        requirement: { xp: 300 },
        unlocks: ["shadow-panther"],
        description: "Invoke ancient forbidden magic to awaken a powerful familiar."
    }
};

let completedRituals = JSON.parse(localStorage.getItem("completedRituals")) || [];

[4.17.txt](https://github.com/user-attachments/files/24658086/4.17.txt)
const ritualList = document.getElementById("ritual-list");
const ritualStatus = document.getElementById("ritual-status");
const performBtn = document.getElementById("perform-ritual-btn");

let selectedRitual = null;

function loadRituals() {
    ritualList.innerHTML = "";

    Object.keys(rituals).forEach(key => {
        const r = rituals[key];
        const div = document.createElement("div");
        div.className = "ritual";

        if (completedRituals.includes(key)) {
            div.classList.add("locked");
        }

        div.textContent = `${r.name} — ${r.description}`;

        div.addEventListener("click", () => selectRitual(key));

        ritualList.appendChild(div);
    });
}

function selectRitual(key) {
    selectedRitual = key;
    ritualStatus.textContent = `Selected: ${rituals[key].name}`;
    performBtn.disabled = false;
}
[4.18.txt](https://github.com/user-attachments/files/24658095/4.18.txt)

performBtn.addEventListener("click", () => {
    if (!selectedRitual) return;

    const r = rituals[selectedRitual];

    // Check XP requirement
    if (totalXP < r.requirement.xp) {
        ritualStatus.textContent = "Not enough XP to perform this ritual.";
        return;
    }

    // Perform ritual animation
    const glow = document.querySelector(".glow-layer");
    glow.style.opacity = 1;

    setTimeout(() => {
        glow.style.opacity = 0;

        // Mark ritual as completed
        completedRituals.push(selectedRitual);
        localStorage.setItem("completedRituals", JSON.stringify(completedRituals));

        ritualStatus.textContent = `${r.name} completed! New spirits unlocked.`;

        loadRituals();
    }, 1500);
});
[4.19.txt](https://github.com/user-attachments/files/24658097/4.19.txt)

if (rule.ritual && !completedRituals.includes(rule.ritual)) return false;

[4.20.txt](https://github.com/user-attachments/files/24658100/4.20.txt)
loadRituals();
