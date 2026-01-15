[cursor code.txt](https://github.com/user-attachments/files/24652683/cursor.code.txt)[!DOCTYPE html.txt](https://github.com/user-attachments/files/24652361/DOCTYPE.html.txt)
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grimoire of Divination</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Grimoire of Divination</h1>
    <p>Study your Craft, tend your spirit animal, and explore the arts of divination.</p>
    <nav>
      <button data-section="home">Home</button>
      <button data-section="grimoire">Grimoire</button>
      <button data-section="games">Games</button>
      <button data-section="library">Library</button>
      <button data-section="profile">Profile</button>
    </nav>
  </header>

  <main>
    <!-- HOME -->
    <section id="home" class="active">
      <h2>Welcome, Seeker</h2>
      <p>Enter a living grimoire where moonlight, forest spirits, and ancient symbols guide your path.</p>
    </section>

    <!-- PROFILE -->
    <section id="profile">
      <h2>Your Magical Profile</h2>
      <form id="profile-form">
        <label>
          Spiritual / Soul Name:
          <input type="text" id="spirit-name" required>
        </label>
        <label>
          Age:
          <input type="number" id="age" min="1" max="999">
        </label>
        <label>
          Choose a Spirit Animal:
          <select id="spirit-animal">
            <option value="Crow">Crow</option>
            <option value="Wolf">Wolf</option>
            <option value="Serpent">Serpent</option>
            <option value="Stag">Stag</option>
            <option value="Owl">Owl</option>
          </select>
        </label>
        <button type="submit">Save Profile</button>
      </form>
      <div id="profile-display"></div>
      <div id="pet-status"></div>
    </section>

    <!-- GRIMOIRE -->
    <section id="grimoire">
      <h2>Grimoire</h2>
      <div class="tabs">
        <button data-tab="herbs">Herbs</button>
        <button data-tab="crystals">Crystals</button>
        <button data-tab="potions">Potions</button>
        <button data-tab="correspondences">Correspondences</button>
        <button data-tab="tarot">Tarot</button>
        <button data-tab="zodiac">Zodiac</button>
        <button data-tab="notes">Notepad</button>
        <button data-tab="unlocked">Unlocked Recipes</button>
      </div>
      <div id="grimoire-content">
        <p>Select a topic above to begin exploring.</p>
      </div>

      <!-- Notepad UI (shown when Notes tab is active) -->
      <div id="notepad-wrapper" class="hidden">
        <h3>Personal Notepad</h3>
        <div id="notepad-controls">
          <label>Font:
            <select id="note-font">
              <option value="Georgia">Georgia</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
            </select>
          </label>
          <label>Size:
            <select id="note-size">
              <option value="14px">14px</option>
              <option value="16px" selected>16px</option>
              <option value="18px">18px</option>
            </select>
          </label>
          <label>Text Color:
            <input type="color" id="note-color" value="#f5e9ff">
          </label>
          <label>Background:
            <input type="color" id="note-bg" value="#12081b">
          </label>
        </div>
        <textarea id="notepad" placeholder="Write your spells, dreams, and insights here..."></textarea>
      </div>
    </section>

    <!-- GAMES -->
    <section id="games">
      <h2>Magical Games</h2>

      <div class="game">
        <h3>Potion Mixer</h3>
        <p>Click ingredients to add them to the cauldron, then brew.</p>
        <div class="ingredients">
          <button class="ingredient" data-name="rose petals">Rose Petals</button>
          <button class="ingredient" data-name="moon water">Moon Water</button>
          <button class="ingredient" data-name="amethyst dust">Amethyst Dust</button>
          <button class="ingredient" data-name="sage leaf">Sage Leaf</button>
        </div>
        <div class="cauldron">
          <strong>Cauldron:</strong>
          <ul id="cauldron-list"></ul>
        </div>
        <button id="brew-potion">Brew</button>
        <div id="potion-result"></div>
      </div>

      <div class="game">
        <h3>Crystal & Herb Alchemy</h3>
        <p>Combine a crystal and an herb to reveal their correspondence.</p>
        <label>Crystal:
          <select id="alchemy-crystal">
            <option value="amethyst">Amethyst</option>
            <option value="rose-quartz">Rose Quartz</option>
            <option value="clear-quartz">Clear Quartz</option>
          </select>
        </label>
        <label>Herb:
          <select id="alchemy-herb">
            <option value="lavender">Lavender</option>
            <option value="sage">Sage</option>
            <option value="rosemary">Rosemary</option>
          </select>
        </label>
        <button id="alchemy-combine">Reveal</button>
        <div id="alchemy-result"></div>
      </div>

      <div class="game">
        <h3>Spirit Animal Companion</h3>
        <p>Offer gifts to your spirit animal.</p>
        <div class="offerings">
          <button class="offering" data-mood="happy">Offer Crystal</button>
          <button class="offering" data-mood="calm">Offer Herb</button>
          <button class="offering" data-mood="energized">Offer Candle Flame</button>
        </div>
        <div id="pet-status-game"></div>
      </div>
    </section>

    <!-- LIBRARY -->
    <section id="library">
      <h2>Library of Divination</h2>
      <ul>
        <li>Origins of Tarot</li>
        <li>Elements and Their Guardians</li>
        <li>History of Crystal Divination</li>
      </ul>
    </section>
  </main>

  <!-- Ritual circle visual hook -->
  <div id="ritual-circle"></div>

  <script src="script.js"></script>
</body>
</html>[body {.txt](https://github.com/user-attachments/files/24652366/body.txt)
body {
  margin: 0;
  font-family: "Georgia", serif;
  background: radial-gradient(circle at top, #1b1026, #050308);
  color: #f5e9ff;
  min-height: 100vh;
}

/* Hybrid sky + season classes (can be layered later) */
.sky-day { background: linear-gradient(#87ceeb, #1b1026); }
.sky-night { background: radial-gradient(circle at top, #0a0a1a, #000000); }
.sky-fullmoon { box-shadow: inset 0 0 80px rgba(200, 200, 255, 0.4); }

.season-winter { background: radial-gradient(circle at top, #0b0f33, #000000); }
.season-spring { background: radial-gradient(circle at top, #1e402f, #0a1f14); }
.season-summer { background: radial-gradient(circle at top, #3b1f0a, #120800); }
.season-autumn { background: radial-gradient(circle at top, #402012, #1a0a05); }

header {
  text-align: center;
  padding: 1.5rem;
  border-bottom: 1px solid #5b3b7a;
  background: rgba(10, 4, 20, 0.9);
}

h1 {
  margin: 0;
  font-size: 2.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

nav {
  margin-top: 1rem;
}

nav button {
  margin: 0 0.3rem;
  padding: 0.4rem 0.8rem;
  background: #2b163d;
  color: #f5e9ff;
  border: 1px solid #7b4fb3;
  border-radius: 4px;
  cursor: pointer;
}

nav button:hover {
  background: #3b2052;
}

main {
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto 3rem;
}

/* Sections + transitions */
section {
  display: none;
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

section.active {
  display: block;
  opacity: 1;
  transform: scale(1);
  animation: glowIn 0.8s ease;
}

section.fading-out {
  opacity: 0;
  transform: scale(0.98);
}

@keyframes glowIn {
  0% { box-shadow: 0 0 0 rgba(180, 120, 255, 0); }
  50% { box-shadow: 0 0 20px rgba(180, 120, 255, 0.4); }
  100% { box-shadow: 0 0 0 rgba(180, 120, 255, 0); }
}

/* Tabs */
.tabs {
  margin: 1rem 0;
}

.tabs button {
  margin: 0.2rem;
  padding: 0.3rem 0.6rem;
  background: #241233;
  color: #f5e9ff;
  border: 1px solid #6a3f9a;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.tabs button:hover {
  background: #342046;
}

/* Games */
.game {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid #6a3f9a;
  border-radius: 8px;
  background: rgba(15, 6, 30, 0.9);
}

.ingredients button,
.offering,
#alchemy-combine,
#brew-potion,
#profile-form button {
  margin: 0.2rem;
  padding: 0.4rem 0.8rem;
  background: #3b2052;
  color: #f5e9ff;
  border: 1px solid #7b4fb3;
  border-radius: 4px;
  cursor: pointer;
}

.ingredients button:hover,
.offering:hover,
#alchemy-combine:hover,
#brew-potion:hover,
#profile-form button:hover {
  background: #4a2a68;
}

.cauldron {
  margin-top: 0.8rem;
}

#potion-result,
#alchemy-result,
#profile-display,
#pet-status,
#pet-status-game {
  margin-top: 0.8rem;
  font-style: italic;
}

/* Forms */
form label {
  display: block;
  margin: 0.5rem 0;
}

input,
select,
textarea {
  width: 100%;
  max-width: 400px;
  padding: 0.3rem;
  margin-top: 0.2rem;
  border-radius: 4px;
  border: 1px solid #7b4fb3;
  background: #12081b;
  color: #f5e9ff;
}

/* Notepad */
#notepad-wrapper.hidden {
  display: none;
}

#notepad-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  background: rgba(20, 10, 35, 0.7);
  padding: 0.8rem;
  border: 1px solid #6a3f9a;
  border-radius: 6px;
}

#notepad-controls label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

#notepad {
  width: 100%;
  height: 250px;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #7b4fb3;
  background: #12081b;
  color: #f5e9ff;
  resize: vertical;
  font-family: Georgia, serif;
  font-size: 16px;
}

/* Ritual circle */
#ritual-circle {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%) scale(0);
  border: 2px solid #b48cff;
  border-radius: 50%;
  box-shadow: 0 0 20px #b48cff;
  opacity: 0;
  pointer-events: none;
}
@keyframes ritualSummon {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.2); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
}[NAVIGATION + ANIMATED TRANSITIONS.txt](https://github.com/user-attachments/files/24652369/NAVIGATION.%2B.ANIMATED.TRANSITIONS.txt)// NAVIGATION + ANIMATED TRANSITIONS
const navButtons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll("main section");
let currentSection = document.querySelector("section.active");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    const newSection = document.getElementById(target);
    if (!newSection || newSection === currentSection) return;

    currentSection.classList.add("fading-out");
    setTimeout(() => {
      currentSection.classList.remove("active", "fading-out");
      newSection.classList.add("active");
      currentSection = newSection;
    }, 600);
  });
});

// PROFILE + PET
const profileForm = document.getElementById("profile-form");
const profileDisplay = document.getElementById("profile-display");
const petStatus = document.getElementById("pet-status");
const petStatusGame = document.getElementById("pet-status-game");

function loadProfile() {
  const saved = JSON.parse(localStorage.getItem("grimoireProfile") || "null");
  if (saved) {
    const text = `Welcome, ${saved.spiritName || "Seeker"} (Age ${saved.age || "?"}), your spirit animal is the ${saved.spiritAnimal}.`;
    profileDisplay.textContent = text;
    if (petStatus) petStatus.textContent = `Your ${saved.spiritAnimal} awaits your offerings.`;
    if (petStatusGame) petStatusGame.textContent = `Your ${saved.spiritAnimal} watches you with curious eyes.`;
  }
}

if (profileForm) {
  profileForm.addEventListener("submit", e => {
    e.preventDefault();
    const spiritName = document.getElementById("spirit-name").value.trim();
    const age = document.getElementById("age").value;
    const spiritAnimal = document.getElementById("spirit-animal").value;

    const profile = { spiritName, age, spiritAnimal };
    localStorage.setItem("grimoireProfile", JSON.stringify(profile));
    loadProfile();
  });
}
loadProfile();

// GRIMOIRE CONTENT
const grimoireTabs = document.querySelectorAll(".tabs button");
const grimoireContent = document.getElementById("grimoire-content");
const notepadWrapper = document.getElementById("notepad-wrapper");

const grimoireData = {
  herbs: "Herbs: lavender for calm, sage for cleansing, rosemary for memory…",
  crystals: "Crystals: amethyst for intuition, rose quartz for love, clear quartz for amplification…",
  potions: "Potions: combine herbs, crystals, and intention to create magical brews.",
  correspondences: "Correspondences: links between colors, planets, days, elements, and tools.",
  tarot: "Tarot: archetypes, spreads, and stories woven through 78 cards.",
  zodiac: "Zodiac: signs, compatibilities, and ruling planets.",
};

grimoireTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const key = tab.getAttribute("data-tab");

    // Notepad tab
    if (key === "notes") {
      notepadWrapper.classList.remove("hidden");
      grimoireContent.innerHTML = "<p>Your personal notes are bound to this grimoire.</p>";
      setTimeout(loadNotepad, 50);
      return;
    } else {
      notepadWrapper.classList.add("hidden");
    }

    // Unlocked recipes tab
    if (key === "unlocked") {
      const unlocked = JSON.parse(localStorage.getItem("unlockedRecipes") || "[]");
      if (!unlocked.length) {
        grimoireContent.innerHTML = "<h3>Unlocked Recipes</h3><p>You haven’t unlocked any recipes yet.</p>";
      } else {
        grimoireContent.innerHTML =
          "<h3>Unlocked Recipes</h3><ul>" +
          unlocked.map(r => `<li>${r}</li>`).join("") +
          "</ul>";
      }
      return;
    }

    grimoireContent.textContent = grimoireData[key] || "Content coming soon.";
  });
});

// POTION MIXER
const ingredientButtons = document.querySelectorAll(".ingredient");
const cauldronList = document.getElementById("cauldron-list");
const brewButton = document.getElementById("brew-potion");
const potionResult = document.getElementById("potion-result");

let cauldronIngredients = [];

ingredientButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    cauldronIngredients.push(name);
    const li = document.createElement("li");
    li.textContent = name;
    cauldronList.appendChild(li);
  });
});

