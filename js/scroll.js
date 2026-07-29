/*
==========================================

СТАС & НАСТЯ
Wedding Website

FILE:
scroll.js

VERSION:
0.1

Анимации при прокрутке

Что делает:
✓ Находит блоки на экране
✓ Плавно показывает их
✓ Добавляет движение

==========================================
*/



document.addEventListener(
"DOMContentLoaded",
function(){



/*
==========================================
✨ ЭЛЕМЕНТЫ ДЛЯ АНИМАЦИИ
==========================================
*/


const animatedElements =
document.querySelectorAll(
".section-card"
);



/*
==========================================
Скрываем карточки в начале
==========================================
*/


animatedElements.forEach(

(element)=>{


    element.classList.add(
        "hidden"
    );


});




/*
==========================================
👀 НАБЛЮДАТЕЛЬ ЭКРАНА
==========================================
*/


const observer =
new IntersectionObserver(


(entries)=>{


    entries.forEach(

    (entry)=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "show"
            );


        }


    });


},


{

    threshold:
    0.15

}



);





/*
==========================================
Запускаем наблюдение
==========================================
*/


animatedElements.forEach(

(element)=>{


    observer.observe(
        element
    );


});




});
