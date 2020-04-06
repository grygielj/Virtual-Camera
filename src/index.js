import "./index.css";
import Camera from "./Camera";
import cubes from "./Cubes";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";


library.add(faCheck);
dom.watch();

//setup canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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
    drawAllCubes()
});

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
    switch (e.keyCode) {
        case 39:
            Camera.position[0]+=0.1;
            break;
        case 37:
            Camera.position[0]-=0.1;
            break;
        case 33:
            Camera.position[1]-=0.1;
            break;
        case 34:
            Camera.position[1]+=0.1;
            break;
        case 38:
            Camera.position[2]+=0.1;
            break;
        case 40:
            Camera.position[2]-=0.1;
            break;
        case 87:
            Camera.orientation[0]+=0.01;
            break;
        case 83:
            Camera.orientation[0]-=0.01;
            break;
        case 68:
            Camera.orientation[1]+=0.01;
            break;
        case 65:
            Camera.orientation[1]-=0.01;
            break;
        case 88:
            Camera.orientation[2]+=0.01;
            break;
        case 90:
            Camera.orientation[2]-=0.01;
            break;
        case 77:
            Camera.zoom+=0.01;
            break;
        case 78:
            Camera.zoom -=0.01;
            break;
    }
    drawAllCubes();
});

//reset button
const button = document.createElement("button");
button.textContent="RESET";
button.classList.add('reset');
button.addEventListener("click",()=>{
        Camera.position= [0,0,-15];
        Camera.orientation=[0,0,0];
        Camera.zoom =1;
        drawAllCubes();

});
document.body.appendChild(button);


const infoBtn = document.createElement("button");
infoBtn.innerHTML=`</kbd><i class="fas fa-info-circle"></i>`;
infoBtn.classList.add('infoBtn');
document.body.appendChild(infoBtn);

const div = document.createElement('div');
div.innerHTML=`
    <div class="content">
        <div class="close"></div>
        <h1> Info</h1>
        <p> This is simulator of virtual camera. You can move around!</p>
        <br/>
        <p> Forward / Backward <kbd>↑</kbd> / <kbd>↓</kbd></p>
        <p> Left / Right <kbd>←</kbd> / <kbd>→</kbd></p>
        <p> Up / Down <kbd> PgUp </kbd> / <kbd> PgDown </kbd></p>
        <p> rotations <kbd>w</kbd> <kbd>a</kbd> <kbd>s</kbd> <kbd>d</kbd> <kbd>z</kbd> <kbd>x</kbd></p>
        <p> zoom <kbd>n</kbd> <kbd>m</kbd></p>


  </div>
`;
div.classList.add('modal');
document.body.appendChild(div);

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener('click',()=>{
    div.classList.remove("open");
})
infoBtn.addEventListener('click',()=>{
    div.classList.add("open");
})

const styles = document.createElement("link");
styles.type="text/css";
styles.rel="stylesheet";
styles.href = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,300;1,500&display=swap";
document.head.appendChild(styles);





