// Create a style element for our CSS
const style = document.createElement('style');
style.textContent = `
    #preloader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(75, 57, 239, 0.1), rgba(255, 89, 99, 0.1), rgba(238, 139, 96, 0.1));
        z-index: 999;
    }
    .container {
        text-align: center;
        width: 80%;
        max-width: 300px;
    }
    .title {
        font-size: 28px;
        margin-bottom: 20px;
        background: linear-gradient(45deg, #4b39ef, #ff5963, #ee8b60);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
    }
    .loader {
        width: 100%;
        height: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }
    .loader-bar {
        width: 0;
        height: 100%;
        background: linear-gradient(90deg, #4b39ef, #ff5963, #ee8b60);
        border-radius: 10px;
        transition: width 2s ease-in-out;
    }
    .icon {
        font-size: 48px;
        margin-bottom: 20px;
    }
`;
document.head.appendChild(style);

// Create the preloader element
const preloader = document.createElement('div');
preloader.id = 'preloader';

// Create the container for content
const container = document.createElement('div');
container.className = 'container';

// Create and append the icon
const icon = document.createElement('div');
icon.className = 'icon';
icon.textContent = '✨';
container.appendChild(icon);

// Create and append the title
const title = document.createElement('div');
title.className = 'title';
title.textContent = "Bedtime Stories";
container.appendChild(title);

// Create the loader bar
const loader = document.createElement('div');
loader.className = 'loader';

const loaderBar = document.createElement('div');
loaderBar.className = 'loader-bar';

loader.appendChild(loaderBar);
container.appendChild(loader);

// Append the container to the preloader
preloader.appendChild(container);

// Function to animate loader
function animateLoader() {
    setTimeout(() => {
        loaderBar.style.width = '100%';
    }, 100);

    // Hide preloader after animation
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2500); // Adjust timing as needed
}

// Function to show the preloader
function showPreloader() {
    document.body.appendChild(preloader);
    // Force a reflow to ensure styles are applied immediately
    preloader.offsetHeight;
    animateLoader();
}

// Add event listener to show preloader when DOM is loaded
document.addEventListener('DOMContentLoaded', showPreloader);
