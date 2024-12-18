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
    document.getElementById("ans1").innerHTML = "class obj = new ClassName();";
    document.getElementById("ans2").innerHTML = "ClassName obj = new ClassName();";
    document.getElementById("ans3").innerHTML = "obj = new ClassName();";
    document.getElementById("ans4").innerHTML = "obj = ClassName.create();";
    document.getElementById("quizID").innerHTML = "Как можно создать объект класса?";

    if (ans == 2){
        score++;
    }
}

function quiz2() {
    document.getElementById("ans1").innerHTML = "Метод, который вызывает объект";
    document.getElementById("ans2").innerHTML = "Специальный метод для переопределения";
    document.getElementById("ans3").innerHTML = "Метод для инициализации объекта";
    document.getElementById("ans4").innerHTML = "Метод для добавления новых атрибутов";
    document.getElementById("quizID").innerHTML = "Что такое конструктор в классе?";

    if (ans == 2){
        score++;
    }
}

function quiz3() {
    document.getElementById("ans1").innerHTML = "public";
    document.getElementById("ans2").innerHTML = "protected";
    document.getElementById("ans3").innerHTML = "static";
    document.getElementById("ans4").innerHTML = "private";
    document.getElementById("quizID").innerHTML = "Какой модификатор доступа делает поля класса доступными только внутри класса?";

    if (ans == 3){
        score++;
    }
}

function quiz4() {
    document.getElementById("ans1").innerHTML = "Метод, который создаёт объект";
    document.getElementById("ans2").innerHTML = "Метод, который удаляет объект из памяти";
    document.getElementById("ans3").innerHTML = "Метод для изменения состояния объекта";
    document.getElementById("ans4").innerHTML = "Метод для взаимодействия с другими объектами";
    document.getElementById("quizID").innerHTML = "Что такое деструктор?";

    if (ans == 4){
        score++;
    }
}

function quiz5() {
    document.getElementById("ans1").innerHTML = "Конструктор";
    document.getElementById("ans2").innerHTML = "Переопределённый метод";
    document.getElementById("ans3").innerHTML = "Деструктор";
    document.getElementById("ans4").innerHTML = "Статический метод";
    document.getElementById("quizID").innerHTML = "Какой из следующих методов вызывается при создании нового объекта?";

    if (ans == 2){
        score++;
    }
}

function quiz6() {
    document.getElementById("ans1").innerHTML = "Используя методы";
    document.getElementById("ans2").innerHTML = "Через конструктор";
    document.getElementById("ans3").innerHTML = "Через глобальные переменные";
    document.getElementById("ans4").innerHTML = "Через статические методы";
    document.getElementById("quizID").innerHTML = "Как задать атрибуты объекта в классе?";

    if (ans == 1){
        score++;
    }
}

function quiz7() {
    document.getElementById("ans1").innerHTML = "Object obj = ClassName();";
    document.getElementById("ans2").innerHTML = "ClassName obj = ClassName();";
    document.getElementById("ans3").innerHTML = "ClassName obj = new ClassName();";
    document.getElementById("ans4").innerHTML = "new ClassName obj;";
    document.getElementById("quizID").innerHTML = "Какой из вариантов синтаксиса создаёт объект в Java?";

    if (ans == 2){
        score++;
    }
}

function quiz8() {
    document.getElementById("ans1").innerHTML = "int";
    document.getElementById("ans2").innerHTML = "boolean";
    document.getElementById("ans3").innerHTML = "String";
    document.getElementById("ans4").innerHTML = "char";
    document.getElementById("quizID").innerHTML = "Какой из этих типов является ссылочным?";

    if (ans == 3){
        score++;
    }
}

function quiz9() {
    document.getElementById("ans1").innerHTML = "Создаётся новый класс";
    document.getElementById("ans2").innerHTML = "Вызывается конструктор, инициализируются поля объекта";
    document.getElementById("ans3").innerHTML = "Выполняется переопределение методов";
    document.getElementById("ans4").innerHTML = "Создаётся новый метод";
    document.getElementById("quizID").innerHTML = "Что происходит при создании объекта класса?";

    if (ans == 3){
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