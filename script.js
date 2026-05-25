let pessoas = Number(prompt("Insira a quantidade de pessoas: "))
let criancas = 0
let adolescentes = 0
let jovens = 0
let adultos = 0
let idosos = 0
let horaExtra = 0

if (isNaN(pessoas)) {

    alert("Você não digitou um número!");

}

else {
    for (let i = 0; i < pessoas; i++) {

        let idade = Number(prompt("Insira a(s) idade(s): "));

        if (idade < 12) {

            criancas = criancas + 1

        }
        else if (idade < 17) {

            adolescentes = adolescentes + 1

        }
        else if (idade < 21) {

            jovens = jovens + 1

        }
        else if (idade < 60) {

            adultos = adultos + 1

        }
        else if (idade < 99) {

            idosos = idosos + 1

        }
        else if (idade > 99) {

            horaExtra = horaExtra + 1

        }
    }

    alert(`Ao todo, há ${pessoas} pessoas, havendo: ${criancas} crianças, ${adolescentes} adolescentes, ${jovens} jovens, ${adultos} adultos, ${idosos} idosos e ${horaExtra} fazendo hora extra.`);

};