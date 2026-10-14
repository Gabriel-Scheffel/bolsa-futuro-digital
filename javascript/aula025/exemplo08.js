Promise.race()

function timeout(ms) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject('tempo esgotado')
        }, ms)
    })
}

Promise.race([
    fetch('/api/dados'),
    timeout(5000)
])
    .then(function(res) {/* ... */})
    .catch(function(e) { console.log(e) })
