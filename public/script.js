window.onload = function () {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = drawing;

    socket.on('mouse', newDrawing);
    let isDrawing;
    
    function startDrawing(e) {       
        isDrawing = true;
        context.beginPath();
        context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
        
    }
    function newDrawing(data) {
        let x = data.x;
        let y = data.y;
        context.lineTo(x, y);
        context.stroke();

    }
    function drawing(e) {
        if (isDrawing == true){
            let x = e.pageX - canvas.offsetLeft;
            let y = e.pageY - canvas.offsetTop;
            context.lineTo(x, y);
            context.stroke();

            let data = {
                x: x,
                y: y
            }
            socket.emit('mouse', data);
        }
    }

    function stopDrawing() {
        isDrawing = false;	
    }
}

