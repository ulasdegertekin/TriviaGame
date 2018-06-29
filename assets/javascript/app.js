
$(document).ready(function(){
  // hide the questions
  $("#hidebox").hide();
  // After clicking on start button reveals the questions.
  $("#start").on("click",function(start){
    $("#hidebox").show();
    // $("#restart").hide();
    countdown();
  });
  
  function countdown() {
    if (timeLeft == -1 ) {
      clearInterval(timerId); 
      //Pushing the result to the HTML
      var resultPage= 
      "<p>Correct Answer: " + correctAnswer + "</p>" +
      "<p>Incorrect Answer:" + incorrectAnswer + "</p>" +
      "<p>Unanswered: " + unAnswered + "</p>";
      document.querySelector("#hidebox").innerHTML = resultPage;  
    }
    else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
    
  };
  
  //Done button stops action and broadcast the result page
  $("#done").on("click", function(){
    var resultPage=
    "<div class= 'hideRestart'>" +
    "<p>Correct Answer: " + correctAnswer + "</p>" +
    "<p>Incorrect Answer:" + incorrectAnswer + "</p>" +
    "<p>Unanswered: " + unAnswered + "</p>"
    "</div>";
    document.querySelector("#hidebox").innerHTML = resultPage;
    clearInterval(timerId);
  });
  
  
  var timeLeft = 40;
  var elem = document.getElementById('timer');
  var timerId = setInterval(countdown, 1000);
  var correctAnswer= 0;
  var incorrectAnswer= 0;
  var unAnswered= 0;

  
  $("input[name='answer1']").click(function(){
    var radioValue = $("input[name='answer1']:checked").val();
    // if(radioValue == "right" || radioValue == "wrong" || radioValue == "" ) {
    if(radioValue == "right") {
      correctAnswer ++;
    }    
    else {
      incorrectAnswer ++;
    };
    
  });
  $("input[name='answer2']").click(function(){
    var radioValue = $("input[name='answer2']:checked").val();
    // if(radioValue == "right" || radioValue == "wrong" || radioValue == "" ) {
    if(radioValue == "right") {
      correctAnswer ++;
    }    
    else {
      incorrectAnswer ++;
    };
    
  });
  $("input[name='answer3']").click(function(){
    var radioValue = $("input[name='answer3']:checked").val();
    // if(radioValue == "right" || radioValue == "wrong" || radioValue == "" ) {
    if(radioValue == "right") {
      correctAnswer ++;
    }    
    else {
      incorrectAnswer ++;
    };
    
  });
  $("input[name='answer4']").click(function(){
    var radioValue = $("input[name='answer4']:checked").val();
    // if(radioValue == "right" || radioValue == "wrong" || radioValue == "" ) {
    if(radioValue == "right") {
      correctAnswer ++;
    }    
    else {
      incorrectAnswer ++;
    };
    
  });
  $("input[name='answer5']").click(function(){
    var radioValue = $("input[name='answer5']:checked").val();
    // if(radioValue == "right" || radioValue == "wrong" || radioValue == "" ) {
    if(radioValue == "right") {
      correctAnswer ++;
    }
    // else if (radioValue == $("input[name='answer5']").is(":not(:checked)")) {
    //   unAnswered ++;
    // }  
    else {
      incorrectAnswer ++;
    };
    
  });
  
  //   if ($('input[name="answer1"]:checked').value() == "right"){
  //     correctAnswer ++;
  // }     

  // var questOne= ["Wordpress", "Java", "Bootstrap","Python"];
  // var questTwo= ["To dance","To meet with others", "To find a job", "To conrtol the version"];
  // var questThree= ["To dance", "To meet with others", "To find a job", "To control the version";
  // var questFour= ["Seann Penn", "Adam Sandler", "Al Pacino", "Denzel Washington"];
  // var questFive= ["Illinois", "New Jersey", "California", "Hawaii"];

});
