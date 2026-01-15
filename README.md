<!DOCTYPE html>
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
</html>
