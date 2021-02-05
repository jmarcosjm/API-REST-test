var xhr = new XMLHttpRequest();
var dados;
let ref = document.getElementById("refresh");
req();
ref.onclick = () =>
{
    req();
}
function req()
{
    xhr.open("GET",`/list`,true );
    xhr.onload = () => 
    {
        dados = JSON.parse(xhr.responseText);
        preenche();
    }
    xhr.send();
}


function preenche()
{
    let tela = document.getElementById("tela");
    let content = '';
    for(let i = 0; i<dados.length; i++)
    {
        
        content += 
        `
        <tr class = "line">
            <td>${dados[i].CPF}</td>
            <td>${dados[i].primeiro_nome}</td>
            <td>${dados[i].sobrenome}</td>
            <td>${dados[i].data_nascimento}</td>
            <td>${dados[i].estado_civil}</td>
            <td>${dados[i].sexo}</td>
            <td>${dados[i].renda}</td>
        </tr>
        `
    }
    tela.innerHTML = content;
}