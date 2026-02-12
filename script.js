// ========================= //
// PAGE SYSTEM
// ========================= //

let currentPage = 1;
const totalPages = 7;

function showPage(pageNum) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById('page' + pageNum).classList.add('active');
    
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === pageNum);
    });
    
    currentPage = pageNum;
    
    if (pageNum > 1) {
        document.getElementById('musicPlayerFloat').classList.add('show');
        document.getElementById('navDots').classList.add('show');
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        const pageNum = parseInt(this.dataset.page);
        showPage(pageNum);
    });
});

// ========================= //
// OPENING ANIMATIONS
// ========================= //

const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
    particlesContainer.appendChild(particle);
}

setTimeout(() => document.getElementById('line1').classList.add('show'), 500);
setTimeout(() => document.getElementById('line2').classList.add('show'), 2500);
setTimeout(() => document.getElementById('line3').classList.add('show'), 4500);
setTimeout(() => document.getElementById('line4').classList.add('show'), 6500);
setTimeout(() => document.querySelector('.main-button').classList.add('show'), 8500);

// ========================= //
// MUSIC CONTROLS
// ========================= //

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicPlayerFloat = document.getElementById('musicPlayerFloat');

let musicPlaying = false;

function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.querySelector('.btn-text').textContent = 'Putar Musik';
        musicPlayerFloat.querySelector('.music-text').textContent = 'Musik';
    } else {
        bgMusic.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
        musicToggle.querySelector('.btn-text').textContent = 'Pause Musik';
        musicPlayerFloat.querySelector('.music-text').textContent = 'Pause';
    }
    musicPlaying = !musicPlaying;
}

musicToggle.addEventListener('click', toggleMusic);
musicPlayerFloat.addEventListener('click', toggleMusic);

document.getElementById('openGift').addEventListener('click', function() {
    showPage(2);
});

// ========================= //
// FLOATING HEARTS
// ========================= //

function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.5 + 1.5) + 'em';
        heart.style.animationDuration = (Math.random() * 10 + 12) + 's';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 20000);
    }, 1000);
}

createFloatingHearts();

// ========================= //
// ROSE PETALS
// ========================= //

function createRosePetals() {
    const container = document.getElementById('rosePetals');
    if (!container) return;
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.animationDuration = (Math.random() * 8 + 10) + 's';
        container.appendChild(petal);
        
        setTimeout(() => petal.remove(), 15000);
    }, 800);
}

createRosePetals();

// ========================= //
// INTERACTIVE BUTTONS
// ========================= //

// Button 1: Rani Sayang Aku - Flying Hearts
document.getElementById('btn1').addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'btn-heart';
            heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
            heart.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
            heart.style.top = centerY + (Math.random() - 0.5) * 100 + 'px';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
    
    // Show modal after animation
    setTimeout(() => {
        showModal(
            '❤️ Tentu Saja, Sayang!',
            'Aku sangat sayang kamu! Kamu adalah orang terpenting dalam hidupku. Setiap hari bersamamu adalah anugerah yang tak ternilai. ❤️'
        );
    }, 2000);
});

// Button 2: Peluk Aku
document.getElementById('btn2').addEventListener('click', function() {
    const hugAnim = document.getElementById('hugAnim');
    hugAnim.classList.add('show');
    setTimeout(() => {
        hugAnim.classList.remove('show');
        showModal(
            '🤗 Pelukan Hangat Untukmu!',
            'Aku memelukmu erat-erat! Rasakan kehangatan cintaku yang selalu menemanimu. Kamu aman di pelukanku, selamanya. 💕'
        );
    }, 2500);
});

// Button 3: Kirim Kiss
document.getElementById('btn3').addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'kiss-bubble';
            kiss.innerHTML = ['💋', '😘', '💕', '💖', '😍'][Math.floor(Math.random() * 5)];
            kiss.style.left = centerX + (Math.random() - 0.5) * 150 + 'px';
            kiss.style.top = centerY + 'px';
            document.body.appendChild(kiss);
            
            setTimeout(() => kiss.remove(), 4000);
        }, i * 150);
    }
    
    setTimeout(() => {
        showModal(
            '😘 Kiss untuk Rani Tersayang!',
            'Ciuman manis untukmu, sayangku! Semoga hari-harimu selalu dipenuhi cinta dan kebahagiaan. Mwah! 💋💕'
        );
    }, 2200);
});

