import "./canvas.css";
import Camera from "./Camera";
import Point from "./Point";


const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth*0.7;
canvas.height = window.innerHeight*0.7;


const point1 = new Point(2,2,2);
console.log(point1.convertPointTo2d([canvas.width,canvas.height]));

document.body.appendChild(canvas);