$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    // countDown(userNumber);
    $("#backendOutput").text(countDown(userNumber));










    function countDown(inputNumber) {
      var numberStorage = [];
      for (var i = inputNumber; i > -1; i -= 1) {

        numberStorage.push(inputNumber - i);
      }
      return numberStorage;

    }


      // console.log(countDown(userNumber));













  });
});
