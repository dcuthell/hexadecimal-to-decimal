//Backend
//
function hexVal(userInput){
  if(userInput === "0"){
    return 0;
  }
  if(userInput === "1"){
    return 1;
  }
  if(userInput === "2"){
    return 2;
  }
  if(userInput === "3"){
    return 3;
  }
  if(userInput === "4"){
    return 4;
  }
  if(userInput === "5"){
    return 5;
  }
  if(userInput === "6"){
    return 6;
  }
  if(userInput === "7"){
    return 7;
  }
  if(userInput === "8"){
    return 8;
  }
  if(userInput === "9"){
    return 9;
  }
  if(userInput === "a" || userInput === "A"){
    return 10;
  }
  if(userInput === "b" || userInput === "B"){
    return 11;
  }
  if(userInput === "c" || userInput === "C"){
    return 12;
  }
  if(userInput === "d" || userInput === "D"){
    return 13;
  }
  if(userInput === "e" || userInput === "E"){
    return 14;
  }
  if(userInput === "f" || userInput === "F"){
    return 15;
  }
}

function binToDec(userInput){
  var power = userInput.length -1;
  var num = 0;
  for(var i = power; i >= 1; i--){
    var newNum = (Math.pow(16,i))*(hexVal(userInput[power-i]));
    num += newNum;
  }
  num += hexVal(userInput[power]);
  return num;
}


//User Interface
$(document).ready(function(){
  $("#converter").submit(function(event){
    var input = $("input#hexNum").val();
    var output = binToDec(input);
    $("#decNum").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
