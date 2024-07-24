const alunos = [];

alunos.push({
    nome: 'João',
    nota: 9
})

alunos.push({
    nome: 'Pedro',
    nota: 5
})

alunos.push({
    nome: 'Wagner',
    nota: 4
})

alunos.push({
    nome: 'Maria',
    nota: 5
})

alunos.push({
    nome: 'Ana',
    nota: 10
})

alunos.push({
    nome: 'Carla',
    nota: 6
})

console.log(alunos)

const filtroNotaNaMedia = aluno => aluno.nota >= 6;

const alunosNaMedia = alunos.filter(filtroNotaNaMedia);

console.log(alunosNaMedia)