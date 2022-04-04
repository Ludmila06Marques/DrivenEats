 
let prato;
let bebida;
let postre;
function selfrango(){
        document.getElementById("frango").style.borderColor="green"; 
        document.getElementById("feijoada").style.borderColor="white";
        document.getElementById("strogonoff").style.borderColor="white";
        document.getElementById("macarrao").style.borderColor="white";
        document.getElementById("bife").style.borderColor="white";
       

        prato="frango";
        console.log(icon)
       
        
     
}
function selfeijoada(){
        document.getElementById("frango").style.borderColor="white";
        document.getElementById("feijoada").style.borderColor="green";
        document.getElementById("strogonoff").style.borderColor="white";
        document.getElementById("macarrao").style.borderColor="white";
        document.getElementById("bife").style.borderColor="white";
        prato="carne";
}
function selstrogonoff(){
        document.getElementById("frango").style.borderColor="white";
        document.getElementById("feijoada").style.borderColor="white";
        document.getElementById("strogonoff").style.borderColor="green";
        document.getElementById("macarrao").style.borderColor="white";
        document.getElementById("bife").style.borderColor="white";
        prato="strogonoff"
}
function selmacarrao(){
        document.getElementById("frango").style.borderColor="white";
        document.getElementById("feijoada").style.borderColor="white";
        document.getElementById("strogonoff").style.borderColor="white";
        document.getElementById("macarrao").style.borderColor="green";
        document.getElementById("bife").style.borderColor="white";
        prato="Macarrao"
}
function selbife(){
        document.getElementById("frango").style.borderColor="white";
        document.getElementById("feijoada").style.borderColor="white";
        document.getElementById("strogonoff").style.borderColor="white";
        document.getElementById("macarrao").style.borderColor="white";
        document.getElementById("bife").style.borderColor="green";
        prato="Contra-file"
}
function selcoca(){
        document.getElementById("coca").style.borderColor="green";
        document.getElementById("guarana").style.borderColor="white";
        document.getElementById("fanta").style.borderColor="white";
        document.getElementById("laranja").style.borderColor="white";
        document.getElementById("uva").style.borderColor="white";
        bebida="Coca-cola"
}
function selguarana(){
        document.getElementById("coca").style.borderColor="white";
        document.getElementById("guarana").style.borderColor="green";
        document.getElementById("fanta").style.borderColor="white";
        document.getElementById("laranja").style.borderColor="white";
        document.getElementById("uva").style.borderColor="white";
        bebida="Guarana"
}
function selfanta(){
        document.getElementById("coca").style.borderColor="white";
        document.getElementById("guarana").style.borderColor="white";
        document.getElementById("fanta").style.borderColor="green";
        document.getElementById("laranja").style.borderColor="white";
        document.getElementById("uva").style.borderColor="white";
        bebida="Fanta"
}
function sellaraja(){
        document.getElementById("coca").style.borderColor="white";
        document.getElementById("guarana").style.borderColor="white";
        document.getElementById("fanta").style.borderColor="white";
        document.getElementById("laranja").style.borderColor="green";
        document.getElementById("uva").style.borderColor="white";
        bebida="Laranja"
}
function seluva(){
        document.getElementById("coca").style.borderColor="white";
        document.getElementById("guarana").style.borderColor="white";
        document.getElementById("fanta").style.borderColor="white";
        document.getElementById("laranja").style.borderColor="white";
        document.getElementById("uva").style.borderColor="green";
        bebida="Suco de uva"
}
function selpudim(){
        document.getElementById("pudim").style.borderColor="green";
        document.getElementById("arrozdoce").style.borderColor="white";
        document.getElementById("brigadeiro").style.borderColor="white";
        document.getElementById("maracuja").style.borderColor="white";
        document.getElementById("curau").style.borderColor="white";
        postre="Pudim";
}
function selarrozdoce(){
        document.getElementById("pudim").style.borderColor="white";
        document.getElementById("arrozdoce").style.borderColor="green";
        document.getElementById("brigadeiro").style.borderColor="white";
        document.getElementById("maracuja").style.borderColor="white";
        document.getElementById("curau").style.borderColor="white";
        postre="Arroz doce";
}
function selbrigadeiro(){
        document.getElementById("pudim").style.borderColor="white";
        document.getElementById("arrozdoce").style.borderColor="white";
        document.getElementById("brigadeiro").style.borderColor="green";
        document.getElementById("maracuja").style.borderColor="white";
        document.getElementById("curau").style.borderColor="white";
        postre="Brigadeiro";
}
function selmaracuja(){
        document.getElementById("pudim").style.borderColor="white";
        document.getElementById("arrozdoce").style.borderColor="white";
        document.getElementById("brigadeiro").style.borderColor="white";
        document.getElementById("maracuja").style.borderColor="green";
        document.getElementById("curau").style.borderColor="white";
        postre="Mousse de maracuja";
}
function selcurau(){
        document.getElementById("pudim").style.borderColor="white";
        document.getElementById("arrozdoce").style.borderColor="white";
        document.getElementById("brigadeiro").style.borderColor="white";
        document.getElementById("maracuja").style.borderColor="white";
        document.getElementById("curau").style.borderColor="green";
        postre="Curau";
}


function finalizarPedido()
{
        if(prato&&bebida&&postre !== null)
        {  
        let mensagem;
        mensagem= "Oii , gostaria de pedir : "+ prato+ ", "+ bebida + ", "+ postre +" ";
        window.open("https://wa.me/+34634958835?text="+mensagem+". Obrigada");
        }
               
}
if(prato&&bebida&&postre !== null)
        {
        const barraverde= document.querySelector(".barra2");
       

        }


//Quando selecionar os 3 a barra muda de cor
//Colocar o chek
//Subir pro github