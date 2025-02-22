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

    if (start2Button) {
        start2Button.addEventListener("click", function () {
            window.location.href = "temporary-page.html"; // Redirect to temporary page
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select buttons
    const speech2Button = document.querySelector(".speech2");
	
	speech1Button.addEventListener("click", function () {
        window.location.href = "speech-to-text.html";
    });
});
