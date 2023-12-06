function adicionarContato(){
    var nome = prompt("Digite seu nome: ");        //para digitar nome
    var email = prompt("Digite seu email: ")       //para digitar email
    var li = document.createElement("li");         //criando elemento li no html
    var info = document.createTextNode("Nome: " + nome + ", Email: " + email);         //criando nodo info que passa o x
    li.appendChild(info);                             //adiciona o nó com info depois do ultimo nó filho
    var nodo = document.getElementById("texto");   //minha <li> recebe a variavel nodo(vazia)
    nodo.appendChild(li);                          //meu nodo é inserido no li do html
}