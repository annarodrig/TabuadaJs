let produto;

numero = prompt("Escolha atabuada:");

if (numero < 0 || numero >= 10) {

    alert("Escolha um número de 1 ao 10")

} else {

    let contador = 0;
    while (contador <= 10){
        produto = numero * contador;
        document.write(numero + "x" + contador + "=" + produto + "<br>");
        contador++
    }

}