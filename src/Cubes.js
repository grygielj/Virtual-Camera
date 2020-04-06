import Point from "./Point";

const cubes=[];

const cube1 = [new Point(5,-5,0),
    new Point(15,-5,0),
    new Point(5,5,0),
    new Point(15,5,0),
    new Point(5,-5,10),
    new Point(15,-5,10),
    new Point(5,5,10),
    new Point(15,5,10)];

const cube2 = [new Point(5,-5,20),
    new Point(15,-5,20),
    new Point(5,5,20),
    new Point(15,5,20),
    new Point(5,-5,30),
    new Point(15,-5,30),
    new Point(5,5,30),
    new Point(15,5,30)];

const cube3 = [new Point(-15,-5,0),
    new Point(-5,-5,0),
    new Point(-15,5,0),
    new Point(-5,5,0),
    new Point(-15,-5,10),
    new Point(-5,-5,10),
    new Point(-15,5,10),
    new Point(-5,5,10)];

const cube4 = [new Point(-15,-5,20),
    new Point(-5,-5,20),
    new Point(-15,5,20),
    new Point(-5,5,20),
    new Point(-15,-5,30),
    new Point(-5,-5,30),
    new Point(-15,5,30),
    new Point(-5,5,30)];

cubes.push(cube1);
cubes.push(cube2);
cubes.push(cube3);
cubes.push(cube4);

export default  cubes