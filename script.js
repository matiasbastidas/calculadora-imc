function calcularIMC() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let imc = peso * (altura * altura)

    document.getElementById('encabezado').innerHTML = 'Tu IMC es:'
    document.getElementById('imc-resultado').innerHTML = imc.toFixed(2)

    if (imc <= 24.9) {
        document.getElementById('mensaje').innerHTML = 'Estas bajo el peso'
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('mensaje').innerHTML = 'Estas sano'
    } else {
        document.getElementById('mensaje').innerHTML = 'Estas con sobre peso'
    }
}

function recargar() {
    window.location.reload()
}