window.onload = function () {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

    let isDrawing;
    

    function startDrawing(e) {
        // Начинаем рисовать
        isDrawing = true;
        
        // Создаем новый путь (с текущим цветом и толщиной линии) 
        context.beginPath();
        
        // Нажатием левой кнопки мыши помещаем "кисть" на холст
        context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    }

    function draw(e) {
        if (isDrawing == true){
            // Определяем текущие координаты указателя мыши
            let x = e.pageX - canvas.offsetLeft;
            let y = e.pageY - canvas.offsetTop;
            
            // Рисуем линию до новой координаты
            context.lineTo(x, y);
            context.stroke();
        }
    }

    function stopDrawing() {
        isDrawing = false;	
    }
}