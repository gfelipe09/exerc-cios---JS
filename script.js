let idade = Number(prompt("Insira a sua idade: "));

if (isNaN(idade)) {

    alert("Você não digitou um número!");

}

else {

    if (idade < 12) {

        alert("Criança!");

    }
    else if (idade < 17) {

        alert("Adolescente!");

    }
    else if (idade < 21) {

        alert("Jovem!");

    }
    else if (idade < 60) {

        alert("Adulto!");

    }
    else if (idade < 99) {

        alert("Idoso!");

    }
    else if (idade > 99) {

        alert("Hora Extra!");

    }

};