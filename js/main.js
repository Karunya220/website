// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log(`
    .    _,--._
   /\ ,'     \`.
  (  )         )
   \`/         |
   |           \\
   '.         / \\
     \`._ _,--'\_/
        / /\`-.
       / /    \`\\
      / /       \\
    ,'  \        \\
  ,'     \`.       |
,'         \`.     |
|_____       \`----'
      \`-----.\`
             \\
              \\
    KARUNYA'S EXPLORER MAP
    Follow the path to discover
    treasure and experience!
    `);

    // Initialize Navigation
    initNavigation();
    
    // Initialize collapsible journals
    initCollapsibleElements();
    
    // Initialize interactive pins with delay animation
    initAnimatedPins();
});

// Navigation Functions
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.explorer-nav');
    
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    
    // Close navigation when clicking on links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
    
    // Close navigation when clicking outside
    document.addEventListener('click', (event) => {
        const isNavClick = event.target.closest('.explorer-nav');
        const isNavToggleClick = event.target.closest('.nav-toggle');
        
        if (!isNavClick && !isNavToggleClick && nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    });
}

// Initialize collapsible elements (like journals)
function initCollapsibleElements() {
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(item => {
        const title = item.querySelector('.journal-title');
        
        title.addEventListener('click', () => {
            // Close other open journals
            collapsibles.forEach(other => {
                if (other !== item && other.classList.contains('active')) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current journal
            item.classList.toggle('active');
        });
    });
    
    // Open the first journal by default
    if (collapsibles.length > 0) {
        collapsibles[0].classList.add('active');
    }
}

// Initialize animated pins
function initAnimatedPins() {
    const interestItems = document.querySelectorAll('.interest-item');
    
    // Reset animation when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pins = entry.target.querySelectorAll('.map-pin');
                pins.forEach(pin => {
                    pin.style.animation = 'none';
                    setTimeout(() => {
                        pin.style.animation = '';
                    }, 10);
                });
            }
        });
    }, { threshold: 0.5 });
    
    // Observe the interests section
    const interestsSection = document.querySelector('.interests-section');
    if (interestsSection) {
        observer.observe(interestsSection);
    }
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate elements when they come into view
window.addEventListener('scroll', () => {
    const animatedElements = document.querySelectorAll('.stamp, .polaroid, .journal');
    
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        }
    });
});
