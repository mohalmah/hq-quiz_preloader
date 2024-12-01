// Create the scanner container
const scannerContainer = document.createElement('div');
scannerContainer.className = 'scanner-container';

// Create document element with contact lines
const documentElement = document.createElement('div');
documentElement.className = 'document';

// Create contact lines container
const contactLines = document.createElement('div');
contactLines.className = 'contact-lines';

// Create contact info lines
const lineClasses = ['line-name', 'line-email', 'line-phone', 'line-address'];
lineClasses.forEach(lineClass => {
    const line = document.createElement('div');
    line.className = `contact-line ${lineClass}`;
    contactLines.appendChild(line);
});

// Create scanning elements
const scanLine = document.createElement('div');
scanLine.className = 'scan-line';

const scanOverlay = document.createElement('div');
scanOverlay.className = 'scan-overlay';

const dataPoints = document.createElement('div');
dataPoints.className = 'data-points';
dataPoints.id = 'dataPoints';

// Assemble the scanner
documentElement.appendChild(contactLines);
scannerContainer.appendChild(documentElement);
scannerContainer.appendChild(scanLine);
scannerContainer.appendChild(scanOverlay);
scannerContainer.appendChild(dataPoints);

// Create and append styles
const scannerStyles = document.createElement('style');
scannerStyles.textContent = `
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .scanner-container {
        position: relative;
        width: 300px;
        height: 180px;
        margin: 20px auto;
        border: 2px solid #79CECC;
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
    }

    .document {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .contact-lines {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    .contact-line {
        height: 12px;
        background: #f0f0f0;
        margin-bottom: 15px;
        border-radius: 2px;
        opacity: 0.7;
    }

    .line-name { width: 60%; }
    .line-email { width: 75%; }
    .line-phone { width: 45%; }
    .line-address { width: 85%; }

    .scan-line {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #79CECC;
        animation: scan 2s linear infinite;
        box-shadow: 0 0 8px 2px rgba(121, 206, 204, 0.5);
    }

    .scan-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom,
            rgba(121, 206, 204, 0.2),
            transparent 10%,
            transparent 90%,
            rgba(121, 206, 204, 0.2));
    }

    .data-points {
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .data-point {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #79CECC;
        border-radius: 50%;
        animation: pulse 2s infinite;
    }

    .hint-text {
        font-size: 1.1em;
        color: #666;
        margin-top: 20px;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        text-align: center;
        position: absolute;
        bottom: -50px;
        left: 0;
        right: 0;
        pointer-events: none;
    }

    .hint-text.show {
        opacity: 1;
        transform: translateY(0);
    }

    @keyframes scan {
        0% {
            top: -2px;
            opacity: 0.8;
        }
        50% {
            opacity: 1;
        }
        100% {
            top: 100%;
            opacity: 0.8;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.5);
            opacity: 0.5;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

document.head.appendChild(scannerStyles);

// Create the overlay element
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
    background: linear-gradient(-45deg, #ffffff, #f8f8f8, #f0f0f0, #ffffff);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    z-index: 999;
`;

// Create a container for the scanner
const centerContainer = document.createElement('div');
centerContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
`;

// Create hint text element
const hintText = document.createElement('div');
hintText.className = 'hint-text';
centerContainer.appendChild(scannerContainer);
centerContainer.appendChild(hintText);
overlay.appendChild(centerContainer);
document.body.appendChild(overlay);

// Pool of hints
const hints = [
    "📱 Scan it, save it, find it later",
    "💼 Never lose a business connection",
    "🔍 Instantly searchable contacts",
    "📲 One tap to save",
    "🗃️ All your cards in one place",
    "✨ Clean up your wallet",
    "📊 Smart contact organization",
    "🔄 Update contacts instantly",
    "📱 Share contacts easily",
    "💡 No more lost business cards"
];

// Function to show random hint
function showRandomHint() {
    const hint = hints[Math.floor(Math.random() * hints.length)];
    hintText.textContent = hint;
    hintText.classList.add('show');
    
    setTimeout(() => {
        hintText.classList.remove('show');
    }, 2000);

    setTimeout(() => {
        showRandomHint();
    }, 3000);
}

// Add data points animation
function createDataPoint() {
    const point = document.createElement('div');
    point.className = 'data-point';
    point.style.left = Math.random() * 100 + '%';
    point.style.top = Math.random() * 100 + '%';
    dataPoints.appendChild(point);
    
    setTimeout(() => {
        point.remove();
    }, 2000);
}

setInterval(createDataPoint, 300);

function showOverlay() {
    overlay.style.display = 'flex';
    showRandomHint();
}

function hideOverlay() {
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', showOverlay);
window.addEventListener('load', hideOverlay);
