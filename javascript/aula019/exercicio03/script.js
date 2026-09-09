
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    let res = document.getElementById('res')

    // verifica se os dados foram inseridos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')

    } else {
        //window.alert('Tudo OK!)
        res.innerHTML = 'Contando: <br>'

        // Criar as variáveis numéricas
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // Adicionar o for aqui e só depois o if
        if (p <=0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p=1
        }

        if (i < f) {
            for(let c=i; c <= f; c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c=i; c>=f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

// Emojis: unicode emoji list
