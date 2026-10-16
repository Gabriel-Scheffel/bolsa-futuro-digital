
async function loadGallery() {
    const galeria = document.getElementById('galeria')
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'

    const resposta = await fetch(url)
    const gatos = await resposta.json()
    // console.log(resposta)
    // console.log(gatos)

    for (let i in gatos) {
        let img = document.createElement('img')
        img.src = gatos[i].url
        galeria.appendChild(img)
    }
console.log(data)
}

loadGallery()
