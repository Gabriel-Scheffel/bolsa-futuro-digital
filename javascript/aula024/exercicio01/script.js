// Objeto calculadora: guarda os valores e as operações
let calculadora = {
    valorAtual: '0',      // número que está sendo digitado
    valorAnterior: '',    // número digitado antes do operador
    operador: '',         // operação escolhida (+, -, * ou /)

    somar: function(a, b) {
        return a + b
    },

    subtrair: function(a, b) {
        return a - b
    },

    multiplicar: function(a, b) {
        return a * b
    },

    dividir: function(a, b) {
        return a / b
    },

    adicionarNumero: function(numero) {
        if (this.valorAtual == '0' || this.valorAtual == 'Erro') {
            this.valorAtual = numero
        } else if (this.valorAtual.length < 10) {
            this.valorAtual = this.valorAtual + numero
        }
        this.atualizarDisplay()
    },

    adicionarVirgula: function() {
        // Internamente usamos o ponto, pois o Number() só entende ponto
        if (this.valorAtual == 'Erro') {
            this.valorAtual = '0'
        }
        if (this.valorAtual == '') {
            this.valorAtual = '0.'
        } else if (this.valorAtual.indexOf('.') == -1) {
            this.valorAtual = this.valorAtual + '.'
        }
        this.atualizarDisplay()
    },

    escolherOperador: function(op) {
        if (this.valorAtual == 'Erro') {
            return
        }
        // Se o segundo número ainda não foi digitado, apenas troca o operador
        if (this.operador != '' && this.valorAtual == '') {
            this.operador = op
            this.atualizarDisplay()
            return
        }
        // Se já existe uma conta pendente, resolve antes de seguir
        if (this.operador != '') {
            this.calcular()
        }
        this.valorAnterior = this.valorAtual
        this.operador = op
        this.valorAtual = ''
        this.atualizarDisplay()
    },

    calcular: function() {
        // Só calcula se tiver a expressão completa (ex.: 5+4)
        if (this.operador == '' || this.valorAtual == '') {
            return
        }

        let a = Number(this.valorAnterior)
        let b = Number(this.valorAtual)
        let resultado = 0

        if (this.operador == '+') {
            resultado = this.somar(a, b)
        } else if (this.operador == '-') {
            resultado = this.subtrair(a, b)
        } else if (this.operador == '*') {
            resultado = this.multiplicar(a, b)
        } else if (this.operador == '/') {
            if (b == 0) {
                this.limpar()
                this.valorAtual = 'Erro'
                this.atualizarDisplay()
                return
            }
            resultado = this.dividir(a, b)
        }

        // toFixed evita resultados como 0.1 + 0.2 = 0.30000000000000004
        this.valorAtual = `${Number(resultado.toFixed(8))}`
        this.valorAnterior = ''
        this.operador = ''
        this.atualizarDisplay()
    },

    limpar: function() {
        this.valorAtual = '0'
        this.valorAnterior = ''
        this.operador = ''
        this.atualizarDisplay()
    },

    atualizarDisplay: function() {
        // Monta a expressão completa: número anterior + operador + número atual
        let expressao = this.valorAnterior + this.operador + this.valorAtual

        // Troca o ponto pela vírgula só na hora de mostrar na tela
        let texto = ''
        for (let i = 0; i < expressao.length; i++) {
            if (expressao[i] == '.') {
                texto = texto + ','
            } else {
                texto = texto + expressao[i]
            }
        }
        document.getElementById('display').innerText = texto
    }
}

// Um único listener no teclado: o clique "borbulha" do botão até a div
let teclado = document.getElementById('teclado')

teclado.addEventListener('click', function(e) {
    let botao = e.target

    if (botao.classList.contains('numero')) {
        calculadora.adicionarNumero(botao.innerText)
    } else if (botao.classList.contains('operador')) {
        calculadora.escolherOperador(botao.innerText)
    } else if (botao.id == 'virgula') {
        calculadora.adicionarVirgula()
    } else if (botao.id == 'igual') {
        calculadora.calcular()
    } else if (botao.id == 'limpar') {
        calculadora.limpar()
    }
})
