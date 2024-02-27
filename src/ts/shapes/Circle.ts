export class Circle {

    private _x: number;
    private _y: number;
    private readonly _radius: number;
    private readonly _startAngle: number;
    private readonly _endAngle: number;
    private _color: string;
    private _ctx: CanvasRenderingContext2D;
    private _canvasElement: HTMLCanvasElement;
    
    constructor(color: string, x: number, y: number, radius: number, startAngle: number, endAngle: number, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this._ctx = ctx;
        this._canvasElement = canvasElement;
        this._x = x;
        this._y = y;
        this._color = color;
        this._radius = radius;
        this._startAngle = startAngle;
        this._endAngle = endAngle;
    }

    public draw() {
        this._ctx.fillStyle = this._color;
        // this.ctx.globalAlpha = 0.9;
        this._ctx.beginPath();
        this._ctx.arc(this._x, this._y, this._radius, this._startAngle, this._endAngle);
        this._ctx.fill();
    }

    public log() {
        console.log('test');
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get radius(): number {
        return this._radius;
    }

    get startAngle(): number {
        return this._startAngle;
    }

    get endAngle(): number {
        return this._endAngle;
    }

    get color(): string {
        return this._color;
    }

    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }

    get canvasElement(): HTMLCanvasElement {
        return this._canvasElement;
    }
}