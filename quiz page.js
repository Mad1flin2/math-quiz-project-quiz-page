window.alert("plz close this website");
u1name = localStorage.getItem("u1name");
u2name = localStorage.getItem("u2name");
u1s=0;
u2s=0;
document.getElementById("u1name").innerHTML=u1name+":";
document.getElementById("u2name").innerHTML=u2name+":";


document.getElementById("u1s").innerHTML=u1s;
document.getElementById("u2s").innerHTML=u2s;
document.getElementById("player-question").innerHTML=u1name+"=";
document.getElementById("player-answer").innerHTML=u1name+"=";
function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
canswer = parseInt(number1) * parseInt(number2);
qnum = "<h4>" + number1 + "X" + number1 + "</h4>";
answerbox = "<br>Answer : <input type ='text' id='inputbox'>";
checkbutton = "<br><br><button onclick='check()' class='btn btn-success'>Check</button>";
};