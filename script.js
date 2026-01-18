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
    saveProgress("theme", theme);
}

function getTheme() {
    return loadProgress("theme", "theme-grimoire");
}

/* ---------------------------------------------------------
   7. INTRO ANIMATION — BODY FADE-IN
--------------------------------------------------------- */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("grimoire-open");
    }, 200);
});

/* ---------------------------------------------------------
   8. DUST PARTICLES DURING BOOK OPENING
--------------------------------------------------------- */

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

setTimeout(spawnDust, 300);

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

setTimeout(() => {
    const intro = document.getElementById("book-intro");
    if (intro) {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.remove();
        }, 600);
    }
}, 2600);

/* ---------------------------------------------------------
   11. LOGIN GATE LOGIC
--------------------------------------------------------- */

setTimeout(() => {
    if (!isReturningUser()) {
        const login = document.getElementById("login-gate");
        if (login) login.style.display = "flex";
    } else {
        document.getElementById("site-content").style.display = "block";
    }
}, 2600);

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

function setTheme(theme) {
    // Remove any existing theme classes
    document.body.classList.remove(
        "theme-grimoire",
        "theme-celestial",
        "theme-druidic",
        "theme-gothic"
    );

    // Add the new theme class
    document.body.classList.add(theme);

    // Persist choice
    saveProgress("theme", theme);
}
