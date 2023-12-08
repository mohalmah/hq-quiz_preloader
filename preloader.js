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
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Create text container and lines
const textContainer = document.createElement('div');
textContainer.id = 'textContainer';
textContainer.style.cssText = `
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: none;
`;

const textLines = [
    'Checking available seats',
    '18 seats available',
    '1 seat reserved for you',
    'Please complete quiz to check if you’re a fit',
    'Quiz starting now…'
];

textLines.forEach((line, index) => {
    const p = document.createElement('p');
    p.id = `textLine${index + 1}`;
    p.style.cssText = 'margin: 0; padding: 0; font-size: 1.2em;';
    p.innerText = line;
    textContainer.appendChild(p);
});

// Append elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);
document.body.appendChild(textContainer);

// Function to hide the overlay and display the SVG and text
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
    textContainer.style.display = 'block';
    
    // Random number for available seats
    const randomSeats = Math.floor(Math.random() * 20);
    document.getElementById('textLine2').innerText = `${randomSeats} seats available`;

    // Show text lines with delay
    textLines.forEach((_, index) => {
        setTimeout(() => {
            document.getElementById(`textLine${index + 1}`).style.display = 'block';
        }, (index + 1) * 1000);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', hideOverlay);
window.addEventListener('load', hideOverlay);
