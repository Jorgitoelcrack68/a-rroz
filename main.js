var callmartes=document.getElementById("xi")
var d2= callmartes.getContext("2d")
var gpx=10
var gpy=10
var gdj="descarga.jpg"
var gmj="m.png"
var ato=100
var acho=100

function robotdemartes(){
    imgfondo=new Image()
    imgfondo.onload=imgenlapantalla
    imgfondo.src=gmj

    imgrovot=new Image()
    imgrovot.onload=imgendeltotov
    imgrovot.src=gdj
}
function imgenlapantalla(){
    d2.drawImage(imgfondo,0,0,callmartes.width,callmartes.height)
}

function imgendeltotov(){
    d2.drawImage(imgrovot,gpx,gpy,acho,ato)
}
window.addEventListener("keydown",cuando_dedcte_key_down)

function cuando_dedcte_key_down(para_mediometro){
    var codigodelateclapresionada=para_mediometro.keyCode
    console.log (codigodelateclapresionada)

    if (codigodelateclapresionada==87) {
        roasiariba()
    }

    
    if (codigodelateclapresionada==65) {
        roasialaiskierda()
    }

    
    if (codigodelateclapresionada==83) {
        roasiaabajo()
    }

    
    if (codigodelateclapresionada==68) {
        roasialaderechaaorsi()
    }
}

function roasiariba(){
    gpy=gpy-10
    imgenlapantalla()
    imgendeltotov()
    if ( gpy<=0 ) {
    document.getElementById("no").innerHTML="<img src='no.jpg' >"
    }

    else{
        document.getElementById("no").innerHTML=" "
    }

}

function roasiaabajo(){
    gpy=gpy+10
    imgenlapantalla()
    imgendeltotov()
    if ( gpy>=300.999999999999999999 ) {
    document.getElementById("no").innerHTML="<img src='no.jpg' >"
    }

    else{
        document.getElementById("no").innerHTML=" "
    }

}

function roasialaiskierda(){
    gpx=gpx-10
    imgenlapantalla()
    imgendeltotov()
    if ( gpx<=0 ) {
    document.getElementById("no").innerHTML="<img src='no.jpg' >"
    }

    else{
        document.getElementById("no").innerHTML=" "
    }

}

function roasialaderechaaorsi(){
    gpx=gpx+10
    imgenlapantalla()
    imgendeltotov()
    if ( gpx>=600 ) {
    document.getElementById("no").innerHTML="<img src='no.jpg' >"
    }

    else{
        document.getElementById("no").innerHTML=" "
    }

}