$(document).ready(function() {
    $('input#cpf').characterCounter();
   });
   var xhr = new XMLHttpRequest();
   let inp = document.getElementById("cpf");
   var msgDiv = document.getElementById("msgCase");
   let bt = document.getElementById("sub");
   msgDiv.style.display = "none";
   inp.onfocus = clean;
   bt.onclick = req;
   function clean()
   {
       msgDiv.style.display = "none";  
   }
   
   function req()
   {
       let resp;
        xhr.open("POST",`/delete`,true );
        xhr.setRequestHeader("Content-type", "text/html");
        xhr.onload = () => 
        {
            resp = xhr.responseText;
            msgDiv.style.display = "block"
            let txt = document.getElementById("message");
            txt.innerText = resp;
        }
        xhr.send(inp.value);
   }

   let cpf = document.getElementById("cpf");
   cpf.addEventListener("keypress", function(e) {
    if(!(e.key in ["0","1","2","3","4","5","6","7","8","9"] && cpf.value.length < 11))
    {
        e.preventDefault();
    }
   });
