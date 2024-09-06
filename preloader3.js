/// Create a style element for our CSS
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
        background-color: #f0f0f0;
        z-index: 999;
    }
    .container {
        text-align: center;
        width: 90%;
        max-width: 300px;
    }
    h1 {
        font-size: 18px;
        margin-bottom: 20px;
    }
    .block {
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        margin: 10px 0;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s, transform 0.5s;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        font-size: 16px;
    }
    .loader-container {
        margin-top: 20px;
    }
    .loader-text {
        font-size: 14px;
        color: #666;
        margin-bottom: 5px;
        text-align: left;
    }
    .loader {
        width: 100%;
        height: 15px;
        background-color: #e0e0f0;
        position: relative;
        overflow: hidden;
        border-radius: 7.5px;
    }
    .loader-bar {
        width: 0;
        height: 100%;
        background-color: #5e5ce6;
        transition: width 0.5s ease-out;
        border-radius: 7.5px;
    }
    @media (max-width: 600px) {
        .container {
            width: 85%;
        }
        .block {
            font-size: 14px;
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
title.textContent = "Let's build your ideal 10 min haircare routine ✨";
container.appendChild(title);

// Create the blocks
const blockTexts = [
    "🚫 No more hidden harmful ingredients.",
    "🌱 Reduced hair loss and new baby hair growth.",
    "🔬 Split ends that don't come back.",
    "💛 The best of science, made easy at home."
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
loaderText.textContent = 'Personal space loading';
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
    let delay = 3000; // Start with a 3-second delay

    blocks.forEach((block, index) => {
        setTimeout(() => {
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
            
            // Update loader bar
            const progress = ((index + 1) / totalBlocks) * 100;
            loaderBar.style.width = `${progress}%`;
        }, delay);

        delay += 1250; // 1.25 seconds between each block
    });

    // Hide overlay after all blocks are animated
    setTimeout(() => {
        overlay.style.display = 'none';
    }, delay);
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
