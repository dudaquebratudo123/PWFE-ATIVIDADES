function limpa_form(){
    document.getElementById("rua").value=("");
    document.getElementById("bairro").value=("");
    document.getElementById("cidade").value=("");
    document.getElementById("estado").value=("");
}

function atualizacampos(){
    if(!("erro") in conteudo){
        document.getElementById('rua').value=(conteudo.rua);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.cidade);
        document.getElementById('estado').value=(conteudo.estado);
    }else{
        limpa_form();
        alert("CEP não foi encontrado!");
    }
}

function pesquisacep(valor){
    var cep = valor.replace(/|D/g,''); //variavel cep recebe apenas valores decimais(inteiros)
    if(cep!= ""){ //condição de validação
        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)){//valida o formato do cep
            document.getElementById('rua').value = "carregando . . .";
            document.getElementById('bairro').value ="carregando . . .";
            document.getElementById('cidade').value="carregando . . .";
            document.getElementById('estado').value="carregando . . .";
            var elemento = document.createElement('script'); // criou nó (elemento)
            elemento.src = 'https://viacep.com.br/ws/' + cep +  '/json/?callback=atualiza_campos;' //adicionou informação no elemento
            document.body.appendChild(elemento); //insere script no documento e carrega seu conteudo
        }else{
            limpa_form();
            alert('Formato de CEP inválido!')
        }
    }else{
        limpa_form();
    }
}