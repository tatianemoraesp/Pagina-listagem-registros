let roles;

fetch('http://localhost:3000/roles')
    .then(response => response.json())
    .then(json => roles = json); 

fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(json => desenhaTabela(json));

function escolhe() {
    var select = document.getElementById('SelectOpcoes');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    
    //1 buscar no html o valor atual do select e armazenar em uma variavel(utilizando document.algumaCOisa)
    //const select = document.getElementById('carregaSelecao');


    //2 printar no console o valor do passo anterior para ter certezaque esta funcionando
    //3 filtrar tabela????????
 
/*    
    for (var i=0; i=selectOption.length; i++) {
        if (selectOption[i].option) {
            selected = selectOption[i].option;
        }
        return selected;
    }
*/    
}    

function desenhaTabela(json) {
    //TODO resolver problema que pode acontecer se o fetch de roles demorar mais que o fetch de employees
    var corpoTabela = '';

    //TODO trocar para forEach
    for (var i=0; i < json.length; i++) {
        corpoTabela += '<tr>';
        corpoTabela += '<td>' + json[i].id + '</td>';
        corpoTabela += '<td>' + json[i].name + '</td>';
        corpoTabela += '<td>' + obterNomeRole(roles, json[i].role_id) + '</td>';
        corpoTabela += '<td>' + json[i].salary + '</td>';
        corpoTabela += '</tr>'
    }

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = corpoTabela;
}

function obterNomeRole(roles, roleId) {
    var nomeRole = '';

    //TODO trocar para find
    for (var i=0; i < roles.length; i++) {
        if (roles[i].id == roleId) {
            nomeRole = roles[i].name;
        }
    }

    return nomeRole;
}



/* Copia da funcao obterNomeROle sem usar variavel no comeco como exemplo de alternativa
function obterNomeRole(roles, roleId) {
    for (var i=0; i < roles.length; i++) {
        if (roles[i].id == roleId) {
            return roles[i].name;
        }
    }

    return '';
}
*/