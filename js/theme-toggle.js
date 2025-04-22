document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to vintage
    const savedTheme = localStorage.getItem('theme') || 'vintage';
    
    // Apply saved theme
    if (savedTheme === 'modern') {
        body.classList.remove('theme-vintage');
        body.classList.add('theme-modern');
    } else {
        body.classList.remove('theme-modern');
        body.classList.add('theme-vintage');
    }
    
    // Add click event to toggle theme
    themeToggle.addEventListener('click', () => {
        // Toggle between themes
        if (body.classList.contains('theme-vintage')) {
            body.classList.remove('theme-vintage');
            body.classList.add('theme-modern');
            localStorage.setItem('theme', 'modern');
        } else {
            body.classList.remove('theme-modern');
            body.classList.add('theme-vintage');
            localStorage.setItem('theme', 'vintage');
        }
        
        // Apply animation to theme toggle
        themeToggle.classList.add('rotating');
        setTimeout(() => {
            themeToggle.classList.remove('rotating');
        }, 500);
    });
});
