function categorizarAluno(){
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    if(idade <= 12){
        categoria = "Infantil"; 
    }else if(idade >= 13 && idade <= 18){
        categoria = "Juvenil"; 
    }else if(idade > 18){
        categoria = "Adulto"; 
    }
    document.getElementById("texto").innerHTML += "<br>" + nome + "<br>";    
    retornarTracos();
    document.getElementById("texto").innerHTML +=  "<br>Categoria: " + categoria;    
}

function retornarTracos(){
    let tracos = nome.replace(/[A-Za-z]/g, "-");
    document.getElementById("texto").innerHTML +=  tracos;    
}

/*let tracos = "";
for(i = 0; i < nome.length; i++){
    tracos += "-";
}*/