import {Shape} from "./Shape";
import {IDrawable} from "./IDrawable";

export class Rectangle extends Shape {
    private dimension: { width: number, height: number }

    constructor(origin: { x: number; y: number }, color: string, ctx: CanvasRenderingContext2D, dimension: { width: number; height: number }) {
        super(origin, color, ctx);
        this.dimension = dimension;
    }

    override draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.origin.x, this.origin.y, this.dimension.width, this.dimension.height)
    }
}