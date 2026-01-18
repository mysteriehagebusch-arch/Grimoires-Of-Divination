// ===============================
//  FULL SAVE SYSTEM — CORE ENGINE
// ===============================

// Save any value forever
function saveProgress(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Load saved value (or default if none)
function loadProgress(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Delete all progress
function resetProgress() {
    localStorage.clear();
}
// ===============================
//  USER PROFILE SYSTEM
// ===============================

// Save username
function setUsername(name) {
    saveProgress("username", name);
}

// Load username
function getUsername() {
    return loadProgress("username", null);
}

// Check if user is returning
function isReturningUser() {
    return loadProgress("hasVisited", false);
}

// Mark user as having visited
function markVisited() {
    saveProgress("hasVisited", true);
}

// ===============================
//  SPIRIT ANIMAL SYSTEM
// ===============================

function setSpiritAnimal(animal) {
    saveProgress("spiritAnimal", animal);
}

function getSpiritAnimal() {
    return loadProgress("spiritAnimal", null);
}

function setEvolutionStage(stage) {
    saveProgress("evolutionStage", stage);
}

function getEvolutionStage() {
    return loadProgress("evolutionStage", 1);
}

// ===============================
//  MOOD & ENERGY SYSTEM
// ===============================

function setMood(mood) {
    saveProgress("mood", mood);
}

function getMood() {
    return loadProgress("mood", "neutral");
}

function setEnergy(value) {
    saveProgress("energy", value);
}

function getEnergy() {
    return loadProgress("energy", 100);
}

// ===============================
//  QUEST & RITUAL SYSTEM
// ===============================

function completeQuest(id) {
    let quests = loadProgress("quests", []);
    if (!quests.includes(id)) quests.push(id);
    saveProgress("quests", quests);
}

function getCompletedQuests() {
    return loadProgress("quests", []);
}

function completeRitual(id) {
    let rituals = loadProgress("rituals", []);
    if (!rituals.includes(id)) rituals.push(id);
    saveProgress("rituals", rituals);
}

function getCompletedRituals() {
    return loadProgress("rituals", []);
}

// ===============================
//  THEME SYSTEM
// ===============================

function setTheme(theme) {
    saveProgress("theme", theme);
}

function getTheme() {
    return loadProgress("theme", "grimoire");
}

// ===============================
//  AUTO-LOAD USER PROGRESS
// ===============================

window.addEventListener("load", () => {
    // Skip login gate for returning users
    if (isReturningUser()) {
        const login = document.getElementById("login-gate");
        if (login) login.remove();
        const content = document.getElementById("site-content");
        if (content) content.style.display = "block";
    }

    // Apply saved theme
    const savedTheme = getTheme();
    document.body.setAttribute("data-theme", savedTheme);

    // Load spirit animal, evolution, mood, energy, etc.
    const animal = getSpiritAnimal();
    const stage = getEvolutionStage();
    const mood = getMood();
    const energy = getEnergy();

    // You can now use these values to update the UI
});


// Dust Particles During Book Opening
function spawnDust() {
    for (let i = 0; i < 12; i++) {
        const d = document.createElement("div");
        d.classList.add("dust");
        d.style.left = (window.innerWidth / 2 - 100 + Math.random() * 200) + "px";
        d.style.top = (window.innerHeight / 2 + 80 + Math.random() * 40) + "px";
        d.style.animationDuration = (1.5 + Math.random()) + "s";
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 2500);
    }
}

setTimeout(spawnDust, 300); // triggers as book begins opening

// Page Turn Sound
function playPageSound() {
    const s = document.getElementById("pageSound");
    if (s) s.play();
}

setTimeout(playPageSound, 900);  // first page turn
setTimeout(playPageSound, 1600); // second page turn

// Reveal site after book animation
setTimeout(() => {
    document.getElementById("book-intro").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("book-intro").remove();
        document.getElementById("site-content").style.display = "block";
    }, 600);
}, 2600); // matches animation duration

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
let totalXP = 0;
let currentMoonPhase = "full";
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
    serpent: [
        { id: "scale-shine", text: "Polish your runic scales to full glow.", xp: 20 },
        { id: "shadow-slither", text: "Slither through a forbidden shadow path.", xp: 35 }
    ],
    "shadow-panther": [
        { id: "void-step", text: "Step silently through the void.", xp: 40 },
        { id: "rune-hunt", text: "Hunt a rogue rune spirit.", xp: 50 }
    ]
};

const questList = document.getElementById("quest-list");
const questActiveName = document.getElementById("quest-active-name");

function loadQuestsFor(species) {
    questList.innerHTML = "";
    questActiveName.textContent = `${species} quests`;

    quests[species].forEach(q => {
        const div = document.createElement("div");
        div.className = "quest";

        if (animals[species].completedQuests.includes(q.id)) {
            div.classList.add("completed");
        }

        div.textContent = q.text;

        div.addEventListener("click", () => completeQuest(species, q));

        questList.appendChild(div);
    });
}

function completeQuest(species, quest) {
    if (animals[species].completedQuests.includes(quest.id)) return;

    animals[species].completedQuests.push(quest.id);

    addXP(quest.xp);
    saveAnimals();
    loadQuestsFor(species);

    const img = document.getElementById("active-image");
    img.classList.add("summon");
    setTimeout(() => img.classList.remove("summon"), 600);

    if (quest.id === "void-step") {
        completedRituals.push("forbidden");
    }
}

/* ---------------------------------------------------------
   RITUAL CIRCLE
--------------------------------------------------------- */
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

performBtn.addEventListener("click", () => {
    if (!selectedRitual) return;

    const r = rituals[selectedRitual];

    if (totalXP < r.requirement.xp) {
        ritualStatus.textContent = "Not enough XP to perform this ritual.";
        return;
    }

    const glow = document.querySelector(".glow-layer");
    glow.style.opacity = 1;

    setTimeout(() => {
        glow.style.opacity = 0;

        completedRituals.push(selectedRitual);
        localStorage.setItem("completedRituals", JSON.stringify(completedRituals));

        ritualStatus.textContent = `${r.name} completed! New spirits unlocked.`;

        loadRituals();
    }, 1500);
});

/* ---------------------------------------------------------
   INITIALIZE SYSTEMS
--------------------------------------------------------- */
loadRituals();

// Grimoire Opening Animation
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("grimoire-open");
    }, 200); // slight delay for dramatic effect
});

// Floating Arcane Sigils
const sigils = ["✦", "✧", "❂", "☽", "☾", "✴", "✹", "✺"];

function spawnSigil() {
    const sigil = document.createElement("div");
    sigil.classList.add("sigil");
    sigil.textContent = sigils[Math.floor(Math.random() * sigils.length)];

    sigil.style.left = Math.random() * 100 + "vw";
    sigil.style.fontSize = (Math.random() * 2 + 1.5) + "rem";
    sigil.style.animationDuration = (Math.random() * 6 + 10) + "s";

    document.body.appendChild(sigil);

    setTimeout(() => sigil.remove(), 15000);
}

setInterval(spawnSigil, 2000);

// Glowing Magical Cursor Trail
document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 800);
});

// Save data forever
function saveProgress(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Load saved data
function loadProgress(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Delete all progress
function resetProgress() {
    localStorage.clear();
}
