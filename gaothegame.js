var id = setInterval(gogoeat, 5),
    gaoone = document.getElementById('hungrygao1'),
    gaotwo = document.getElementById('hungrygao2'),
    xpos1 = -100,
    ypos1 = 175,
    xstep1 = 0,
    ystep1 = 0,
    xpos2 = 100,
    ypos2 = 175,
    xstep2 = 0,
    ystep2 = 0;

function gogoeat() {
    document.addEventListener('keydown', function (k) {
        if (k.keyCode == 65 && xstep1 != 0.5) {
            xstep1 = -0.5;
            ystep1 = 0;
        }
        if (k.keyCode == 68 && xstep1 != -0.5) {
            xstep1 = 0.5;
            ystep1 = 0;
        }
        if (k.keyCode == 83 && ystep1 != -0.5) {
            ystep1 = 0.5;
            xstep1 = 0;
        }
        if (k.keyCode == 87 && ystep1 != 0.5) {
            ystep1 = -0.5;
            xstep1 = 0;
        }
        if (k.keyCode == 37 && xstep2 != 0.5) {
            xstep2 = -0.5;
            ystep2 = 0;
        }
        if (k.keyCode == 39 && xstep2 != -0.5) {
            xstep2 = 0.5;
            ystep2 = 0;
        }
        if (k.keyCode == 40 && ystep2 != -0.5) {
            ystep2 = 0.5;
            xstep2 = 0;
        }
        if (k.keyCode == 38 && ystep2 != 0.5) {
            ystep2 = -0.5;
            xstep2 = 0;
        }
    })
    xpos1 = xpos1 + xstep1;
    ypos1 = ypos1 + ystep1;
    gaoone.style.left = xpos1 + 'px';
    gaoone.style.top = ypos1 + 'px';
    xpos2 = xpos2 + xstep2;
    ypos2 = ypos2 + ystep2;
    gaotwo.style.left = xpos2 + 'px';
    gaotwo.style.top = ypos2 + 'px';
}
