let promessa = fetch('https://viacep.com.br/ws/01001000/json')

// https://       --> protocolo de comunicação
// viacep.com.br  --> endereço da API
// /ws/           --> rota base da API
// 01001000       --> CEP que queremos consultar
// /json          --> formato dos dados

console.log(promessa)
