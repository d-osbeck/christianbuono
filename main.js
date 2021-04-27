// Slut dato for countdown
let launchDate = new Date("April 29, 2021 23:59:59").getTime();

// Sætter countdown til at skifte hvert sekund
let timer = setInterval(tick, 1000);

function tick (){
    // Nuværende tid
    let now = new Date().getTime();
    // Forskel i tiden indtil timeren rammer 0
    let t = launchDate - now;

    if (t > 0) {
        // Sætte op dage, timer, sekunder og minutter
        // Algoritme til at beregne dage (Math.floor runder ned)
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        // prefix any number below 10 with a "0" E.g. 1 = 01
        if (days < 10) { days = "0" + days; }

        // Algoritme til at beregne timer
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        // Algoritme til at beregne minutter
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        // Algoritme til at beregne sekunder

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        // Opretter Time String
        let time = `${days}D : ${hours}H : ${mins}M : ${secs}S`;

        // Set time on document
        document.querySelector('.main__countdown').innerText = time;
    }

}