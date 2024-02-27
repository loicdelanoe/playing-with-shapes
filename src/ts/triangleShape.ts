import {Triangle} from "./shapes/Triangle";
import {Circle} from "./shapes/Circle";

export function drawTriangle() {
    const canvasElement: HTMLCanvasElement = document.getElementById('triangle') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');
    const triangle = new Triangle(0, -30, 110, 190, 'black', canvasElement, ctx);
    const circle = new Circle('white', 0, 0, 68, 0, 2 * Math.PI, ctx, canvasElement);
    const circle2 = new Circle('black', 8, 0, 55, 0, 2 * Math.PI, ctx, canvasElement);

    canvasElement.style.backgroundColor = 'gray';
    ctx.save();
    ctx.translate(canvasElement.width / 2, canvasElement.height / 2 - triangle.y2 / 2);
    triangle.draw();
    ctx.restore();

    ctx.save();
    ctx.translate(canvasElement.width / 2, canvasElement.height / 2 + 10)
    circle.draw();
    circle2.draw();
    ctx.restore();
}