//Backend

function binToDec(userInput){
  var power = userInput.length -1;
  var num = 0;
  for (var i = power; i>=0; i--){
    if(userInput[(power-i)] === "1"){
      num += Math.pow(2, i);
    }
  }
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
