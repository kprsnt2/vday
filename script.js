/* ===================================
   Valentine's Day Surprise - JavaScript
   =================================== */

// ============ Configuration ============
const VALENTINE_DAY = new Date('2026-02-14T00:00:00');
const START_DATE = new Date('2026-02-03T00:00:00');

// Romantic messages that rotate
const loveMessages = [
    "Every second brings me closer to celebrating our love...",
    "You are the reason my heart beats faster...",
    "Counting down the moments until I can hold you closer...",
    "My love for you grows stronger with each passing second...",
    "You make every day feel like Valentine's Day...",
    "Forever grateful to have you in my life...",
    "You are my today and all of my tomorrows...",
    "In you, I found my forever love..."
];

// Daily gifts content
const gifts = {
    1: {
        icon: "💌",
        title: "Day 1 - Love Letter",
        content: `<p>My Dearest Love,</p>
            <p>From the moment you walked into my life, everything changed. You brought color to my world and warmth to my heart.</p>
            <p>Every day with you is a gift I cherish. Your smile lights up my darkest days, and your love gives me strength I never knew I had.</p>
            <p>I fall more in love with you with each passing moment. Thank you for being my partner, my best friend, and my soulmate.</p>
            <p>Forever Yours,<br>💕 Your Loving Partner</p>`
    },
    2: {
        icon: "🌹",
        title: "Day 2 - Virtual Bouquet",
        content: `<p>A bouquet of roses for the most beautiful person in my life...</p>
            <p style="font-size: 3rem; margin: 20px 0;">🌹🌹🌹🌹🌹</p>
            <p style="font-size: 3rem; margin: 20px 0;">🌹🌹🌹🌹🌹</p>
            <p style="font-size: 3rem; margin: 20px 0;">🌹🌹🌹🌹🌹</p>
            <p>Each rose represents a reason I love you, but even this infinite garden wouldn't be enough...</p>`
    },
    3: {
        icon: "✨",
        title: "Day 3 - 10 Things I Love About You",
        content: `<ol class="love-list">
            <li>Your beautiful smile that brightens every room</li>
            <li>The way you laugh at my silly jokes</li>
            <li>Your kindness and compassion for others</li>
            <li>How you always know how to make me feel better</li>
            <li>Your strength and determination</li>
            <li>The way you look at me with those eyes</li>
            <li>Your incredible patience and understanding</li>
            <li>How you dance when you think no one's watching</li>
            <li>Your warm hugs that feel like home</li>
            <li>Simply everything about you!</li>
        </ol>`
    },
    4: {
        icon: "🎵",
        title: "Day 4 - Our Love Playlist",
        content: `<p>Songs that remind me of us...</p>
            <ul class="love-list">
            <li>"Perfect" - Ed Sheeran</li>
            <li>"All of Me" - John Legend</li>
            <li>"A Thousand Years" - Christina Perri</li>
            <li>"Can't Help Falling in Love" - Elvis Presley</li>
            <li>"Thinking Out Loud" - Ed Sheeran</li>
            <li>"At Last" - Etta James</li>
            <li>"Make You Feel My Love" - Adele</li>
            <li>"Endless Love" - Lionel Richie & Diana Ross</li>
            </ul>
            <p>Every song is our song when I'm with you 💕</p>`
    },
    5: {
        icon: "💝",
        title: "Day 5 - Romantic Poem",
        content: `<p style="font-style: italic;">
            In the garden of my heart,<br>
            You're the flower that stands apart.<br>
            Your petals soft, your colors bright,<br>
            You turn my darkness into light.<br><br>
            Through every storm and sunny day,<br>
            By your side I want to stay.<br>
            For in your love I've found my home,<br>
            No longer do I walk alone.<br><br>
            My heart beats only just for you,<br>
            In everything I say and do.<br>
            Forever yours, I'll always be,<br>
            For you're the one who sets me free.<br><br>
            💕 With All My Love 💕
        </p>`
    },
    6: {
        icon: "🌟",
        title: "Day 6 - Our Favorite Memories",
        content: `<p>Remember when...</p>
            <ul class="love-list">
            <li>We had that magical first date?</li>
            <li>We stayed up talking until sunrise?</li>
            <li>We laughed so hard we cried?</li>
            <li>We danced in the rain together?</li>
            <li>We discovered our favorite spot?</li>
            <li>We knew this was forever?</li>
            </ul>
            <p>Every moment with you becomes my favorite memory 🌟</p>`
    },
    7: {
        icon: "💫",
        title: "Day 7 - Love Quotes For You",
        content: `<ul class="love-list">
            <li>"I love you not only for what you are, but for what I am when I am with you."</li>
            <li>"You are my sun, my moon, and all my stars." - E.E. Cummings</li>
            <li>"In all the world, there is no heart for me like yours." - Maya Angelou</li>
            <li>"I have found the one whom my soul loves."</li>
            <li>"Whatever our souls are made of, yours and mine are the same." - Emily Brontë</li>
            </ul>
            <p>But my favorite quote is simply: I love you 💫</p>`
    },
    8: {
        icon: "🍫",
        title: "Day 8 - Virtual Chocolate Box",
        content: `<p>A sweet treat for my sweetheart...</p>
            <p style="font-size: 2.5rem; margin: 20px 0;">🍫🍬🍫🍬🍫</p>
            <p style="font-size: 2.5rem; margin: 20px 0;">🍬🍫🍬🍫🍬</p>
            <p style="font-size: 2.5rem; margin: 20px 0;">🍫🍬🍫🍬🍫</p>
            <p>These chocolates are sweet, but nothing compares to the sweetness you bring to my life!</p>
            <p><em>(Real chocolates coming on Valentine's Day! 😉)</em></p>`
    },
    9: {
        icon: "🎀",
        title: "Day 9 - Why You're My Soulmate",
        content: `<p>You are my soulmate because...</p>
            <ul class="love-list">
            <li>You understand me without words</li>
            <li>You accept me with all my flaws</li>
            <li>You make me want to be better every day</li>
            <li>You feel like home wherever we are</li>
            <li>You complete me in ways I never knew I needed</li>
            <li>You love me unconditionally</li>
            <li>You are the answer to all my prayers</li>
            </ul>
            <p>I knew from the start - you are my forever person 🎀</p>`
    },
    10: {
        icon: "💋",
        title: "Day 10 - Romantic Date Night IOU",
        content: `<div style="border: 2px dashed var(--pink); padding: 25px; border-radius: 15px; margin: 20px 0;">
            <h4 style="color: var(--pink); margin-bottom: 15px;">✨ OFFICIAL IOU COUPON ✨</h4>
            <p>This coupon entitles you to:</p>
            <p style="font-size: 1.5rem; margin: 15px 0;">One Romantic Date Night</p>
            <p>Including:</p>
            <ul class="love-list">
            <li>Dinner at your favorite restaurant</li>
            <li>A surprise activity of your choice</li>
            <li>Unlimited hugs and kisses</li>
            <li>My undivided attention all night</li>
            </ul>
            <p><em>Redeemable anytime! 💋</em></p>
            </div>`
    },
    11: {
        icon: "🔮",
        title: "Day 11 - Our Future Together",
        content: `<p>When I look into our future, I see...</p>
            <ul class="love-list">
            <li>Endless adventures together</li>
            <li>Lazy Sunday mornings in each other's arms</li>
            <li>Growing old while still making each other laugh</li>
            <li>Building our dreams side by side</li>
            <li>Facing every challenge as a team</li>
            <li>A lifetime of love and happiness</li>
            <li>More love than we can imagine</li>
            </ul>
            <p>Our best days are still ahead of us 🔮</p>`
    },
    14: {
        icon: "❤️",
        title: "Happy Valentine's Day!",
        content: `<p style="font-size: 3rem; margin: 20px 0;">💕🌹❤️🌹💕</p>
            <p>My Love,</p>
            <p>Today marks the celebration of love, and there's no one I'd rather celebrate with than you.</p>
            <p>You are my everything - my best friend, my partner, my home. Thank you for loving me and for letting me love you.</p>
            <p>Here's to us, to our love, and to forever! 🥂</p>
            <p style="font-size: 2rem; margin-top: 20px;">I LOVE YOU! ❤️</p>
            <p>Happy Valentine's Day, Beautiful!</p>`
    }
};

