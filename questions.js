// Function to move to the next page
function nextPage() {
  window.location = "Questions2.html";
}

// Function to move to the previous page
function prevPage() {
  window.location.href = "introduction.html";
}

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
    const length = getRandomInt(1, 5);
    const array1 = getRandomArray(length, 1, 9);
    const array2 = getRandomArray(length, 1, 9);
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
    const startadd = start + 1;
    const end = start + length - 1;
    const result = Array.from({length}, (_, index) => startadd + index).join(' ');
    return `${start} + (!${length}) = ${result}`;
  }


  function generateQuestionType8() {
    const length = getRandomInt(2, 5);
    const start = getRandomInt(1, 5);
    const startadd = start + 1;
    const end =  length + start+1;
    const array = [];

for (let i = startadd; i < end; i++) {
  array.push(i);
    //const array = Array(length, startadd, end);
}
    const result = array.reduce((sum, value) => sum + value);
    return `+/ ${start} + (!${length}) = ${result}`;
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



  //This marks the end of the first page 


  function generateQuestionBinarySequence() {
   // Generate a random binary sequence of length between 4 and 8
   const sequenceLength = Math.floor(Math.random() * 5) + 4;
   const binarySequence = Array.from({ length: sequenceLength }, () => Math.floor(Math.random() * 2));
   
   // Count the number of 1's in the sequence
   const numOnes = binarySequence.reduce((count, digit) => count + digit, 0);
   
   // Generate an array of numbers to replace the 1's
   const replaceNumbers = Array.from({ length: numOnes }, () => Math.floor(Math.random() * 9) + 1);
   const question2 = `${replaceNumbers.join(" ")}`;
   // Replace the 1's in the binary sequence with the replace numbers
   const output = binarySequence.map((digit) => digit === 1 ? replaceNumbers.shift() : 0).join(" ");
   
   // Construct the question and return it
   const question1 = `${binarySequence.join(" ")} \\`;
   
   return `${question1} ${question2} = ${output}`;
 }

  function tableFilling() {
    const maxRows = 4;
    const maxCols = 4;
  
    // generate random number of rows and columns
    const numRows = Math.ceil(Math.random() * maxRows);
    const numCols = Math.ceil(Math.random() * maxCols);
  
    // generate random numbers to fill the grid
    const numString = Array.from({length: numRows * numCols}, (_, i) => Math.ceil(Math.random() * 9)).slice(0, 5 * Math.ceil(numRows / 5)).join('');
   // insert line breaks to represent rows
   let formattedNumString = '';
   for (let i = 0; i < numRows; i++) {
    formattedNumString += '<div>';
    for (let j = 0; j < numCols; j++) {
      const index = (i * numCols + j) % numString.length;
      formattedNumString += numString[index];
    }
    formattedNumString += '<br/></div>';
  }
 
    // create the question string
    const question = `${numRows} ${numCols} ? ${numString} = ${formattedNumString}` ;
  
    return question;
  }

  function numberRotation() {
    let numbers = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => Math.floor(Math.random() * 100));
    let rotateBy = Math.floor(Math.random() * numbers.length);
    let question = `${rotateBy} % ${numbers.join(" ")}`;
    let answer = numbers.slice(rotateBy).concat(numbers.slice(0, rotateBy)).join(" ");
    return { question: question, answer: answer };
  }

  function binarySequenceCreation() {
    let numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
    let baseNumber = Math.max(...numbers) + 1;
    let binarySequence = numbers.map((val) => {
      return val < baseNumber ? 0 : 1;
    });
    let question = `${baseNumber}: ${numbers.join(" ")}`;
    let answer = binarySequence.join(" ");
    return { question: question, answer: answer };
  }