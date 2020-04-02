import "./canvas.css";
import Camera from "./Camera";
import cubes from "./Cubes"

//setup canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.8;
ctx.strokeStyle="rgb(255,0,0)";
ctx.lineWidth = 1;
document.body.appendChild(canvas);

//setup camera
Camera.display=[canvas.width,canvas.height];


const drawLine = (point1,point2)=>{
    ctx.moveTo(point1.x1,point1.y1);
    ctx.lineTo(point2.x1,point2.y1);
    ctx.stroke();
};
const drawAllLines=(cube)=> {
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


cubes.forEach(cube=>{
    cube.forEach(point=>{
        point.convertPointTo2d();
    });
    drawAllLines(cube);
});









