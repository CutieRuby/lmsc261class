function drawEye(p5, cx, cy, size)
{
    p5.fill(0);
    p5.circle(cx, cy, size);
        
    p5.fill(255,0,0)
    p5.circle(cx, cy, size * 0.6);

    p5.fill(255,255,0);
    p5.circle(cx, cy, size * 0.55);

    p5.fill(0);
    p5.circle(cx, cy, size * 0.2);

}

const majoraMoon = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(30, 230, 230)

    //Moon
    p5.fill(128, 128, 128);
    p5.circle(300, 300, 400);
        
   
    drawEye(p5, 
        p5.width * 0.375, 
        p5.height * 0.4, 
    p5.width * 0.225);

        drawEye(p5, 
        p5.width * 0.625, 
        p5.height * 0.4, 
    p5.width * 0.225);

    
    // drawMouth
    //Mouth
    p5.fill(0);
    p5.rect(200, 350, 200, 80)
        //gums
        p5.fill(255,204,229)
      p5.rect(210, 350, 180, 20)
      p5.rect(210, 410, 180, 20)
    
    //Teeth
    p5.fill(236, 240, 175)
    p5.square(215, 360, 20)
    p5.square(245, 360, 20)
    p5.square(275, 360, 20)
    p5.square(305, 360, 20)
    p5.square(335, 360, 20)
    p5.square(365, 360, 20)

    p5.square(215, 400, 20)
    p5.square(245, 400, 20)
    p5.square(275, 400, 20)
    p5.square(305, 400, 20)
    p5.square(335, 400, 20)
    p5.square(365, 400, 20)

    }



    p5.mousePressed = () => {
        console.log("Mouse Pressed!");
    }
}

new p5(majoraMoon);


/*

const majoraMoon = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(30, 230, 230)

    //Moon
    p5.fill(128, 128, 128);
    p5.circle(300, 300, 400);
        
   
    //Eyes
    p5.fill(0);
    p5.circle(375, 250, 150);
    p5.circle(225, 250, 150);
        
    p5.fill(255,0,0)
    p5.circle(375, 250, 80);
    p5.circle(225, 250,80);

    p5.fill(255,255,0);
    p5.circle(375, 250, 65);
    p5.circle(225, 250,65);

    p5.fill(0);
    p5.circle(375, 250, 20);
    p5.circle(225, 250, 20);


    
    //Mouth
    p5.fill(0);
    p5.rect(200, 350, 200, 80)
        //gums
        p5.fill(255,204,229)
      p5.rect(210, 350, 180, 20)
      p5.rect(210, 410, 180, 20)
    
    //Teeth
    p5.fill(236, 240, 175)
    p5.square(215, 360, 20)
    p5.square(245, 360, 20)
    p5.square(275, 360, 20)
    p5.square(305, 360, 20)
    p5.square(335, 360, 20)
    p5.square(365, 360, 20)

    p5.square(215, 400, 20)
    p5.square(245, 400, 20)
    p5.square(275, 400, 20)
    p5.square(305, 400, 20)
    p5.square(335, 400, 20)
    p5.square(365, 400, 20)

    }



    p5.mousePressed = () => {
        console.log("Mouse Pressed!");
    }
}

new p5(majoraMoon);

*/