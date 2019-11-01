$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    countDown(userNumber);
    $("#backendOutput").text();





    var numberStorage = [];

    function countDown (inputNumber) {
      for (var i = inputNumber; i < 0; i -= 1) {
        console.log(inputNumber);
        numberStorage.push(inputNumber - i);
        return numberStorage;
      }
      console.log(numberStorage);
    }
















  });
});
