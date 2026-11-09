
function bonus(p, funcaoBonus) {
    return funcaoBonus(p)
}

function bonusMaior(p) {
    return p += 3
}

function bonusMenor(p) {
    return p += 1
}

let pontos = 10

let pontoBonus = bonus(pontos, bonusMaior)

console.log(`Pontos sem bonus: ${pontos}`)
console.log(`Pontos com monus: ${pontoBonus}`)