// Button 4: Aku Juga Sayang Kamu
document.getElementById('btn4').addEventListener('click', function() {
    // Create heart explosion
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'btn-heart';
            heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
            heart.style.left = window.innerWidth / 2 + (Math.random() - 0.5) * 200 + 'px';
            heart.style.top = window.innerHeight / 2 + (Math.random() - 0.5) * 200 + 'px';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 50);
    }
    
    setTimeout(() => {
        showModal(
            '💗 Terima Kasih, Rani!',
            'Mendengar itu adalah hal terindah yang pernah terjadi padaku. Aku juga sangat sayang kamu! Kamu adalah segalanya bagiku. Mari kita terus saling mencintai dan mendukung satu sama lain. Aku berjanji akan selalu ada untukmu. ❤️'
        );
    }, 1500);
});

// ========================= //
// MODAL FUNCTIONS
// ========================= //

function showModal(title, text) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// ========================= //
// KEYBOARD NAVIGATION
// ========================= //

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    } else if (e.key === 'Escape') {
        closeModal();
    }
});

// ========================= //
// SCROLL ANIMATION OBSERVER
// ========================= //

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.timeline-item, .reason-card, .polaroid').forEach(el => {
    observer.observe(el);
});

// ========================= //
// CURSOR TRAIL EFFECT (OPTIONAL)
// ========================= //

let hearts = [];
const heartEmojis = ['💕', '❤️', '💖', '💗', '💝'];

document.addEventListener('mousemove', function(e) {
    // Only create heart trail on certain pages
    if (currentPage === 2 || currentPage === 7) {
        if (Math.random() > 0.9) { // Only create occasionally
            const heart = document.createElement('div');
            heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.position = 'fixed';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = '20px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.animation = 'fadeOut 2s forwards';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 2000);
        }
    }
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================= //
// AUTO-SAVE PAGE PROGRESS
// ========================= //

// Save current page to localStorage
function saveProgress() {
    localStorage.setItem('valentinePage', currentPage);
}

// Load saved page on reload
function loadProgress() {
    const savedPage = localStorage.getItem('valentinePage');
    if (savedPage && parseInt(savedPage) > 1) {
        const loadSaved = confirm('Ingin melanjutkan dari halaman terakhir yang kamu lihat?');
        if (loadSaved) {
            showPage(parseInt(savedPage));
        }
    }
}

// Save progress when page changes
const originalShowPage = showPage;
showPage = function(pageNum) {
    originalShowPage(pageNum);
    saveProgress();
};

// Load progress on page load (only after initial animation)
setTimeout(() => {
    if (currentPage === 1) {
        loadProgress();
    }
}, 10000); // After opening animation completes

// ========================= //
// EASTER EGGS
// ========================= //

// Secret code: Type "love" to trigger special effect
let typedCode = '';
const secretCode = 'love';

document.addEventListener('keypress', function(e) {
    typedCode += e.key.toLowerCase();
    if (typedCode.length > secretCode.length) {
        typedCode = typedCode.slice(-secretCode.length);
    }
    
    if (typedCode === secretCode) {
        // Trigger heart explosion across entire screen
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'btn-heart';
                heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = Math.random() * window.innerHeight + 'px';
                heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 3000);
            }, i * 30);
        }
        
        showModal(
            '✨ Kamu Menemukan Easter Egg! ✨',
            'Selamat! Kamu menemukan pesan rahasia! Seperti yang kamu temukan kode ini, aku juga menemukan cinta sejati dalam dirimu. I LOVE YOU, RANI! 💕💖💗'
        );
        
        typedCode = '';
    }
});

console.log('%c💕 Selamat datang, Rani! 💕', 'font-size: 24px; color: #ff6b9d; font-weight: bold;');
console.log('%cCoba ketik "love" untuk sesuatu yang spesial... 😊', 'font-size: 14px; color: #c44569;');