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
    event.preventDefualt();

    function withoutVowels(string) {
    let withoutVowels = "";
    for (let i=0; i < string.length; i++) {
      if (isVowel(string[i])) {
        withoutVowels.replace(i, "-");
      }
    }
    return withoutVowels;
  }
  function isVowel(char) {
    return 'aeiou'.includes(char);
  });
  console.log(withoutVowels('Hello World!'));
});

/*
function withoutVowels(string) {

  var withoutVowels = "";
  for (var i = 0; i < string.length; i++) {
      if (!isVowel(string[i])) {
        withoutVowels += string[i];
      }
    }
    return withoutVowels;
}

function isVowel(char) {
  return 'aeiou'.includes(char);
}

console.log(withoutVowels('Hello World!'));
*/
