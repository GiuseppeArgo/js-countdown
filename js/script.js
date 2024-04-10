// Definisco la costante dei secondi

let seconds = 10;

const countdownElem = document.getElementById("second");

const happyElem = document.getElementById("happynewyear");

// Creo la funzione per decrementare i secondi

    // Ogni secondo
    // Se i secondi sono minori o uguali a 10 
        // decremento di un secondo
    // Altrimenti
        // termino il decremento

const countdown = setInterval(function () {
    if (seconds > 0) {
        seconds--;
        countdownElem.innerText = seconds;
    } else {
        clearInterval(countdown);
        console.log("BUON ANNO!");
        happyElem.innerText = "BUON ANNO!"
    }
    
    console.log(seconds);
     // Stampo in pagina il countdown
}, 1000);



