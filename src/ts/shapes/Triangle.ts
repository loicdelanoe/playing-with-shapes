export class Triangle {

    private _x1: number;
    private _y1: number;
    private _x2: number;
    private _y2: number;
    private _x3: number;
    private _y3: number;
    private _color: string;
    private _canvaElement: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor(x1: number, y1: number, x2: number, y2: number, color: string, canvaElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this._color = color;
        this._canvaElement = canvaElement;
        this._ctx = ctx;
    }

    public draw() {
        this._ctx.fillStyle = this._color;
        this._ctx.beginPath();
        this._ctx.moveTo(this._x1, this._y1);
        this._ctx.lineTo(this._x2, this._y2);
        this._ctx.lineTo(-Math.abs(this._x2), this._y2);
        this._ctx.lineTo(this._x1, this._y1);
        this._ctx.fill();
    }

    get x1(): number {
        return this._x1;
    }

    get y1(): number {
        return this._y1;
    }

    get x2(): number {
        return this._x2;
    }

    get y2(): number {
        return this._y2;
    }

    get x3(): number {
        return this._x3;
    }

    get y3(): number {
        return this._y3;
    }

    get color(): string {
        return this._color;
    }

    get canvaElement(): HTMLCanvasElement {
        return this._canvaElement;
    }

    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }
}