// Game emojis for memory matching
const gameEmojis = ['❤️', '💕', '🌹', '💝', '💖', '🦋', '🌸', '💗'];

// ============ DOM Elements ============
const heartsBg = document.getElementById('heartsBg');
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const loveMessageEl = document.getElementById('loveMessage');
const nextGiftTimeEl = document.getElementById('nextGiftTime');
const giftsGrid = document.getElementById('giftsGrid');
const giftCards = document.querySelectorAll('.gift-card');
const modal = document.getElementById('giftModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const gameBoard = document.getElementById('gameBoard');
const movesEl = document.getElementById('moves');
const matchesEl = document.getElementById('matches');
const restartBtn = document.getElementById('restartGame');
const gameMessageEl = document.getElementById('gameMessage');
const celebration = document.getElementById('celebration');
const playAgainBtn = document.getElementById('playAgain');

// ============ Game State ============
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let canFlip = true;

// ============ Initialize ============
function init() {
    createFloatingHearts();
    updateCountdown();
    updateGifts();
    initGame();
    setupEventListeners();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    setInterval(updateNextGiftTimer, 1000);

    // Rotate love messages every 5 seconds
    setInterval(rotateLoveMessage, 5000);
}

// ============ Floating Hearts ============
function createFloatingHearts() {
    const hearts = ['💕', '❤️', '💖', '💗', '💝', '🌸', '💜'];
    const numHearts = 30;

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = (Math.random() * 10) + 's';
        heartsBg.appendChild(heart);
    }
}

// ============ Navigation ============
function setupEventListeners() {
    // Navigation
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.dataset.section;
            switchSection(sectionId);
        });
    });

    // Gift cards
    giftCards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('locked')) {
                openGift(card.dataset.day);
            }
        });
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Game
    restartBtn.addEventListener('click', initGame);
    playAgainBtn.addEventListener('click', () => {
        celebration.classList.remove('active');
        initGame();
    });
}

function switchSection(sectionId) {
    navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });

    sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

