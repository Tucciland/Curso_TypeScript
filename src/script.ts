let n1 = document.getElementById('numero1') as HTMLInputElement
let n2 = document.getElementById('numero2') as HTMLInputElement
let bt_calc = document.getElementById('bt_calcular') as HTMLInputElement
let res = document.getElementById('resultado') as HTMLInputElement

function calcular(n1: number, n2: number) {
    return n1 + n2
}

bt_calc.addEventListener('click', function () {
    res.innerHTML = (calcular(+n1.value, +n2.value)).toString()
})

function caixaAlta(nome: string) {
    let primeiraLetra = nome[0].toUpperCase()
    return `${primeiraLetra}${nome.substring(1)}`
}

caixaAlta('tucci')