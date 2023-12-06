function exibir(){
    let inPreco = document.getElementById("preco").value;
    document.getElementById("texto").textContent = "Opções de pagamento:";
    for(i = 1; i < 11; i++){
        let p = document.createElement("p");       
        let info = document.createTextNode(i + "x de R$ " + (inPreco/i).toFixed(2)); 
        p.appendChild(info);          
        let id = document.getElementById("texto");   
        id.appendChild(p); 
    }
}