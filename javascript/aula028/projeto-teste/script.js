// Elementos da página
let txtBusca = document.getElementById('txtBusca')
let btnBuscar = document.getElementById('btnBuscar')
let cidade = document.getElementById('cidade')
let data = document.getElementById('data')
let temperatura = document.getElementById('temperatura')
let sensacao = document.getElementById('sensacao')
let umidade = document.getElementById('umidade')
let vento = document.getElementById('vento')
let precipitacao = document.getElementById('precipitacao')
let dias = document.getElementById('dias')
let horas = document.getElementById('horas')
let selDia = document.getElementById('selDia')

// Cidade usada quando o campo de busca está vazio
let cidadePadrao = 'Porto Alegre, RS, Brasil'

// Guarda a resposta da API do tempo
// (é usada de novo quando o usuário troca o dia da previsão por hora)
let dadosTempo = {}

// Nome do ícone para cada código de tempo da API
// Ex.: código 61 = chuva = arquivo icon-rain.webp
let icones = {
    0: 'sunny',
    1: 'partly-cloudy', 2: 'partly-cloudy',
    3: 'overcast',
    45: 'fog', 48: 'fog',
    51: 'drizzle', 53: 'drizzle', 55: 'drizzle', 56: 'drizzle', 57: 'drizzle',
    61: 'rain', 63: 'rain', 65: 'rain', 66: 'rain', 67: 'rain',
    80: 'rain', 81: 'rain', 82: 'rain',
    71: 'snow', 73: 'snow', 75: 'snow', 77: 'snow', 85: 'snow', 86: 'snow',
    95: 'storm', 96: 'storm', 99: 'storm'
}

// Descrição em português de cada ícone (usada no texto alternativo da imagem)
let descricoes = {
    'sunny': 'Ensolarado',
    'partly-cloudy': 'Parcialmente nublado',
    'overcast': 'Nublado',
    'fog': 'Neblina',
    'drizzle': 'Garoa',
    'rain': 'Chuva',
    'snow': 'Neve',
    'storm': 'Tempestade'
}

// Busca a latitude e longitude da cidade digitada
async function buscarCidade() {
    let busca = txtBusca.value.trim() || cidadePadrao

    try {
        // 1. Faz a requisição para a API do OpenStreetMap
        let resposta = await fetch(`https://nominatim.openstreetmap.org/search?q=${busca}&format=jsonv2&addressdetails=1&accept-language=pt-BR`)

        // 2. Verifica se o servidor retornou OK (status 200-299)
        if (!resposta.ok) {
            throw new Error('Status: ' + resposta.status)
        }

        // 3. Converte a resposta de JSON para objeto JavaScript
        let locais = await resposta.json()

        // 4. Usa o primeiro lugar encontrado
        mostrarLocal(locais[0])
        buscarTempo(locais[0].lat, locais[0].lon)

    } catch (erro) {
        console.log('Erro ao buscar a cidade: ', erro.message)
    }
}

// Mostra o nome da cidade, o país e a data de hoje
function mostrarLocal(local) {
    let endereco = local.address

    // Dependendo do tamanho do lugar, o nome vem em city, town ou village
    let nomeCidade = endereco.city || endereco.town || endereco.village || endereco.municipality || local.name
    let pais = endereco.country_code.toUpperCase()

    // Intl.DateTimeFormat formata datas em português
    // Ex.: terça-feira, 10 de nov. de 2026
    let hoje = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(new Date())

    cidade.innerText = `${nomeCidade}, ${pais}`
    data.innerText = hoje
}

// Busca o tempo atual e as previsões para a latitude e longitude
async function buscarTempo(lat, lon) {
    // Unidades fixas: °C, km/h e mm
    let url = 'https://api.open-meteo.com/v1/forecast'
        + `?latitude=${lat}&longitude=${lon}`
        + '&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,precipitation,wind_speed_10m'
        + '&hourly=temperature_2m,weather_code'
        + '&daily=weather_code,temperature_2m_max,temperature_2m_min'
        + '&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm'

    try {
        // 1. Faz a requisição para a API do Open-Meteo
        let resposta = await fetch(url)

        // 2. Verifica se o servidor retornou OK (status 200-299)
        if (!resposta.ok) {
            throw new Error('Status: ' + resposta.status)
        }

        // 3. Converte a resposta e guarda para usar depois
        dadosTempo = await resposta.json()

        // 4. Mostra os dados na tela
        mostrarTempoAtual()
        mostrarPrevisaoDiaria()
        mostrarPrevisaoPorHora()

    } catch (erro) {
        console.log('Erro ao buscar o tempo: ', erro.message)
    }
}

