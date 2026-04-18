// Create floating particles
  (function() {
    const container = document.getElementById('particles');
    const colors = ['#C9A84C', '#E8C97A', '#F5E6B8', '#2D6145'];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.opacity = Math.random() * 0.6;
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      if (Math.random() > 0.5) {
        p.style.transform = 'rotate(45deg)';
        p.style.borderRadius = '0';
      }
      container.appendChild(p);
    }
  })();

  // Scroll reveal
  (function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  })();

  // Countdown timer to 14.06.2026 10:00 AM
  (function() {
    const target = new Date('2026-06-14T10:00:00+05:30');

    function update() {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        document.getElementById('cd-days').textContent = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-mins').textContent = '00';
        document.getElementById('cd-secs').textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
      document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  })();

  // Subtle parallax on scroll
  (function() {
    const card = document.getElementById('main-card');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const header = document.querySelector('.header-section');
          if (header) {
            header.style.backgroundPositionY = scrollY * 0.3 + 'px';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  })();

  // Shimmer on hover for wedding cards
  document.querySelectorAll('.wedding-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,0.04) 0%, transparent 60%), white`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = 'white';
    });
  });

  // Animate heart beats at different intervals
  const hearts = document.querySelectorAll('.weds-heart');
  hearts.forEach((h, i) => {
    h.style.animationDelay = (i * 0.3) + 's';
  });

  // Gold sparkle on phone number hover
  const phone = document.querySelector('.contact-phone');
  if (phone) {
    phone.addEventListener('mouseenter', function() {
      this.style.letterSpacing = '3px';
    });
    phone.addEventListener('mouseleave', function() {
      this.style.letterSpacing = '2px';
    });
  }














const music = document.getElementById('bg-music');
const btn = document.getElementById('music-toggle');

document.body.addEventListener('click', () => {
  music.play().catch(()=>{});
}, { once: true });

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔊 Music";
  } else {
    music.pause();
    btn.textContent = "🔇 Mute";
  }
});


// Fire Works

document.body.addEventListener('click', function(e) {
  for (let i = 0; i < 12; i++) {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    spark.style.width = '6px';
    spark.style.height = '6px';
    spark.style.background = '#C9A84C';
    spark.style.borderRadius = '50%';
    spark.style.zIndex = 999;

    document.body.appendChild(spark);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100;

    spark.animate([
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)`, opacity: 0 }
    ], {
      duration: 800,
      easing: 'ease-out'
    });

    setTimeout(() => spark.remove(), 800);
  }
});





  // Optional: remove completely after animation
  setTimeout(() => {
    const screen = document.getElementById("welcome-screen");
    if (screen) screen.remove();
  }, 5000);
