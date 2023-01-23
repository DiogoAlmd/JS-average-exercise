var x = document.getElementById("primeira-nota");
var y = document.getElementById("segunda-nota");
var z = document.getElementById("terceira-nota");
var media;

function Media(){

    if(x < y || x < z){
        media = (Number(y.value) + Number(z.value))/2;
        console.log(media);
    }
    else if(y < x || y < z){
        media = (Number(x.value) + Number(z.value))/2;
        console.log(media);
    }
    else if(z < y || z < x){
        media = (Number(x.value) + Number(y.value))/2;
        console.log(media);
    }
}
