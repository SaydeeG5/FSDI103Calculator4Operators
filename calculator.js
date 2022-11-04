
//function calculator(){
    console.log("Calculating.....");
    /* this is the original assignment with the prompt
    let num1 = parseInt(prompt("Please enter a number."));
    let num2 = parseInt(prompt("Please enter your second number."));
    let operator = prompt("Please enter an operator ( + , - , * , / )."); 
    */
    /*if(operator == "+"){
            result = num1 + num2;
    }
    else if(operator == "-"){
            result = num1 - num2;
    }
    else if(operator == "*"){
            result = num1 * num2;
    }
    else if(operator == "/"){
            result = num1 / num2;}
    
    document.getElementById("results").innerHTML=`
    ${num1} ${operator} ${num2} = ${result}`;
    */
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    function addition(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("add").value = num1 + num2;
    }
    function subract(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("sub").value = num1 - num2;
    } 
    function multiply(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("mul").value = num1 * num2;
    }
    function divide(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("divide").value = num1 / num2;
    }
    function main(){
        addition();
        subract();
        multiply();
        divide();
    }
//}


