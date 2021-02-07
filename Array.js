// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrayNumb = [15, 10, 1, 25, 5];
// let arrayStr = ['Meri', 'Andriy', 'Daniy','Orest','Azazel'];
// let arrayMix = [40, 'lilit', false, true, - 26, 95, 'Adam', false, 14, 'me', 'photo', 45, true, 'homework', true];
// console.log(arrayNumb);
// console.log (arrayStr);
// console.log(arrayMix);

// let arrayVacuum = [];
// arrayVacuum[1] = 'hello';
// arrayVacuum[5] = 'world';
// arrayVacuum[3] = 40;
// arrayVacuum[24] = true;
// console.log(arrayVacuum);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for(let i =0; i< 11; i++){
//     document.write("<div>'hello'</div>")
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(let i=0; i<11; i++){
// document.write(i+ "<div>'gbyyufyeniuwmihg'</div>")
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<21){
//     document.write("<p>good day</p>");
//     document.write('<br>');
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 21){
// document.write(i + "<h1>'really'</h1>");
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayNumbers = [5,10,89,49,689,08867,3467,-996786,744,714];
// for (let i = 0; i < 10; i++ ){
//  console.log(arrayNumbers[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayNames = ['Maks','Ira','Lida','Viktor','Alex','Meri','Sergey','Tamila','Artic','Olga'];
// for (let i =0; i<10; i++){
//     console.log(arrayNames[i]);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayAll = ['destiny',39,'false', true, 0, 'witcher', false, 'english', 84758, 'end'];
// for ( let i = 0; i< 10; i ++){
//     console.log(arrayAll[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayBigInfo = ['destiny',39,false,'Viktor',6578,'false', true, 'witcher',true, false];
// for (let i = 0; i < 10; i++){
// if (typeof (arrayBigInfo[i]) === 'boolean' ){
//     console.log(arrayBigInfo[i]);
// }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayInfo = ['destiny',39,false,'Viktor',6578,'false', true, 'witcher',true, false];
// for (let i = 0; i<10;i++){
// if (typeof arrayInfo[i] === 'string'){
//  console.log(arrayInfo[i]);
// }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let arrayInfoNumb = ['destiny',39,false,'Viktor',6578,'false', true, 'witcher',true, false];
// for (let i = 0; i<10;i++){
// if (typeof arrayInfoNumb[i] === 'number'){
//  console.log(arrayInfoNumb[i]);
// }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrayEmty=[];
// arrayEmty[12]='hello';
// arrayEmty[2]=false;
// arrayEmty[3]=true;
// arrayEmty[24]=3674;
// arrayEmty[21]=673;
// arrayEmty[56]='I am the best';
// arrayEmty[54]=3256;
// arrayEmty[1]=true;
// arrayEmty[8]=true;
// arrayEmty[45]=true;
// console.log(arrayEmty);



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i<11; i++){
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for ( let i = 0; i < 101; i++){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i = 1 ; i < 101; i= i +2){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
    // for (let i = 0; i< 101;i++){
    //     if(i%2 == 0){
    //     console.log(i)
    //   document.write(i);
    //  }
    //     }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//     for(let i =1; i<101; i++){
//         if ( i%2 == 1) {
//     console.log(i)
//     document.write(i)
// }
//     }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour=0; hour <=2; hour++){
//     for (let minutes = 0; minutes <= 60; minutes++){
//              if (hour===2 && minutes===20){
//         break;
//              }
        
//         for (let seconds = 0; seconds < 60; seconds++){

//          console.log( hour + "год" + minutes + "хв"+ seconds+"сек") 
//     }
//     }
// }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
    
        // for (let minutes = 0; minutes <=2; minutes++){
        //     for (let seconds = 0; seconds <=59; seconds++) {   
        //       if (minutes === 2 && seconds==0){
        //     break;
        //         }  
        //         console.log( minutes + "хв"+ seconds+"сек");  
        //     }  
        //  } 


        // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

        // let arrayLetters =  ['a', 'b', 'c']; 
        // let arrayNumbers = [1,2,3];
        // for(let i =0; i < arrayNumbers.length; i++){
        //     arrayLetters.push(arrayNumbers[i]) 
        // }
        // console.log(arrayLetters);
         
        // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

    //     let arrayNumbers = [1, 2, 3];
    //     let arrayNew = arrayNumbers.reverse();
    //     console.log(arrayNew);


    // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

    //    let array=[1,2,3]
    //    array.push(4,5,6)
    //    console.log(array)

//    - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

        // let array = [1,2,3]
        // array.unshift(4,5,6)
        // console.log(array)

        // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

        // let arraySome= ['js', 'css', 'jq'];
        // let deleteElem = arraySome.shift();
        // document.write(deleteElem);
        
        // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

        // let arraySome= ['js', 'css', 'jq'];
        // let deleteElem = arraySome.pop();
        // document.write(deleteElem);
        
        
        // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

        // let arraySlice = [1, 2, 3, 4, 5];
        // arraySlice.slice(0,2);
        // console.log(arraySlice);


        // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

        // let arraySlice =  [1, 2, 3, 4, 5]
        // let part = arraySlice.slice(2,5)
        // console.log(part,arraySlice)
                //   || 
        // let arraySlice =  [1, 2, 3, 4, 5]
        // let part = arraySlice.slice(0,2)
        // console.log(part)


        // ??????? (не зрозуміла умову, зробила два варіанти)
       
        // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
         
        // let arraySplice=[1, 2, 3, 4, 5]
        // arraySplice.splice(1,2)
        // console.log(arraySplice)

        // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

        // let arraySplice = [1, 2, 3, 4, 5]
        // let result = arraySplice.splice (3,5,'a', 'b', 'c'); 
        // console.log(arraySplice,result);
        // ????????

        // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
    //    ????????????????
         
        
        // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

        // let arrayNumbers = [34,53,7454,545,2432,5634,867,24,577,35]   
        // for (let i of arrayNumbers) {
        //     if (i % 2 == 0) {
        //       console.log( i );
        //     }
        // }

        // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
         
        // let arrayNumbs = [34,53,7454,545,2432,5634,867,24,577,35];
        //  let dublicateNumbs=[]
        //  for (let dublicateNumbs of arrayNumbs ){
        //  }
        //  dublicateNumbs.push(arrayNumbs)
        //  console.log(dublicateNumbs)



        // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
        // let arrayNumbs = [34,53,7454,545,2432,5634,867,24,577,35];
        // let dublicateNumbs=[];
        // for (dublicateNumbs of arrayNumbs ){
        //      }
        //      dublicateNumbs=arrayNumbs.splice(0,11); 
        //     console.log(dublicateNumbs); 