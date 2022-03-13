/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
/*document.addEventListener('DOMContentLoaded', ()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv=document.querySelectorAll('.promo__adv img'),
        poster=document.querySelector('.promo__bg'),
        genre=poster.querySelector('.promo__genre'),
        movieList=document.querySelector('.promo__interactive-list'),
        addForm =document.querySelector('form.add'),
        inputForm=addForm.querySelector('.adding__input'),
        checkBox=addForm.querySelector('[type="checkbox"]');
addForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let newFilm=inputForm.value;
    const cheCked=checkBox.checked;
    if (newFilm){
        if (newFilm.length>21){
            newFilm=`${newFilm.substring(0,22)}...`;
        }
        movieDB.movies.push(newFilm);
        
        createMovieList(movieDB.movies, movieList);
    }
    
    
    event.target.reset();
    

})
    const deleteADV = (arr)=>{
        arr.forEach(item=>{
        item.remove(); //удаление элементов страницы
    });
};

    const makeChanges=()=>{
        genre.textContent='Драма';//изменение текста 
        poster.style.backgroundImage ='url("img/content_1.jpg")';//замена фона     
    }
    
    
    const sortArr = (arr)=>{
        arr.sort();
    }
    
    

    
    function createMovieList(films, parent){
        parent.innerHTML="";
        sortArr(movieDB.movies);
        films.forEach((film,i)=>{
            parent.innerHTML+=`
            <li class="promo__interactive-item">${i+1} ${film}
                 <div class="delete"></div>
            </li>  `
    });
};

    document.querySelectorAll('.delete').forEach((btn,i) => {
        btn.addEventListener('click',()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);
        });
    });



deleteADV(adv);
makeChanges();  

    
});
*/

window.addEventListener('DOMContentLoaded', ()=>{
    const box =document.querySelector('.promo__menu-item');
        // box.addEventListener('touchstart', (e)=>{
        //     e.preventDefault();
        //     console.log('Работает');
        // });
  
    box.addEventListener('touchmove', (e)=>{
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
});