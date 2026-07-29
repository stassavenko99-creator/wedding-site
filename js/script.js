/*
==========================================

СТАС & НАСТЯ
Wedding Website

FILE:
script.js

VERSION:
0.1

Главная логика сайта

Что делает:
✓ Загружает настройки
✓ Подставляет данные
✓ Готовит интерактивы

==========================================
*/


document.addEventListener(
"DOMContentLoaded",
function(){



/*
==========================================
👰🤵 ИМЕНА
==========================================
*/


const heroTitle =
document.querySelector(".hero h1");


if(heroTitle){


    heroTitle.innerHTML =
    `
    ${WEDDING.groom}
    <span>&</span>
    ${WEDDING.bride}
    `;


}



/*
==========================================
📅 ДАТА
==========================================
*/


const heroDate =
document.querySelector(".hero-date");


if(heroDate){


    heroDate.textContent =
    WEDDING.date.full;


}



/*
==========================================
📍 МЕСТО
==========================================
*/


const locationTitle =
document.querySelector(".location h3");


if(locationTitle){


    locationTitle.textContent =
    WEDDING.location.city;


}


const venue =
document.querySelector(".location p");


if(venue){


    venue.textContent =
    WEDDING.location.venue;


}



/*
==========================================
🎵 КНОПКА МУЗЫКИ
==========================================
*/


const musicButton =
document.querySelector(".music-button");



let audio = null;



if(musicButton){


    audio =
    new Audio(
        WEDDING.music.file
    );


    audio.loop = true;



    musicButton.addEventListener(
    "click",
    function(){


        if(audio.paused){


            audio.play();


            musicButton.innerHTML =
            "🔊 Музыка включена";


        }

        else{


            audio.pause();


            musicButton.innerHTML =
            "🎵 Включить атмосферу";


        }


    });


}




/*
==========================================
✨ ПЛАВНЫЙ СКРОЛЛ
==========================================
*/


const scrollButton =
document.querySelector(".scroll-down");



if(scrollButton){


    scrollButton.addEventListener(
    "click",
    function(){


        window.scrollTo({

            top:
            window.innerHeight,

            behavior:
            "smooth"

        });


    });


}





/*
==========================================
📱 ЛЕГКАЯ ВИБРАЦИЯ КНОПОК
==========================================
*/


const buttons =
document.querySelectorAll("button");



buttons.forEach(

(button)=>{


    button.addEventListener(
    "click",
    function(){


        if(
            navigator.vibrate
        ){

            navigator.vibrate(20);

        }


    });


});




console.log(
"💍 Wedding site loaded",
WEDDING
);



});
