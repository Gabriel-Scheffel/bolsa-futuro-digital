let aluno = {
    "nome": "Nicolas",
    "idade": 21,
    "nota": null,
    "aprovado": true,
    "cursos": ["HTML", "CSS", "JavaScript"],
    "endereco": {
        "cidade": "Porto Alegre",
        "rua": "Universitária",
        "num": 200
    }
}

let alunoObj = JSON.parse(aluno)

console.log(typeof alunoObj)

let alunoJSON = JSON.stringify(alunoObj)

console.log(typeof alunoJSON)
