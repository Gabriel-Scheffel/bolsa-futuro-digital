
// forEach() => itera sobre todos os elementos
// de um array e aplica um função (callback)

let valores = [1, 2, 3, 4, 5]

function dobrar(elemento, indice, array) {
    // x2 elemento na posição n° indice do array
    array[indice] = elemento * 2
}

function display(elemento) {
    console.log(elemento)
}

// mostra na tela cada elemento
valores.forEach(display)
// multiplica por 2 cada elemento
valores.forEach(dobrar)
// mostra na tela cada elemento
valores.forEach(display)