// Moon phase helpers (simple)
function getMoonPhaseIndex() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const c = Math.floor(365.25 * year);
  const e = Math.floor(30.6 * (month + 1));
  const jd = c + e + day - 694039.09;
  const phase = jd / 29.53;
  return Math.floor((phase - Math.floor(phase)) * 8); // 0–7
}
function getMoonName() {
  const names = [
    "New Moon",
    "Waxing Crescent",
    "First Quarter",
    "Waxing Gibbous",
    "Full Moon",
    "Waning Gibbous",
    "Last Quarter",
    "Waning Crescent"
  ];
  return names[getMoonPhaseIndex()];
}

// Unlockable recipes
const recipes = {
  "rose petals+moon water": {
    name: "Love Charm",
    result: "Soft pink glow, attracts gentle connections.",
    unlock: true
  },
  "amethyst dust+moon water": {
    name: "Dream Sight",
    result: "Violet mist, enhances prophetic dreams.",
    unlock: () => getMoonName() === "Full Moon"
  },
  "sage leaf+amethyst dust": {
    name: "Astral Shield",
    result: "Creates a shimmering protective aura.",
    unlock: () => getMoonName().includes("Waxing")
  }
};

function unlockRecipe(name) {
  const unlocked = JSON.parse(localStorage.getItem("unlockedRecipes") || "[]");
  if (!unlocked.includes(name)) {
    unlocked.push(name);
    localStorage.setItem("unlockedRecipes", JSON.stringify(unlocked));
  }
}

