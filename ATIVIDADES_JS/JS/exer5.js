function verificar(){
    //variavel entrada recebe o valor digitado no input
    let entrada = document.getElementById('entrada').value;
    //se o resto da divisão da entrada por 2 for = 0
    if(entrada%2 == 0){
        //significa que ele é par - IouP recebe par
        let IouP = "Par";
        //manipulando <p> atraves do seu id ('P_I') - escrevendo que é par
        document.getElementById('P_I').innerHTML = ("<b>Resposta: " + entrada + " é " + IouP + "</b>");
    }else{
        //significa que ele é par - IouP recebe ímpar
        let IouP = "Ímapar";
        //manipulando <p> atraves do seu id ('P_I') - escrevendo que é ímpar
        document.getElementById('P_I').innerHTML = ("<b>Resposta: " + entrada + " é " + IouP + "</b>");
    }
}