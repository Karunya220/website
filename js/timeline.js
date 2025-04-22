document.addEventListener('DOMContentLoaded', () => {
    // Initialize timeline
    const timelineContainer = document.querySelector('.timeline');
    
    if (timelineContainer) {
        // Timeline data - Define your journey points here
        const timelineData = [
            {
                year: '2023',
                title: 'IIM Bangalore',
                description: 'Pursuing BBA (Digital business and entrepreneurship)',
                position: 'top',
                side: 'right'
            },
            {
                year: '2022',
                title: 'Jayshree Periwal High School',
                description: 'High School Diploma with highest score in accountancy (95)',
                position: 'middle',
                side: 'left'
            },
            {
                year: '2020',
                title: 'Mangal Newton School',
                description: 'Class 10 - Secured 4th rank with 95.4% in overall academic performance',
                position: 'bottom',
                side: 'right'
            },
            {
                year: '2018',
                title: 'Math Olympiad',
                description: 'Achieved bronze medal demonstrating advanced problem-solving skills',
                position: 'bottom-plus',
                side: 'left'
            }
        ];
        
        // Create timeline points
        createTimelinePoints(timelineContainer, timelineData);
        
        // Add click handlers for timeline points
        addTimelineInteractivity();
    }
});

function createTimelinePoints(container, data) {
    data.forEach((item, index) => {
        // Calculate position based on distribution
        let topPosition;
        
        switch(item.position) {
            case 'top':
                topPosition = '0%';
                break;
            case 'middle':
                topPosition = '33%';
                break;
            case 'bottom':
                topPosition = '66%';
                break;
            case 'bottom-plus':
                topPosition = '90%';
                break;
            default:
                topPosition = `${(index / (data.length - 1)) * 100}%`;
        }
        
        // Create timeline point
        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.style.top = topPosition;
        point.setAttribute('data-year', item.year);
        
        // Create timeline content
        const content = document.createElement('div');
        content.className = `timeline-content ${item.side}`;
        content.style.top = topPosition;
        content.innerHTML = `
            <h3>${item.title} (${item.year})</h3>
            <p>${item.description}</p>
        `;
        
        // Append to timeline
        container.appendChild(point);
        container.appendChild(content);
    });
}

function addTimelineInteractivity() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    timelinePoints.forEach(point => {
        point.addEventListener('click', () => {
            // Remove active class from all points
            timelinePoints.forEach(p => p.classList.remove('active'));
            
            // Add active class to current point
            point.classList.add('active');
        });
    });
    
    // Activate first point by default
    if (timelinePoints.length > 0) {
        timelinePoints[0].classList.add('active');
    }
}
