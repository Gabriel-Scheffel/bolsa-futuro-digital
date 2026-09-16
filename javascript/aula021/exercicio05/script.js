// Criar as variaveis no inicio primeiro
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
// Criar um array para os números
let valores = []

// 2ª função 
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// 3ª função
function inLista(n, list) {
    // Se o índice é -1 ele não está na lista
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Coneçar criando a função adicionar()
// Função que adiciona os números no array
function adicionar() {
    // Antes de adicionar verifica se esta entre 1 e 100
    // e verifica se o número já está na lista
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        // se ambas funções retornam true
        // alert('Tudo OK!)
        // Adiciona o número
        valores.push(Number(num.value))

        // Cria um item no elemento HTML
        let item = document.createElement('option')
        // Adiciona nesse item o texto com o valor
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)

        // Limpa o elemento com a resposta final
        // add depois de finalizar()
        res.innerHTML =''

    } else {
        // se não mostra um alert
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    // Limpa o input
    num.value = ''
    // Coloca o mouse no input
    num.focus()
}

// Função que faz análise dos números
function finalizar() {
    // Se não houver nenhum valor adicionado
    if(valores.length == 0) {
        // Pede para adicionar mais valores
        window.alert('Adicione valores antes de finalizar!')

    } else {
        // Cria cada uma das variáveis e exibe na tela
        let total = valores.length
        // No ínicio o maior e menor são os primeiros
        let maior = valores[0]
        let menor = valores[0]
        // Soma e média começam em zero
        let soma = 0
        let media = 0

        // Faz um loop pelos valores e verifica se
        // eles são maiores ou menores que o primeiro
        for(let pos in valores) {
            // Faz a soma
            soma += valores[pos]

            // Verifica se é maior ou menor
            if(valores[pos] > maior) {
                maior = valores[pos]
            } else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        // Calcula a média
        media = soma / total
        // Deixa a média com dois números após a virgula
        media = media.toFixed(2)

        // Começa limpando a resposta
        // Exibe cada resposta conforme cria as variáveis
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}

