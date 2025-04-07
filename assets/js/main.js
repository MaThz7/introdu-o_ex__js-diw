/*exexercicio 1*/ 
var nome = document.getElementById('nome_usuario');
var elem = document.getElementById('btn1');
elem.addEventListener('click', function () {
    document.getElementById("res1").innerHTML = nome.value + ' ,Seja bem vindo';
});


/*exercicio 2 */
var A = document.getElementById('valor_a');
var B = document.getElementById('valor_b');
var opcoes = document.getElementById('opcoes');
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    A = parseFloat(A.value)
    B = parseFloat(B.value)
    if (opcoes.value == '+') {
        let calculo = A + B
        document.getElementById("res2").innerHTML = calculo;
    }
    if (opcoes.value == '-') {
        let calculo = A - B
        document.getElementById("res2").innerHTML = calculo;
    }
    if (opcoes.value == '*') {
        let calculo = A * B
        document.getElementById("res2").innerHTML = calculo;
    }
    if (opcoes.value == '/') {
        let calculo = A / B
        document.getElementById("res2").innerHTML = calculo;
    }
});

/*Exercicio 3*/

var distancia_percorrida = document.getElementById("distancia_percorrida");
var tempo_gasto = document.getElementById("tempo_gasto");
var velocidade_media = 0;



var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function () {
    distancia_percorrida = parseFloat(distancia_percorrida.value);
    tempo_gasto = parseFloat(tempo_gasto.value);
    velocidade_media = (distancia_percorrida/tempo_gasto)
    document.getElementById("res3").innerHTML = "<b>A velocidade media é: "+ velocidade_media +"Km/h </b>";
});
/*Exercicio 4*/ 
var Farenheit = document.getElementById("Farenheit");
var Celcius = 0;

var btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
Farenheit = parseFloat(Farenheit.value);
Celcius = parseFloat(Celcius.value)
Celcius = (Farenheit -32) * 1.8;
    document.getElementById("res4").innerHTML = 'A temperatura em Celcius é: ' + Celcius+"°";
});
/*Exercicio 11*/
