import {IDrawable} from "./IDrawable";

export abstract class Shape implements IDrawable {
    protected readonly origin: { x: number, y: number };
    protected readonly color: string;
    protected readonly ctx: CanvasRenderingContext2D;


    protected constructor(origin: { x: number; y: number }, color: string, ctx: CanvasRenderingContext2D) {
        this.origin = origin;
        this.color = color;
        this.ctx = ctx;
    }

    draw() {
    }
}