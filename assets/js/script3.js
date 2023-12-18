const digito1 = document.getElementById('digito1')
const digito2 = document.getElementById('digito2')
const digito3 = document.getElementById('digito3')
const parrafo = document.getElementById('parrafo')

let a,b,c

function capturaA(){
    
    a = digito1.value
}
function capturaB(){
    b = digito2.value

}
function capturaC(){
   c = digito3.value

}
function validacion() {

    let total= a+b+c
console.log(total)

    if (total == "911"){
return parrafo.innerText="password 1 correcto"
    } 

    if (total == "714"){
      return  parrafo.innerText="password 2 correcto"
            }
            
            
if (total != "911" || total != "714"){
parrafo.innerText="password  incorrecto"
    } 


}