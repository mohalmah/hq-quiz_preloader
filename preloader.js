// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/mohalmah/hq-quiz_preloader/hq_loader.svg';
svgImage.style.cssText = `
    width: 100px;
    height: 100px;
    display: block;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Create the text container
const textContainer = document.createElement('div');
textContainer.id = 'textContainer';
textContainer.style.cssText = `
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    display: none;
`;

// Append the text container to the body
document.body.appendChild(textContainer);

// Add the text lines to the container
const textLinesContent = [
    'Checking available seats',
    'seats available', // Placeholder for random number
    '1 seat reserved for you',
    'Please complete quiz to check if you’re a fit',
    'Quiz starting now…'
];

textLinesContent.forEach((text, index) => {
    const line = document.createElement('p');
    line.style.cssText = `
        margin: 0;
        padding: 0;
        font-size: 1.2em;
        color: #333; // Change the color as needed
        opacity: 0;
        transition: opacity 2s ease-in-out;
    `;
    line.innerText = text;
    line.id = `textLine${index}`;
    textContainer.appendChild(line);
});

// Function to show and animate the text lines
function animateTextLines() {
    let delay = 500; // Initial delay before the first line appears

    textLinesContent.forEach((_, index) => {
        setTimeout(() => {
            const line = document.getElementById(`textLine${index}`);
            line.style.opacity = '1';
            // Update the 'seats available' line with a random number
            if (index === 1) {
                const randomSeats = Math.floor(Math.random() * 20);
                line.innerText = `${randomSeats} seats available`;
            }
        }, delay);

        delay += 1000; // Increment delay for the next line
    });
}

// Function to hide the overlay and display the SVG and text
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
    textContainer.style.display = 'block';
    animateTextLines();
}

// Add event listeners for DOMContentLoaded and load events
document.addEventListener('DOMContentLoaded', hideOverlay);
window.addEventListener('load', hideOverlay);
