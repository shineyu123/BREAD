// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select buttons
    const signButton = document.querySelector(".sign");
    const speechButton = document.querySelector(".speech");

    // Add event listeners to buttons
    signButton.addEventListener("click", function () {
        window.location.href = "sign-language.html";
    });

    speechButton.addEventListener("click", function () {
        window.location.href = "speech-to-text.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".start1").addEventListener("click", function() {
        document.getElementById("message1").style.display = "block";
        document.getElementById("message2").style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".start1").addEventListener("click", function () {
        // Hide the Start button
        this.style.display = "none";
        
        // Show button1 and button2 by removing the 'hidden' class
        document.querySelector(".button-container div").classList.remove("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select buttons
    const sign1Button = document.querySelector(".sign1");
    const speech1Button = document.querySelector(".speech1");

    // Add event listeners to buttons
    sign1Button.addEventListener("click", function () {
        window.location.href = "sign-language.html";
    });
	
	speech1Button.addEventListener("click", function () {
        window.location.href = "speech-to-text.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const start2Button = document.querySelector(".start2");
    const playButton = document.querySelector(".play");
	const play2Button = document.querySelector(".play2");
    const speech2Button = document.querySelector(".speech2");
    const speechContainer = document.querySelector(".speech-container");

    // When Start2 is clicked
    if (start2Button) {
        start2Button.addEventListener("click", function () {
            localStorage.setItem("redirectedFromTemp", "true"); // Save state
            window.location.href = "temporary-page.html"; // Redirect to temporary page
        });
    }

    // When Play is clicked
    if (playButton) {
        playButton.addEventListener("click", function () {
            localStorage.setItem("redirectedFromTemp", "true"); // Keep the same state
            window.location.href = "temporary1-page.html"; // Redirect to temporary1-page.html
        });
    }
	
	if (play2Button) {
        play2Button.addEventListener("click", function () {
            localStorage.setItem("redirectedFromTemp", "true"); // Keep the same state
            window.location.href = "temporary2-page.html"; // Redirect to temporary2-page.html
        });
    }

    // When Speech2 is clicked
    if (speech2Button) {
        speech2Button.addEventListener("click", function () {
            window.location.href = "speech-to-text.html"; // Redirect back to speech-to-text.html
        });
    }

    // Check if returning from temporary pages
    if (localStorage.getItem("redirectedFromTemp") === "true") {
        localStorage.removeItem("redirectedFromTemp"); // Remove flag

        // Hide start2 button
        if (start2Button) start2Button.style.display = "none";

        // Show speech-container
        if (speechContainer) {
            speechContainer.style.display = "flex";
        }
    }
});
