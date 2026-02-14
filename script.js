// Falling Hearts Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerHTML = ['❤️', '💕', '💗', '💓', '💖', '💘'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = Math.random() * 30 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

// Virtual Hug Counter
let hugCount = 0;
function sendHug() {
    hugCount++;
    document.getElementById('hugCount').textContent = hugCount;
    
    // Create hug animation
    const hugEmoji = document.createElement('div');
    hugEmoji.innerHTML = '🤗';
    hugEmoji.style.position = 'fixed';
    hugEmoji.style.left = Math.random() * window.innerWidth + 'px';
    hugEmoji.style.top = Math.random() * window.innerHeight + 'px';
    hugEmoji.style.fontSize = '50px';
    hugEmoji.style.animation = 'floatHeart 2s ease-out';
    hugEmoji.style.pointerEvents = 'none';
    document.body.appendChild(hugEmoji);
    
    setTimeout(() => {
        hugEmoji.remove();
    }, 2000);
}

// Distance Counter
function updateDistance() {
    const distanceElement = document.getElementById('distanceCount');
    if (distanceElement) {
        let distance = 0;
        setInterval(() => {
            distance += 1.5; // km per second
            if (distance > 500) distance = 0;
            distanceElement.textContent = Math.floor(distance) + ' km';
        }, 1000);
    }
}

// Playlist functionality
function playSong(songUrl) {
    // You can embed Spotify/YouTube here
    alert('Putar lagu spesial kita! 🎵');
}

// Love Quiz
function checkAnswer(answer, element) {
    if (answer === 'correct') {
        element.style.background = 'linear-gradient(145deg, #4CAF50, #45a049)';
        element.style.color = 'white';
        document.getElementById('loveMessage').style.display = 'block';
        
        // Confetti effect
        for(let i = 0; i < 50; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 50);
        }
    } else {
        element.style.background = 'linear-gradient(145deg, #ff6b6b, #ff5252)';
        element.style.color = 'white';
        alert('Coba lagi ya sayang! 😘');
    }
}

// Countdown to next meeting
function updateCountdown() {
    const nextMeeting = new Date('2024-02-14').getTime();
    const now = new Date().getTime();
    const distance = nextMeeting - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
    }
}

setInterval(updateCountdown, 1000);

// Love letter typing effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize all
window.onload = function() {
    updateDistance();
    updateCountdown();
    
    // Add click sound effect (optional)
    document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // You can add click sound here
        });
    });
};

