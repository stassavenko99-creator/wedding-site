// ======================================
// 💍 ТАЙМЕР ДО СВАДЬБЫ
// ======================================


const weddingDate = new Date(
    "October 17, 2026 15:00:00"
).getTime();



function updateTimer() {


    const now = new Date().getTime();


    const distance = weddingDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}



setInterval(updateTimer, 1000);


updateTimer();
