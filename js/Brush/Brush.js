class Brush {
    constructor(x, y, size, color = 'black', shape = 'circle', mode) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.shape = shape;
        this.mode = mode
    }

    draw() {
        if(this.mode == 'eraser') this.color = 'white'
        
        if(this.shape == 'circle') {
            context.beginPath();
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
            context.fillStyle = this.color;
            context.fill();
            context.closePath();
        } else {
            context.fillStyle = this.color
            context.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    update() {
        this.draw();
    }
}