import "./index.css";
import Camera from "./Camera";
import cubes from "./Cubes"

//setup canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.8;
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth = 1;
ctx.lineCap ='round';
ctx.translate(0.5,0.5);
document.body.appendChild(canvas);

//setup camera
Camera.display=[canvas.width,canvas.height];


const drawLine = (point1,point2)=>{
    if(point1.z1 >0 && point2.z1>0) {
        ctx.moveTo(point1.x1, point1.y1);
        ctx.lineTo(point2.x1, point2.y1);
        ctx.stroke();
        ctx.beginPath();
        ctx.closePath();
    }
};
const drawCube=(cube)=> {
    drawLine(cube[0], cube[1]);
    drawLine(cube[0], cube[2]);
    drawLine(cube[0], cube[4]);
    drawLine(cube[1], cube[5]);
    drawLine(cube[1], cube[3]);
    drawLine(cube[2], cube[3]);
    drawLine(cube[2], cube[6]);
    drawLine(cube[3], cube[7]);
    drawLine(cube[4], cube[5]);
    drawLine(cube[4], cube[6]);
    drawLine(cube[5], cube[7]);
    drawLine(cube[6], cube[7]);
};


const drawAllCubes = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    cubes.forEach(cube=>{
        cube.forEach(point=>{
            point.convertPointTo2d();
        });
        drawCube(cube);
    });
};

drawAllCubes();


//control
window.addEventListener('keydown',(e)=>{
    if(e.keyCode===38){
        Camera.position[2]+=0.1;
    }
    if(e.keyCode===40){
        Camera.position[2]-=0.1;
    }
    if(e.keyCode===39){
        Camera.position[0]+=0.1;
    }
    if(e.keyCode===37){
        Camera.position[0]-=0.1;
    }
    if(e.keyCode===33){
        Camera.position[1]-=0.1;
    }
    if(e.keyCode===34){
        Camera.position[1]+=0.1;
    }
    if(e.keyCode===87){
        Camera.orientation[0]+=0.01;
    }
    if(e.keyCode===83){
        Camera.orientation[0]-=0.01;
    }
    if(e.keyCode===68){
        Camera.orientation[1]+=0.01;
    }
    if(e.keyCode===65){
        Camera.orientation[1]-=0.01;
    }
    if(e.keyCode===88){
        Camera.orientation[2]+=0.01;
    }
    if(e.keyCode===90){
        Camera.orientation[2]-=0.01;
    }
    if(e.keyCode===187){
        Camera.zoom+=0.01;
    }
    if(e.keyCode===189){
        Camera.zoom -=0.01;
    }
    if(e.keyCode===32){
        console.log(Camera.position)
    }

    drawAllCubes();
});

const button = document.createElement("button");
button.textContent="reset";
button.addEventListener("click",()=>{
        Camera.position= [15,-3,-15];
        Camera.orientation=[0,0,0];
        Camera.zoom =1;
        drawAllCubes();

});
document.body.appendChild(button);





