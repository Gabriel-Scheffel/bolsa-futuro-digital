// short-circuiting com &&

const preco = 1000

if (preco > 500 && preco < 2000) {
    // true
    console.log('true')
}

// Se o primeiro é true ele sempre roda o segundo
// Se o primeiro é false ele nunca roda o segundo
preco > 5000 && console.log('true')

// short-circuiting com ||


// Se o primeiro é false ele sempre roda o segundo
// Se o primeiro é true ele nunca roda o segundo
preco > 5000 || console.log('false')