if (brewButton) {
  brewButton.addEventListener("click", () => {
    if (!cauldronIngredients.length) {
      potionResult.textContent = "Add some ingredients first.";
      return;
    }
    const key = cauldronIngredients.sort().join("+").toLowerCase();
    const recipe = recipes[key];

    if (!recipe) {
      potionResult.textContent = "The potion fizzles mysteriously. No known recipe—yet.";
    } else {
      const canUnlock =
        recipe.unlock === true ||
        recipe.unlock === undefined ||
        (typeof recipe.unlock === "function" && recipe.unlock());

      if (canUnlock) {
        potionResult.textContent = `${recipe.name}: ${recipe.result}`;
        unlockRecipe(recipe.name);
        playRitualCircle();
      } else {
        potionResult.textContent =
          "The magic resists you. This recipe can only be brewed under special celestial conditions.";
      }
    }

    cauldronIngredients = [];
    cauldronList.innerHTML = "";
  });
}

// ALCHEMY GAME
const alchemyCrystal = document.getElementById("alchemy-crystal");
const alchemyHerb = document.getElementById("alchemy-herb");
const alchemyButton = document.getElementById("alchemy-combine");
const alchemyResult = document.getElementById("alchemy-result");

const alchemyCombos = {
  "amethyst+lavender": "Deep intuition and peaceful dreams.",
  "amethyst+sage": "Psychic protection and energetic cleansing.",
  "rose-quartz+lavender": "Gentle self-love and emotional healing.",
  "clear-quartz+rosemary": "Clarity of thought and amplified focus."
};

