.theme-grimoire {
    background:
        url("assets/backgrounds/grimoire-texture.png"),
        radial-gradient(circle at center, #2a0033, #0a0011);
    background-size: cover;
    background-blend-mode: overlay;
}
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
}
<div class="magic-particles"></div>
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
}
.panel::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("assets/effects/runes.png") center/contain no-repeat;
    opacity: 0.15;
    animation: rotateRunes 40s linear infinite;
}

@keyframes rotateRunes {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
nav button, .actions button {
    background: rgba(80, 0, 120, 0.6);
    border: 1px solid rgba(200, 120, 255, 0.6);
    color: #fff;
    box-shadow: 0 0 10px rgba(200, 120, 255, 0.4);
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
}

nav button:hover, .actions button:hover {
    transform: scale(1.15);
    box-shadow: 0 0 20px rgba(220, 160, 255, 0.8);
}
<link href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet">
h1, h2 {
    font-family: "Cinzel Decorative", serif;
}

body {
    font-family: "Uncial Antiqua", serif;
}
body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle, transparent 60%, rgba(0,0,0,0.7));
}
