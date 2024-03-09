document.addEventListener('DOMContentLoaded', function() {
    const showsLink = document.getElementById("shows-link");
    const showsSection = document.getElementById("shows");

    showsLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('showsLink  clicked!')
        showsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
