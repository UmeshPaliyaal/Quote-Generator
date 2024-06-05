let btnONe = document.getElementById("btn1");
let btnTWo = document.getElementById("btn2");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

btnONe.addEventListener("click" , () => {
    getQuote(api_url)
    const originalClss = btnONe.className
    setTimeout(() => {
        btnONe.className = "NQQ"
        setTimeout(() => {
            btnONe.className = originalClss
        }, 100);
    }, 0.2);
})
btnTWo.addEventListener("click" , () => {
    tweet()
    const originalClss = btnTWo.className
    setTimeout(() => {
        btnTWo.className = "NQQ"
        setTimeout(() => {
            btnTWo.className = originalClss
        }, 100);
    }, 0.2);
})

const api_url = "https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(api_url)

function tweet (){
    window.open( `https://twitter.com/intent/tweet?text=`+ quote.innerHTML + "%0A--- by  " + author.innerHTML,"tweet window" , "width=600,height=300")
}