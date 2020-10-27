/*$(document).ready(function()  {
  $("form#puzzle").submit(function(event) {
  event.preventDefault();

  let i;
  inputChars = $("input#input1").val();
  outputChars = [];

  if (inputChars[i] === "a" || "e" || "i" || "o" || "u" ) {
    inputChars.replace(i, "-");
  }
    $("#new").text(inputChars);
  });
  $("#result").show();
});
*/

$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();

    function withoutVowels() {
      let withoutVowels = $("#input1").val();
      let withDash = "";
      for (let i=0; i < withoutVowels.length; i++) {
        if (isVowel(withoutVowels[i])) {
          withDash += "-";
          // withoutVowels.replace(withoutVowels[i], "-");
        } else {
          withDash += withoutVowels[i];
        }
      }
      return withDash;
    }

    function isVowel(char) {
      return 'aeiou'.includes(char);
    }
    console.log(withoutVowels());
  });
});


/*
function withoutVowels(withoutVowels) {

  var withoutVowels = "";
  for (var i = 0; i < withoutVowels.length; i++) {
      if (!isVowel(withoutVowels[i])) {
        withoutVowels += withoutVowels[i];
      }
    }
    return withoutVowels;
}

function isVowel(char) {
  return 'aeiou'.includes(char);
}

console.log(withoutVowels('Hello World!'));
*/
