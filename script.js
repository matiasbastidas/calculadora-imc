const calcularIMC = () => {
    peso = document.getElementById('peso').value
    
    const metrosCentimetros = 100
    altura = (document.getElementById('altura').value) / metrosCentimetros

    imc = peso / (Math.pow(altura, 2))

    document.getElementById('encabezado').innerHTML = 'Tu IMC es:'
    document.getElementById('imc-resultado').innerHTML = imc.toFixed(2)

    if (imc <= 18.5) {
        document.getElementById('mensaje').innerHTML = 'Estas bajo el peso'
    } else if (imc > 18.5 && imc <= 24.9) {
        document.getElementById('mensaje').innerHTML = 'Estas con el peso normal'
    } else if (imc > 24.9 && imc <= 29.9) {
        document.getElementById('mensaje').innerHTML = 'Estas con sobrepeso'
    } else {
        document.getElementById('mensaje').innerHTML = 'Estas con obesidad'
    }
}

const recargar = () => {
    window.location.reload()
}






