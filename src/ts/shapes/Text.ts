export class Text {

    private text: string;
    private x: number;
    private y: number;
    private font: string;
    private color: string;
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(text: string, x: number, y: number, font: string, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.font = font;
        this.color = color;
        this.canvasElement = canvasElement;
        this.ctx = ctx;
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.font = this.font;
        this.ctx.fillText(this.text, this.x, this.y);
    }
}