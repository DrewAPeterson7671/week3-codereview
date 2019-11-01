$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();













    var userNumber = $("input#userNumber").val();
    $("#backendOutput").text(userNumber);



  });
});
