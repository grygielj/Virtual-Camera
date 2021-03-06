import "./index.css";
import Camera from "./Camera";
import cubes from "./Cubes";
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

let BACKGROUND_COLOR ="#ffffff";
let COLOR = "#000000";
let SPEED = 1;

//setup fontawesome
library.add(fas, far);
dom.i2svg();

//setup canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth = 1;
ctx.lineCap ='round';
document.body.appendChild(canvas);

//setup camera
Camera.display=[canvas.width,canvas.height];

//handling resize of window
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Camera.display=[canvas.width,canvas.height];
    drawAllCubes();
});

const drawLine = (point1,point2)=>{
    if(point1.z1 >0 && point2.z1>0) {
        ctx.strokeStyle=COLOR;
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
    ctx.fillStyle = `${BACKGROUND_COLOR}`;
    ctx.rect(0,0, canvas.width, canvas.height);
    ctx.fill();
    cubes.forEach(cube=>{
        cube.forEach(point=>{
            point.convertPointTo2d();
        });
        drawCube(cube);
    });
};

drawAllCubes("#ffffff","#000000");


//control
window.addEventListener('keydown',(e)=>{
    switch (e.keyCode) {
        case 39:
            Camera.position[2]+=0.1*SPEED*Math.cos((Camera.orientation[1]+1.57));
            Camera.position[0]+=0.1*SPEED*Math.sin((Camera.orientation[1]+1.57));
            break;
        case 37:
            Camera.position[2]-=0.1*SPEED*Math.cos(Camera.orientation[1]+1.57);
            Camera.position[0]-=0.1*SPEED*Math.sin(Camera.orientation[1]+1.57);
            break;
        case 33:
            Camera.position[1]-=0.1*SPEED;
            break;
        case 34:
            Camera.position[1]+=0.1*SPEED;
            break;
        case 38:
            console.log(Camera.orientation[1])
            Camera.position[2]+=0.1*SPEED*Math.cos(Camera.orientation[1]);
            Camera.position[0]+=0.1*SPEED*Math.sin(Camera.orientation[1]);
            break;
        case 40:
            Camera.position[2]-=0.1*SPEED*Math.cos(Camera.orientation[1]);
            Camera.position[0]-=0.1*SPEED*Math.sin(Camera.orientation[1]);
            break;
        case 87:
            Camera.orientation[0]+=0.01*SPEED;
            break;
        case 83:
            Camera.orientation[0]-=0.01*SPEED;
            break;
        case 68:
            Camera.orientation[1]+=0.01*SPEED;
            console.log(Camera.position[1])
            break;
        case 65:
            Camera.orientation[1]-=0.01*SPEED;
            break;
        case 88:
            Camera.orientation[2]+=0.01*SPEED;
            break;
        case 90:
            Camera.orientation[2]-=0.01*SPEED;
            break;
        case 77:
            Camera.zoom+=0.01*SPEED;
            break;
        case 78:
            Camera.zoom -=0.01*SPEED;
            break;
        case 32:
            console.log(Camera.position);
            break;

    }
    drawAllCubes();
});

//reset
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener("click",()=>{
        Camera.position= [0,0,-10];
        Camera.orientation=[0,0,0];
        Camera.zoom =1;
        BACKGROUND_COLOR="#ffffff";
        COLOR="#000000"
        drawAllCubes();
});

const infoBtn = document.querySelector(".infoBtn");
const settingsBtn = document.querySelector(".settingsBtn");
const modal = document.querySelector(".modal");
const settingsModal = document.querySelector(".settings__modal");
const closeBtn = document.querySelectorAll(".close");

settingsBtn.addEventListener('click',()=>{
    settingsModal.classList.add("open");
});

closeBtn.forEach((close)=> {
    close.addEventListener('click', () => {
        modal.classList.remove("open");
        settingsModal.classList.remove("open");
    })
});

infoBtn.addEventListener('click',()=>{
    modal.classList.add("open");
});

const backgroundColorPicker = document.querySelector("#backgroundColor");
backgroundColorPicker.addEventListener('change',()=>{
    BACKGROUND_COLOR = backgroundColorPicker.value;
    drawAllCubes();
});

const lineColorPicker = document.querySelector("#lineColor");
lineColorPicker.addEventListener("change",()=>{
    COLOR = lineColorPicker.value;
    drawAllCubes()
});

const speed = document.querySelector("#speed");
speed.addEventListener("change",()=>{
    SPEED = speed.value;
})




