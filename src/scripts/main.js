function right() {  
    numb++;
    document.getElementById("numb").innerHTML = "Вопрос №" + numb;
}

function chooseQuiz(){
    document.getElementById("glavstr").style.display = 'none';
    document.getElementById("quizstr").style.display = '';
}

function chooseQuiz1(){
    score = 0;
    numb = 1;
    ans = 0;
    document.getElementById("script").setAttribute('src', 'scripts/1quiz.js');
    document.getElementById("nameofQuiz").innerHTML = "Основные принципы ООП";
    document.getElementById("numb").innerHTML = "Вопрос №1";
    document.getElementById("ans1").innerHTML = "Сокрытие реализации и предоставление интерфейса для взаимодействия с объектом";
    document.getElementById("ans2").innerHTML = "Способ создания объектов на основе других объектов";
    document.getElementById("ans3").innerHTML = "Механизм защиты данных от внешнего воздействия";
    document.getElementById("ans4").innerHTML = "Разделение программы на маленькие части";
    document.getElementById("quizID").innerHTML = "Что такое инкапсуляция в ООП?";
}

function chooseQuiz2(){
    score = 0;
    numb = 1;
    ans = 0;
    document.getElementById("script").setAttribute('src', 'scripts/2quiz.js');
    document.getElementById("nameofQuiz").innerHTML = "Классы и объекты";
    document.getElementById("numb").innerHTML = "Вопрос №1";
    document.getElementById("ans1").innerHTML = "Экземпляр объекта";
    document.getElementById("ans2").innerHTML = "Шаблон для создания объектов";
    document.getElementById("ans3").innerHTML = "Контейнер для хранения данных";
    document.getElementById("ans4").innerHTML = "Метод, выполняющий операцию";
    document.getElementById("quizID").innerHTML = "Что такое класс в ООП?";
}

function chooseQuiz3(){
    score = 0;
    numb = 1;
    ans = 0;
    document.getElementById("script").setAttribute('src', 'scripts/3quiz.js');
    document.getElementById("nameofQuiz").innerHTML = "Наследование и его виды";
    document.getElementById("numb").innerHTML = "Вопрос №1";
    document.getElementById("ans1").innerHTML = "Создание нового класса на основе другого класса";
    document.getElementById("ans2").innerHTML = "Создание объекта из другого объекта";
    document.getElementById("ans3").innerHTML = "Скрытие данных";
    document.getElementById("ans4").innerHTML = "Переопределение методов";
    document.getElementById("quizID").innerHTML = "Что такое наследование в ООП?";
}

function chooseQuiz4(){
    score = 0;
    numb = 1;
    ans = 0;
    document.getElementById("script").setAttribute('src', 'scripts/4quiz.js');
    document.getElementById("nameofQuiz").innerHTML = "Интерфейсы и абстрактные классы";
    document.getElementById("numb").innerHTML = "Вопрос №1";
    document.getElementById("ans1").innerHTML = "Класс с абстрактными методами";
    document.getElementById("ans2").innerHTML = "Класс, содержащий только методы без реализации";
    document.getElementById("ans3").innerHTML = "Класс, который можно наследовать";
    document.getElementById("ans4").innerHTML = "Абстрактный класс с методами по умолчанию";
    document.getElementById("quizID").innerHTML = "Что такое интерфейс в ООП?";
}

function backtoGlav() {
    document.getElementById("quizmain").style.display = '';
    document.getElementById("glavstr").style.display = '';
    document.getElementById("quizstr").style.display = 'none';
    document.getElementById("aftertest").style.display = 'none';
}