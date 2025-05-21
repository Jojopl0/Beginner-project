// School colors: Michigan Maize and Blue
const colors = ['#00274C', '#FFCB05'];

let confettiPlayed = false;

// Helper: Check if user is at (or near) the bottom of the page
function isAtBottom() {
    return (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2);
}

// Fireworks-style confetti animation for 9 seconds
function startSchoolPrideFireworks() {
    const end = Date.now() + (5 * 1000);

    function frame() {
        // Fire from the left
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        // Fire from the right
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        // Continue the animation until 9 seconds have passed
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }

    frame();
}

// Listen for scroll events and trigger confetti at bottom
window.addEventListener('scroll', () => {
    if (isAtBottom() && !confettiPlayed) {
        confettiPlayed = true;
        startSchoolPrideFireworks();
        // Allow retrigger after 10 seconds (9s animation + 1s buffer)
        setTimeout(() => {
            confettiPlayed = false;
        }, 10000);
    }
});
