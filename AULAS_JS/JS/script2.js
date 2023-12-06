function blurFunction(){
    document.getElementById("myInput").style.background = "red";
}

//
function myFunction(val){
    alert("mudou para: " + val);
}
//
function loadFunction(){
    alert("a página foi carregada!!");
}

//
function mouseUp(){
    document.getElementById("myP").style.color = "red";
}

function mouseDown(){
    document.getElementById("myP").style.color = "green";
}

//
function coordenadasFigura(e){
    var corX = e.clientX;
    var corY = e.clientY;
    var coor = "Coordenadas: (" + corX + "/" + corY + ")";
    document.getElementById("demo3").innerHTML = coor;
}

function clearCoor(){
    document.getElementById("demo3").innerHTML = "";
}

//