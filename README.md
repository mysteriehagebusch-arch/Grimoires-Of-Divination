
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Grimoire of Divination</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Grimoire of Divination</h1>
    <p>Welcome to your magical learning hub and interactive spirit realm.</p>
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
      <p>Study your Craft, tend your spirit animal, and explore the arts of divination.</p>
    </section>

    <!-- PROFILE / LOGIN MOCK -->
    <section id="profile">
      <h2>Your Magical Profile</h2>
      <form id="profile-form">
        <label>
          Spiritual Name / Higher Power / Soul Name:
          <input type="text" id="spirit-name" required />
        </label>
        <label>
          Age:
          <input type="number" id="age" min="1" />
        </label>
        <label>
          Choose a Spirit Animal:
          <select id="spirit-animal">
		<option value="crow">
Crow</option>
		<option value="raven">
Raven</option>
            <option value="wolf">Wolf</option>
            <option value="owl">Owl</option>
            <option value="cat">Cat</option>
            <option value="dragon">Dragon</option>
          </select>
        </label>
        <button type="submit">Save Profile</button>
      </form>
      <div id="profile-display"></div>
    </section>

    <!-- GRIMOIRE -->
    <section id="grimoire">
      <h2>Grimoire</h2>
      <div class="tabs">
        <button data-tab="herbs">Herbs</button>
        <button data-tab="crystals">Crystals</button>
        <button data-tab="potions">Potions</button>
        <button data-tab="meanings">Meanings</button>
        <button data-tab="correspondences">Correspondences</button>
        <button data-tab="candles">Candles</button>
        <button data-tab="colors">Colors</button>
        <button data-tab="elements">Elements</button>
        <button data-tab="runes">Runes</button>
        <button data-tab="symbols">Symbols</button>
        <button data-tab="tarot">Tarot Cards</button>
        <button data-tab="crystal-balls">Crystal Balls</button>
        <button data-tab="zodiac">Zodiac</button>
        <button data-tab="numerology">Numerology</button>
        <button data-tab="astrology">Astrology</button>
        <button data-tab="horoscopes">Horoscopes</button>
        <button data-tab="letters-numbers">Letters & Number Meanings</button>
        <button data-tab="notes">Notepad</button>
        <button data-tab="ai">AI Question Bar</button>
      </div>
	    <div id="grimoire-content">
        <!-- Content will be swapped by JS -->
        <p>Select a topic above to begin exploring.</p>
      </div>
    </section>

    <!-- GAMES -->
    <section id="games">
      <h2>Magical Games</h2>

      <div class="game" id="potion-game">
        <h3>Potion Mixer</h3>
        <p>Drag ingredients into the cauldron to discover recipes.</p>
        <div class="ingredients">
          <button class="ingredient" data-name="rose petals">Rose Petals</button>
          <button class="ingredient" data-name="moon water">Moon Water</button>
          <button class="ingredient" data-name="amethyst dust">Amethyst Dust</button>
          <button class="ingredient" data-name="sage leaf">Sage Leaf</button>
        </div>
        <div class="cauldron">
          <p>Cauldron:</p>
          <ul id="cauldron-list"></ul>
          <button id="brew-potion">Brew</button>
        </div>
        <div id="potion-result"></div>
      </div>

      <div class="game" id="alchemy-game">
        <h3>Crystal & Herb Alchemy</h3>
        <p>Combine a crystal and an herb to reveal their correspondence.</p>
        <label>
          Crystal:
          <select id="alchemy-crystal">
            <option value="amethyst">Amethyst</option>
            <option value="rose-quartz">Rose Quartz</option>
            <option value="clear-quartz">Clear Quartz</option>
          </select>
        </label>
        <label>
          Herb:
          <select id="alchemy-herb">
            <option value="lavender">Lavender</option>
            <option value="sage">Sage</option>
            <option value="rosemary">Rosemary</option>
          </select>
        </label>
        <button id="alchemy-combine">Reveal</button>
        <div id="alchemy-result"></div>
      </div>

      <div class="game" id="spirit-pet-game">
        <h3>Spirit Animal Companion</h3>
        <p>Care for your spirit animal with offerings.</p>
        <p id="pet-status">No pet selected yet. Set one in your profile.</p>
        <button class="offering" data-mood="happy">Offer Crystal</button>
        <button class="offering" data-mood="calm">Offer Herb</button>
        <button class="offering" data-mood="energized">Offer Candle Flame</button>
      </div>
    </section>

    <!-- LIBRARY -->
    <section id="library">
      <h2>Library of Divination</h2>
      <p>Here you can add articles, history, and deeper magical theory later.</p>
      <ul>
        <li>Origins of Tarot</li>
        <li>Elements and Their Guardians</li>
        <li>History of Crystal Divination</li>
      </ul>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  font-family: "Georgia", serif;
  background: radial-gradient(circle at top, #1b1026, #050308);
  color: #f5e9ff;
}

