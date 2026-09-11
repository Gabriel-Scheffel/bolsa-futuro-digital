function maior(n1, n2) {
    if (n1 == n2) {
        console.log('Os valores são iguais!')
    } else if (n1 > n2) {
        console.log(`${n1} é maior que ${n2}`)
    } else {
        console.log(`${n2} é maior que ${n1}`)
    }
}

let a = 6
let b = 6

maior(a, b)
