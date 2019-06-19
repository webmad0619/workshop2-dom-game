// Dani Vicario - ivan experiment (canvas)- Wed Jun 19 13:04:22 CEST 2019
const globalCompositeOperationModes = {
    "source-over": "source-over",
    "source-in": "source-in",
    "source-out": "source-out",
    "source-atop": "source-atop",
    "destination-over": "destination-over",
    "destination-in": "destination-in",
    "destination-out": "destination-out",
    "destination-atop": "destination-atop",
    "lighter": "lighter",
    "copy": "copy",
    "xor": "xor",
    "multiply": "multiply",
    "screen": "screen",
    "overlay": "overlay",
    "darken": "darken",
    "lighten": "lighten",
    "color-dodge": "color-dodge",
    "color-burn": "color-burn",
    "hard-light": "hard-light",
    "soft-light": "soft-light",
    "difference": "difference",
    "exclusion": "exclusion",
    "hue": "hue",
    "saturation": "saturation",
    "color": "color",
    "luminosity": "luminosity"
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

let posX = 0
let advance = 20
let visitedPositions = []

function drawBall() {
    ctx.beginPath();
    ctx.arc(0, 0, advance / 2, 0, PI_DOUBLE);
    ctx.fill();
    ctx.closePath();
}

function drawTrail() {
    visitedPositions.forEach(position => {
        ctx.beginPath();
        ctx.fillStyle = "red"
        ctx.arc(-position.x, position.y, advance / 2, 0, PI_DOUBLE);
        ctx.fill();
        ctx.closePath();
    })
}

ctx.translate(w2, h2)
drawBall()

window.onkeydown = function (e) {
    if (e.keyCode === 39) {
        ctx.clearRect(-w, -h, w * 2, h * 2);

        ctx.save();
        posX++

        visitedPositions.push({
            x: advance * posX,
            y: 0
        })

        ctx.translate(advance * posX, 0)
        drawBall()
        drawTrail()

        ctx.restore();
    }

    if (e.keyCode === 37) {
        ctx.clearRect(-w, -h, w * 2, h * 2);

        ctx.save();
        posX--

        visitedPositions.push({
            x: advance * posX,
            y: 0
        })
        ctx.translate(advance * posX, 0)
        drawBall()
        drawTrail()

        ctx.restore();
    }
}