// ============ Countdown Timer ============
function updateCountdown() {
    const now = new Date();
    const diff = VALENTINE_DAY - now;

    if (diff <= 0) {
        // It's Valentine's Day!
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        loveMessageEl.textContent = "💕 Happy Valentine's Day, My Love! 💕";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

function rotateLoveMessage() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    loveMessageEl.style.opacity = 0;
    setTimeout(() => {
        loveMessageEl.textContent = loveMessages[randomIndex];
        loveMessageEl.style.opacity = 1;
    }, 300);
}

// ============ Next Gift Timer ============
function updateNextGiftTimer() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    nextGiftTimeEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ============ Daily Gifts ============
function updateGifts() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    giftCards.forEach(card => {
        const giftDate = new Date(card.dataset.date);

        if (today >= giftDate) {
            card.classList.add('unlocked');
            card.classList.remove('locked');
        } else {
            card.classList.add('locked');
            card.classList.remove('unlocked');
        }
    });
}

function openGift(day) {
    const gift = gifts[day];
    if (!gift) return;

    modalIcon.textContent = gift.icon;
    modalTitle.textContent = gift.title;
    modalBody.innerHTML = gift.content;
    modal.classList.add('active');

    // Add confetti effect
    createConfetti();
}

function closeModal() {
    modal.classList.remove('active');
}

function createConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#e84a5f', '#ff2e63', '#b76e79'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
            z-index: 1000;
            animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
        `;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }

    // Add confetti animation if not exists
    if (!document.querySelector('#confettiStyle')) {
        const style = document.createElement('style');
        style.id = 'confettiStyle';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============ Memory Game ============
function initGame() {
    matchedPairs = 0;
    moves = 0;
    flippedCards = [];
    canFlip = true;

    movesEl.textContent = '0';
    matchesEl.textContent = '0';
    gameMessageEl.textContent = '';

    // Create pairs
    cards = [...gameEmojis, ...gameEmojis]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({
            id: index,
            emoji: emoji,
            matched: false
        }));

    renderGameBoard();
}

function renderGameBoard() {
    gameBoard.innerHTML = '';

    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'game-card';
        cardEl.dataset.id = card.id;

        cardEl.innerHTML = `
            <div class="game-card-inner">
                <div class="game-card-front"></div>
                <div class="game-card-back">${card.emoji}</div>
            </div>
        `;

        cardEl.addEventListener('click', () => flipCard(cardEl, card));
        gameBoard.appendChild(cardEl);
    });
}

function flipCard(cardEl, card) {
    if (!canFlip || card.matched || flippedCards.includes(card)) return;

    cardEl.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        movesEl.textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    canFlip = false;
    const [card1, card2] = flippedCards;

    if (card1.emoji === card2.emoji) {
        // Match!
        card1.matched = true;
        card2.matched = true;
        matchedPairs++;
        matchesEl.textContent = matchedPairs;

        const matchedEls = document.querySelectorAll(`[data-id="${card1.id}"], [data-id="${card2.id}"]`);
        matchedEls.forEach(el => el.classList.add('matched'));

        showGameMessage(getMatchMessage());

        flippedCards = [];
        canFlip = true;

        if (matchedPairs === gameEmojis.length) {
            setTimeout(showWinCelebration, 500);
        }
    } else {
        // No match
        setTimeout(() => {
            const els = document.querySelectorAll(`[data-id="${card1.id}"], [data-id="${card2.id}"]`);
            els.forEach(el => el.classList.remove('flipped'));
            flippedCards = [];
            canFlip = true;
        }, 1000);
    }
}

function getMatchMessage() {
    const messages = [
        "Perfect match! Just like us! 💕",
        "You're amazing! 🌹",
        "Love it! Keep going! ❤️",
        "What a great pair! 💖",
        "Made for each other! 💗"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function showGameMessage(message) {
    gameMessageEl.textContent = message;
    gameMessageEl.style.opacity = 1;
    setTimeout(() => {
        gameMessageEl.style.opacity = 0;
    }, 2000);
}

function showWinCelebration() {
    const celebrationMessage = document.getElementById('celebrationMessage');

    if (moves <= 12) {
        celebrationMessage.textContent = `Amazing! You matched all pairs in just ${moves} moves! True love! 💕`;
    } else if (moves <= 20) {
        celebrationMessage.textContent = `Great job! ${moves} moves! You're wonderful! 💖`;
    } else {
        celebrationMessage.textContent = `You did it in ${moves} moves! Every attempt is a love story! 🌹`;
    }

    celebration.classList.add('active');
    createConfetti();
}

// ============ Start ============
init();
initPhase2();

// ============ Phase 2: Enhancements ============
function initPhase2() {
    setupMusicPlayer();
    setupGallery();
    setupInteractiveHearts();
    setupCheatMode();
}

// 1. Music Player
function setupMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const bgMusic = document.getElementById('bgMusic');
    const musicDisc = document.getElementById('musicDisc');
    let isPlaying = false;

    // Try autoplay (might be blocked by browser)
    document.body.addEventListener('click', function () {
        if (!isPlaying && bgMusic.paused) {
            // Optional: Auto-play on first interaction
            // toggleMusic(); 
        }
    }, { once: true });

    playPauseBtn.addEventListener('click', toggleMusic);

    function toggleMusic() {
        if (isPlaying) {
            bgMusic.pause();
            musicDisc.classList.remove('playing');
            playPauseBtn.textContent = '▶';
        } else {
            bgMusic.play().then(() => {
                musicDisc.classList.add('playing');
                playPauseBtn.textContent = '⏸';
            }).catch(e => console.log("Audio play failed:", e));
        }
        isPlaying = !isPlaying;
    }
}

