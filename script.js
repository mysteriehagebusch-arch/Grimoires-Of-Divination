document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("playerName");
  if (name) {
    document.getElementById("player-name").textContent = name;
  }
});

/* ---------------------------------------------------------
   1. GLOBAL SAVE SYSTEM
--------------------------------------------------------- */

function saveProgress(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadProgress(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function resetProgress() {
    localStorage.clear();
}

/* ---------------------------------------------------------
   2. USER PROFILE SYSTEM
--------------------------------------------------------- */

function setUsername(name) {
    saveProgress("username", name);
}

function getUsername() {
    return loadProgress("username", null);
}

function isReturningUser() {
    return loadProgress("hasVisited", false);
}

function markVisited() {
    saveProgress("hasVisited", true);
}

/* ---------------------------------------------------------
   3. SPIRIT ANIMAL SYSTEM
--------------------------------------------------------- */

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

/* ---------------------------------------------------------
   4. MOOD + ENERGY SYSTEM
--------------------------------------------------------- */

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

/* ---------------------------------------------------------
   5. QUEST + RITUAL SYSTEM
--------------------------------------------------------- */

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

/* ---------------------------------------------------------
   6. THEME SYSTEM
--------------------------------------------------------- */

function setTheme(theme) {
    document.body.classList.remove(
        "theme-grimoire",
        "theme-celestial",
        "theme-druidic",
        "theme-gothic"
    );

    document.body.classList.add(theme);
    saveProgress("theme", theme);
}

function getTheme() {
    return loadProgress("theme", "theme-grimoire");
}

/* ---------------------------------------------------------
   7. INTRO ANIMATION — BODY FADE-IN
--------------------------------------------------------- */

window.addEventListener("load", () => {
    const savedTheme = getTheme();
    document.body.classList.add(savedTheme);

    setTimeout(() => {
        document.body.classList.add("grimoire-open");
    }, 200);
});

/* ---------------------------------------------------------
   8. DUST PARTICLES DURING BOOK OPENING
--------------------------------------------------------- */

function spawnDust() {
    for (let i = 0; i < 20; i++) {
        const d = document.createElement("div");
        d.classList.add("dust");
        d.style.left = (window.innerWidth / 2 - 100 + Math.random() * 200) + "px";
        d.style.top = (window.innerHeight / 2 + 80 + Math.random() * 40) + "px";
        d.style.animationDuration = (2 + Math.random()) + "s";
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 3000);
    }
}

setInterval(spawnDust, 1000);

/* ---------------------------------------------------------
   9. PAGE TURN SOUND
--------------------------------------------------------- */

function playPageSound() {
    const s = document.getElementById("pageSound");
    if (s) s.play();
}

setTimeout(playPageSound, 900);
setTimeout(playPageSound, 1600);

/* ---------------------------------------------------------
   10. REVEAL SITE AFTER INTRO
--------------------------------------------------------- */

/* ---------------------------------------------------------
   10. REVEAL SITE AFTER INTRO
--------------------------------------------------------- */

setTimeout(() => {
    const intro = document.getElementById("book-intro");
    if (intro) {
        intro.style.opacity = "0";
        setTimeout(() => intro.remove(), 600);
    }
}, 20000); // 15s closed + 5s opening

/* ---------------------------------------------------------
   11. LOGIN GATE LOGIC
--------------------------------------------------------- */

setTimeout(() => {
    if (!isReturningUser()) {
        document.getElementById("login-gate").style.display = "flex";
    } else {
        document.getElementById("site-content").style.display = "block";
    }
}, 20600);

const terms = document.getElementById("agree-terms");
const privacy = document.getElementById("agree-privacy");
const enterBtn = document.getElementById("enter-btn");

function updateButton() {
    if (terms.checked && privacy.checked) {
        enterBtn.classList.add("enabled");
        enterBtn.disabled = false;
    } else {
        enterBtn.classList.remove("enabled");
        enterBtn.disabled = true;
    }
}

terms?.addEventListener("change", updateButton);
privacy?.addEventListener("change", updateButton);

enterBtn?.addEventListener("click", () => {
    markVisited();
    document.getElementById("login-gate").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("login-gate").remove();
        document.getElementById("site-content").style.display = "block";
    }, 600);
});

