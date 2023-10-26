function reverseWords(sentence) {
    // Split the sentence into words
    var words = sentence.split(' ');
  
    // Reverse each word and store it in a new array
    var reversedWords = words.map(function(word) {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words to form the reversed sentence
    var reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage:
  var inputSentence = "This is a sunny day";
  var reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Output: "sihT si a ynnus yad"
  