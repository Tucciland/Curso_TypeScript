var n1 = document.getElementById('numero1');
var n2 = document.getElementById('numero2');
var bt_calc = document.getElementById('bt_calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
bt_calc.addEventListener('click', function () {
    res.innerHTML = (calcular(+n1.value, +n2.value)).toString();
});
