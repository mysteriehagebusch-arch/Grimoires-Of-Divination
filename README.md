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
    </section>   <!-- PROFILE / LOGIN MOCK -->
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
