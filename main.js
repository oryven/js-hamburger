// creare interazionecone tramite clik quando bisogna aprire o chiudere l'hamburger menu

// creare le variabili prendendo le classi di riferimento

const apri = document.querySelector(".fas");

const chiudi = document.querySelector(".close");

const hamburgerMenu = document.querySelector(".hamburger-menu");

// attivare con il clik le funzioni di apertura e chiusura

apri.addEventListener("click",

    function() {

        //hamburgerMenu.style.display = "block";
        hamburgerMenu.classList.add('active');

    }

)

chiudi.addEventListener("click",

    function() {

        //hamburgerMenu.style.display = "none";
        hamburgerMenu.classList.remove('active');
    }

)