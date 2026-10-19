async function buscarCEP(cep) {
  try {
    let res   = await fetch('https://viacep.com.br/ws/' + cep + '/json')
    let dados = await res.json()

    console.log(dados.logradouro)
    console.log(dados.bairro)
    console.log(dados.localidade)
    console.log(dados.uf)
  } catch (erro) {
    console.log('Erro ao buscar CEP:', erro)
  }
}

buscarCEP('94500330')