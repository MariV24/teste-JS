function mudaSeg(){
    document.getElementById("titulo").innerHTML = "Segurança";
}

function mudaProj(){
    document.getElementById("titulo").innerHTML = "Projeto";
}

function addProgress25(){
    let progress = document.getElementById("progressBar");
            progress.style.width = 50 + '%' ;
        /*elif (progress.style.width == "50%"){
            progress.style.width = 75+'%'; 
        }; elif(progress.style.width == "75%"){
            progress.style.width = 100+'%'
        };*/
};

function addProgress75(){
    let progress = document.getElementById("progressBar");
            progress.style.width = 75 + '%' ;
};

function addProgress100(){
    let progress = document.getElementById("progressBar");
            progress.style.width = 100 + '%' ;
};