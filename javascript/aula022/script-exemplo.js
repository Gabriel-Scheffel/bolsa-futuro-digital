
// Sem delegação: listener em cada <li> 

// Problema: e se criarmos novos itens? 

let itens = document.querySelectorAll('li') 

for (let i in itens) { 
    itens[i].addEventListener('click', fn) 
} 

// Com delegação: listener só no <ul> pai! 

let lista = document.querySelector('ul') 

lista.addEventListener('click', function(e) { 
    // Verifica se o clique foi num <li> 
    if (e.target.tagName === 'LI') { 
        console.log('Item clicado: ' + e.target.innerText) 
    } 
})


