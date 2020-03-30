import { create, all } from 'mathjs'
import Camera from './Camera'


const config = { }
const math = create(all, config)

export default class Point{
    constructor(x,y,z) {
        this.x=x;
        this.y=y;
        this.z=z;
    }

     convertPointTo2d = (display)=>{
        const sinFi = Camera.orientation.map(value=>{
            return Math.sin(value);
        })
        const cosFi = Camera.orientation.map(value=>{
            return Math.cos(value);
        })

        const m1 = math.matrix([[1,0,0],
                              [0,cosFi[0],sinFi[0]],
                              [0,-sinFi[0],cosFi[0]]]);

        const m2 = math.matrix([[cosFi[1],0,-sinFi[1]],
                              [0,1,0],
                              [sinFi[1],0,cosFi[1]]]);

        const m3 = math.matrix([[cosFi[2],sinFi[2],0],
                              [-sinFi[2],cosFi[2],0],
                              [0,0,1]]);

        const m4 = math.transpose([[this.x,this.y,this.z]]);
        const m5 = math.transpose([[...Camera.position]]);

        const m6 = math.subtract(m4,m5);

        const pointPosition3D = math.multiply(m1,m2,m3,m6)._data.map(value=>{
            return value[0];
        });


        const Bx = pointPosition3D[0] * (display[1]/2) /pointPosition3D[2] * Camera.zoom + display[0]/2;
        const By = pointPosition3D[1] * (display[1]/2) /pointPosition3D[2] * Camera.zoom  + display[1]/2;

        return [Bx,By];

    }
}

