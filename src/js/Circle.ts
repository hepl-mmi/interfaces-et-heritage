import {Shape} from "./Shape";
import {IDrawable} from "./IDrawable";

export class Circle extends Shape implements IDrawable{
    private readonly radius: number;


    constructor(origin: { x: number; y: number }, color: string, ctx: CanvasRenderingContext2D, radius: number) {
        super(origin, color, ctx);
        this.radius = radius;
    }

    override draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }
}