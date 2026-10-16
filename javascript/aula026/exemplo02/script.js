const dogImage = document.getElementById('dog-image')

async function updateDogImage() {

    // alert('CACHORRO!')

    const url = 'https://dog.ceo/api/breeds/image/random'

    // mostrar a resposta com promise antes de adicionar o await
    // const resposta = fetch(url)
    // console.log(resposta)

    const resposta = await fetch(url)

    // mostrar os dados com promise antes de adicionar o await
    // const data = resposta.json()
    // console.log(data)

    const data = await resposta.json()

    // propriedade mostrar a message no console

    dogImage.src = data.message
}


dogImage.addEventListener('click', updateDogImage)
