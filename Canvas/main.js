var canvas = document.getElementById("canvas1");
canvas.addEventListener("mousedown", mousegosdown);
var X1 = null;
var X2 = null;
var Y1 = null;
var Y2 = null;
var CUR = 0;
var ctx = canvas.getContext("2d");

function mousegosdown(e) {

    if (CUR == 0) {
        X1 = e.clientX;
        Y1 = e.clientY;
        console.log(X1, Y1);

    }
    if (CUR == 1) {
        CUR = 0;
        X2 = e.clientX;
        Y2 = e.clientY;
        console.log(X2, Y2);

    }
    CUR++;


}

function drawline() {

    ctx.beginPath();
    ctx.moveTo(X1, Y1);
    ctx.lineTo(X2, Y2);

    ctx.stroke();
    X1 = null
    X2 = null
    Y1 = null
    Y2 = null
    CUR = 0
}