if (alchemyButton) {
  alchemyButton.addEventListener("click", () => {
    const c = alchemyCrystal.value;
    const h = alchemyHerb.value;
    const key = `${c}+${h}`;
    const meaning =
      alchemyCombos[key] ||
      "A new combination—record your own meaning in your grimoire.";
    alchemyResult.textContent = meaning;
  });
}

// SPIRIT ANIMAL OFFERINGS
const offeringButtons = document.querySelectorAll(".offering");

offeringButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.getAttribute("data-mood");
    const profile = JSON.parse(localStorage.getItem("grimoireProfile") || "null");
    if (!profile) {
      if (petStatusGame) {
        petStatusGame.textContent =
          "Create your profile and choose a spirit animal first.";
      }
      return;
    }
    const animal = profile.spiritAnimal;
    let text = "";
    if (mood === "happy") {
      text = `Your ${animal} glows with joy, purring in astral light.`;
    } else if (mood === "calm") {
      text = `Your ${animal} curls up peacefully, surrounded by soft blue light.`;
    } else if (mood === "energized") {
      text = `Your ${animal} dances in sparks of golden fire.`;
    }
    if (petStatusGame) petStatusGame.textContent = text;
    localStorage.setItem("grimoirePetMood", mood);
  });
});

// Load saved pet mood
(function restorePetMood() {
  const savedMood = localStorage.getItem("grimoirePetMood");
  const profile = JSON.parse(localStorage.getItem("grimoireProfile") || "null");
  if (!savedMood || !profile || !petStatusGame) return;
  const animal = profile.spiritAnimal;
  if (savedMood === "happy") {
    petStatusGame.textContent = `Your ${animal} still radiates joy from your last offering.`;
  } else if (savedMood === "calm") {
    petStatusGame.textContent = `Your ${animal} remains calm and serene.`;
  } else if (savedMood === "energized") {
    petStatusGame.textContent = `Your ${animal} still crackles with energy.`;
  }
})();