// 2. Photo Gallery
function setupGallery() {
    const track = document.getElementById('galleryTrack');
    const slides = Array.from(track.children);
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');
    const dotsNav = document.getElementById('galleryDots');

    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active-dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);

    function goToSlide(index) {
        // Handle wrap-around
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        currentIndex = index;

        // Update slides class
        slides.forEach((slide, i) => {
            slide.classList.remove('current-slide');
            if (i === currentIndex) slide.classList.add('current-slide');
        });

        // Move track (optional if using absolute positioning fade, but good for slide effect)
        // track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)'; 
        // Using opacity transition defined in CSS for .current-slide

        // Update dots
        dots.forEach(dot => dot.classList.remove('active-dot'));
        dots[currentIndex].classList.add('active-dot');
    }

    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));

    // Auto advance
    setInterval(() => {
        // Only if not hovering (optional refinement)
        goToSlide(currentIndex + 1);
    }, 5000);
}

// 3. Interactive Hearts
function setupInteractiveHearts() {
    const miniMessages = [
        "I love you!", "You're beautiful", "Hugs & Kisses",
        "Miss you!", "Forever yours", "My Sweetheart",
        "XOXO", "Soulmate"
    ];

    // Delegate event listener to hearts background
    document.getElementById('heartsBg').style.pointerEvents = 'auto'; // Enable clicking

    // Create new clickable hearts periodically to ensure accessible ones
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 90 + 5 + '%';
        heart.style.bottom = '-50px';
        heart.style.fontSize = '24px';
        heart.style.cursor = 'pointer';
        heart.style.transition = 'transform 10s linear, opacity 10s linear';
        heart.style.zIndex = '5';

        heart.addEventListener('click', (e) => {
            showHeartTooltip(e.clientX, e.clientY);
            heart.remove();
        });

        document.body.appendChild(heart);

        // Animate
        setTimeout(() => {
            heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 100);

        setTimeout(() => heart.remove(), 10000);
    }, 2000);

    function showHeartTooltip(x, y) {
        const tooltip = document.createElement('div');
        tooltip.className = 'heart-tooltip';
        tooltip.textContent = miniMessages[Math.floor(Math.random() * miniMessages.length)];
        tooltip.style.left = x + 'px';
        tooltip.style.top = (y - 40) + 'px';
        document.body.appendChild(tooltip);

        setTimeout(() => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(-20px)';
            setTimeout(() => tooltip.remove(), 300);
        }, 1500);
    }
}

// 4. Cheat Mode
function setupCheatMode() {
    const title = document.querySelector('.title-main');
    let clickCount = 0;
    let clickTimer;

    title.style.cursor = 'pointer';
    title.title = "Click me for magic...";

    title.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);

        if (clickCount === 5) {
            activateCheatMode();
            clickCount = 0;
        }

        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 1000);
    });

    function activateCheatMode() {
        // Unlock all gifts
        const lockedCards = document.querySelectorAll('.gift-card.locked');
        lockedCards.forEach(card => {
            card.classList.remove('locked');
            card.classList.add('unlocked');
            // Flash effect
            card.style.animation = 'pulse 0.5s ease';
        });

        alert("💕 Cheat Mode Activated! All gifts unlocked for preview. 💕");
    }
}

// ============ Phase 3: Advanced Features ============
initPhase3();

function initPhase3() {
    setupLoveQuiz();
    setupLoveLock();
    setupShootingStars();
    setupFireworks();
    setupLoveCard();
}

