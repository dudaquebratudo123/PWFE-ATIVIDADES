function gerarCitacao(){
    let nome = document.getElementById('nome').value;
    let primeiro = nome.split(" ")[0];
    let segundo = nome.split(" ")[1];
    let terceiro = nome.split (" ")[2];
    document.getElementById('cita').innerHTML = ("<b>Citação Bibliográfica: " + 
    terceiro.toUpperCase() + ", " + primeiro[0].toUpperCase() + ". " + segundo[0].toUpperCase() + ".");
}

