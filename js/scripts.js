$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    // countDown(userNumber);








    var numbers = countDown(userNumber);


    function countDown(inputNumber) {
      var num = [];
      for (var i = inputNumber; i > -1; i -= 1) {
        num.push(inputNumber - i);
      }
      return num;
    }

    var makeStrings = numbers.map(function(number) {
      return number.toString();
    });



    var replaceSort = makeStrings.map(function(makeString) {
      if (makeString.includes("3")) {
        return "I'm Sorry, Dave.  I can't do that.";
      } else if (makeString.includes("2")) {
        return "Boop!";
      } else if (makeString.includes("1")) {
        return "Beep!";
      } else {
        return makeString;
      }
    });

      // var preProcess = countDown(userNumber);
      // var textProcess = replaceSort(preProcess);



      // console.log(countDown(userNumber));








      $("#backendOutput").text(numbers);
      $("#backend2Output").text(replaceSort.join(" "));




  });
});
