"use strict";

var alunos = [];
alunos.push({
  nome: 'João',
  nota: 9
});
alunos.push({
  nome: 'Pedro',
  nota: 5
});
alunos.push({
  nome: 'Wagner',
  nota: 4
});
alunos.push({
  nome: 'Maria',
  nota: 5
});
alunos.push({
  nome: 'Ana',
  nota: 10
});
alunos.push({
  nome: 'Carla',
  nota: 6
});
console.log(alunos);
var filtroNotaNaMedia = function filtroNotaNaMedia(aluno) {
  return aluno.nota >= 6;
};
var alunosNaMedia = alunos.filter(filtroNotaNaMedia);
console.log(alunosNaMedia);