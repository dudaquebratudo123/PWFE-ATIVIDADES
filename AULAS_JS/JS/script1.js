/*ex aula
var pessoas = ["Maria", "Jose", "Carlos", "Ana"];
var objetos = ["Colher", "Garfo"];
var frutas = ["Uva", "Maça", "Abacaxi"];

pessoas[0]; //representa a maria
pessoas.length; //resultado final é igual a 4
objetos[objetos.length] = "Faca"; //adiciona um elemento ao array
frutas.indexOf("Uva"); //resultado 0 

//lendo as listas
document.write("<br> Lista de pessoas: ")
for(var x in pessoas){
   document.write(" - " + pessoas[x]);
}

document.write("<br> Lista de objetos: ")
for(var x in objetos){
    document.write(" - " + objetos[x]);
}

document.write("<br> Lista de frutas: ")
for(var x in frutas){
    document.write(" - " + frutas[x]);
}
*/

/*/nova lista (atv)
var refri = ["Coca", "Pepsi", "Fanta", "Tubaina", "Guarana", "Sprite", "Kuat"];
//adicionando itens
refri[refri.length] = "Guarana_Jesus";
refri[refri.length] = "Alianca";
//exibindo informações
    document.write("<br><br>Lista de refrigerantes: ")
    //puxando tamanho da lista
    document.write("<br> tamanho: " + refri.length);
    //antes de incrementar
    document.write("<br> antes de incrementar: " + refri);
    document.write("<br> posição do elemento inicial: " + refri.indexOf("Coca"));
    //lendo
    var num = 0;
    for(var x in refri){
        document.write("<br>" + num + "- " + refri[x]);
        num++;
    }
*/

/*/ex date1
var d = new Date("October 13, 2014 11:13:00");
document.getElementById("D1").innerHTML = d;

d = new Date(0);
document.getElementById("D2").innerHTML = d;

var d = new Date(99,5,24,11,33,30,0);
document.getElementById("D3").innerHTML = d; //o mês vai de 0(janeiro) a 11(dezembro)

var d = new Date(2014,7,20); //20 de agosto de 2014
document.getElementById("D4").innerHTML = d;

d = new Date();
document.write("<br>" + d.toUTCString()); //"Fri, 03 Mar 2023 02:11:00 GMT"
document.write("<br>" + d.toDateString()); //"Thu 02 2023"
document.write("<br>" + d.toLocaleDateString()); //"02/03/2023"
document.write("<br>" + d.toLocaleTimeString('pt-PT', {hour12: false})); //"23:11:00"

//ex date 2
var hoje, prazo;
hoje = new Date();
prazo = new Date();

prazo.setFullYear(2023, 10, 28);
var dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + 
    "/" + (hoje.getMonth()) + "/" + hoje.getFullYear() + "</p>");

document.write("<p>O prazo é: " + dia[prazo.getDay()] + ", " + prazo.getDate() + 
    "/" + (prazo.getMonth() + 1) + "/" + prazo.getFullYear() + "</p>");

*/

//tratamento de excessoes
try{
    var x;
    //testando 
    if(x == "") throw "vazio";
    if(isNaN(x)) throw "não é um número";
    if(x == 10) throw x;
    //exibindo
    console.log(x);
    document.write(x);
}catch(err){
    console.log("Input is " + err);
    document.write("Input is " + err)
}

// 

try{
    adddlert ("ERRO!!!"); //adddlert não existe
}catch(err){
    document.write = err.message;
}

//
var dividendo = 10;
var divisor = 0;

try{
    if(divisor == 0){
        throw new Error("Erro: divisão por zero não é permitida");
    }
    var resultado = dividendo/divisor;
    console.log("Resultado: ", resultado);
}catch(err){
    console.log(err.message);
}

//
function myFunction(){
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;

    try{
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }catch(err){
        message.innerHTML = "Input is " + err;
    }
}

//
try{
    adddlert ("ERRO!!!"); //adddlert não existe
}catch(err){
    document.write("<br>" + err.message);
}finally{
    document.write("<br>Será mostrado mesmo com o Erro");
}