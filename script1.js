let roles;
var employees;

fetch('http://localhost:3000/roles')
    .then(response => response.json())
    .then(json => roles = json); 

fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(json => {
        employees = json;
        desenhaTabela(json);
    });

function escolhe() {
    var select = document.getElementById('SelectOpcoes');
    var value = select.options[select.selectedIndex].value;
    if (value == 'NomeA') {
        employees.sort((a,b) => a.name > b.name);
    } else if (value == 'NomeD') {
        employees.sort((a,b) => a.name < b.name); 
    } else if (value == 'SalarioA') {
        employees.sort((a,b) => a.salary > b.salary);
    } else if (value == 'SalarioD') {
        employees.sort((a,b) => a.salary < b.salary);
    } 
    desenhaTabela(employees);
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