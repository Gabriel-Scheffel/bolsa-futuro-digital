// === DADOS DO RASCUNHO ===
// Ficha que está sendo editada na tela. Os botões alteram este objeto
// e a função atualizar() mostra os valores dele na página.
let rascunho = {
    nome: 'Herói',
    classe: 'guerreiro',
    atributos: {
        forca: 5,
        agilidade: 5,
        inteligencia: 5,
        resistencia: 5 }
}

let fichasSalvas = []         // lista com as fichas já salvas
let bonusAplicado = false     // impede aplicar o bônus mais de uma vez na mesma ficha

// === CLOSURE: controla pontos restantes (estado privado!) ===
// criarDistribuidor devolve um objeto com três funções. Todas "lembram"
// da variável restantes, mas ninguém de fora consegue alterá-la
// diretamente: só dá para mexer nela usando gastar() e devolver().
function criarDistribuidor(total) {
    let restantes = total           // variável privada
    return {
        // Tenta gastar n pontos. Retorna true se havia pontos suficientes.
        gastar: function(n) {
            if (restantes >= n) {
                restantes = restantes - n;
                return true
            }
            return false
        },

        // Devolve n pontos para o total disponível.
        devolver:     function(n) {
            restantes = restantes + n
        },

        // Apenas lê quantos pontos ainda restam.
        verRestantes: function() {
            return restantes
        }
    }
}

let pontos = criarDistribuidor(10)  // cada ficha começa com 10 pontos para distribuir

// === CALLBACKS: uma função de bônus por classe ===
// aplicarBonus não sabe qual bônus vai aplicar: ela recebe a função
// (callback) como parâmetro e apenas a executa sobre a ficha.
function aplicarBonus(ficha, funcaoBonus) {
    funcaoBonus(ficha) // delega ao callback!
}

// Bônus do guerreiro: +3 força, +2 resistência
function bonusGuerreiro(f) {
    f.atributos.forca += 3
    f.atributos.resistencia += 2
}

// Bônus do mago: +4 inteligência, +1 agilidade
function bonusMago(f) {
    f.atributos.inteligencia += 4
    f.atributos.agilidade += 1
}

// Bônus do ladino: +3 agilidade, +2 inteligência
function bonusLadino(f) {
    f.atributos.agilidade += 3
    f.atributos.inteligencia += 2
}

// Liga o nome de cada classe (valor do <select>) à sua função de bônus.
// Ex.: bonusPorClasse['mago'] devolve a função bonusMago.
let bonusPorClasse = {
    guerreiro: bonusGuerreiro,
    mago: bonusMago,
    ladino: bonusLadino
}

// === REFERÊNCIA: salvar CÓPIA sem compartilhar ===
// Objetos em JS são passados por referência. Se fizéssemos
// fichasSalvas.push(rascunho), toda alteração no rascunho mudaria
// também a ficha salva. Por isso criamos um objeto novo e copiamos
// os atributos um a um.
function salvarFicha() {
    let copia = {
        nome: rascunho.nome,
        classe: rascunho.classe,
        atributos: {}   // objeto novo, não o mesmo do rascunho
    }

    // Copia cada atributo (forca, agilidade, ...) para a cópia
    for (let attr in rascunho.atributos) {
        copia.atributos[attr] = rascunho.atributos[attr]
        }

    fichasSalvas.push(copia)  // cópia independente!

    // Limpa a lista na tela e desenha todas as fichas salvas de novo
    let cont = document.getElementById('fichas')
    cont.innerHTML = ''

    for (let i in fichasSalvas) {
        let f = fichasSalvas[i]

        // Cria o "cartão" da ficha: <div class="ficha">
        let div = document.createElement('div')
        div.className = 'ficha'

        // Título com nome e classe
        let h3 = document.createElement('h3')
        h3.textContent = `${f.nome}  —  ${f.classe}`

        // Linha com os atributos abreviados
        let p = document.createElement('p')
        let a = f.atributos

        p.textContent = 'FOR ' + a.forca + '  AGI ' + a.agilidade + '  INT ' + a.inteligencia + '  RES ' + a.resistencia

        // Monta o cartão e coloca na página
        div.appendChild(h3)
        div.appendChild(p)
        cont.appendChild(div)
    }
}

