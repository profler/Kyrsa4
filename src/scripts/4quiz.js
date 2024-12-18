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
    document.getElementById("ans1").innerHTML = "Метод с модификатором доступа private";
    document.getElementById("ans2").innerHTML = "Метод с модификатором доступа protected";
    document.getElementById("ans3").innerHTML = "Абстрактный метод без тела";
    document.getElementById("ans4").innerHTML = "Статический метод с телом";
    document.getElementById("quizID").innerHTML = "Какой из следующих методов можно реализовать в интерфейсе?";

    if (ans == 2){
        score++;
    }
}

function quiz2() {
    document.getElementById("ans1").innerHTML = "Только абстрактные методы";
    document.getElementById("ans2").innerHTML = "Только статические методы";
    document.getElementById("ans3").innerHTML = "Все методы, включая статические";
    document.getElementById("ans4").innerHTML = "Все методы интерфейсов";
    document.getElementById("quizID").innerHTML = "Какой из методов можно переопределить в абстрактном классе?";

    if (ans == 3){
        score++;
    }
}

function quiz3() {
    document.getElementById("ans1").innerHTML = "Класс должен реализовать все методы интерфейса";
    document.getElementById("ans2").innerHTML = "Класс может реализовать только часть методов интерфейса";
    document.getElementById("ans3").innerHTML = "Класс может наследовать интерфейс";
    document.getElementById("ans4").innerHTML = "Класс должен быть абстрактным";
    document.getElementById("quizID").innerHTML = "Что означает реализация интерфейса в классе?";

    if (ans == 1){
        score++;
    }
}

function quiz4() {
    document.getElementById("ans1").innerHTML = "Только абстрактные классы";
    document.getElementById("ans2").innerHTML = "Только классы, унаследованные от другого интерфейса";
    document.getElementById("ans3").innerHTML = "Любые классы, включая абстрактные и обычные";
    document.getElementById("ans4").innerHTML = "Только классы с абстрактными методами";
    document.getElementById("quizID").innerHTML = "Какие классы могут реализовывать интерфейс?";

    if (ans == 1){
        score++;
    }
}

function quiz5() {
    document.getElementById("ans1").innerHTML = "Абстрактный класс не может содержать поля";
    document.getElementById("ans2").innerHTML = "Интерфейс не может содержать реализации методов, а абстрактный класс может";
    document.getElementById("ans3").innerHTML = "Интерфейс может иметь конструктор";
    document.getElementById("ans4").innerHTML = "Абстрактный класс должен наследоваться от другого класса";
    document.getElementById("quizID").innerHTML = "Чем отличается абстрактный класс от интерфейса?";

    if (ans == 3){
        score++;
    }
}

function quiz6() {
    document.getElementById("ans1").innerHTML = "Программа не компилируется";
    document.getElementById("ans2").innerHTML = "Дочерний класс должен реализовать все абстрактные методы";
    document.getElementById("ans3").innerHTML = "Компилятор сам реализует недостающие методы";
    document.getElementById("ans4").innerHTML = "Абстрактный класс автоматически становится интерфейсом";
    document.getElementById("quizID").innerHTML = "Что происходит, если абстрактный класс не реализует все абстрактные методы?";

    if (ans == 2){
        score++;
    }
}

function quiz7() {
    document.getElementById("ans1").innerHTML = "Да, класс может реализовывать несколько интерфейсов";
    document.getElementById("ans2").innerHTML = "Нет, класс может реализовывать только один интерфейс";
    document.getElementById("ans3").innerHTML = "Да, но только если они не имеют конфликтующих методов";
    document.getElementById("ans4").innerHTML = "Нет, интерфейсы не могут быть реализованы вообще";
    document.getElementById("quizID").innerHTML = "Можно ли реализовать несколько интерфейсов в одном классе?";

    if (ans == 2){
        score++;
    }
}

function quiz8() {
    document.getElementById("ans1").innerHTML = "Конструктор";
    document.getElementById("ans2").innerHTML = "Приватный метод";
    document.getElementById("ans3").innerHTML = "Абстрактный метод";
    document.getElementById("ans4").innerHTML = "Статический метод с реализацией";
    document.getElementById("quizID").innerHTML = "Какой из этих методов можно объявить в интерфейсе?";

    if (ans == 1){
        score++;
    }
}

function quiz9() {
    document.getElementById("ans1").innerHTML = "public";
    document.getElementById("ans2").innerHTML = "private";
    document.getElementById("ans3").innerHTML = "protected";
    document.getElementById("ans4").innerHTML = "default";
    document.getElementById("quizID").innerHTML = "Какой модификатор доступа используется для методов в интерфейсе по умолчанию?";

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