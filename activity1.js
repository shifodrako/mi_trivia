score =0;
function actualizar(){
    score = score + 1;
    document.getElementById("score").innerHTML = "puntaje" + score ;
}
function guardar(){
    localStorage.setItem("score" , score);
}
function Siguiente(){
    window.location = "activity_2 (1).html";
}