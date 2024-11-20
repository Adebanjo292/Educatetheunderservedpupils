document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const welcomeSection = document.getElementById('welcomeSection');
    const coursesSection = document.getElementById('coursesSection');
    const studentWelcome = document.getElementById('studentWelcome');
    const accessCoursesButton = document.getElementById('accessCoursesButton');
    const logoutButton = document.getElementById('logoutButton');

    // Check if a student is already logged in
    const storedName = localStorage.getItem('studentName');
    if (storedName) {
        showWelcomeMessage(storedName);
    }

    // Login form submit event
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentName = document.getElementById('studentName').value.trim();
        if (studentName) {
            localStorage.setItem('studentName', studentName);
            showWelcomeMessage(studentName);
        }
    });

    // Access courses button click event
    accessCoursesButton.addEventListener('click', function() {
        welcomeSection.style.display = 'none';
        coursesSection.style.display = 'block';
    });

    // Logout button click event
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('studentName');
        location.reload();
    });

    // Function to show the welcome message
    function showWelcomeMessage(name) {
        studentWelcome.textContent = name;
        loginSection.style.display = 'none';
        welcomeSection.style.display = 'block';
    }
});
