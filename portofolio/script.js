document.addEventListener("DOMContentLoaded", () => {
    const hover1Sound = new Audio("assets/sounds/"); 
    const hover2Sound = new Audio("assets/sounds/famous.mp3");

    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("mouseenter", () => {
            let soundType = button.getAttribute("data-sound");

            if (soundType === "hover1") {
                hover1Sound.currentTime = 0; // Restart sound
                hover1Sound.play();
            } else if (soundType === "hover2") {
                hover2Sound.currentTime = 0;
                hover2Sound.play();
            }
        });
    });
});
