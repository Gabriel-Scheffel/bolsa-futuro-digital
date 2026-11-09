let nomeA = 'Gabriel'       // global

function saudacao() {  // inicio da função

    let nomeB = 'Ana'       // local

    console.log(nomeA)
    console.log(nomeB)

    // console.log(nomeC) erro

}   // <======================= final doa função

saudacao()

for(let i=0; i < 1; i++) {  // inicio do bloco

    let nomeC = 'Clara'     // local
    var nomeD = 'Pedro'     // var local

    console.log(`== i=${i} ==`)
    console.log(nomeA)
    console.log(nomeC)

}   // <======================= final do bloco

console.log('=========')

for(var j=0; j < 1; j++) {  // inicio do bloco

    console.log(`== j=${j} ==`)
    console.log(nomeA)
    console.log(nomeD)
    // console.log(nomeB) erro

}   // <======================= final do bloco

console.log('=========')
console.log(`var j = ${j}`)