// === ATUALIZAR TELA ===
// Copia os valores do rascunho e dos pontos restantes para o HTML.
// É chamada sempre que algum valor muda.
function atualizar() {
    document.getElementById('restantes').textContent = pontos.verRestantes()
    let a = rascunho.atributos
    document.getElementById('v-forca').textContent = a.forca
    document.getElementById('v-agilidade').textContent = a.agilidade
    document.getElementById('v-inteligencia').textContent = a.inteligencia
    document.getElementById('v-resistencia').textContent = a.resistencia
}

// === BOTÕES DE ATRIBUTO (closure captura attr e delta!) ===
// criarBtnAttr devolve a função que será executada no clique.
// Ela "lembra" qual atributo (attr) alterar e se deve somar (+1)
// ou subtrair (-1), sem precisar de uma função para cada botão.
function criarBtnAttr(attr, delta) {
    return function() {
        // Botão "+": só aumenta se ainda houver ponto para gastar
        if (delta > 0 && !pontos.gastar(1)) { return }
        // Botão "−": não deixa o atributo ficar abaixo de 1
        if (delta < 0 && rascunho.atributos[attr] <= 1) { return }
        // Botão "−": devolve o ponto para o total disponível
        if (delta < 0) { pontos.devolver(1) }

        rascunho.atributos[attr] = rascunho.atributos[attr] + delta
        atualizar()
    }
}

let attrs = ['forca', 'agilidade', 'inteligencia', 'resistencia']

// Liga os botões "+" e "−" de cada atributo.
// Os ids seguem o padrão btn-<atributo>-mais / btn-<atributo>-menos.
for (let i in attrs) {
    document.getElementById('btn-' + attrs[i] + '-mais').addEventListener('click', criarBtnAttr(attrs[i], 1))
    document.getElementById('btn-' + attrs[i] + '-menos').addEventListener('click', criarBtnAttr(attrs[i], -1))
}

// === BOTÃO "APLICAR BÔNUS" ===
// Lê nome e classe da tela e aplica o bônus da classe escolhida.
document.getElementById('btn-bonus').addEventListener('click', function() {
    if (bonusAplicado) { return }   // bônus só pode ser aplicado uma vez
    bonusAplicado = true
    this.disabled = true            // desativa o próprio botão
    document.getElementById('classe').disabled = true  // trava a classe após o bônus
    rascunho.nome = document.getElementById('nome').value || 'Herói'  // nome vazio vira 'Herói'
    rascunho.classe = document.getElementById('classe').value
    aplicarBonus(rascunho, bonusPorClasse[rascunho.classe])  // callback!
    atualizar()
})

// === BOTÃO "SALVAR FICHA" ===
// Lê nome e classe, salva uma cópia do rascunho e prepara uma ficha nova.
document.getElementById('btn-salvar').addEventListener('click', function() {
    rascunho.nome = document.getElementById('nome').value || 'Herói'
    rascunho.classe = document.getElementById('classe').value
    salvarFicha()   // cópia sem referência!
    novaFicha()     // limpa o rascunho para criar a próxima ficha
})

// === NOVA FICHA: reinicia o rascunho, os pontos e o bônus ===
function novaFicha() {
    // Novo objeto de rascunho (a ficha salva não é afetada)
    rascunho = {
        nome: 'Herói',
        classe: 'guerreiro',
        atributos: {
            forca: 5,
            agilidade: 5,
            inteligencia: 5,
            resistencia: 5 }
    }
    pontos = criarDistribuidor(10)  // novo closure com 10 pontos
    bonusAplicado = false

    // Volta os campos da tela ao estado inicial
    document.getElementById('nome').value = ''
    document.getElementById('classe').value = 'guerreiro'
    document.getElementById('classe').disabled = false
    document.getElementById('btn-bonus').disabled = false
    atualizar()
}

// Mostra os valores iniciais assim que a página carrega
atualizar()
