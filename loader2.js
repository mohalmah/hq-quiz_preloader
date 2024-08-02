// Create a style element for our CSS
const style = document.createElement('style');
style.textContent = `
    #custom-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        z-index: 9999;
    }
    .container {
        text-align: center;
        width: 90%;
        max-width: 300px;
    }
    h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }
    .block {
        background-color: white;
        border-radius: 10px;
        padding: 15px;
        margin: 15px 0;
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
`;
document.head.appendChild(style);

// Create and show the overlay immediately
function createAndShowOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'custom-loader';

    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.textContent = "Let's build your ideal 10 min haircare routine ✨";
    container.appendChild(title);

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

    const loaderContainer = document.createElement('div');
    loaderContainer.className = 'loader-container';

    const loaderText = document.createElement('div');
    loaderText.className = 'loader-text';
    loaderText.textContent = 'Personal space loading';
    loaderContainer.appendChild(loaderText);

    const loader = document.createElement('div');
    loader.className = 'loader';

    const loaderBar = document.createElement('div');
    loaderBar.className = 'loader-bar';

    loader.appendChild(loaderBar);
    loaderContainer.appendChild(loader);
    container.appendChild(loaderContainer);

    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // Start animation
    animateBlocksAndLoader();
}

function animateBlocksAndLoader() {
    const blocks = document.querySelectorAll('.block');
    const loaderBar = document.querySelector('.loader-bar');
    const totalBlocks = blocks.length;
    let delay = 0;

    blocks.forEach((block, index) => {
        setTimeout(() => {
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
            
            const progress = ((index + 1) / totalBlocks) * 100;
            loaderBar.style.width = `${progress}%`;
        }, delay);

        delay += 1250;
    });
}

// Create and show overlay immediately
createAndShowOverlay();

// Function to hide the overlay (to be called by Flutter when it's ready)
window.hideCustomLoader = function() {
    const loader = document.getElementById('custom-loader');
    if (loader) {
        loader.style.display = 'none';
    }
};
