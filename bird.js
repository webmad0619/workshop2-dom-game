// Dani Vicario - bird experiment (canvas)- Wed Jun 19 10:59:32 CEST 2019
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

function randomInt(min, max){
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

const birdImage = new Image()
birdImage.src = "./bird.jpg"
birdImage.onload = function () {
    Game.init()
}

const Game = {
    init : function () {
        const frameWidth = 180
        const frameHeight = 166

        ctx.translate(w2 - frameWidth / 2, h2 - frameHeight / 2)
        // this allows you to flip vertically (and/or) horizontally :)
        ctx.scale(-1, 1)
        ctx.translate(-frameWidth, 0)
        
        let cFrame = 0
        let cRow = 0
        let posX = 0

        setInterval(() => {
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(
                birdImage, 
                frameWidth * cFrame, 
                frameHeight * cRow, 
                frameWidth, 
                frameHeight,
                posX+=2, 
                0, 
                frameWidth, 
                frameHeight);

            cFrame++

            if (cFrame > 4) {
                cRow++

                if (cRow > 2) {
                    cRow = 0
                }
                cFrame = 0
            }
        }, 10)
    }
}