// NOTEPAD SYSTEM
function loadNotepad() {
  const note = localStorage.getItem("grimoireNotepad") || "";
  const font = localStorage.getItem("grimoireNoteFont") || "Georgia";
  const size = localStorage.getItem("grimoireNoteSize") || "16px";
  const color = localStorage.getItem("grimoireNoteColor") || "#f5e9ff";
  const bg = localStorage.getItem("grimoireNoteBG") || "#12081b";

  const textarea = document.getElementById("notepad");
  if (!textarea) return;

  textarea.value = note;
  textarea.style.fontFamily = font;
  textarea.style.fontSize = size;
  textarea.style.color = color;
  textarea.style.background = bg;

  document.getElementById("note-font").value = font;
  document.getElementById("note-size").value = size;
  document.getElementById("note-color").value = color;
  document.getElementById("note-bg").value = bg;

  textarea.addEventListener("input", () => {
    localStorage.setItem("grimoireNotepad", textarea.value);
  });

  document.getElementById("note-font").addEventListener("change", e => {
    textarea.style.fontFamily = e.target.value;
    localStorage.setItem("grimoireNoteFont", e.target.value);
  });

  document.getElementById("note-size").addEventListener("change", e => {
    textarea.style.fontSize = e.target.value;
    localStorage.setItem("grimoireNoteSize", e.target.value);
  });

  document.getElementById("note-color").addEventListener("change", e => {
    textarea.style.color = e.target.value;
    localStorage.setItem("grimoireNoteColor", e.target.value);
  });

  document.getElementById("note-bg").addEventListener("change", e => {
    textarea.style.background = e.target.value;
    localStorage.setItem("grimoireNoteBG", e.target.value);
  });
}

// SEASONAL BACKGROUND
function applySeasonalBackground() {
  const body = document.body;
  const now = new Date();
  const month = now.getMonth() + 1;

  body.classList.remove(
    "season-winter",
    "season-spring",
    "season-summer",
    "season-autumn"
  );

  if (month === 12 || month === 1 || month === 2) {
    body.classList.add("season-winter");
  } else if (month >= 3 && month <= 5) {
    body.classList.add("season-spring");
  } else if (month >= 6 && month <= 8) {
    body.classList.add("season-summer");
  } else if (month >= 9 && month <= 11) {
    body.classList.add("season-autumn");
  }
}

// SKY + MOON EFFECTS
function applySkyMagic() {
  const body = document.body;
  const hour = new Date().getHours();
  const moon = getMoonName();

  body.classList.remove("sky-day", "sky-night", "sky-fullmoon");

  if (hour >= 6 && hour < 18) {
    body.classList.add("sky-day");
  } else {
    body.classList.add("sky-night");
  }

  if (moon === "Full Moon") {
    body.classList.add("sky-fullmoon");
  }
}

// RITUAL CIRCLE
function playRitualCircle() {
  const circle = document.getElementById("ritual-circle");
  if (!circle) return;
  circle.style.animation = "ritualSummon 2s ease-out";
  setTimeout(() => {
    circle.style.animation = "none";
  }, 2000);
}

// INITIALIZE ENVIRONMENT
applySeasonalBackground();
applySkyMagic();
setInterval(applySeasonalBackground, 1000 * 60 * 60);
setInterval(applySkyMagic, 1000 * 60 * 10);[cursor code.txt](https://github.com/user-attachments/files/24652723/cursor.code.txt)

@keyframes pulse {
  0% { filter: drop-shadow(0 0 2px #00f); }
  50% { filter: drop-shadow(0 0 8px #0ff); }
  100% { filter: drop-shadow(0 0 2px #00f); }
}

body {
  cursor: url("assets/cursors/crystal-cursor.png") 16 16, auto;
  animation: pulse 2s infinite;
}
