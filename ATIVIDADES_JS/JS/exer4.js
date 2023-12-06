function notasSaque(){
    var entrada = document.getElementById("entrada").value;
    var n100 = (Math.trunc(entrada/100));
    var n50 = (Math.trunc((entrada%100)/50));
    var n10 = (Math.trunc(entrada%50)/10);
    document.getElementById('n100').innerHTML = ("<b>Notas de R$100: " + n100);
    document.getElementById('n50').innerHTML = ("<b>Notas de R$50: " + n50);
    document.getElementById('n10').innerHTML = ("<b>Notas de R$10: " + n10);
}