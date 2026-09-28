let calculadora = {
    somar: function(a=0, b=0) {
        return a + b
    },
    
    subtrair: function(a=0, b=0) {
        return a - b
    },
    
    multiplicar: function(a=0, b=0) {
        return a * b
    },
    
    dividir: function(a=0, b=1) {
        return a / b
    }
}

// Soma
console.log(calculadora.somar(2,1))

// Subtração
console.log(calculadora.subtrair(10,4))

// Multiplicação
console.log(calculadora.multiplicar(3,7))

// Divisão
console.log(calculadora.dividir(18,9))
