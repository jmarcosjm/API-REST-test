var dados;
var key = "747a72ada0f24f699ded8e3be5cb181d";
var type ="top-headlines";
var sr="";
var ft="";
var cat="";
var classe="bloco4";
var country="country=br&";
var title = document.getElementById("title");
var titlect=`<strong>Pagina inicial</strong>`;
let xhr = new XMLHttpRequest();
xhr.open("GET",`https://newsapi.org/v2/top-headlines?${sr}${country}${cat}apiKey=${key}`,true );
xhr.onload = () => 
{
    dados=JSON.parse(xhr.responseText);
    dados=dados.articles;
    preenche();
}
xhr.send();

function preenche()
{
let xhr = new XMLHttpRequest();
xhr.open("GET",`https://newsapi.org/v2/${type}?${sr}${country}${cat}${ft}apiKey=${key}`,true );
xhr.onload = () => 
{
    dados=JSON.parse(xhr.responseText);
    dados=dados.articles;
    let tela = document.getElementById("tela");
let content=`<div style="text-align:center; margin-bottom: 20px;" class="col-12"><h2 id="title">${titlect}</h2></div>`;
tela.innerHTML="";
 for(let i=0; i<dados.length; i++)
 {
    if(dados[i].urlToImage != null || dados[i].description != null){
    let data=new Date (dados[i].publishedAt);
    content=content + `
    <div style="margin-bottom: 20px;" class="col-12 col-md-4 ">
    <div style="display:flex; align-items: center; justify-content: center; flex-wrap: wrap; overflow: scroll;" class="${classe}">
      <p style="margin: 0; ">${data.toLocaleDateString()} - ${dados[i].source.name}</p>
      <h4>${dados[i].title}</h4>
      <img src="${dados[i].urlToImage}" alt="">
      <p style=" margin: auto 0;" >${dados[i].description}<br> <a target="_blank"
          style="font-weight: bold; color: rgb(5, 123, 233);"
          href="${dados[i].url}">Continue
          lendo...</a></p>
    </div>
  </div>
  `
    }
 }
 tela.innerHTML=content;
 sr="";
 type ="top-headlines"
}
xhr.send();
}

function favClickSearch()
{
    let favElements = document.querySelectorAll(".favItem");
   favElements.forEach( element => element.onclick = favSearch);
}
function favSearch(){
    type ="everything";
    cat="";
    country="";
    classe="bloco4";
    sr=`q=${this.innerText}&`;
    titlect=`<strong>${this.innerText}</strong>`;
    preenche();
   }

