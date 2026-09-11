// ========= FATORIAL =========
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    let fat = 1
    for(let c=n; c > 1; c--){
        fat *= c // fat = fat * c
    }
    return fat
}

console.log(fatorial(5))


// 5! = 5 x 4!
// n! = n x (n-1)!

function fatorial(n) {
    if(n==1) { 
        // Se n for 1 retorna 1
        return 1
    } else { 
        // Se não
        // multiplica pelo fatorial de n-1
        return n * fatorial(n-1)
    }
}