// Preenche o cartão principal e os quatro blocos de condições
function mostrarTempoAtual() {
    let atual = dadosTempo.current
    let unidades = dadosTempo.current_units

    // Math.round arredonda o número para o inteiro mais próximo (ex.: 22.6 vira 23)
    temperatura.innerText = Math.round(atual.temperature_2m)
    sensacao.innerText = Math.round(atual.apparent_temperature)
    umidade.innerText = atual.relative_humidity_2m
    vento.innerText = `${atual.wind_speed_10m} ${unidades.wind_speed_10m}`
    precipitacao.innerText = `${atual.precipitation} ${unidades.precipitation}`
}

// Cria a imagem do ícone do tempo a partir do código da API
function criarIcone(codigo, classe) {
    let nomeIcone = icones[codigo]

    let img = document.createElement('img')
    img.classList.add(classe)
    img.src = `assets/images/icon-${nomeIcone}.webp`
    img.alt = descricoes[nomeIcone]
    img.width = 320
    img.height = 320
    return img
}

// Cria um cartão para cada um dos 7 dias
function mostrarPrevisaoDiaria() {
    let diaria = dadosTempo.daily

    // Limpa os dias da busca anterior
    dias.innerHTML = ''

    for (let i = 0; i < 7; i++) {
        // Nome curto do dia da semana (ex.: ter.)
        // new Date('2026-11-10') cria uma data a partir de um texto
        let nomeDia = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(new Date(diaria.time[i]))

        let dia = document.createElement('div')
        dia.classList.add('bloco', 'dia')

        let nome = document.createElement('p')
        nome.classList.add('dia-nome')
        nome.innerText = nomeDia

        let icone = criarIcone(diaria.weather_code[i], 'dia-icone')

        // Máxima à esquerda e mínima à direita
        let temps = document.createElement('div')
        temps.classList.add('dia-temps')

        let maxima = document.createElement('p')
        maxima.innerText = Math.round(diaria.temperature_2m_max[i]) + '°'

        let minima = document.createElement('p')
        minima.classList.add('dia-min')
        minima.innerText = Math.round(diaria.temperature_2m_min[i]) + '°'

        temps.appendChild(maxima)
        temps.appendChild(minima)

        dia.appendChild(nome)
        dia.appendChild(icone)
        dia.appendChild(temps)
        dias.appendChild(dia)
    }
}

// Cria uma linha para cada hora do dia escolhido no select
function mostrarPrevisaoPorHora() {
    let porHora = dadosTempo.hourly

    // A API manda as horas de todos os dias em uma lista só:
    // dia 0 = posições 0 a 23, dia 1 = posições 24 a 47...
    let primeiraHora = 24 * Number(selDia.value)

    // Limpa as horas mostradas antes
    horas.innerHTML = ''

    for (let h = primeiraHora; h < primeiraHora + 24; h++) {
        let hora = document.createElement('div')
        hora.classList.add('hora')

        let icone = criarIcone(porHora.weather_code[h], 'hora-icone')

        // toLocaleString formata datas e horas em português (ex.: 14:00)
        let texto = document.createElement('p')
        texto.classList.add('hora-texto')
        texto.innerText = new Date(porHora.time[h]).toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit' })

        let temp = document.createElement('p')
        temp.classList.add('hora-temp')
        temp.innerText = Math.round(porHora.temperature_2m[h]) + '°'

        hora.appendChild(icone)
        hora.appendChild(texto)
        hora.appendChild(temp)
        horas.appendChild(hora)
    }
}

// Coloca no select os nomes dos próximos 7 dias, começando por hoje
function preencherDias() {
    let dataDia = new Date()

    for (let i = 0; i < 7; i++) {
        let opcao = document.createElement('option')
        opcao.value = i
        opcao.innerText = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(dataDia)
        selDia.appendChild(opcao)

        // Avança um dia: getDate pega o dia do mês e setDate muda ele
        dataDia.setDate(dataDia.getDate() + 1)
    }
}

btnBuscar.addEventListener('click', buscarCidade)
// O evento 'change' acontece quando o usuário escolhe outra opção no select
selDia.addEventListener('change', mostrarPrevisaoPorHora)

// Ao abrir a página: preenche os dias e carrega a cidade padrão
preencherDias()
buscarCidade()
