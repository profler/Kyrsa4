let score = 0;
let numb = 1;
let ans = 0;
let nameofQuiz = document.getElementById("nameofQuiz").innerHTML;

function ifNumb() {
    if (numb==1){quiz1();}
    if (numb==2){quiz2();}
    if (numb==3){quiz3();}
    if (numb==4){quiz4();}
    if (numb==5){quiz5();}
    if (numb==6){quiz6();}
    if (numb==7){quiz7();}
    if (numb==8){quiz8();}
    if (numb==9){quiz9();}
    if (numb==10){quiz10();}
}

function clickQiuz(otv) {
    ans = otv;
    ifNumb();
}

function quiz1() {
    document.getElementById("ans1").innerHTML = "Подкласс";
    document.getElementById("ans2").innerHTML = "Суперкласс";
    document.getElementById("ans3").innerHTML = "Объект";
    document.getElementById("ans4").innerHTML = "Интерфейс";
    document.getElementById("quizID").innerHTML = "Как называется класс, от которого наследуются другие классы?";

    if (ans == 1){
        score++;
    }
}

function quiz2() {
    document.getElementById("ans1").innerHTML = "Абстракция";
    document.getElementById("ans2").innerHTML = "Наследование";
    document.getElementById("ans3").innerHTML = "Инкапсуляция";
    document.getElementById("ans4").innerHTML = "Полиморфизм    ";
    document.getElementById("quizID").innerHTML = "Что из следующего позволяет дочернему классу переопределить методы родительского класса?";

    if (ans == 2){
        score++;
    }
}

function quiz3() {
    document.getElementById("ans1").innerHTML = "Статический метод";
    document.getElementById("ans2").innerHTML = "Конструктор";
    document.getElementById("ans3").innerHTML = "Метод с ключевым словом virtual или abstract";
    document.getElementById("ans4").innerHTML = "Приватный метод";
    document.getElementById("quizID").innerHTML = "Какой из следующих методов можно переопределить в наследуемом классе?";

    if (ans == 2){
        score++;
    }
}

function quiz4() {
    document.getElementById("ans1").innerHTML = "Наследование от одного родительского класса";
    document.getElementById("ans2").innerHTML = "Наследование от нескольких классов";
    document.getElementById("ans3").innerHTML = "Наследование от абстрактных классов";
    document.getElementById("ans4").innerHTML = "Наследование без изменений в дочернем классе";
    document.getElementById("quizID").innerHTML = "Что такое множественное наследование?";

    if (ans == 3){
        score++;
    }
}

function quiz5() {
    document.getElementById("ans1").innerHTML = "Метод не будет доступен в дочернем классе";
    document.getElementById("ans2").innerHTML = "Будет ошибка компиляции";
    document.getElementById("ans3").innerHTML = "Метод будет вызван из родительского класса";
    document.getElementById("ans4").innerHTML = "Метод будет выполнен с ошибками";
    document.getElementById("quizID").innerHTML = "Что происходит, если в дочернем классе не переопределён метод родительского класса?";

    if (ans == 2){
        score++;
    }
}

function quiz6() {
    document.getElementById("ans1").innerHTML = "parent";
    document.getElementById("ans2").innerHTML = "super";
    document.getElementById("ans3").innerHTML = "base";
    document.getElementById("ans4").innerHTML = "self";
    document.getElementById("quizID").innerHTML = "Какое ключевое слово используется для обращения к методам родительского класса?";

    if (ans == 3){
        score++;
    }
}

function quiz7() {
    document.getElementById("ans1").innerHTML = "Изменение состояния объекта в зависимости от типа";
    document.getElementById("ans2").innerHTML = "Способ использования методов с одинаковыми именами в разных классах";
    document.getElementById("ans3").innerHTML = "Разделение класса на несколько частей";
    document.getElementById("ans4").innerHTML = "Ограничение доступа к данным";
    document.getElementById("quizID").innerHTML = "Что такое полиморфизм в контексте наследования?";

    if (ans == 2){
        score++;
    }
}

function quiz8() {
    document.getElementById("ans1").innerHTML = "Компилятор будет генерировать ошибку";
    document.getElementById("ans2").innerHTML = "Программа будет выполнена без ошибок";
    document.getElementById("ans3").innerHTML = "Интерфейс будет автоматически реализован";
    document.getElementById("ans4").innerHTML = "Будет использоваться реализация по умолчанию";
    document.getElementById("quizID").innerHTML = "Что произойдёт, если класс реализует интерфейс, но не предоставляет реализации всех методов?";

    if (ans == 2){
        score++;
    }
}

function quiz9() {
    document.getElementById("ans1").innerHTML = "Класс, который нельзя инстанцировать";
    document.getElementById("ans2").innerHTML = "Класс без методов";
    document.getElementById("ans3").innerHTML = "Класс с доступом только к приватным данным";
    document.getElementById("ans4").innerHTML = "Класс с множественным наследованием";
    document.getElementById("quizID").innerHTML = "Что такое абстрактный класс?";

    if (ans == 1){
        score++;
    }
}

function quiz10() {
    document.getElementById("quizmain").style.display = 'none';
    document.getElementById("aftertest").style.display = '';
    document.getElementById("vern").innerHTML = "Правильных ответов: " + score + " / " + numb;
    resultTest();

    if (ans == 1){
        score++;
    }
}

function resultTest() {
    const TOKEN = "7675955455:AAFhollCE6l4QesZEqkJtkxNvUZ6kRE0a5w";
    const CHAT_ID = "-1002353671664";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    let message = `${ username } из ${ usergroup } набрал ${ score }/${ numb } баллов по тесту "${ nameofQuiz }"`;

        function send(){
            axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                })
        }

    send();

    document.getElementById("res").innerHTML = "Ваш результат был отправлен преподавателю";
}