onload= () => {
var favs = document.getElementById("favS");
favs.innerHTML="";
var lcontent=[];
if(!localStorage.getItem(`favoritos`))localStorage.setItem(`favoritos`, `${JSON.stringify(lcontent)}`);
if(JSON.parse(localStorage.getItem(`favoritos`)).length>0)favfill();

document.getElementById("C0").onclick = () => {
    titlect=`<strong>Pagina inicial</strong>`;
    sr="";
    ft="";
    cat="";
    country="country=br&";
    classe="bloco4";
    preenche();
}
document.getElementById("C1").onclick = () => {
    titlect=`<strong>Ciencia</strong>`;
    sr="";
    ft="";
    cat="category=science&";
    country="country=br&";
    classe="bloco";
    preenche();
}
document.getElementById("C2").onclick = () => {
    titlect=`<strong>Tecnologia</strong>`;
    sr="";
    ft="";
    cat="category=technology&";
    country="country=br&";
    classe="bloco5";
    preenche();
}
document.getElementById("C3").onclick = () => {
    titlect=`<strong>Entretenimento</strong>`;
    sr="";
    ft="";
    cat="category=entertainment&";
    country="country=br&";
    classe="bloco2";
    preenche()
}
document.getElementById("C4").onclick = () => {
    titlect=`<strong>Esportes</strong>`;
    sr="";
    ft="";
    cat="category=sports&";
    country="country=br&";
    classe="bloco3";
    preenche()
}
document.getElementById("C0-2").onclick = () => {
    titlect=`<strong>Pagina inicial</strong>`;
    sr="";
    ft="";
    cat="";
    country="country=br&";
    classe="bloco4";
    preenche();
}
document.getElementById("C0-3").onclick = () => {
    titlect=`<strong>Pagina inicial</strong>`;
    sr="";
    ft="";
    cat="";
    country="country=br&";
    classe="bloco4";
    preenche();
}
document.getElementById("C1-2").onclick = () => {
    titlect=`<strong>Ciencia</strong>`;
    sr="";
    ft="";
    cat="category=science&";
    country="country=br&";
    classe="bloco";
    preenche();
}
document.getElementById("C2-2").onclick = () => {
    titlect=`<strong>Tecnologia</strong>`;
    sr="";
    ft="";
    cat="category=technology&";
    country="country=br&";
    classe="bloco5";
    preenche();
}
document.getElementById("C3-2").onclick = () => {
    titlect=`<strong>Entretenimento</strong>`;
    sr="";
    ft="";
    cat="category=entertainment&";
    country="country=br&";
    classe="bloco2";
    preenche()
}
document.getElementById("C4-2").onclick = () => {
    titlect=`<strong>Esportes</strong>`;
    sr="";
    ft="";
    cat="category=sports&";
    country="country=br&";
    classe="bloco3";
    preenche()
}
document.getElementById("S0").onclick = () => {
    titlect=`<strong>Pagina inicial</strong>`;
    sr="";
    ft="";
    cat="";
    country="country=br&";
    classe="bloco4";
    preenche();
}
document.getElementById("S1").onclick = () => {
    titlect=`<strong>CNN</strong>`;
    sr="";
    ft="sources=cnn&";
    cat="";
    country="";
    classe="bloco4";
    preenche();
}
document.getElementById("S2").onclick = () => {
    titlect=`<strong>Globo</strong>`;
    sr="";
    ft="sources=globo&";
    cat="";
    country="";
    classe="bloco4";
    preenche();
}
document.getElementById("S1-2").onclick = () => {
    titlect=`<strong>CNN</strong>`;
    sr="";
    ft="sources=cnn&";
    cat="";
    country="";
    classe="bloco4";
    preenche();
}
document.getElementById("S2-2").onclick = () => {
    titlect=`<strong>Globo</strong>`;
    sr="";
    ft="sources=globo&";
    cat="";
    country="";
    classe="bloco4";
    preenche();
}
document.getElementById("S3").onclick = () => {
    titlect=`<strong>The Wall Street Journal</strong>`;
    sr="";
    ft="sources=the-wall-street-journal&";
    cat="";
    country="";
    classe="bloco4";
    preenche();
}
document.getElementById("S4").onclick = () => {
    titlect=`<strong>Techradar</strong>`;
    sr="";
    ft="sources=techradar&";
    cat="";
    country="";
    classe="bloco4";
    preenche();
}
var pesquisa = document.getElementById("pesquisa");
document.getElementById("search").onclick = () => {
    if(pesquisa.value.length>0)
    {
    type ="everything";
    cat="";
    country="";
    classe="bloco4";
    sr=`q=${pesquisa.value}&`;
    titlect=`<strong>${pesquisa.value}</strong>`;
    preenche();
    }
}

document.getElementById("fav").onclick = () => {
    if(pesquisa.value.length>0)
    {
    if(!localStorage.getItem(`favoritos`))
    {
    lcontent=[];
    localStorage.setItem(`favoritos`, `${JSON.stringify(lcontent)}`);
    }
    lcontent = (JSON.parse(localStorage.getItem(`favoritos`)));
    if(pesquisa.value.length>0)lcontent.push(pesquisa.value);
    type ="everything";
    cat="";
    country="";
    classe="bloco4";
    sr=`q=${pesquisa.value}&`;
    titlect=`<strong>${pesquisa.value}</strong>`;
    preenche();
    pesquisa.value="";
    localStorage.setItem(`favoritos`, `${JSON.stringify(lcontent)}`)
    favfill();
}
}
function favfill(){
if(JSON.parse(localStorage.getItem(`favoritos`)).length==0)
{
favs.innerHTML="";
} else{
    favs.innerHTML="";
    let content = JSON.parse(localStorage.getItem("favoritos"));
    favs.innerHTML= favs.innerHTML +
    `
    <a class="dropdown-item favItem" href="#">${content[0]}</a>
    `;
for(let i=1; i<JSON.parse(localStorage.getItem(`favoritos`)).length;i++)
{   
    favs.innerHTML= favs.innerHTML +
    `
    <div class="dropdown-divider"></div>
    <a class="dropdown-item favItem" href="#">${content[i]}</a>
    `;
}
}
favClickSearch();
}
}