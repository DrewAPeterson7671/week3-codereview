//Business Logic

function countDown(inputNumber) {
  var num = [];
  for (var i = inputNumber; i > -1; i -= 1) {
    num.push(inputNumber - i);
  }
  return num;
}

function makingStrings(numbers) {
  var makeToStrings = numbers.map(function(number) {
    return number.toString();
  });
  return makeToStrings;
}

function subOut(makeStrings) {
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
  return replaceSort;
}

// Frontend logic

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    $("ul#listOutput").empty();

    var userNumber = $("input#userNumber").val();
    $("input#userNumber").val("");

    $(".hiddenStuff").hide();
    $(".hiddenStuff").slideDown();

    var numbers = countDown(userNumber);
    var makeStrings = makingStrings(numbers);
    var replaceSort = subOut(makeStrings)

    replaceSort.forEach(function(replaceSor) {
      if (replaceSor === "I'm Sorry, Dave.  I can't do that.") {
        $("ul#listOutput").append('<li>' + replaceSor + '</li>' + '<img src="img/hal9000.jpg" class= "talksm" alt="Picture of Hal-9000">');
      } else if (replaceSor === "Boop!" || replaceSor === "Beep!") {
        $("ul#listOutput").append('<li>' + replaceSor + '</li>' + '<img src="img/r2d2.jpg" class= "talksm" alt="Picture of Hal-9000">');
        } else {
          $("ul#listOutput").append('<li>' + replaceSor + '</li>');
        }
      });
  });
});
