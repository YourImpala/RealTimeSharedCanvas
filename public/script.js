function setup(){
    createCanvas(900, 600);

    //receives coordinates from the server
    socket.on('data', anotherClientDrawing);
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
            y: mouseY
        }
        //send coordinates to server
        socket.emit('data', data);
       
    }
  
}

//draws on another client
function anotherClientDrawing(data) { 
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    
    fill(color1, color2, color3);
    ellipse(data.x, data.y, 80, 80);
}




