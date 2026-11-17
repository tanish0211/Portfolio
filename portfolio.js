
/* ==========================================
   TANISH ROHILA - PORTFOLIO JAVASCRIPT
========================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close the menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


/* 2. DARK AND LIGHT MODE */

const themeToggle = document.getElementById("themeToggle");


function updateThemeButton() {

    if (!themeToggle) return;

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️ Light Mode";

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

    }

}


// Load the saved theme

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}

updateThemeButton();


// Change theme on button click

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const currentTheme =
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light";

        localStorage.setItem("portfolioTheme", currentTheme);

        updateThemeButton();

    });

}


/* 3. AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* 4. CONTACT FORM VALIDATION */

const contactForm = document.getElementById("portfolioContactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("senderName").value.trim();

        const email = document.getElementById("senderEmail").value.trim();

        const subject = document.getElementById("senderSubject").value.trim();

        const message = document.getElementById("senderMessage").value.trim();

        const status = document.getElementById("contactStatus");


        // Check whether all fields are filled

        if (!name || !email || !subject || !message) {

            status.textContent = "Please complete all fields.";

            status.className = "form-message error";

            return;

        }


        // Basic email format validation

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            status.textContent = "Please enter a valid email address.";

            status.className = "form-message error";

            return;

        }


        status.textContent =
            "Thank you, " + name +
            "! Your form has been validated. This demonstration does not send messages.";

        status.className = "form-message success";

        contactForm.reset();

    });

}


/* 5. ACTIVE NAVIGATION LINK */

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }, {
        rootMargin: "-30% 0px -60% 0px"
    });


    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


/* 6. CONSOLE MESSAGE */

console.log("Welcome to Tanish Rohila's Portfolio!");

console.log("Portfolio website loaded successfully.");
