// falsy: valores que são considerados false em um teste lógico
// truthy: valores que são considerados true em um teste lógico

// falsy: false, 0, "", null, undefined, Nan, etc...

let falsy = 0

if (falsy) {
    // Nunca vai rodar
    console.log('false')
}

// truthy: true, 1, 'texto', [], {}, etc...

let truthy = 'string'

if (truthy) {
    // Sempre roda
    console.log('true')
}


const data = {}

const name = data.name || "Desconhecido"
