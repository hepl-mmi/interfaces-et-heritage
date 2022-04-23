import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";
import {IDrawable} from "./IDrawable";

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const myShapes: IDrawable[] = [];


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

myShapes.push(new Rectangle({x: 300, y: 100}, "red", ctx, {width: 50, height: 40}));
myShapes.push(new Rectangle({x: 100, y: 200}, "blue", ctx, {width: 20, height: 60}));
myShapes.push(new Circle({x: 50, y: 200}, "blue", ctx, 30));
myShapes.push(new Circle({x: 600, y: 100}, "yellow", ctx, 25));

myShapes.forEach((shape: IDrawable) => shape.draw());


