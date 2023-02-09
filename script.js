'use strict';

let input    = document.querySelector('.number');  // Інпут
let massage  = document.querySelector('.massage'); // Параграф
let button   = document.querySelector('.button');  // Кнопка
let result   = document.querySelector('.result');  // Результат
let resturt  = document.querySelector('.resturt'); // Рестарт
    resturt.style.display = 'none';       // Приховою кнопку рестарт

let pcNumber    = random(1, 100);         // Номер який загадав компютер
let counter     = 1;                      // Буде рахувати спроби
    input.focus();                        // Фокус на інпут при заході

button.addEventListener('click', function(){
    
    let numanNumber = input.value;        // Номер який вів графець
 
    if(numanNumber == pcNumber){ // Перевірка який номер і відповідна відповідь
        massage.textContent   = 'ВІТАЮ ВИ ВИГРАЛИ' // Повідомлення про результат
        resturt.style.display = 'block';           // Показую кнопку  Рестарт
        button.style.display  = 'none';            // Приховою кнопку Спробувати

        if(counter <= 3){    // Перевірка який результат і відповідна відповідь
            result.textContent    = 'Кількість спроб: ' + counter + ' це Відміно';     // Кількість спроб
            funcForesight(); // Якщо відповідь на 'Відміно' викликаю функцію і показую передбачення
        }else if(counter >= 4 && counter <= 5 ){
            result.textContent    = 'Кількість спроб: ' + counter + ' це Добре';       // Кількість спроб
        }else if(counter >= 6 && counter <= 7 ){
            result.textContent    = 'Кількість спроб: ' + counter + ' це Задовільно';  // Кількість спроб
        }else{
            result.textContent    = 'Кількість спроб: ' + counter + ' це Погано';      // Кількість спроб
        }

        
    }else if(numanNumber <= pcNumber){
        massage.textContent = 'Спробуй число побільше ' + numanNumber;  // Повідомлення про результат
        input.value = '';                 // Очищення інпута
        counter++;                        // Збільшує рахунок якщо спроба невдала
    }else if(numanNumber >= pcNumber){
        massage.textContent = 'Спробуй число поменьше ' + numanNumber;  // Повідомлення про результат
        input.value = '';                 // Очищення інпута
        counter++;                        // Збільшує рахунок якщо спроба невдала
    }

    resturt.addEventListener('click', funcResturt);

    function funcResturt(){
        pcNumber = random(1, 100);       // Компютер загадує число заново
        massage.textContent   = '';      // Очищаю пораграф
        resturt.style.display = 'none';  // Приховою кнопку 'Рестарт'
        button.style.display  = 'block'; // Показую кнопку 'Спробувати'
        input.value = '';                // Очищаю інпут
        counter = 1;                     // Скидаю рахувальник спроб
        result.textContent    = '';      // Скидаю повідомлення про рахувальник спроб
        textForesight.textContent = '';  // Скидаю текст передбачення
    }

    return counter;
});


function random(min, max){ // Функція для номера від 1 до 100
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let textForesight = document.querySelector('.foresight'); // Параграф для передбачення

function funcForesight(){ // Функція яка виводить будь яке передбачення з масива
    
    let arr = ['Удача прийде звідки не чекаєте.',
               'Давні борги будуть повернуті вам.',
               'Вас чекає несподіване грошове надходження.',
               'Нові відчуття негайно прийдуть до вас, якщо станете вести звичне життя незвичним способом.',
               'У вас з’являться сили забути зроблене добро, і не чекати подяки. Скористайтеся ними за призначенням.'
            ];

    for(let i = 0; i <= arr.length -1; i++){  // Перебираю масив
        let num = random(0, arr.length);      // 
        textForesight.textContent = arr[num]; // Виводжу будь яке передбачення
    };
};
