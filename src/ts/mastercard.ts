import {Circle} from "./shapes/Circle";
import {Text} from "./shapes/Text";

export function drawMastercard() {
    const canvasElement: HTMLCanvasElement = document.getElementById('master-card') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');

    canvasElement.style.backgroundColor = 'black';

    const redCircle = new Circle('red', 0, 0, 120, 0, 2 * Math.PI, ctx, canvasElement);
    const orangeCircle = new Circle('#FFA000', redCircle.radius, 0, 120, 0, 2 * Math.PI, ctx, canvasElement);

    ctx.save();
    ctx.translate(canvasElement.width / 2 - redCircle.radius / 2,  canvasElement.height / 2 - redCircle.radius / 3);
    ctx.globalCompositeOperation = 'overlay';
    orangeCircle.draw();
    redCircle.draw();
    ctx.restore();

    const text = new Text('mastercard', canvasElement.width / 3.5, canvasElement.height - 40, '52px sans-serif', 'white', ctx, canvasElement);
    text.draw();
}