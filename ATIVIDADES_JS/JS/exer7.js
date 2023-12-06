    let entrada = prompt("Ecreva uma palavra:"); //entrada recebe oq vc escreveu no prompt
    let palavra = entrada.split("");  //separa a palavra digitada por letras
    let invertida = palavra.reverse().join(""); //.reverse inverte e .join junta as letras(pq estão separadas por virgulas)
    alert("Palavra: " + entrada + "\nInvertida: " + invertida); //exibindo