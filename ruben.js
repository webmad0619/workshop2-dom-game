// Dani Vicario - ruben experiment (canvas)- Wed Jun 19 17:59:18 CEST 2019
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

class LifeBar {
    maxWidth = 200
    totalLifePoints = 100

    constructor(x, y, color, currentLifePoints) {
        this.x = x
        this.y = y 
        this.currentLifePoints = currentLifePoints
        this.color = color
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.rect(x, y, this.maxWidth, 10)
        ctx.fill();
        ctx.closePath();
    }

    reduceLife(reducedLifePoints) {
        ctx.fillStyle = this.color
        this.currentLifePoints -= reducedLifePoints
        
        let newLength = this.maxWidth * (this.currentLifePoints) / this.totalLifePoints

        ctx.beginPath();
        ctx.rect(this.x, this.y, newLength, 10)
        ctx.fill();
        ctx.closePath();
    }
}

let player1 = {
    getLifePoints: function () {
        return 100
    }
}

let player2 = {
    getLifePoints: function () {
        return 100
    }
}

let lifeBar1 = new LifeBar(100, 200, "red", player1.getLifePoints())
let lifeBar2 = new LifeBar(500, 200, "yellow", player2.getLifePoints())

window.onclick = function () {
    ctx.clearRect(0, 0, w, h);

    lifeBar1.reduceLife(10)
    lifeBar2.reduceLife(30)
}