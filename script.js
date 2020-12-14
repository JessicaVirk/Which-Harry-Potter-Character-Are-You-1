var counter = 0;
$(".submit").click(function() {
    var age = $(".age").val();
   var trait = $(".trait").val();
     counter = counter + 1;
    $(".counter").text ("  The quiz was taken  "   + counter  +  " times");
                 
                


if (parseInt(age) >16 && trait === "loyal") {
$(".result").text("You are Dumbledore!");
    $(".result").show();
    $(".result").append ("<img src =https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest?cb=20150822232849>");
                       
}
  else if (parseInt(age) <16 && trait === "loyal") {
  $(".result").text("Your are Hermione Granger!");
      $(".result").show();
      $(".result").append ("<img src = https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg>");
  
  } else if (parseInt(age) > 16 && trait === "manipulative") {
      $(".result").text ("You are Lord Voldemore!");
      $(".result").append ("<img src = https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2018/11/voldemort_with_wand.jpg?offset-y=0>");
 
  } else if (parseInt(age) < 16 && trait === "manipulative") {
      $(".result").text ("You are Draco Malfoy!");
      $(".result").append ("<img src = https://i.pinimg.com/originals/d5/1e/9b/d51e9b2f3260b4fd2bd73bb4e1b0e21f.jpg>"); 
  } else {
      $(".result").text("Check your answers and try again!");
  }
   
});



   