// 1. Love Quiz
function setupLoveQuiz() {
    const quizQuestions = [
        {
            question: "What's your ideal romantic date?",
            options: [
                { text: "🌹 Candlelit dinner at a fancy restaurant", type: "romantic" },
                { text: "🏕️ Adventure outdoors - hiking or camping", type: "adventurous" },
                { text: "🎬 Cozy movie night at home", type: "homebody" },
                { text: "💃 Dancing the night away", type: "passionate" }
            ]
        },
        {
            question: "How do you express your love?",
            options: [
                { text: "💕 Sweet words and compliments", type: "romantic" },
                { text: "🎁 Thoughtful gifts and surprises", type: "adventurous" },
                { text: "🤗 Quality time together", type: "homebody" },
                { text: "💋 Physical affection", type: "passionate" }
            ]
        },
        {
            question: "What's your love song genre?",
            options: [
                { text: "🎵 Classic romantic ballads", type: "romantic" },
                { text: "🎸 Upbeat pop love songs", type: "adventurous" },
                { text: "🎹 Soft acoustic melodies", type: "homebody" },
                { text: "🔥 Passionate R&B", type: "passionate" }
            ]
        },
        {
            question: "Your partner surprises you. What melts your heart?",
            options: [
                { text: "💐 Flowers and a love letter", type: "romantic" },
                { text: "✈️ Surprise trip tickets", type: "adventurous" },
                { text: "🍳 Breakfast in bed", type: "homebody" },
                { text: "💃 A spontaneous dance", type: "passionate" }
            ]
        },
        {
            question: "What makes a relationship last?",
            options: [
                { text: "💝 Romance and thoughtfulness", type: "romantic" },
                { text: "🌟 Shared adventures", type: "adventurous" },
                { text: "🏠 Trust and comfort", type: "homebody" },
                { text: "🔥 Passion and chemistry", type: "passionate" }
            ]
        }
    ];

    const results = {
        romantic: {
            title: "The Hopeless Romantic 💕",
            text: "You believe in fairytales and happily ever afters! Your love language is filled with sweet gestures, heartfelt words, and classic romance. You make your partner feel like they're living in a love story."
        },
        adventurous: {
            title: "The Love Adventurer 🌟",
            text: "For you, love is an exciting journey! You keep the spark alive with surprises, spontaneity, and new experiences. Your partner will never have a dull moment with you!"
        },
        homebody: {
            title: "The Comfort Lover 🏠",
            text: "You find love in the little things. Cozy nights, meaningful conversations, and being truly present - that's your love superpower. You create a safe haven of love."
        },
        passionate: {
            title: "The Passionate Soul 🔥",
            text: "Your love burns bright and intense! You're all about deep connections, chemistry, and living life to the fullest with your partner. Your love is unforgettable!"
        }
    };

    let currentQuestion = 0;
    let answers = { romantic: 0, adventurous: 0, homebody: 0, passionate: 0 };

    const quizCard = document.getElementById('quizCard');
    const quizResult = document.getElementById('quizResult');
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizProgress = document.getElementById('quizProgress');
    const progressFill = document.getElementById('progressFill');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');
    const restartQuiz = document.getElementById('restartQuiz');

    function renderQuestion() {
        const q = quizQuestions[currentQuestion];
        quizQuestion.textContent = q.question;
        quizProgress.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
        progressFill.style.width = ((currentQuestion + 1) / quizQuestions.length * 100) + '%';

        quizOptions.innerHTML = '';
        q.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = option.text;
            btn.addEventListener('click', () => selectAnswer(option.type));
            quizOptions.appendChild(btn);
        });
    }

    function selectAnswer(type) {
        answers[type]++;
        currentQuestion++;

        if (currentQuestion < quizQuestions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizCard.style.display = 'none';
        quizResult.classList.remove('hidden');

        // Find dominant type
        const maxType = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
        const result = results[maxType];

        resultTitle.textContent = result.title;
        resultText.textContent = result.text;
        createConfetti();
    }

    function resetQuiz() {
        currentQuestion = 0;
        answers = { romantic: 0, adventurous: 0, homebody: 0, passionate: 0 };
        quizCard.style.display = 'block';
        quizResult.classList.add('hidden');
        renderQuestion();
    }

    restartQuiz.addEventListener('click', resetQuiz);
    renderQuestion();
}

// 2. Love Lock
function setupLoveLock() {
    const theLock = document.getElementById('theLock');
    const lockForm = document.getElementById('lockForm');
    const lockMessage = document.getElementById('lockMessage');
    const lockDate = document.getElementById('lockDate');
    const lockBtn = document.getElementById('lockBtn');
    const name1Input = document.getElementById('name1Input');
    const name2Input = document.getElementById('name2Input');
    const lockNames = document.getElementById('lockNames');

    // Check if already locked (localStorage)
    const savedLock = localStorage.getItem('loveLock');
    if (savedLock) {
        const lockData = JSON.parse(savedLock);
        showLockedState(lockData.name1, lockData.name2, lockData.date);
    } else {
        theLock.classList.add('unlocked');
    }

    lockBtn.addEventListener('click', () => {
        const name1 = name1Input.value.trim() || 'You';
        const name2 = name2Input.value.trim() || 'Me';
        const date = new Date().toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        // Save to localStorage
        localStorage.setItem('loveLock', JSON.stringify({ name1, name2, date }));
        showLockedState(name1, name2, date);
        createConfetti();
    });

    function showLockedState(name1, name2, date) {
        lockNames.innerHTML = `
            <span class="name1">${name1}</span>
            <span class="heart-between">❤️</span>
            <span class="name2">${name2}</span>
        `;
        theLock.classList.remove('unlocked');
        theLock.classList.add('locked');
        lockForm.style.display = 'none';
        lockMessage.classList.remove('hidden');
        lockDate.textContent = `Locked on: ${date}`;
    }
}

// 3. Shooting Stars
function setupShootingStars() {
    const container = document.getElementById('shootingStarsContainer');
    const wishModal = document.getElementById('wishModal');
    const wishText = document.getElementById('wishText');

    const wishes = [
        "May your love last forever! 💕",
        "Your wish for happiness is granted! ✨",
        "Love and joy are coming your way! 🌟",
        "Your hearts will always be connected! 💞",
        "May every day feel like Valentine's Day! 💝",
        "True love never fades! 🌹",
        "Your soulmate connection is eternal! ⭐",
        "Endless happiness awaits you both! 🎆"
    ];

    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.left = Math.random() * 50 + '%';
        star.style.top = Math.random() * 30 + '%';

        star.addEventListener('click', (e) => {
            e.stopPropagation();
            showWish();
            star.remove();
        });

        container.appendChild(star);

        setTimeout(() => star.remove(), 1000);
    }

    function showWish() {
        wishText.textContent = wishes[Math.floor(Math.random() * wishes.length)];
        wishModal.classList.add('active');
        setTimeout(() => wishModal.classList.remove('active'), 2500);
    }

    // Create shooting stars periodically
    setInterval(createShootingStar, 4000);
}

