function startCelebration() {
  document.getElementById('page1').classList.remove('active');
  showPage(2);
  playMusic();
  showConfetti();
  startHearts();
}

function showPage(n) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + n).classList.add('active');

  // Stop all songs
  const songs = ['bdaySong', 'page2Song', 'gameSong', 'endSong'];
  songs.forEach(id => {
    const s = document.getElementById(id);
    s.pause();
    s.currentTime = 0;
  });

  // Play specific song for each page
  if (n === 1) playSong('bdaySong');
  if (n === 2) playSong('page2Song');
  if (n === 4) playSong('gameSong');
  if (n === 5) playSong('endSong');
}

function playSong(id) {
  const s = document.getElementById(id);
  s.play().catch(() => console.log("Tap to allow music 🎶"));
}



function startHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 400);
}

const secretNum = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
  const g = +document.getElementById('guessInput').value;
  document.getElementById('guessResult').textContent =
    g === secretNum ? "🎉 Correct, Jiya!" : "❌ Nope, try again!";
}

function rps(user) {
  const choices = ["rock", "paper", "scissors"];
  const comp = choices[Math.floor(Math.random() * 3)];
  let res = "";
  if (user === comp) res = "It's a tie!";
  else if ((user === "rock" && comp === "scissors") || (user === "paper" && comp === "rock") || (user === "scissors" && comp === "paper")) res = "🎉 You win!";
  else res = "💻 Computer wins!";
  document.getElementById('rpsResult').textContent = `You: ${user} | Computer: ${comp} → ${res}`;
}

let heartClicks = 0;
function startHeartGame() {
  heartClicks = 0;
  const area = document.getElementById('heartArea');
  area.innerHTML = '';
  const heart = document.createElement('span');
  heart.textContent = "💖";
  heart.style.fontSize = "2em";
  heart.style.cursor = "pointer";
  heart.onclick = () => { heartClicks++; };
  area.appendChild(heart);
  setTimeout(() => {
    area.innerHTML = '';
    document.getElementById('heartScore').textContent = `You clicked ${heartClicks} times! ❤️`;
  }, 5000);
}

function rickroll() {
  alert("😂 Gotcha, Jiya! Happy Birthday!");
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
// 🧠 Memory Match Game
function startMemoryGame() {
  const emojis = ['🎂', '🎉', '🎁', '💖', '🌸', '🍰'];
  const pairs = [...emojis, ...emojis].sort(() => 0.5 - Math.random());
  const game = document.getElementById('memoryGame');
  const result = document.getElementById('memoryResult');
  game.innerHTML = '';
  result.textContent = '';

  let first = null;
  let second = null;
  let matched = 0;

  pairs.forEach((emoji, i) => {
    const card = document.createElement('span');
    card.textContent = '❔';
    card.style.cursor = 'pointer';
    card.style.margin = '5px';
    card.onclick = () => {
      if (card.textContent !== '❔' || second) return;
      card.textContent = emoji;

      if (!first) {
        first = { card, emoji };
      } else {
        second = { card, emoji };
        if (first.emoji === second.emoji) {
          matched += 2;
          first = second = null;
          if (matched === pairs.length) result.textContent = "🎉 You matched all emojis!";
        } else {
          setTimeout(() => {
            first.card.textContent = '❔';
            second.card.textContent = '❔';
            first = second = null;
          }, 700);
        }
      }
    };
    game.appendChild(card);
  });
}

// ⚡ Quick Click Challenge
let clickCountValue = 0;
let gameRunning = false;

function countClicks() {
  const btn = document.getElementById('clickButton');
  const countText = document.getElementById('clickCount');

  if (!gameRunning) {
    clickCountValue = 0;
    gameRunning = true;
    countText.textContent = "Go! You have 5 seconds!";
    setTimeout(() => {
      gameRunning = false;
      countText.textContent = `⏱️ Time's up! You clicked ${clickCountValue} times! 🎯`;
    }, 5000);
  } else {
    clickCountValue++;
    countText.textContent = `Clicks: ${clickCountValue}`;
  }
}

