let username = "";
let usergroup = "";

const users = [
    { name: "Петр Пономарев Андреевич", code: "42252", group: "ИКБО-30-23" },
    { name: "Андрей Яцык Александрович", code: "Ufs52", group: "ИВБО-10-34" },
    { name: "Всеволод Чалов Юрьевич", code: "upg123", group: "ИКБО-30-23" },
    { name: "Илья Смирнов Егорович", code: "upg312", group: "ИППО-50-25" },
    { name: "Егор Кротов Владимирович", code: "Upg123", group: "УКБО-43-15" }
  ];

function codeDetect(){
    if (users.find(item => item.code === document.getElementById('userInput').value)){
        username = users.find(item => item.code === document.getElementById('userInput').value).name
        usergroup = users.find(item => item.code === document.getElementById('userInput').value).group
        document.querySelector('#logstr').remove();
        document.getElementById("glavstr").style.display = '';
        document.getElementById("ngID").style.display = '';
        document.getElementById("nameID").innerHTML = username;
        document.getElementById("groupID").innerHTML = usergroup;
    } else {
        document.getElementById("errofCode").innerHTML = "Неверный код авторизации!"
    }
}