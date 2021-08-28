"use strict "

/*const obj={
    name:"Павел",
    age:27,
    isMarried:false
};
console.log(obj.name);
*/
//const name=prompt("Как тебя зовут?");
//const name=prompt("Как вас зовут");
//document.write(`Привет , ${name}`);
const numberOfFilms=+prompt('Сколько фильмов вы посмотрели?');
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false}
for (let i=0;i<2;i++){
    const a=prompt('Один из последних просмотренных фильмов?', ''),
          b=prompt('На сколько оцените его?', '');
    
    if (a!=null && b!=null && a!='' && b!='' && a.length<50){
        
              personalMovieDB.movies[a]=b;
              console.log("Done!")
            }
        else {
            i--; 
            console.log("Error")   
        }
        
  
}

if (personalMovieDB.count<10){
    document.write("Просмотренно довольно мало фильмов");
}
else if (personalMovieDB.count>10 && personalMovieDB.count<30){
    document.write("Вы любитель!");
}
else{ 
document.write("Вы киноман!");

}




console.log(personalMovieDB);
/*for (let i=0;i<10;i++){
    if (i===6){
        //break;
        continue;
    }

        console.log(i);
    }
*/