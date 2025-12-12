function Start(){
    num1 =document.getElementById("num1");
    num2 =document.getElementById("num2");
    Button = document.getElementById("Button");
    Button.addEventListener("click",Calculate)
    
    result = document.getElementById("result");
    operator = document.getElementById("operator");
    operator.addEventListener("change",ChangeOperator);
    operatorValue = operator.value;
}

function Calculate(){

    var num1Value = Number(num1.value.trim());
    var num2Value = Number(num2.value.trim());

    if(isNaN(num1Value)||num1.value.trim()=== "") {alert("輸入有效數字"); return};
    if(isNaN(num2Value)||num2.value.trim()=== "") {alert("輸入有效數字"); return};

    operatorValue = operator.value;
    switch(operatorValue){
        case "add":
            var anwser = num1Value+num2Value
            result.innerHTML =anwser.toFixed(2);
            break;

        case "subtract":
            var anwser = num1Value-num2Value
            result.innerHTML =anwser.toFixed(2);
            break;

         case "multiply":
            var anwser = num1Value*num2Value
            result.innerHTML =anwser.toFixed(2);
            break;

        case "divide":
            if (num2Value === 0) alert("除數能不為零");

            var anwser = num1Value/num2Value
            result.innerHTML =anwser.toFixed(2);
            break;
    }
}

function ChangeOperator(){

    operatorValue = operator.value;

    switch(operatorValue){
        case "add":
            Button.innerHTML = "Add";
            break;

        case "subtract":
            Button.innerHTML = "subtract";
            break;

         case "multiply":
            Button.innerHTML = "multiply";
            break;

        case "divide":
            Button.innerHTML = "divide";
            break;
    }
}


window.addEventListener("load",Start);