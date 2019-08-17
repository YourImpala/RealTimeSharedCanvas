function setup(){
    createCanvas(900, 600);

    //receives coordinates from the server
    socket.on('data', anotherClientDrawing);
    socket.on('canvasData',newConnectionDraw);
}
//draws the contents of the canvas for a new connection
function newConnectionDraw(data) {
    for (i=0;i<data.length;i++) {
        fill(data[i].color1, data[i].color2, data[i].color3);
        ellipse(data[i].x, data[i].y, 80, 80);
    }
}
//draws on this client
function draw() {
    if (mouseIsPressed && mouseButton === LEFT) {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        
        fill(color1, color2, color3);
        ellipse(mouseX, mouseY, 80, 80);

        let data = {
            x: mouseX,
            y: mouseY,
            color1: color1,
            color2: color2,
            color3: color3
        }
        //send coordinates to server
        socket.emit('data', data);
       
    }
  
}

//draws on another client
function anotherClientDrawing(data) { 
    fill(data.color1, data.color2, data.color3);
    ellipse(data.x, data.y, 80, 80);
}




