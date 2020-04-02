import "./canvas.css";
import Camera from "./Camera";
import Point from "./Point";


const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.8;




Camera.display=[canvas.width,canvas.height];

const cube1 = [new Point(0,0,0),
    new Point(250,0,0),
    new Point(0,250,0),
    new Point(250,250,0),
    new Point(0,0,250),
    new Point(250,0,250),
    new Point(0,250,250),
    new Point(250,250,250)];

const cube2 = [new Point(0,0,500),
    new Point(250,0,500),
    new Point(0,250,500),
    new Point(250,250,500),
    new Point(0,0,750),
    new Point(250,0,750),
    new Point(0,250,750),
    new Point(250,250,750)];

const cube3 = [new Point(500,0,0),
    new Point(750,0,0),
    new Point(500,250,0),
    new Point(750,250,0),
    new Point(500,0,250),
    new Point(750,0,250),
    new Point(500,250,250),
    new Point(750,250,250)];

const cube4 = [new Point(500,0,500),
    new Point(750,0,500),
    new Point(500,250,500),
    new Point(750,250,500),
    new Point(500,0,750),
    new Point(750,0,750),
    new Point(500,250,750),
    new Point(750,250,750)];

ctx.strokeStyle="rgb(255,0,0)";
ctx.lineWidth = 1;


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

drawAllLines(cube1);
drawAllLines(cube2);
drawAllLines(cube3);
drawAllLines(cube4);








document.body.appendChild(canvas);