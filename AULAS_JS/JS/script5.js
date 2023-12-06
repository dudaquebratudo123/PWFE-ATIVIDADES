//ex1
var titulo = document.getElementById("titulo"); // seleciona o elemento
var conteudo = titulo.textContent; ///seleciona o conteudo texto do elemento
titulo.textContent = "mudando . . ."
console.log(conteudo); //imprime o cabeçalho

//ex2
var x = document.getElementsByTagName("li");
document.getElementById("demo").innerHTML = x[1].innerHTML;
console.log("pegando " + x[1].innerHTML);

//ex3
var elemento = document.getElementsByClassName("exemplo1");
elemento[0].innerHTML = "testando classe";//substitui oq esta dentro da div por "testando classe"
console.log("JS" + elemento[0].innerHTML);

//ex4
var num = document.getElementsByName("cor").length;
document.getElementById("seletor").innerHTML = num;
console.log("JS numero = " + num);

//ex5
var element = document.getElementById("cabecalho");
element.innerHTML = "novo cabeçalho"; //inner html manipula o conteudo
document.getElementById("imagem").src="IMG/5.png"; //nova imagem

//ex6
document.getElementById("p2").style.color="blue";
document.getElementById("p3").style.letterSpacing="5px";

//ex7
var txt = document.getElementById("intro").childNodes[0].textContent;
document.write(txt);
console.log(txt);

//8
var x = document.getElementById("left");
var txt = "";
for(var i = 0; i < x.childNodes.length; i++){
    txt += "Nodo: " + x.childNodes[i].nodeName + 
    "Valor: " +x.childNodes[i].nodeValue + "<br>";
}
alert(txt);

//9
var para = document.createElement("p");
var node = document.createTextNode("Esse é o novo,");
para.appendChild(node);

var element = document.getElementById("left2");
element.appendChild(para);

//10
var para = document.createElement("p");
var node = document.createTextNode("Esse é o novo.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child); // (o que voce cria, pra onde vai)

//11
alert('Bummmmmmmmmmmmm!');
if(confirm('Alerta confirmado?')){
    alert('Positivo central');
}else{
    alert('Negativo central');
}


//12
document.write(document.images.length);

//13
function funcao(){
    alert("Hello World!");
}

//14
function bemvindo(nome1,nome2){
    alert("Bemvindo " + nome1 + " e " + nome2);
}

//15
function multiplicacao(a,b){
    return a*b;
}
document.getElementById("resposta").innerHTML = multiplicacao(4,3);