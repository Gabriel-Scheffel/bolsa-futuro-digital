function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sex')
        let idade = ano - Number(fano.value)

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        let genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }

        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos <br>`
        res.appendChild(img)
        
    }
}