var typed   = new Typed('.text', {
    strings: [' Frontend Developer', ' Photographer'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true

})
function handleSubmit() {
    // Display the loading icon and hide the submit button
    document.getElementById('submit-btn').classList.add('loading');
    
    // Simulate an asynchronous process (saving data)
    setTimeout(function () {
        // After saving data, hide the loading icon and show the submit button
        document.getElementById('submit-btn').classList.remove('loading');
    }, 3800); // Adjust the timeout as needed for your actual data-saving process
}
var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the header
        document.querySelector('.header').classList.remove('hidden');
    } else {
        // Scrolling down, hide the header
        document.querySelector('.header').classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
});
document.addEventListener("DOMContentLoaded", function () {
    const githubLogo = document.getElementById("githubLogo");
    githubLogo.innerHTML = '<box-icon type="logo" name="github"></box-icon>';

    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        const filterValue = button.getAttribute('data-filter');
        if (filterValue !== 'all') {
            // Add icon to the button based on filter value
            const icon = getIcon(filterValue);
            button.innerHTML = `${icon} ${button.textContent}`;
        }
        button.addEventListener('click', () => {
            filterProjects(filterValue); 
        });
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.card');
    projects.forEach(project => {
        const projectCategories = project.classList;
        if (category === 'all' || projectCategories.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
function getIcon(category) {
    switch (category) {
        case 'web':
            return '<i class=\'bx bx-desktop\'></i>';
        case 'mobile':
            return '<i class=\'bx bxs-devices\'></i>';
        case 'photography':
            return '<i class=\'bx bxs-photo-album\'></i>';
        default:
            return '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Close the mobile navigation bar when a link is clicked
    var navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
        });
    });
});