// 4. Fireworks
function setupFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isRunning = false;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 8
            };
            this.alpha = 1;
            this.decay = Math.random() * 0.015 + 0.005;
            this.size = Math.random() * 3 + 1;
        }

        update() {
            this.velocity.y += 0.05;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= this.decay;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function createFirework(x, y) {
        const colors = ['#ff6b9d', '#c44569', '#ff2e63', '#ffd700', '#ff69b4', '#ff1493'];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles = particles.filter(p => p.alpha > 0);
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        if (isRunning || particles.length > 0) {
            animationId = requestAnimationFrame(animate);
        } else {
            canvas.classList.remove('active');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    // Expose globally for countdown trigger
    window.triggerFireworks = function () {
        if (isRunning) return;
        isRunning = true;
        canvas.classList.add('active');
        animate();

        // Create multiple fireworks
        let count = 0;
        const fireworkInterval = setInterval(() => {
            createFirework(
                Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
                Math.random() * canvas.height * 0.5 + 100
            );
            count++;
            if (count >= 15) {
                clearInterval(fireworkInterval);
                setTimeout(() => { isRunning = false; }, 3000);
            }
        }, 400);
    };

    // Modify the countdown to trigger fireworks on Valentine's Day arrival
    // This hooks into the existing updateCountdown function
    const originalUpdateCountdown = window.updateCountdown;
    let fireworksTriggered = false;

    // Add click to trigger for testing
    document.querySelector('.title-main')?.addEventListener('dblclick', () => {
        window.triggerFireworks();
    });
}

// 5. Love Card Generator
function setupLoveCard() {
    const openCardBtn = document.getElementById('openCardBtn');
    const cardModal = document.getElementById('cardModal');
    const cardModalClose = document.getElementById('cardModalClose');
    const cardInput = document.getElementById('cardInput');
    const cardMessage = document.getElementById('cardMessage');
    const generateCardBtn = document.getElementById('generateCardBtn');
    const downloadCardBtn = document.getElementById('downloadCardBtn');
    const loveCard = document.getElementById('loveCard');

    openCardBtn.addEventListener('click', () => {
        cardModal.classList.add('active');
    });

    cardModalClose.addEventListener('click', () => {
        cardModal.classList.remove('active');
    });

    cardModal.addEventListener('click', (e) => {
        if (e.target === cardModal) cardModal.classList.remove('active');
    });

    generateCardBtn.addEventListener('click', () => {
        const message = cardInput.value.trim() || "I love you more than words can say...";
        cardMessage.textContent = message;
        createConfetti();
    });

    downloadCardBtn.addEventListener('click', () => {
        // Simple download using canvas (basic implementation)
        html2canvasFallback(loveCard);
    });

    // Fallback download method - screenshot instructions
    function html2canvasFallback(element) {
        alert("💕 To save your card:\n\n1. Right-click the card preview\n2. Select 'Save image' or take a screenshot\n3. Share with your love! 💕");
    }
}

// ============ Phase 4: AI Magic with Gemini ============
initAIMagic();

function initAIMagic() {
    setupAPIKeyModal();
    setupPoemGenerator();
    setupStoryGenerator();
}

// Couple's special details
const COUPLE_INFO = {
    wifeName: "Divya",
    weddingDate: "April 27, 2016",
    yearsMarried: new Date().getFullYear() - 2016
};

// API Key Management
function setupAPIKeyModal() {
    const setApiKeyLink = document.getElementById('setApiKey');
    const apiKeyModal = document.getElementById('apiKeyModal');
    const apiKeyModalClose = document.getElementById('apiKeyModalClose');
    const apiKeyInput = document.getElementById('apiKeyInput');
    const saveApiKeyBtn = document.getElementById('saveApiKey');

    setApiKeyLink.addEventListener('click', (e) => {
        e.preventDefault();
        apiKeyModal.classList.add('active');
        // Load existing key if any
        const savedKey = localStorage.getItem('geminiApiKey');
        if (savedKey) apiKeyInput.value = savedKey;
    });

    apiKeyModalClose.addEventListener('click', () => {
        apiKeyModal.classList.remove('active');
    });

    apiKeyModal.addEventListener('click', (e) => {
        if (e.target === apiKeyModal) apiKeyModal.classList.remove('active');
    });

    saveApiKeyBtn.addEventListener('click', () => {
        const key = apiKeyInput.value.trim();
        if (key) {
            localStorage.setItem('geminiApiKey', key);
            apiKeyModal.classList.remove('active');
            alert("✅ API Key saved! AI features are now enabled.");
        } else {
            alert("Please enter a valid API key.");
        }
    });
}

// Gemini API Call
async function callGeminiAPI(prompt) {
    const apiKey = localStorage.getItem('geminiApiKey');
    console.log('🔑 Checking API Key:', apiKey ? 'Found' : 'Not Found');

    if (!apiKey) {
        throw new Error("Please set your Gemini API key first!");
    }

    console.log('📤 Sending request to Gemini API...');
    console.log('📝 Prompt:', prompt.substring(0, 100) + '...');

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.9,
                    maxOutputTokens: 1024
                }
            })
        });

        console.log('📥 Response status:', response.status);

        if (!response.ok) {
            const error = await response.json();
            console.error('❌ API Error:', error);
            throw new Error(error.error?.message || "API request failed");
        }

        const data = await response.json();
        console.log('✅ API Response received:', data);

        const result = data.candidates[0].content.parts[0].text;
        console.log('📄 Generated text:', result.substring(0, 100) + '...');

        return result;
    } catch (error) {
        console.error('❌ Gemini API Error:', error);
        throw error;
    }
}

