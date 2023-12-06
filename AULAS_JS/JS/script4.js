//ex1
function myFunction(){
    alert('Ola');
}

//ex2
var myVar = setInterval(myTimer, 1000);
function myTimer(){
    var b = new Date();
   // document.getElementById("demo").innerHTML = b.toLocaleTimeString();
}

    //variações
    function dia(){
        var e = new Date();
        document.getElementById("demo1").innerHTML = e.getDate();
    }
    function mes(){
        var e = new Date();
        document.getElementById("demo2").innerHTML = e.getMonth();
    }

    function ano(){
        var e = new Date();
        document.getElementById("demo3").innerHTML = e.getFullYear();
    }


function mostrarHora(){
    let d = new Date();
    document.body.innerHTML = "<h3>Hora:" + d.getHours() + "<h3>Minuto:" + d.getMinutes() + "<h3>Segundo:"
     + d.getSeconds() + "<br><br>" + d.toLocaleTimeString();
}

mostrarHora();



function Hora(){
    const tempo = new Date();
    const hora = tempo.getHours();
    const min = tempo.getMinutes();
    const seg = tempo.getSeconds();
    console.log(`${hora} : ${min} : ${seg}`);
    document.body.innerHTML = `Hora ${hora} : ${min} : ${seg}`;
    setInterval(Hora, 1000); //realiza uma função em determinados milisegundos
}

Hora();


//ex4
function teste(){
    document.body.style.backgroundImage = "url(IMG/flores.png)";
}