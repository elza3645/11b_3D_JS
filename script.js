var container = document.getElementById("container");
var pasaule = document.getElementById("pasaule");

const deg = Math.PI / 180;

veidotPasauli();

function attelotPasauli(pawn){
    xx = paLabi - paKreisi; 
    zz = uzPrieksu - uzAtpakal;

    dx = xx * Math.cos(pawn.ry*deg) - zz * Math.sin(pawn.ry*deg);
    dz = -xx * Math.sin(pawn.ry*deg) - zz * Math.cos(pawn.ry*deg);

    // dx = paLabi - paKreisi; 
    // dz = -(uzPrieksu - uzAtpakal);

    dry = - mouseX;

    mouseX = 0;

    pawn.z += dz;
    pawn.x += dx;

    pawn.ry += dry;

    pasaule.style.transform = `
    translateZ(600px)
    rotateX(${-pawn.rx}deg)
    rotateY(${-pawn.ry}deg)
    rotateZ(${-pawn.rz}deg)    

        translate3d(
            ${-pawn.x}px, 
            ${-pawn.y}px, 
            ${-pawn.z}px
        )

        
        `;
}

let spele = setInterval(function(){attelotPasauli(speletajs)}, 10);