header {
  text-align: center;
  padding: 1.5rem;
  border-bottom: 1px solid #5b3b7a;
  background: rgba(10, 4, 20, 0.9);
}

h1 {
  margin: 0;
  font-size: 2.2rem;
  letter-spacing: 0.1em;
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
}

section {
  display: none;
}

section.active {
  display: block;
}

.tabs {
  margin-bottom: 1rem;
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
#brew-potion {
  margin: 0.2rem;
  padding: 0.4rem 0.8rem;
  background: #3b2052;
  color: #f5e9ff;
  border: 1px solid #7b4fb3;
  border-radius: 4px;
  cursor: wand;
}

.cauldron {
  margin-top: 0.8rem;
}

#potion-result,
#alchemy-result,
#profile-display,
#pet-status {
  margin-top: 0.8rem;
  font-style: italic;
}

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
// NAVIGATION
const navButtons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll("main section");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    sections.forEach(sec => {
      sec.classList.toggle("active", sec.id === target);
    });
  });
});

// PROFILE + localStorage
const profileForm = document.getElementById("profile-form");
const profileDisplay = document.getElementById("profile-display");
const petStatus = document.getElementById("pet-status");

function loadProfile() {
  const saved = JSON.parse(localStorage.getItem("grimoireProfile") || "null");
  if (saved) {
    profileDisplay.textContent =
      `Welcome, ${saved.spiritName} (Age ${saved.age}), your spirit animal is the ${saved.spiritAnimal}.`;
    if (petStatus) {
      petStatus.textContent = `Your ${saved.spiritAnimal} awaits your offerings.`;
    }
  }
}

if (profileForm) {
  profileForm.addEventListener("submit", e => {
    e.preventDefault();
    const spiritName = document.getElementById("spirit-name").value;
    const age = document.getElementById("age").value;
    const spiritAnimal = document.getElementById("spirit-animal").value;

    const profile = { spiritName, age, spiritAnimal };
    localStorage.setItem("grimoireProfile", JSON.stringify(profile));
    loadProfile();
  });
}

loadProfile();

// GRIMOIRE TABS (placeholder content)
const grimoireTabs = document.querySelectorAll(".tabs button");
const grimoireContent = document.getElementById("grimoire-content");

const grimoireData = {
  herbs: "Herbs: lavender for calm, sage for cleansing, rosemary for memory...",
  crystals: "Crystals: amethyst for intuition, rose quartz for love, clear quartz for amplification...",
  potions: "Potions: combine herbs, crystals, and intention to create magical brews.",
  meanings: "Meanings: symbols, omens, and signs interpreted through your own intuition.",
  correspondences: "Correspondences: links between colors, planets, days, elements, and tools.",
  candles: "Candles: colors and flame behavior used for divination and spellwork.",
  colors: "Colors: each hue carries emotional and magical resonance.",
  elements: "Elements: Earth, Air, Fire, Water, Spirit—each with its own allies and tools.",
  runes: "Runes: ancient symbols used for divination and magic.",
  symbols: "Symbols: sigils, glyphs, and sacred geometry.",
  tarot: "Tarot: Major and Minor Arcana, archetypes, and spreads.",
  "crystal-balls": "Crystal balls: different colors for different focuses of scrying.",
  zodiac: "Zodiac: signs, matches, likes, dislikes, compatibilities, and ruling planets.",
  numerology: "Numerology: numbers as keys to personality and destiny.",
  astrology: "Astrology: planets, houses, aspects, and transits.",
  horoscopes: "Horoscopes: daily, weekly, and monthly energies.",
  "letters-numbers": "Letters & numbers: meanings in names, words, and repeating sequences.",
  notes: "Notepad coming soon: a place for your own spells and insights.",
  ai: "AI Question Bar: here you could later connect to an AI API to answer questions."
};

grimoireTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const key = tab.getAttribute("data-tab");
    grimoireContent.textContent = grimoireData[key] || "Content coming soon.";
  });
});

// POTION MIXER GAME
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

const recipes = {
  "rose petals+moon water": "Love Charm: soft pink glow, attracts gentle connections.",
  "amethyst dust+moon water": "Dream Sight: violet mist, enhances prophetic dreams.",
  "sage leaf+clear mind": "Cleansing Brew: clears stagnant energy."
};

if (brewButton) {
  brewButton.addEventListener("click", () => {
    if (cauldronIngredients.length === 0) {
      potionResult.textContent = "Add some ingredients first.";
      return;
    }
    const key = cauldronIngredients.sort().join("+").toLowerCase();
    const match = recipes[key] || "The potion fizzles mysteriously. No known recipe—yet.";
    potionResult.textContent = match;
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
    const meaning = alchemyCombos[key] || "A new combination—record your own meaning in your grimoire.";
    alchemyResult.textContent = meaning;
  });
}

// SPIRIT ANIMAL PET
const offeringButtons = document.querySelectorAll(".offering");

offeringButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.getAttribute("data-mood");
    const profile = JSON.parse(localStorage.getItem("grimoireProfile") || "null");
    if (!profile) {
      petStatus.textContent = "Create your profile and choose a spirit animal first.";
      return;
    }
    const animal = profile.spiritAnimal;
    if (mood === "happy") {
      petStatus.textContent = `Your ${animal} glows with joy, purring in astral light.`;
    } else if (mood === "calm") {
      petStatus.textContent = `Your ${animal} curls up peacefully, surrounded by soft blue light.`;
    } else if (mood === "energized") {
      petStatus.textContent = `Your ${animal} dances in sparks of golden fire.`;
    }
    localStorage.setItem("grimoirePetMood", mood);
  });
});

// Load saved pet mood
const savedMood = localStorage.getItem("grimoirePetMood");
if (savedMood && petStatus) {
  const profile = JSON.parse(localStorage.getItem("grimoireProfile") || "null");
  if (profile) {
    const animal = profile.spiritAnimal;
    if (savedMood === "happy") {
      petStatus.textContent = `Your ${animal} still radiates joy from your last offering.`;
    } else if (savedMood === "calm") {
      petStatus.textContent = `Your ${animal} remains calm and serene.`;
    } else if (savedMood === "energized") {
      petStatus.textContent = `Your ${animal} still crackles with energy.`;
    }
  }
}
notes: `
  <h3>Personal Notepad</h3>
  <div id="notepad-controls">
    <label>Font:
      <select id="note-font">
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Arial">Arial</option>
        <option value="Papyrus">Papyrus</option>
      </select>
    </label>

    <label>Size:
      <select id="note-size">
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
      </select>
    </label>

    <label>Text Color:
      <input type="color" id="note-color" />
    </label>

    <label>Background:
      <input type="color" id="note-bg" />
    </label>
  </div>

  <textarea id="notepad" placeholder="Write your spells, dreams, and insights here..."></textarea>
`#notepad-controls {
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
  height: 300px;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #7b4fb3;
  background: #12081b;
  color: #f5e9ff;
  resize: vertical;
  font-family: Georgia, serif;
  font-size: 16px;
}
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

