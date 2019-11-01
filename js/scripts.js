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

    var replaceArrays = [];

    for (var i = 0; i < makeStrings.length; i+= 1) {
      if (makeStrings[i] === "3") {
        replaceArrays.push("I'm Sorry, Dave.  I can't do that.");
      } else {
        replaceArrays.push(makeStrings[i]);
      }
    }


    var replaceSort = makeStrings.map(function(makeString) {
      if (makeString === "3") {
        return "I'm Sorry, Dave.  I can't do that.";
      } else if (makestring != "3") {
        return makeString;
      } else {
        return "problem"
      }
    });

      // var preProcess = countDown(userNumber);
      // var textProcess = replaceSort(preProcess);



      // console.log(countDown(userNumber));








      $("#backendOutput").text(numbers);
      $("#backend2Output").text(replaceArrays);




  });
});
