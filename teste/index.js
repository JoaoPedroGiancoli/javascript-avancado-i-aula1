/* 

function mostra(aa) {
    alert('Fui clicado');
    let b = aa;
    console.log(b);
}

document.querySelector('#p1').addEventListener('click', mostra(2));

let lista1 = ['banana', 'laranja', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push(...lista2);


console.log(lista1);

console.log(lista2);
*/

class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];




let aprovados = avaliacoes
.filter((prova) => prova.nota >= 7 )
.map((prova) => prova.aluno.nome); 

console.log(aprovados);