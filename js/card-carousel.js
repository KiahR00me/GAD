var cards = document.getElementById("cards");
var card = cards.children;
var currentIndex = 1;
var totalCards = card.length;
var autoSpinInterval;

// INIT: Assign IDs and classes to cards
for (var i = 0; i < totalCards; i++) {
    card[i].id = `card-${i}`;
    card[i].classList.add(`card-${i}`);
}

function Spin(direction) {
    // DEFINE: Remove current classes
    for (var i = 0; i < totalCards; i++) {
    card[i].classList.remove('card-0', 'card-1', 'card-2');
    }

    // DIRECTION: Update currentIndex based on direction
    if (direction === 'next') {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex + 1) % totalCards;
    }

    // SPIN: Assign new classes based on updated currentIndex
    card[(currentIndex - 1 + totalCards) % totalCards].classList.add('card-0');
    card[currentIndex].classList.add('card-1');
    card[(currentIndex + 1) % totalCards].classList.add('card-2');

    // Reset auto spin intervals
    resetAutoSpin();
}

function autoSpin() {
    Spin('prev');
}

function resetAutoSpin() {
    clearInterval(autoSpinInterval);
    autoSpinInterval = setInterval(autoSpin, 5000);
}

function handleFocusChange() {
    if (document.hasFocus()) {
        resetAutoSpin(); // Resume normal auto spin when window is focused
    } else {
        clearInterval(autoSpinInterval); // Stop auto spin when window is not focused
    }
}

// Start auto spin on page load
resetAutoSpin();

// Listen for focus changes
window.addEventListener("focus", handleFocusChange);
window.addEventListener("blur", handleFocusChange);