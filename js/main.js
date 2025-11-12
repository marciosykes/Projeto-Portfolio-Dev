document.addEventListener('DOMContentLoaded', () => {
    const vectorElements = document.querySelector('.vector');
    const projectsSection = document.getElementById('projects');

    if (vectorElements && projectsSection) {
        vectorElements.addEventListener('click', () => {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});