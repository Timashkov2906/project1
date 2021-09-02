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
/*




console.log(personalMovieDB);
/*for (let i=0;i<10;i++){
    if (i===6){
        //break;
        continue;
    }

        console.log(i);
    }
*/
/*function calc(a,b){ //fuction declaration
    return (a+b);
}
console.log(calc(10,2));
*/
/*const logger=function(){ //function expression
console.log('hello')
};
logger();*/

//let calc=(a,b) => {return a+b};
//console.log(calc(4,5));

//const logg="hello world my people";
//console.log(logg.length);
//console.log(logg.slice(6,11));
//console.log(logg.substr(5,3));
//практика по функциям
let numberOfFilms;
function start(){
    
    while (numberOfFilms==''|| numberOfFilms==null || isNaN(numberOfFilm)){
        numberOfFilms=+prompt('Сколько фильмов вы посмотрели?');
    }
}
start();
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