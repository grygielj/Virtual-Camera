import Point from "./Point";

const cubes=[];

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

cubes.push(cube1);
cubes.push(cube2);
cubes.push(cube3);
cubes.push(cube4);

export default  cubes