const salarioInput = document.querySelector("#salario");
const botao = document.querySelector("button");
const resultado = document.querySelector("#resultado");

function calcular() {

    const salario = Number(salarioInput.value);

    let porcentagem = 0;

    if (salario <= 1000) {
        porcentagem = 20;
    } else if (salario <= 3000) {
        porcentagem = 15;
    } else if (salario <= 8000) {
        porcentagem = 10;
    } else {
        porcentagem = 5;
    }

    const aumento = salario * porcentagem / 100;
    const novoSalario = salario + aumento;

    resultado.innerText =
        "Novo salário = R$ " + novoSalario.toFixed(2) +
        "\nAumento = R$ " + aumento.toFixed(2) +
        "\nPorcentagem = " + porcentagem + " %";
}

botao.addEventListener("click", calcular);