function verificar(){
    let senha = document.getElementById("senha").value;
    //se a senha for diferente de nada
    if(senha!= ""){ 
        //se a senha nao estiver entre 8 e 15 caracteres
        if(senha <= 8 || senha >=15){
            document.getElementById("resultado").innerText = "Erro..." +
            "A senha DEVE possuir entre 8 e 15 caracteres";   
        //se a senha nao tiver 1 letra minuscula
        }else if(senha.match(/[^a-z]/g)){
            document.getElementById("resultado").innerText = ("possuir letras minúsculas (no mínimo, 1)");
        //se a senha nao tiver 2 letras maiusculas
        }else if(senha.match(/[^A-Z]/g)){
            document.getElementById("resultado").innerText = ("possuir letras maiúsculas (no mínimo, 2)");
        //se a senha nao tiver 1 numero
        }else if(senha.match(/[^0-9]/g)){
            document.getElementById("resultado").innerText = ("possuir números (no mínimo, 1)");
        //se a senha nao tiver 1 simbolo
        }else if(senha.match(/[^!@#$%¨&*]/g)){
            document.getElementById("resultado").innerText = ("possuir símbolos (no mínimo, 1)");
        //se tudo estiver certo
        }else{
            document.getElementById("resultado").innerText = (" A senha pode ser utilizada!"); 
        }
    }
}