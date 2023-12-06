function mostrar(){
    document.getElementById("texto").innerHTML = "";
    let numero = document.getElementById("numero").value;
    for(i = 0; i < 11; i++){
        let p = document.createElement("p");       
        let info = document.createTextNode(numero + " x " + i + " = " + numero*i); 
        p.appendChild(info);          
        let id = document.getElementById("texto");   
        id.appendChild(p); 
    }
}