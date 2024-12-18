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
    document.getElementById("ans1").innerHTML = "Создавать новый класс, основанный на другом классе";
    document.getElementById("ans2").innerHTML = "Изменять поведение существующих объектов";
    document.getElementById("ans3").innerHTML = "Скрывать детали реализации";
    document.getElementById("ans4").innerHTML = "Обеспечивать доступ к приватным данным";
    document.getElementById("quizID").innerHTML = "Что позволяет реализовать наследование в ООП?";

    if (ans == 1){
        score++;
    }
}

function quiz2() {
    document.getElementById("ans1").innerHTML = "Описание скрытых данных в объекте";
    document.getElementById("ans2").innerHTML = "Повторное использование одного и того же кода";
    document.getElementById("ans3").innerHTML = "Использование одного и того же имени для разных методов в разных классах";
    document.getElementById("ans4").innerHTML = "Создание абстракции данных";
    document.getElementById("quizID").innerHTML = "Что такое полиморфизм в ООП?";

    if (ans == 1){
        score++;
    }
}

function quiz3() {
    document.getElementById("ans1").innerHTML = "Сокрытие лишней информации и отображение только важных характеристик объекта";
    document.getElementById("ans2").innerHTML = "Составление перечня всех данных объекта";
    document.getElementById("ans3").innerHTML = "Связывание методов и данных в одном классе";
    document.getElementById("ans4").innerHTML = "Расширение функциональности без изменения существующего кода";
    document.getElementById("quizID").innerHTML = "Что такое абстракция в ООП?";

    if (ans == 3){
        score++;
    }
}

function quiz4() {
    document.getElementById("ans1").innerHTML = "Инкапсуляция";
    document.getElementById("ans2").innerHTML = "Наследование";
    document.getElementById("ans3").innerHTML = "Абстракция";
    document.getElementById("ans4").innerHTML = "Полиморфизм";
    document.getElementById("quizID").innerHTML = "Какой из принципов ООП позволяет создавать базовые классы и наследовать от них другие классы?";

    if (ans == 1){
        score++;
    }
}

function quiz5() {
    document.getElementById("ans1").innerHTML = "Наследование";
    document.getElementById("ans2").innerHTML = "Абстракция";
    document.getElementById("ans3").innerHTML = "Инкапсуляция";
    document.getElementById("ans4").innerHTML = "Полиморфизм";
    document.getElementById("quizID").innerHTML = "Какой принцип ООП гарантирует, что все объекты могут иметь одно и то же поведение при разных реализациях?";

    if (ans == 2){
        score++;
    }
}

function quiz6() {
    document.getElementById("ans1").innerHTML = "Определение методов внутри класса";
    document.getElementById("ans2").innerHTML = "Связывание данных с их операциями";
    document.getElementById("ans3").innerHTML = "Скрытие реализации и предоставление публичного интерфейса";
    document.getElementById("ans4").innerHTML = "Переопределение методов в дочерних классах";
    document.getElementById("quizID").innerHTML = "Что из следующего относится к инкапсуляции?";

    if (ans == 4){
        score++;
    }
}

function quiz7() {
    document.getElementById("ans1").innerHTML = "Наследование";
    document.getElementById("ans2").innerHTML = "Полиморфизм";
    document.getElementById("ans3").innerHTML = "Абстракция";
    document.getElementById("ans4").innerHTML = "Инкапсуляция";
    document.getElementById("quizID").innerHTML = "Какой принцип ООП упрощает взаимодействие объектов через стандартные интерфейсы?";

    if (ans == 3){
        score++;
    }
}

function quiz8() {
    document.getElementById("ans1").innerHTML = "Это механизм скрытия данных";
    document.getElementById("ans2").innerHTML = "Это использование объектов разных типов через общий интерфейс";
    document.getElementById("ans3").innerHTML = "Это расширение функциональности классов";
    document.getElementById("ans4").innerHTML = "Это создание нового класса на основе существующего";
    document.getElementById("quizID").innerHTML = "Какие из следующих утверждений верны для принципа полиморфизма?";

    if (ans == 3){
        score++;
    }
}

function quiz9() {
    document.getElementById("ans1").innerHTML = "Сокрытие всех данных объекта";
    document.getElementById("ans2").innerHTML = "Отображение только важной информации о классе";
    document.getElementById("ans3").innerHTML = "Объединение разных классов в один";
    document.getElementById("ans4").innerHTML = "Включение всей информации в конструктор";
    document.getElementById("quizID").innerHTML = "Что из следующего является результатом применения принципа абстракции?";

    if (ans == 2){
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
