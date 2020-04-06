import Point from "./Point";

const cubes=[];

const cube1 = [new Point(0,0,0),
    new Point(10,0,0),
    new Point(0,10,0),
    new Point(10,10,0),
    new Point(0,0,10),
    new Point(10,0,10),
    new Point(0,10,10),
    new Point(10,10,10)];

const cube2 = [new Point(0,0,20),
    new Point(10,0,20),
    new Point(0,10,20),
    new Point(10,10,20),
    new Point(0,0,30),
    new Point(10,0,30),
    new Point(0,10,30),
    new Point(10,10,30)];

const cube3 = [new Point(20,0,0),
    new Point(30,0,0),
    new Point(20,10,0),
    new Point(30,10,0),
    new Point(20,0,10),
    new Point(30,0,10),
    new Point(20,10,10),
    new Point(30,10,10)];

const cube4 = [new Point(20,0,20),
    new Point(30,0,20),
    new Point(20,10,20),
    new Point(30,10,20),
    new Point(20,0,30),
    new Point(30,0,30),
    new Point(20,10,30),
    new Point(30,10,30)];
//
cubes.push(cube1);
cubes.push(cube2);
cubes.push(cube3);
cubes.push(cube4);

export default  cubes