// Poem Generator
function setupPoemGenerator() {
    const generatePoemBtn = document.getElementById('generatePoem');
    const poemThemeInput = document.getElementById('poemTheme');
    const poemOutput = document.getElementById('poemOutput');
    const poemLoading = document.getElementById('poemLoading');
    const poemResult = document.getElementById('poemResult');

    generatePoemBtn.addEventListener('click', async () => {
        const theme = poemThemeInput.value.trim() || "eternal love";

        poemOutput.classList.remove('hidden');
        poemLoading.style.display = 'block';
        poemResult.style.display = 'none';
        generatePoemBtn.disabled = true;

        const prompt = `Write a beautiful, romantic love poem for my wife ${COUPLE_INFO.wifeName}. 
We got married on ${COUPLE_INFO.weddingDate} and have been happily married for ${COUPLE_INFO.yearsMarried} wonderful years.
Theme: ${theme}
The poem should be heartfelt, personal, and about 12-16 lines.
Make it romantic and touching. Use her name "${COUPLE_INFO.wifeName}" naturally in the poem.
Do not include any introduction or explanation, just the poem itself.`;

        try {
            const poem = await callGeminiAPI(prompt);
            poemResult.textContent = poem;
            poemResult.style.display = 'block';
            createConfetti();
        } catch (error) {
            poemResult.textContent = "❌ " + error.message;
            poemResult.style.display = 'block';
        } finally {
            poemLoading.style.display = 'none';
            generatePoemBtn.disabled = false;
        }
    });
}

// Love Story Generator
function setupStoryGenerator() {
    const generateStoryBtn = document.getElementById('generateStory');
    const storyPartnerInput = document.getElementById('storyPartner');
    const storyMomentInput = document.getElementById('storyMoment');
    const storyOutput = document.getElementById('storyOutput');
    const storyLoading = document.getElementById('storyLoading');
    const storyResult = document.getElementById('storyResult');

    generateStoryBtn.addEventListener('click', async () => {
        const partnerName = storyPartnerInput.value.trim() || "my love";
        const moment = storyMomentInput.value.trim() || "our journey together";

        storyOutput.classList.remove('hidden');
        storyLoading.style.display = 'block';
        storyResult.style.display = 'none';
        generateStoryBtn.disabled = true;

        const prompt = `Write a romantic short love story about ${partnerName} and ${COUPLE_INFO.wifeName}.
They got married on ${COUPLE_INFO.weddingDate} and have been together for ${COUPLE_INFO.yearsMarried} beautiful years.
Special moment to focus on: ${moment}
Write in first person from ${partnerName}'s perspective.
Make it romantic, touching, and about 200-300 words.
Include sweet details about their love and the special moment mentioned.
Do not include any introduction, just start the story directly.`;

        try {
            const story = await callGeminiAPI(prompt);
            storyResult.textContent = story;
            storyResult.style.display = 'block';
            createConfetti();
        } catch (error) {
            storyResult.textContent = "❌ " + error.message;
            storyResult.style.display = 'block';
        } finally {
            storyLoading.style.display = 'none';
            generateStoryBtn.disabled = false;
        }
    });
}

// ============ Phase 5: Personalization System ============
initPersonalization();

function initPersonalization() {
    setupWelcomeModal();
    setupShareFeature();
    setupLyricsGenerator();
    checkURLParams();
}

// Check URL parameters for name
function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const nameFromURL = urlParams.get('name');

    if (nameFromURL) {
        // Name provided in URL - use it and skip modal
        setRecipientName(nameFromURL);
        hideWelcomeModal();
    } else {
        // Check localStorage for saved name
        const savedName = localStorage.getItem('recipientName');
        if (savedName) {
            setRecipientName(savedName);
            hideWelcomeModal();
        } else {
            // Show welcome modal for first-time visitors
            showWelcomeModal();
        }
    }

    // Load saved custom photo if exists
    const savedPhoto = localStorage.getItem('customPhoto');
    if (savedPhoto) {
        displayCustomPhoto(savedPhoto);
    }

    // Load saved custom music if exists
    const savedMusic = localStorage.getItem('customMusic');
    if (savedMusic) {
        loadCustomMusic(savedMusic);
    }
}

// Welcome Modal Setup
function setupWelcomeModal() {
    const welcomeModal = document.getElementById('welcomeModal');
    const recipientNameInput = document.getElementById('recipientName');
    const startBtn = document.getElementById('startExperience');
    const customMusicInput = document.getElementById('customMusic');
    const customPhotoInput = document.getElementById('customPhoto');
    const musicFileName = document.getElementById('musicFileName');
    const photoFileName = document.getElementById('photoFileName');
    const photoPreview = document.getElementById('photoPreview');
    const previewImage = document.getElementById('previewImage');

    // Temp storage for files
    let tempMusicData = null;
    let tempPhotoData = null;

    // Enable/disable start button based on name input
    recipientNameInput.addEventListener('input', () => {
        const hasName = recipientNameInput.value.trim().length > 0;
        startBtn.disabled = !hasName;
    });

    // Handle music file selection
    customMusicInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            musicFileName.textContent = file.name;
            const reader = new FileReader();
            reader.onload = (event) => {
                tempMusicData = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle photo file selection
    customPhotoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            photoFileName.textContent = file.name;
            const reader = new FileReader();
            reader.onload = (event) => {
                tempPhotoData = event.target.result;
                previewImage.src = event.target.result;
                photoPreview.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    });

    // Start experience button
    startBtn.addEventListener('click', () => {
        const name = recipientNameInput.value.trim();
        if (name) {
            // Save to localStorage
            localStorage.setItem('recipientName', name);

            // Apply the name
            setRecipientName(name);

            // Handle custom music
            if (tempMusicData) {
                try {
                    localStorage.setItem('customMusic', tempMusicData);
                    loadCustomMusic(tempMusicData);
                } catch (e) {
                    console.log('Music too large for localStorage');
                }
            }

            // Handle custom photo
            if (tempPhotoData) {
                try {
                    localStorage.setItem('customPhoto', tempPhotoData);
                    displayCustomPhoto(tempPhotoData);
                } catch (e) {
                    console.log('Photo too large for localStorage');
                }
            }

            // Update URL without reload
            updateURLWithName(name);

            // Hide modal
            hideWelcomeModal();

            // Celebration effect
            createConfetti();
        }
    });
}

function showWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    modal.classList.add('active');
}

function hideWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    modal.classList.remove('active');
}

// Set recipient name throughout the page
function setRecipientName(name) {
    const elements = document.querySelectorAll('.recipient-name');
    elements.forEach(el => {
        el.textContent = name;
    });

    // Update page title
    document.title = `💕 For ${name} - Valentine's Love Song 💕`;
}

// Update URL with name parameter
function updateURLWithName(name) {
    const url = new URL(window.location.href);
    url.searchParams.set('name', name);
    window.history.replaceState({}, '', url);
}

// Load custom music
function loadCustomMusic(musicData) {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic && musicData) {
        bgMusic.src = musicData;
    }
}

// Display custom photo
function displayCustomPhoto(photoData) {
    const photoDisplay = document.getElementById('customPhotoDisplay');
    const displayPhoto = document.getElementById('displayPhoto');

    if (photoDisplay && displayPhoto && photoData) {
        displayPhoto.src = photoData;
        photoDisplay.classList.remove('hidden');
    }
}

// Share Feature
function setupShareFeature() {
    const shareBtn = document.getElementById('shareBtn');
    const shareLinkContainer = document.getElementById('shareLinkContainer');
    const shareLink = document.getElementById('shareLink');
    const copyBtn = document.getElementById('copyLink');
    const shareCopied = document.getElementById('shareCopied');

    if (!shareBtn) return;

    shareBtn.addEventListener('click', () => {
        const currentName = localStorage.getItem('recipientName') || 'Love';
        const url = new URL(window.location.href);
        url.searchParams.set('name', currentName);

        shareLink.value = url.href;
        shareLinkContainer.classList.remove('hidden');
    });

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(shareLink.value);
                shareCopied.classList.remove('hidden');
                setTimeout(() => {
                    shareCopied.classList.add('hidden');
                }, 2000);
            } catch (err) {
                // Fallback
                shareLink.select();
                document.execCommand('copy');
                shareCopied.classList.remove('hidden');
                setTimeout(() => {
                    shareCopied.classList.add('hidden');
                }, 2000);
            }
        });
    }
}

// AI Lyrics Generator
function setupLyricsGenerator() {
    const generateLyricsBtn = document.getElementById('generateLyrics');
    const lyricsThemeInput = document.getElementById('lyricsTheme');
    const lyricsOutput = document.getElementById('lyricsOutput');
    const lyricsLoading = document.getElementById('lyricsLoading');
    const lyricsResult = document.getElementById('lyricsResult');

    if (!generateLyricsBtn) return;

    generateLyricsBtn.addEventListener('click', async () => {
        const theme = lyricsThemeInput.value.trim() || "eternal love";
        const recipientName = localStorage.getItem('recipientName') || "my love";

        lyricsOutput.classList.remove('hidden');
        lyricsLoading.style.display = 'block';
        lyricsResult.style.display = 'none';
        generateLyricsBtn.disabled = true;

        const prompt = `Write romantic love song lyrics for ${recipientName}.
Theme: ${theme}
Style: Mix of Telugu and English, romantic and heartfelt
Length: 8-10 lines of lyrics
Include the name "${recipientName}" at least once in the lyrics.
Make it poetic, romantic, and suitable for a Valentine's Day dedication.
Format: Just the lyrics, no titles or explanations, one line per verse.`;

        try {
            const apiKey = localStorage.getItem('geminiApiKey');
            if (!apiKey) {
                lyricsResult.innerHTML = `
                    <p>🔑 Please set your Gemini API key first!</p>
                    <p><a href="#" id="openApiKeyFromLyrics" style="color: var(--pink); text-decoration: underline; cursor: pointer;">Click here to set your API key</a></p>
                `;
                lyricsResult.style.display = 'block';
                // Add click handler for the link
                document.getElementById('openApiKeyFromLyrics').addEventListener('click', (e) => {
                    e.preventDefault();
                    document.getElementById('apiKeyModal').classList.add('active');
                });
            } else {
                const lyrics = await callGeminiAPI(prompt);
                lyricsResult.innerHTML = lyrics.split('\n').map(line =>
                    `<p>${line}</p>`
                ).join('');
                lyricsResult.style.display = 'block';
                createConfetti();
            }
        } catch (error) {
            lyricsResult.textContent = "❌ " + error.message;
            lyricsResult.style.display = 'block';
        } finally {
            lyricsLoading.style.display = 'none';
            generateLyricsBtn.disabled = false;
        }
    });
}
