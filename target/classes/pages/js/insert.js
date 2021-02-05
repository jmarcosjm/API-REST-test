$(document).ready(function() {
 $('input#cpf').characterCounter();
});
let form = document.getElementById("cad");
let inp = document.querySelectorAll(".inp");
var msgDiv = document.getElementById("msgCase");
let cpf = document.getElementById("cpf");
cpf.addEventListener("keypress", function(e) {
    if(e.key != "0" && e.key != "1" && e.key != "2" && e.key != "3" && e.key != "4" && e.key != "5" && e.key != "6" && e.key != "7" && e.key != "8" && e.key != "9" || cpf.value.length >= 11)
    {
        e.preventDefault();
    }
});
let renda = document.getElementById("renda");
renda.addEventListener("keypress", function(e) {
    if(e.key != "0" && e.key != "1" && e.key != "2" && e.key != "3" && e.key != "4" && e.key != "5" && e.key != "6" && e.key != "7" && e.key != "8" && e.key != "9")
    {
        e.preventDefault();
    }
});
msgDiv.style.display = "none";
inp.forEach(e => e.onfocus = clean);
form.onsubmit = (e) =>
{
    if( cpf.value.length < 11)
    {
        e.preventDefault();
        msgDiv.style.display = "block"
        let txt = document.getElementById("message");
        txt.innerText = "CPF INVALIDO";
    }
    else
    {
        msgDiv.style.display = "block"
        let txt = document.getElementById("message");
        txt.innerText = "Sua requisição foi efetuada, utilize a função listar para verificar se a inserção foi bem sucedida";
    }

}
function clean()
{
    msgDiv.style.display = "none";  
}
