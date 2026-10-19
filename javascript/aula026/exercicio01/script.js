// === DADOS DO RASCUNHO ===
let rascunho = {
    nome: 'Herói', 
    classe: 'guerreiro',
    atributos: { 
        forca: 5, 
        agilidade: 5, 
        inteligencia: 5, 
        resistencia: 5 }
}

let fichasSalvas = []

// === CLOSURE: controla pontos restantes (estado privado!) ===
function criarDistribuidor(total) {
    let restantes = total           // variável privada
    return {
        gastar: function(n) {
            if (restantes >= n) { 
                restantes = restantes - n; 
                return true 
            }
            return false
        },

        devolver:     function(n) { 
            restantes = restantes + n 
        },

        verRestantes: function() { 
            return restantes 
        }
    }
}

let pontos = criarDistribuidor(10)

// === CALLBACKS: uma função de bônus por classe ===
function aplicarBonus(ficha, funcaoBonus) {
    funcaoBonus(ficha) // delega ao callback!
}

function bonusGuerreiro(f) { 
    f.atributos.forca += 3      
    f.atributos.resistencia += 2 
}

function bonusMago(f) { 
    f.atributos.inteligencia += 4 
    f.atributos.agilidade += 1  
}

function bonusLadino(f) { 
    f.atributos.agilidade += 3   
    f.atributos.inteligencia += 2 
}

let bonusPorClasse = { 
    guerreiro: bonusGuerreiro, 
    mago: bonusMago, 
    ladino: bonusLadino 
}

// === REFERÊNCIA: salvar CÓPIA sem compartilhar ===
function salvarFicha() {
    let copia = { 
        nome: rascunho.nome, 
        classe: rascunho.classe, 
        atributos: {} 
    }

    for (let attr in rascunho.atributos) { 
        copia.atributos[attr] = rascunho.atributos[attr] 
        }
    
    fichasSalvas.push(copia)  // cópia independente!

    let cont = document.getElementById('fichas')
    cont.innerHTML = ''

    for (let i in fichasSalvas) {
        let f = fichasSalvas[i]
        div = document.createElement('div')
        div.className = 'ficha'

        let h3 = document.createElement('h3')
        h3.textContent = `${f.nome}  —  ${f.classe}`

        let p = document.createElement('p')
        let a = f.atributos

        p.textContent = 'FOR ' + a.forca + '  AGI ' + a.agilidade + '  INT ' + a.inteligencia + '  RES ' + a.resistencia
        
        div.appendChild(h3)
        div.appendChild(p)
        cont.appendChild(div)
    }
}

// === ATUALIZAR TELA ===
function atualizar() {
    document.getElementById('restantes').textContent = pontos.verRestantes()
    let a = rascunho.atributos
    document.getElementById('v-forca').textContent = a.forca
    document.getElementById('v-agilidade').textContent = a.agilidade
    document.getElementById('v-inteligencia').textContent = a.inteligencia
    document.getElementById('v-resistencia').textContent = a.resistencia
}

// === BOTÕES DE ATRIBUTO (closure captura attr e delta!) ===
function criarBtnAttr(attr, delta) {
    return function() {
        if (delta > 0 && !pontos.gastar(1)) { return }
        if (delta < 0 && rascunho.atributos[attr] <= 1) { return }
        if (delta < 0) { pontos.devolver(1) }

        rascunho.atributos[attr] = rascunho.atributos[attr] + delta
        atualizar()
    }
}

let attrs = ['forca', 'agilidade', 'inteligencia', 'resistencia']

for (let i in attrs) {
    document.getElementById('btn-' + attrs[i] + '-mais').addEventListener('click', criarBtnAttr(attrs[i], 1))
    document.getElementById('btn-' + attrs[i] + '-menos').addEventListener('click', criarBtnAttr(attrs[i], -1))
}

document.getElementById('btn-bonus').addEventListener('click', function() {
    rascunho.nome = document.getElementById('nome').value || 'Herói'
    rascunho.classe = document.getElementById('classe').value
    aplicarBonus(rascunho, bonusPorClasse[rascunho.classe])  // callback!
    atualizar()
})

document.getElementById('btn-salvar').addEventListener('click', function() {
    rascunho.nome = document.getElementById('nome').value || 'Herói'
    salvarFicha()   // cópia sem referência!
})
atualizar()
