// Define function to generate random integer in a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Define function to generate random array of given length
  function getRandomArray(length, min, max) {
    return Array.from({length}, () => getRandomInt(min, max));
  }
  
  // Define function to generate a random question of type 1
  function generateQuestionType1() {
    const length1 = getRandomInt(1, 5);
    const length2 = getRandomInt(1, 5);
    const array1 = getRandomArray(length1, 1, 9);
    const array2 = getRandomArray(length2, 1, 9);
    const result = array1.map((value, index) => value + array2[index]);
    return `${array1.join(' ')} + ${array2.join(' ')} = ${result.join(' ')}`;
  }
  
  // Define function to generate a random question of type 2
  function generateQuestionType2() {
    const length = getRandomInt(2, 5);
    const array = getRandomArray(length, 1, 9);
    const result = array.reduce((sum, value) => sum + value);
    return `+/ ${array.join(' ')} = ${result}`;
  }
  
  // Define function to generate a random question of type 3
  function generateQuestionType3() {
    const length = getRandomInt(2, 5);
    const start = getRandomInt(1, 5);
    const end = start + length - 1;
    const result = Array.from({length}, (_, index) => start + index).join(' ');
    return `${start} + (!${length}) = ${result}`;
  }
  
  // Define function to generate a random question of type 4
  function generateQuestionType4() {
    const length = getRandomInt(2, 5);
    const array1 = getRandomArray(length, 0, 1);
    const array2 = getRandomArray(length, 1, 9);
    const result = array1.map((value, index) => value ? array2[index] : '').join(' ');
    return `${array1.join(' ')} / ${array2.join(' ')} = ${result}`;
  }
  
  // Define function to generate a random question of type 5
  function generateQuestionType5() {
    const length = getRandomInt(2, 5);
    const array = getRandomArray(length, 1, 9);
    const result = array.reduce((acc, value) => {
      acc.push(acc[acc.length - 1] + value);
      return acc;
    }, [array[0]]);
    return `+\\ ${array.join(' ')} = ${result.join(' ')}`;
  }
  
  // Define function to generate a random question of type 6
  function generateQuestionType6() {
    const length = getRandomInt(2, 5);
    const array1 = getRandomArray(length, 0, 1);
    const array2 = getRandomArray(length, 1, 9);
    const result = array1.reduce((sum, value, index) => sum + (value ? array2[index] : 0), 0);
    return `+/ (${array1.join(' ')} / ${array2.join(' ')}) = ${result}`;
  }

  // Define function to generate a random question of type 7
function generateType7Question() {

    const words = ["BLACK", "WHITE", "GREEN", "YELLOW", "ORANGE", "PURPLE", "BLUE", "RED"];
  
    // Generate a random bitmask with 5 digits
    const bitmask = Math.floor(Math.random() * 31).toString(2).padStart(5, "0");
  
    // Choose a random word from the array
    const word = words[Math.floor(Math.random() * words.length)];
  
    // Initialize the result to an empty string
    let result = "";
  
    // Loop through each character in the bitmask
    for (let i = 0; i < bitmask.length; i++) {
      // If the current digit is 1, append the corresponding character from the word to the result
      if (bitmask[i] === "1") {
        result += word[i];
      }
    }
  
    // Return the result
    return `${bitmask} / ${word} = ${result}`;
  }