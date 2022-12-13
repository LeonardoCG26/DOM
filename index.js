function changeColor(){

    var colores = ['blue','yellow','green','red','gray','pink']
    var ramdom1 = Math.floor(Math.random()* colores.length);
    var ramdom2 = Math.floor(Math.random()* colores.length);
    var ramdom3 = Math.floor(Math.random()* colores.length);
    var ramdom4 = Math.floor(Math.random()* colores.length);
    var ramdom5 = Math.floor(Math.random()* colores.length);
    var ramdom6 = Math.floor(Math.random()* colores.length);

    var text1 = document.getElementById('p1');
    console.log(text1);
    text1.style.color = colores[ramdom1];
    text1.innerHTML = 'texto de color '+colores[ramdom1];
    var text2 = document.getElementById('p2');
    console.log(text2);
    text2.style.color = colores[ramdom2];
    text2.innerHTML = 'texto de color '+colores[ramdom2];
    var text3 = document.getElementById('p3');
    console.log(text3);
    text3.style.color = colores[ramdom3];
    text3.innerHTML = 'texto de color '+colores[ramdom3];
    var text4 = document.getElementById('p4');
    console.log(text4);
    text4.style.color = colores[ramdom4];
    text4.innerHTML = 'texto de color '+colores[ramdom4];
    var text5 = document.getElementById('p5');
    console.log(text5);
    text5.style.color = colores[ramdom5];
    text5.innerHTML = 'texto de color '+colores[ramdom5];
    var text6 = document.getElementById('p6');
    console.log(text6);
    text6.style.color = colores[ramdom6];
    text6.innerHTML = 'texto de color '+colores[ramdom6];
}
function changeDimension(){
    var square = document.getElementsByClassName('square');
    console.log(square[0]);
    var element = square[0];
    element.style.borderRadius = '100%';

}
function ChangeColor(){
    var colores = ['yellow','green','red','gray','pink']
    var cam1 = Math.floor(Math.random()* colores.length);
    var cam2 = Math.floor(Math.random()* colores.length);
    var cam3 = Math.floor(Math.random()* colores.length);

    var cambio1 = document.getElementsByClassName('cambio1');
    console.log(cambio1[0]);
    var elemento = cambio1[0];
    elemento.style.backgroundColor = colores[cam1];

    var cambio2 = document.getElementsByClassName('cambio2');
    console.log(cambio2[0]);
    var elemento2 = cambio2[0];
    elemento2.style.backgroundColor = colores[cam2];

    var cambio3 = document.getElementsByClassName('cambio3');
    console.log(cambio3[0]);
    var elemento3 = cambio3[0];
    elemento3.style.backgroundColor = colores[cam3];
}

/* window.onload = function() {
    var colores = ['yellow','green','red','gray','pink', 'AliceBlue', 'AntiqueWhite', 'Aqua', 'DarkSeaGreen', 'DarkTurquoise']
    var cam1 = Math.floor(Math.random()* colores.length);
    document.body.style.backgroundColor = colores[cam1];
} */

function modificar() {
    var del1 = document.getElementById('1');
    del1.innerHTML = 'Naranjas agrias';
    var del2 = document.getElementById('2');
    del2.innerHTML = 'Manzanas rojas';
    var del3 = document.getElementById('3');
    del3.innerHTML = 'Uvas sin semillas';
    var del4 = document.getElementById('4');
    del4.innerHTML = 'Melón';
    var del5 = document.getElementById('5');
    del5.innerHTML = 'Carne y pollo';
}
function orden() {
    var del6 = document.getElementById('6');
    del6.innerHTML = 'Uvas';
    var del7 = document.getElementById('7');
    del7.innerHTML = 'Naranjas';
    var del8 = document.getElementById('8');
    del8.innerHTML = 'Pollo';
    var del9 = document.getElementById('9');
    del9.innerHTML = 'Manzanas';
    var del10 = document.getElementById('10');
    del10.innerHTML = 'Fresas';
    
} 

/* document.getElementById("button5").onclick = function() {
    miLista2.sort(function(a, b) {
        return a.innerHTML.localeCompare(b.innerHTML);
    });
} */