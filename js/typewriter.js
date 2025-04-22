document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with typewriter class
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        // Store original text and remove it from element
        const text = element.textContent;
        element.textContent = '';
        
        // Initialize typing animation with a slight delay
        setTimeout(() => {
            typeText(element, text, 0);
        }, 500);
    });
    
    function typeText(element, text, index) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => {
                typeText(element, text, index + 1);
            }, 100); // Adjust typing speed here (lower = faster)
        } else {
            // When typing is complete, remove the typewriter class to stop the cursor animation
            setTimeout(() => {
                element.classList.remove('typewriter');
            }, 2000);
        }
    }
});
