function mostrarPromo(){
    var input1 = document.querySelector("#input1");             //Retorna o primeiro elemento descendente do elemento invocado(input)
    var texto1 = input1.value;                                  //a variavel texto1 recebe o valor input
    document.getElementById("promoDe").innerHTML = ("<b>Promoção de </b>" + texto1); //mostra o nome do medicamento
    var input2 = document.querySelector("#input2");             //Retorna o primeiro elemento descendente do elemento invocado(input)
    var texto2 = input2.value;                                  //a variavel texto2 recebe o valor input
    texto2total = (Math.trunc(texto2*2));                       //duplicamos o valor de texto2 e retiramos a parte decimal com math.truc
    document.getElementById("prePor").innerHTML = ("<b>Leve 2 por apenas R$ </b>" + texto2total); //mostra o preco da promoção
}
