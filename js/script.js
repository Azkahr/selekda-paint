const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const selectShape = document.getElementById('select-shape')
const eraser = document.getElementById('eraser')
const brushBtn = document.getElementById('brush')
const brushSize = document.getElementById('brush-size')

canvas.width = 600;
canvas.height = 400;

let brushPosition = {
    x: 0,
    y: 0
};

let size = 1;
let brush;
let isDrawing = false;
let shape = 'circle'
let mode = 'brush'

function changeBrushSize() {
    size = brushSize.value

    document.getElementById('size-value').value = brushSize.value + 'px'
}

function changeMode(e) {
    mode = e.target.innerText

    if(mode == 'eraser') {
        eraser.classList.add('btn-active')
        brushBtn.classList.remove('btn-active')
    } else {
        brushBtn.classList.add('btn-active')
        eraser.classList.remove('btn-active')
    }
}

function changeShape() {
    shape = selectShape.options[selectShape.selectedIndex].value;
}

function updateBrushPosition(e) {
    brushPosition.x = e.clientX - canvas.offsetLeft;
    brushPosition.y = e.clientY - canvas.offsetTop;

    if (isDrawing) {
        brush.x = brushPosition.x;
        brush.y = brushPosition.y;
        brush.update();
    }
}

brushSize.addEventListener('input', changeBrushSize);
eraser.addEventListener('click', changeMode)
brushBtn.addEventListener('click', changeMode)

selectShape.addEventListener('change', changeShape)

canvas.addEventListener('mousemove', updateBrushPosition);

canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;

    let color = document.getElementById('color-sample').style.backgroundColor

    color = color == '' ? 'black' : color
    
    brush = new Brush(brushPosition.x, brushPosition.y, size, color, shape, mode);
});

canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});

canvas.addEventListener('mouseout', function() {
    isDrawing = false;
});

function animate() {
    requestAnimationFrame(animate);
    // The drawing now happens in the updateBrushPosition function
}

animate();