const primerStickerCounter = document.getElementById('velosterA')
const segundoStickerCounter = document.getElementById('velosterB')
const tercerStickerCounter = document.getElementById('velosterC')
const parrafo = document.getElementById('parrafo')
//console.log(primerStickerCounter.value)
//console.log(segundoStickerCounter)
//console.log(tercerStickerCounter)
//let a=primerStickerCounter.value
//console.log(a)
let a,b,c

function capturaA(){
    
    a = Number(primerStickerCounter.value)
   // console.log("estoy dentro", a)
}
function capturaB(){
    b = Number(segundoStickerCounter.value)
    //console.log("estoy dentro y afuera",b)

}
function capturaC(){
   c = Number(tercerStickerCounter.value)
    //console.log("estoy dentro y ya sali",c)

}
function validacion() {

    let total= a+b+c

    if (total <= 10){
//console.log("es menor o igual que 10")
parrafo.innerText="tienes " + total + " sticker"
    } else {
        //console.log("mayor que 10")
        parrafo.innerText="Llevas demaciados sticker"

    }



//console.log("ya me fui",total)

}