// Activate notepad when Notes tab is clicked
grimoireTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    if (tab.getAttribute("data-tab") === "notes") {
      setTimeout(loadNotepad, 50);
    }
  });
});
/* WINTER SOLSTICE */
.season-winter {
  background: radial-gradient(circle at top, #0b0f33, #000000);
}

/* SPRING EQUINOX */
.season-spring {
  background: radial-gradient(circle at top, #1e402f, #0a1f14);
}

/* SUMMER SOLSTICE */
.season-summer {
  background: radial-gradient(circle at top, #3b1f0a, #120800);
}

/* AUTUMN EQUINOX */
.season-autumn {
  background: radial-gradient(circle at top, #402012, #1a0a05);
}
// SEASONAL BACKGROUND SYSTEM
function applySeasonalBackground() {
  const body = document.body;
  const now = new Date();
  const month = now.getMonth() + 1; // 1–12
  const day = now.getDate();

  // Remove old classes
  body.classList.remove("season-winter", "season-spring", "season-summer", "season-autumn");

  // Determine season by solstice/equinox periods
  // (Dates are approximate but work beautifully for visual themes)

  // WINTER SOLSTICE: Dec 1 – Feb 28
  if ((month === 12) || (month === 1) || (month === 2)) {
    body.classList.add("season-winter");
    return;
  }

  // SPRING EQUINOX: Mar 1 – May 31
  if (month >= 3 && month <= 5) {
    body.classList.add("season-spring");
    return;
  }

  // SUMMER SOLSTICE: Jun 1 – Aug 31
  if (month >= 6 && month <= 8) {
    body.classList.add("season-summer");
    return;
  }

  // AUTUMN EQUINOX: Sep 1 – Nov 30
  if (month >= 9 && month <= 11) {
    body.classList.add("season-autumn");
    return;
  }
}

// Run on page load
applySeasonalBackground();
setInterval(applySeasonalBackground, 1000 * 60 * 60);
/* Base state for all sections */
section {
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.6s ease, transform 0.6s ease;
  display: none;
}

/* When a section becomes active */
section.active {
  display: block;
  opacity: 1;
  transform: scale(1);
}

/* When a section is fading out */
section.fading-out {
  opacity: 0;
  transform: scale(0.98);
}
// ANIMATED PAGE TRANSITIONS
const navButtons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll("main section");
let currentSection = document.querySelector("section.active");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    const newSection = document.getElementById(target);

    if (newSection === currentSection) return;

    // Fade out current section
    currentSection.classList.add("fading-out");

    // After fade-out, hide it and show the new one
    setTimeout(() => {
      currentSection.classList.remove("active", "fading-out");

      newSection.classList.add("active");
      currentSection = newSection;
    }, 600); // match CSS transition time
  });
});
section.active {
  animation: glowIn 0.8s ease;
}

@keyframes glowIn {
  0% {
    box-shadow: 0 0 0px rgba(180, 120, 255, 0);
  }
  50% {
    box-shadow: 0 0 20px rgba(180, 120, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 0px rgba(180, 120, 255, 0);
  }
}
// MOON PHASE SYSTEM
function getMoonPhase() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // Simple moon phase algorithm (0–7)
  const c = Math.floor(365.25 * year);
  const e = Math.floor(30.6 * (month + 1));
  const jd = c + e + day - 694039.09; 
  const phase = jd / 29.53;
  const index = Math.floor((phase - Math.floor(phase)) * 8);

  return index; // 0=new, 4=full
}

function getMoonName() {
  const phase = getMoonPhase();
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
  return names[phase];
}

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

