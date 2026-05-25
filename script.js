let quantidade = Number(prompt("Insira a quantidade de alunos na turma: "));
let qHomens = 0;
let qMulheres = 0;
if (isNaN(quantidade)) {

    alert("Você não digitou um número!");

}
else {

    for (let i = 0; i < quantidade; i++) {

        let resposta = (prompt("Digite [H] para Homens ou [M] para mulheres"));

        if (resposta == "H" || resposta == "h") {

            qHomens = qHomens + 1

        }
        else if (resposta == "M" || resposta == "m") {

            qMulheres = qMulheres + 1

        }
        else {

            alert("Opção Inválida!")
            i--

        }

    }
    if (qHomens == 1 && qMulheres == 1) {

        alert(`Na turma há ${quantidade} alunos, com ${qHomens} homem e ${qMulheres} mulher.`,);

    }
    else if (qMulheres == 1) {

        alert(`Na turma há ${quantidade} alunos, com ${qHomens} homens e ${qMulheres} mulher.`,);

    }
    else if (qHomens == 1) {

        alert(`Na turma há ${quantidade} alunos, com ${qHomens} homem e ${qMulheres} mulheres.`,);

    }
    else {

        alert(`Na turma há ${quantidade} alunos, com ${qHomens} homens e ${qMulheres} mulheres.`,);

    }
};