/* ---------------------------------------------------------
   12. SAVE GAME BUTTON
--------------------------------------------------------- */

document.getElementById("saveGameBtn")?.addEventListener("click", () => {
    saveProgress("spiritAnimal", getSpiritAnimal());
    saveProgress("evolutionStage", getEvolutionStage());
    saveProgress("mood", getMood());
    saveProgress("energy", getEnergy());
    saveProgress("quests", getCompletedQuests());
    saveProgress("rituals", getCompletedRituals());
    saveProgress("theme", getTheme());
    saveProgress("username", getUsername());
    saveProgress("hasVisited", true);

    alert("✨ Your progress has been saved to the Grimoire.");
});

/* ---------------------------------------------------------
   13. ERASE PROGRESS RITUAL
--------------------------------------------------------- */

const eraseModal = document.getElementById("erase-modal");
const eraseBtn = document.getElementById("eraseRitualBtn");
const confirmErase = document.getElementById("confirmErase");
const cancelErase = document.getElementById("cancelErase");

eraseBtn?.addEventListener("click", () => {
    eraseModal.style.display = "flex";
});

cancelErase?.addEventListener("click", () => {
    eraseModal.style.display = "none";
});

confirmErase?.addEventListener("click", () => {
    resetProgress();
    eraseModal.style.display = "none";
    alert("🜂 The Ritual of Forgetting is complete. All progress has been erased.");
    location.reload();
});

/* ---------------------------------------------------------
   14. FLOATING ARCANE SIGILS
--------------------------------------------------------- */

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

/* ---------------------------------------------------------
   SPIRIT SHIMMER PARTICLES
--------------------------------------------------------- */

function spawnShimmer() {
    const frame = document.getElementById("spirit-image-frame");
    if (!frame) return;

    for (let i = 0; i < 4; i++) {
        const s = document.createElement("div");
        s.classList.add("spirit-shimmer");

        s.style.left = (Math.random() * 90 + 5) + "%";
        s.style.top = (Math.random() * 90 + 5) + "%";
        s.style.animationDuration = (2 + Math.random() * 2) + "s";

        frame.appendChild(s);
        setTimeout(() => s.remove(), 3000);
    }
}

setInterval(spawnShimmer, 1200);

/* ---------------------------------------------------------
   15. MAGICAL CURSOR TRAIL
--------------------------------------------------------- */

document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 800);
});

/* ---------------------------------------------------------
   SANCTUARY LOGIC
--------------------------------------------------------- */

const usernameInput = document.getElementById("username-input");
const saveNameBtn = document.getElementById("saveNameBtn");
const currentSpiritLabel = document.getElementById("current-spirit");
const spiritImage = document.getElementById("spirit-image");
const spiritPlaceholder = document.getElementById("spirit-placeholder");
const evolutionLabel = document.getElementById("evolution-label");
const evolveBtn = document.getElementById("evolveBtn");
const moodLabel = document.getElementById("mood-label");
const energyBar = document.getElementById("energy-bar");
const energyLabel = document.getElementById("energy-label");

const spiritButtons = document.querySelectorAll(".spirit-choice");
const moodButtons = document.querySelectorAll(".status-block button[data-mood]");
const restBtn = document.getElementById("restBtn");
const ritualCostBtn = document.getElementById("ritualCostBtn");
const questButtons = document.querySelectorAll(".quest-complete");
const ritualButtons = document.querySelectorAll(".ritual-complete");

/* ---------------------------------------------------------
   SPIRIT AURA LOGIC
--------------------------------------------------------- */

const aura = document.getElementById("spirit-aura");

function updateAura(spirit) {
    if (!aura) return;

    aura.className = ""; // clear old aura

    switch (spirit) {
        case "wolf":
            aura.classList.add("aura-wolf");
            break;
        case "owl":
            aura.classList.add("aura-owl");
            break;
        case "stag":
            aura.classList.add("aura-stag");
            break;
        case "serpent":
            aura.classList.add("aura-serpent");
            break;
        case "fox":
            aura.classList.add("aura-fox");
            break;
        default:
            aura.classList.add("aura-default");
    }
}

// Map spirit → image path
const spiritImages = {
    wolf: "assets/creatures/wolf-stage1.png",
    owl: "assets/creatures/owl-stage1.png",
    stag: "assets/creatures/stag-stage1.png",
    serpent: "assets/creatures/serpent-stage1.png",
    fox: "assets/creatures/fox-stage1.png"
};

