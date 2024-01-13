
console.log("<==========================Assignment 2==========================>")
function factorialofWordsCount(str) {
    if (str === null) {
      return "Invalid Input";
    } else if (str === "") {
      return 1;
    } else {
      const words = str.split(" ");
      const wordCount = words.length;
      let factorial = 1;
      for (let i = 2; i <= wordCount; i++) {
        factorial = factorial * i;
      }
      return factorial;
    }
  }
  console.log(`The factorial of the word count in "Revision is the mother of Success" is: ${factorialofWordsCount("revision is the mother of success")}`);
  console.log(`The factorial of the word count in "We never fail, we always learn, Mind it" is: ${factorialofWordsCount("We never fail, we always learn, Mind it")}`);
  console.log(`The factorial of null is: ${factorialofWordsCount(null)}`);
  console.log(`The factorial of empty string is: ${factorialofWordsCount("")}`);
  console.log(`The factorial of the word count in "Sandip Vaijanath Galande" is: ${factorialofWordsCount("Sandip Vaijanath Galande")}`);
  
  