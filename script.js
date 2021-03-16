let coeur = document.querySelectorAll('.heart')
let coeurPlein = document.querySelectorAll('.heartFilled')

for(let i = 0; i < 4; i++){
    coeur[i].addEventListener('click', function(){

        coeurPlein[i].style.display = "block"
        coeur[i].style.display = "none";

    })
}

for(let i = 0; i < 4; i++){
    coeurPlein[i].addEventListener('click', function(){

       
        coeurPlein[i].style.display = "none";
        coeur[i].style.display = "block"

    })
}



  