applySkyMagic();
setInterval(applySkyMagic, 1000 * 60 * 10); // update every 10 minutes
/* DAY SKY */
.sky-day {
  background: linear-gradient(#87ceeb, #1b1026);
}

/* NIGHT SKY */
.sky-night {
  background: radial-gradient(circle at top, #0a0a1a, #000000);
}

/* FULL MOON BOOST */
.sky-fullmoon {
  box-shadow: inset 0 0 80px rgba(200, 200, 255, 0.4);
}
// UNLOCKABLE RECIPES SYSTEM
function unlockRecipe(name) {
  const unlocked = JSON.parse(localStorage.getItem("unlockedRecipes") || "[]");
  if (!unlocked.includes(name)) {
    unlocked.push(name);
    localStorage.setItem("unlockedRecipes", JSON.stringify(unlocked));
  }
}

function isRecipeUnlocked(name) {
  const unlocked = JSON.parse(localStorage.getItem("unlockedRecipes") || "[]");
  return unlocked.includes(name);
}
const recipes = {
  "rose petals+moon water": {
    name: "Love Charm",
    result: "Soft pink glow, attracts gentle connections.",
    unlock: true
  },
  "amethyst dust+moon water": {
    name: "Dream Sight",
    result: "Violet mist, enhances prophetic dreams.",
    unlock: (getMoonName() === "Full Moon")
  },
  "sage leaf+amethyst dust": {
    name: "Astral Shield",
    result: "Creates a shimmering protective aura.",
    unlock: (getMoonName().includes("Waxing"))
  }
};
brewButton.addEventListener("click", () => {
  if (cauldronIngredients.length === 0) {
    potionResult.textContent = "Add some ingredients first.";
    return;
  }

  const key = cauldronIngredients.sort().join("+").toLowerCase();
  const recipe = recipes[key];

  if (!recipe) {
    potionResult.textContent = "The potion fizzles mysteriously. No known recipe—yet.";
  } else {
    if (recipe.unlock === true || recipe.unlock === undefined || recipe.unlock) {
      potionResult.textContent = `${recipe.name}: ${recipe.result}`;
      unlockRecipe(recipe.name);
    } else {
      potionResult.textContent = "The magic resists you. This recipe can only be brewed under special celestial conditions.";
    }
  }

  cauldronIngredients = [];
  cauldronList.innerHTML = "";
});
unlocked: "Your unlocked recipes will appear here."
if (key === "unlocked") {
  const unlocked = JSON.parse(localStorage.getItem("unlockedRecipes") || "[]");
  grimoireContent.innerHTML = "<h3>Unlocked Recipes</h3>" +
    (unlocked.length === 0
      ? "<p>You haven't unlocked any recipes yet.</p>"
      : "<ul>" + unlocked.map(r => `<li>${r}</li>`).join("") + "</ul>");
  return;
}

const spiritPet = {
  name: "wolf",
  level: 1,
  xp: 0,
  evolutionStage: 1,
  mood: "neutral",
  abilities: [],
};
function addXP(amount) {
  pet.xp += amount;
  if (pet.xp >= pet.level * 100) {
    pet.level++;
    pet.xp = 0;
    checkEvolution();
  }
}
const moonEffects = {
  "Full Moon": "Amplified magic",
  "New Moon": "Shadow properties",
  "Waxing": "Growth & attraction",
  "Waning": "Banishing & cleansing"
};
function applyMoonEffect(potion) {
  const moon = getMoonName();
  return potion.baseEffect + " + " + moonEffects[moon];
}
function setWeather(type) {
  document.body.classList.remove("rain", "storm", "aurora", "fog");
  document.body.classList.add(type);
}
.aurora::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #4ff, #8f8, #f8f);
  opacity: 0.2;
  animation: auroraFlow 10s infinite alternate;
}

@keyframes auroraFlow {
  0% { filter: blur(20px); }
  100% { filter: blur(40px); }
}
const constellations = {
  "The Wolf": { month: 1, secret: "Your spirit grows stronger." },
  "The Serpent": { month: 3, secret: "Transformation awaits." },
  "The Crown": { month: 6, secret: "A great achievement is near." }
};
function unlockConstellation(name) {
  const unlocked = JSON.parse(localStorage.getItem("stars") || "[]");
  if (!unlocked.includes(name)) {
    unlocked.push(name);
    localStorage.setItem("stars", JSON.stringify(unlocked));
  }
}
function updateSky() {
  const hour = new Date().getHours();

  document.body.classList.remove("sky-dawn", "sky-day", "sky-sunset", "sky-night");

  if (hour >= 5 && hour < 8) document.body.classList.add("sky-dawn");
  else if (hour >= 8 && hour < 17) document.body.classList.add("sky-day");
  else if (hour >= 17 && hour < 20) document.body.classList.add("sky-sunset");
  else document.body.classList.add("sky-night");
}
function generateLunarCalendar(month, year) {
  // Loop through days, calculate moon phase for each
}
<div id="ritual-circle"></div>
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
  animation: none;
}

@keyframes ritualSummon {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.2); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
}
function playRitualCircle() {
  const circle = document.getElementById("ritual-circle");
  circle.style.animation = "ritualSummon 2s ease-out";
  setTimeout(() => circle.style.animation = "none", 2000);
}


