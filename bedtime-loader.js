// Create a style element for our CSS
const style = document.createElement('style');
style.textContent = `
    #loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #FFF3E0;
        z-index: 999;
    }
    .container {
        text-align: center;
        width: 90%;
        max-width: 300px;
    }
    h1 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #FF6F00;
        font-family: 'Comic Sans MS', cursive, sans-serif;
    }
    .block {
        background-color: white;
        border-radius: 15px;
        padding: 15px;
        margin: 15px 0;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s, transform 0.5s;
        box-shadow: 0 4px 8px rgba(255, 111, 0, 0.2);
        font-size: 18px;
        font-family: 'Arial Rounded MT Bold', sans-serif;
        color: #FF9800;
    }
    .loader-container {
        margin-top: 20px;
    }
    .loader-text {
        font-size: 16px;
        color: #F57C00;
        margin-bottom: 10px;
        text-align: center;
        font-family: 'Comic Sans MS', cursive, sans-serif;
    }
    .loader {
        width: 100%;
        height: 20px;
        background-color: #FFE0B2;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
    }
    .loader-bar {
        width: 0;
        height: 100%;
        background-color: #FF9800;
        transition: width 0.5s ease-out;
        border-radius: 10px;
    }
    @media (max-width: 600px) {
        .container {
            width: 85%;
        }
        .block {
            font-size: 16px;
        }
    }
`;
document.head.appendChild(style);

// Create the overlay element
const overlay = document.createElement('div');
overlay.id = 'loader';

// Create the container for all content
const container = document.createElement('div');
container.className = 'container';

// Create and append the title
const title = document.createElement('h1');
title.textContent = "Creating your magical bedtime story 🌙✨";
container.appendChild(title);

// Create the blocks
const blockTexts = [
    "🧚 Sprinkling fairy dust on your story...",
    "🐉 Waking up friendly dragons...",
    "🏰 Building enchanted castles...",
    "🌈 Painting colorful dreams..."
];

blockTexts.forEach((text, index) => {
    const block = document.createElement('div');
    block.className = 'block';
    block.id = `block${index + 1}`;
    block.textContent = text;
    container.appendChild(block);
});

// Create the loader container
const loaderContainer = document.createElement('div');
loaderContainer.className = 'loader-container';

// Create and append the loader text
const loaderText = document.createElement('div');
loaderText.className = 'loader-text';
loaderText.textContent = 'Brewing story magic...';
loaderContainer.appendChild(loaderText);

// Create the loader bar
const loader = document.createElement('div');
loader.className = 'loader';

const loaderBar = document.createElement('div');
loaderBar.className = 'loader-bar';

loader.appendChild(loaderBar);
loaderContainer.appendChild(loader);
container.appendChild(loaderContainer);

// Append the container to the overlay
overlay.appendChild(container);

// Function to animate blocks and update loader
function animateBlocksAndLoader() {
    const blocks = document.querySelectorAll('.block');
    const totalBlocks = blocks.length;
    let delay = 0;

    blocks.forEach((block, index) => {
        setTimeout(() => {
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
            
            // Update loader bar
            const progress = ((index + 1) / totalBlocks) * 100;
            loaderBar.style.width = `${progress}%`;
            
            // Update loader text
            loaderText.textContent = `Brewing story magic... ${Math.round(progress)}%`;
        }, delay);

        delay += 1500; // 1.5 seconds between each block
    });

    // Hide overlay after all blocks are animated
    setTimeout(() => {
        overlay.style.display = 'none';
    }, delay + 1000); // Extra second for final state
}

// Function to show the overlay
function showOverlay() {
    document.body.appendChild(overlay);
    // Force a reflow to ensure styles are applied immediately
    overlay.offsetHeight;
    animateBlocksAndLoader();
}

// Add event listener to show overlay when DOM is loaded
document.addEventListener('DOMContentLoaded', showOverlay);
