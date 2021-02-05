$(document).ready(function() {
    $('input#cpf').characterCounter();
   });
   var xhr = new XMLHttpRequest();
   let inp = document.getElementById("cpf");
   var msgDiv = document.getElementById("msgCase");
   let bt = document.getElementById("sub");
   inp.addEventListener("keypress", function(e) {
    if(!(e.key in ["0","1","2","3","4","5","6","7","8","9"] && cpf.value.length < 11))
    {
        e.preventDefault();
    }
});
   msgDiv.style.display = "none";
   inp.onfocus = clean;
   bt.onclick = req;
   function clean()
   {
       msgDiv.style.display = "none";  
   }
   
   var resp;
   function req()
   {
        xhr.open("POST",`/valido`,true );
        xhr.setRequestHeader("Content-type", "text/html");
        xhr.onload = () => 
        {
            resp = JSON.parse(xhr.responseText);
            msgDiv.style.display = "block"
            let txt = document.getElementById("message");
            if(resp == null)
            {
                txt.innerText = "CPF INEXISTENTE OU FORA DO REGISTRO";
            }
            else updateLayout();
        }
        xhr.send(inp.value);
   }

   function updateLayout()
   {
        let tela = document.getElementById("tela");
        tela.innerHTML = 
        `
        <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
                <form id="cad" method="POST" action="/update" target="dummyframe" class="col s12">
                  <div class="row">

                    <div class="input-field col s8 offset-s2">
                      <input class="inp" placeholder="Somente números" id="cpf" name="cpf" type="text" data-length="11" required readonly>
                      <label class = "active" for="cpf">CPF</label>
                    </div>

                    <div class="input-field col s8 offset-s2">
                      <input class="inp" placeholder="João Pedro" id="nome1" name="primeiro_nome" type="text" class="validate" required>
                      <label class = "active" for="nome1">Primeiro nome</label>
                    </div>

                    <div class="input-field col s8 offset-s2">
                      <input class="inp" placeholder="Da Cunha" id="nome2" name="sobrenome" type="text" class="validate" required>
                      <label class = "active" for="nome2">Sobrenome</label>
                    </div>

                    <div class="input-field col s8 offset-s2">   
                      <label class="ls" for="eCivil">Estado civíl</label>
                      <select class="inp" name="estado_civil" id="eCivil" required>
                        <option value="solteiro">Solteiro(a)</option>
                        <option value="casado">Casado(a)</option>
                      </select>                  
                    </div>

                    <div class="input-field col s8 offset-s2">   
                      <label class="ls" for="sexo">Sexo</label>
                      <select class="inp" name="sexo" id="sexo" required>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="O">Outro</option>
                      </select>                  
                    </div>

                    <div class="input-field col s8 offset-s2">
                      <input class="inp" id="date" name="data_nascimento" type="date" class="validate" required readonly>
                      <label class = "active" for="date">Data de nascimento</label>
                    </div>
                 
                    <div class="input-field col s8 offset-s2">
                      <input class="inp" placeholder="ex: 1000" id="renda" name="renda" type="text" class="validate">
                      <label class = "active" for="renda">Renda</label>
                    </div>
                    <div class="input-field col s8 offset-s2">
                      <input id="sub" class="btn-large green darken-3" type="submit" value="Atualizar">
                      <a href="index.html" class=" waves-effect waves-light green btn-large"><i class="material-icons right">arrow_back</i>voltar</a>
                    </div>
                    <div id="msgCase" style="background-color: white; border: 4px solid black; " class="col s8 offset-s2 ">
                      <p id="message" style="text-align: center; color: black; font-weight: bolder;"></p>
                    </div>

                  </div>
                </form>
        `

        msgDiv = document.getElementById("msgCase");
        bt = document.getElementById("sub");
        clean();
        document.getElementById("cpf").value = resp.CPF;
        document.getElementById("nome1").value = resp.primeiro_nome;
        document.getElementById("nome2").value = resp.sobrenome;
        document.getElementById("eCivil").value = resp.estado_civil;
        document.getElementById("sexo").value = resp.sexo;
        let renda = document.getElementById("renda");
        renda.value = resp.renda;
        renda.addEventListener("keypress", function(e) {
          if(!(e.key in ["0","1","2","3","4","5","6","7","8","9"]))
          {
              e.preventDefault();
          }
        });
        let data = new Date(resp.data_nascimento);
        data = data.toISOString().slice(0,10);
        document.getElementById("date").value = data;
        let form = document.getElementById("cad");
        let inp = document.querySelectorAll(".inp");
        inp.forEach(e => e.onfocus = clean);
        form.onsubmit = () =>
        {
            msgDiv.style.display = "block"
            let txt = document.getElementById("message");
            txt.innerText = "Tupla atualizada com sucesso";
        }
   }