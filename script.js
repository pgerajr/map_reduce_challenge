function novoAluno(nome, idade) {
    return { nome, idade };
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35),
]

function idadeDaTurma(total, aluno) {
    return total + aluno.idade;
}

function showResultTitle(result) {
    let res1 = document.getElementById("result1");
    let res2 = document.getElementById("result2");

    if (result == "res1") {
        res1.style.display = "block";
    } else {
        res2.style.display = "block";
    }
}

function mapArray() {
    let map = document.getElementById("mapped");
    let mapped = []

    for (aluno of alunos) {
        mapped.push(" " + aluno.nome + " tem " + aluno.idade + " anos");
    }

    showResultTitle("res1");

    map.innerHTML = mapped;
}

function reduceArray() {
    let reduce = document.getElementById("reduced");
    let total = 0;

    for (aluno of alunos) {
        total = total + aluno.idade;
    }

    showResultTitle("res2");

    reduce.innerHTML = "A soma das idades é igual a <strong>" + total + "</strong>";

}
