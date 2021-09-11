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

// console.log(personalMovieDB);
// for (let i=0;i<10;i++){
//     if (i===6){
//         //break;
//         continue;
//     }

//         console.log(i);
//     }

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


const personalMovieDB={
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: ()=>{
    
        while (personalMovieDB.count==''|| personalMovieDB.count==null || isNaN(personalMovieDB.count)){
            personalMovieDB.count=+prompt('Сколько фильмов вы посмотрели?');
        }
    },
    
rememberMyFilms:()=>{   
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
},

detectPersonalLevel:function(){
if (personalMovieDB.count<10){
    document.write("Просмотренно довольно мало фильмов");
}
else if (personalMovieDB.count>10 && personalMovieDB.count<30){
    document.write("Вы любитель!");
}
else{ 
document.write("Вы киноман!");

}
},


showMyDB:function(hidden){
if (!hidden){
    console.log(personalMovieDB);
}
showMyDB(personalMovieDB.privat);
},

toggleVisibleDB:function(){
    if (personalMovieDB.privat){
        personalMovieDB.privat=false;
    }
    else {
        personalMovieDB.privat=true;
    }
},
writeYourGenres:function(){
    for (let i=1;i<2;i++){
    //   
    // } 
    let genres = prompt (`Введите ваши любимые жанры через запятую`).toLowerCase();
    
         if (genres===''|| genres==null){
             console.log("Вы ввели некорректные данные или не ввели вовсе");
             i--;
         } 
         else {
             personalMovieDB.genres=genres.split(', ');
             personalMovieDB.genres.sort();
         }  
        
        personalMovieDB.genres.forEach((item,i)=>{
        console.log(`Любимый жанр ${i+1} - это ${item}`);
        });        
    }
       
    }
};


/*function learnJS(lang,callback){
    console.log(`Я учу язык:${lang}`);
    callback();
}
function done(){
    console.log("Я прошел урок");
}
learnJS('JavaScript',done);*/

/*const arr=[5,2,14,5,11];

arr.sort(compareNum);
console.log(arr);
function compareNum(a,b){ //функция сортирвки чисел
    return a-b;
}
//console.log(arr.length);//последний индекс +1
//arr.pop();//удаление последнего элемента массива
//arr.push(10);//добавление элемента в конец массива
//console.log(arr);
/*for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}*/
/*for(let value of arr){
    console.log(value);
        
    }
*/
/*arr.forEach(function(item,i,arr){  //элемент индекс элемента и сам массив
console.log(`${i}: ${item} внутри  массива  ${arr}`);
});
*/
/*const str=prompt("", "");
const products=str.split(", ");
//console.log(products);
products.sort();
console.log(products.join('; ')); //вывод элементов массива в качестве строки
//метод сортировки
*/

/*let a=5;
    b=a;
b=b+5;
console.log(b);
console.log(a);

const obj={
    a=5,
    b=1
};

const copy=obj;
copy.a=10;
console.log(copy);
console.log(obj);*/
// function copy(mainObj){
//     let objCopy={}
//     let key;
//     for(key in mainObj){
//         objCopy[key]=mainObj[key];
//     }
// return objCopy;
// }
// const numbers={
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:6
//     }
// };
// const newNumbers=copy(numbers);
// newNumbers.a=10; //поверхностная копия 
// newNumbers.c.x=10;//глубокая копия
// console.log(newNumbers);
// console.log(numbers);
// const add={
//     d:17,
//     e:20
// };
// console.log(Object.assign(numbers, add));
// const clone=Object.assign({}, add);
// clone.d=20;
// // console.log(add);
// // console.log(clone);
// const oldArray=['a','b','c'];
// const newArray=oldArray.slice();//копирование элементов массива
// newArray[1]='hello';
// console.log(newArray);

// const video = ['youtube','rutube','vimeo'],
//       blogs=['wordpress','jshint','html'],
//       social=[...video, ...blogs, 'vk', 'instagram'];
//       console.log(social);  

// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num=[2,5,7];
// log(...num); 

// const soldier={
//     health:400,
//     armor:100,
//     newHello: function (){
//         console.log("Hello");
//     }
// };

// const john={
//     health:150
// };

// Object.setPrototypeOf(john,soldier)
// console.log(john.armor);
// john.newHello();
