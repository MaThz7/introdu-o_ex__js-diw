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