// Evolution labels
const evolutionStages = [
    "Unawakened",
    "Awakened",
    "Bonded",
    "Ascended"
];

// Initialize sanctuary from saved data
function updateAura(spirit) {
    if (!aura) return;

    aura.className = ""; // reset

    // Base species aura
    aura.classList.add(`aura-${spirit || "default"}`);

    // Animated pulse
    aura.classList.add("aura-animated");

    // Evolution intensity
    const stage = getEvolutionStage();
    aura.classList.add(`aura-stage-${stage}`);

    // Mood tint
    const mood = getMood();
    aura.classList.add(`aura-mood-${mood}`);
}

function formatSpiritName(key) {
    switch (key) {
        case "wolf": return "Lunar Wolf";
        case "owl": return "Oracle Owl";
        case "stag": return "Verdant Stag";
        case "serpent": return "Astral Serpent";
        case "fox": return "Ember Fox";
        default: return "Unknown Spirit";
    }
}

function updateSpiritImage(spirit, stage) {
    if (!spiritImage || !spiritPlaceholder) return;

    const basePath = `assets/creatures/${spirit}-stage${stage}.png`;
    spiritImage.src = basePath;
    spiritImage.style.display = "block";
    spiritPlaceholder.style.display = "none";
}

function updateEnergyUI(value) {
    const clamped = Math.max(0, Math.min(100, value));
    setEnergy(clamped);
    if (energyBar) energyBar.style.width = clamped + "%";
    if (energyLabel) energyLabel.textContent = clamped;
}

// Name saving
saveNameBtn?.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (!name) return;
    setUsername(name);
    alert(`✨ The Grimoire now knows you as ${name}.`);
});

// Spirit selection
spiritButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const animal = btn.getAttribute("data-animal");
        if (!animal) return;
        setSpiritAnimal(animal);
        setEvolutionStage(1);
        currentSpiritLabel.textContent = formatSpiritName(animal);
        evolutionLabel.textContent = evolutionStages[1];
        updateSpiritImage(animal, 1);
       updateAura(animal);
        completeQuest("q1");
        alert(`A pact is sealed with the ${formatSpiritName(animal)}.`);
    });
});

// Evolution
evolveBtn?.addEventListener("click", () => {
    let stage = getEvolutionStage();
    if (stage >= evolutionStages.length - 1) {
        alert("Your spirit has reached its highest form.");
        return;
    }
    stage++;
    setEvolutionStage(stage);
    evolutionLabel.textContent = evolutionStages[stage];

    const spirit = getSpiritAnimal();
    if (spirit) updateSpiritImage(spirit, stage);
   updateAura(getSpiritAnimal());
});

// Mood
moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const mood = btn.getAttribute("data-mood");
        if (!mood) return;
        setMood(mood);
        moodLabel.textContent = mood;
    });
});

// Energy
restBtn?.addEventListener("click", () => {
    const energy = getEnergy();
    updateEnergyUI(energy + 20);
});

ritualCostBtn?.addEventListener("click", () => {
    const energy = getEnergy();
    updateEnergyUI(energy - 15);
});

// Quests
questButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const li = btn.closest("li");
        const id = li?.getAttribute("data-quest");
        if (!id) return;
        completeQuest(id);
        btn.disabled = true;
        btn.textContent = "Completed";
    });
});

// Rituals
ritualButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const li = btn.closest("li");
        const id = li?.getAttribute("data-ritual");
        if (!id) return;
        completeRitual(id);
        btn.disabled = true;
        btn.textContent = "Performed";
    });

   aura.classList.add("aura-flare");
setTimeout(() => aura.classList.remove("aura-flare"), 2000);

   ritualButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const li = btn.closest("li");
        const id = li?.getAttribute("data-ritual");
        if (!id) return;

        completeRitual(id);
        btn.disabled = true;
        btn.textContent = "Performed";

        // Aura flare
        aura.classList.add("aura-flare");
        setTimeout(() => aura.classList.remove("aura-flare"), 2000);
    });
});

});

// Run on load (after theme + body fade)
window.addEventListener("load", initSanctuary);

