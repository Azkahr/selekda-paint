const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const colorSample = document.getElementById('color-sample');

function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    const color = rgb(r, g, b);
    colorSample.style.backgroundColor = color;
}

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}