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
    const n = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    const arr = Array.from({length: 5}, () => Math.floor(Math.random() * 100)); // Generate an array of 5 random numbers between 0 and 99
    const rotatedArr = [...arr.slice(n), ...arr.slice(0, n)]; // Rotate the array by n elements
    return `${n} % ${arr.join(" ")} = ${rotatedArr.join(" ")}`; // Return the question as a string
  }

  function binarySequenceCreation() {
    const numBefore = Math.floor(Math.random() * 100); // Generate a random number before the ":"
    const numArray = []; // Create an empty array to store the numbers after the ":"
    const numCount = Math.floor(Math.random() * 10) + 1; // Generate a random number of numbers to include after the ":"
  
    // Generate the numbers after the ":" and make sure they are not equal to the number before
    for (let i = 0; i < numCount; i++) {
      let num = numBefore;
      while (num === numBefore) {
        num = Math.floor(Math.random() * 100);
      }
      numArray.push(num);
    }
  
    // Generate the binary sequence based on the numbers after the ":"
    let binarySequence = "";
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] < numBefore) {
        binarySequence += "0";
      } else {
        binarySequence += "1";
      }
    }
  
    // Return the question and the binary sequence
    return `${numBefore} : ${numArray.join(" ")} = ${binarySequence}`;
  }

  function generateLetters() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterCount = Math.floor(Math.random() * 6) + 3; // generate a random letter count between 3 and 8
    const n = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 10
    const arr = Array.from({length: 5}, () => Math.floor(Math.random() * letterCount)+1);
    const rotatedArr = [...arr.slice(n), ...arr.slice(0, n)]; // Rotate the array by n elements
    //const strrotatedArr = rotatedArr.join(' ')
    const numCount = Math.floor(Math.random() * 3) + 1; // generate a random number count between 1 and 3
    const positions = [];
    
    // generate the positions array with random numbers between 1 and the letter count
    for (let i = 0; i < numCount; i++) {
      positions.push(Math.floor(Math.random() * letterCount) + 1);
    }
    
    // sort the positions array in ascending order
    //positions.sort((a, b) => a - b);
    //arr.sort((a, b) => a - b);
    // generate the letters string with random letters
    let letterString = "";
    for (let i = 0; i < letterCount; i++) {
      letterString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    // generate the answer string based on the positions array
    let answerString = "";
    for (let i = 0; i < rotatedArr.length; i++) {
      answerString += letterString.charAt(rotatedArr[i] - 1);
    }
    
    // generate the question string in the format of (LETTERS)[NUMBERS]
    //const questionString = `(${letterString})[${positions.join(' ')}]`;
    const questionString = `(${letterString})[${n} % ${arr.join(" ")}]`;
    
    // return the question and answer strings as a single string
    return `${questionString} = ${answerString}`;
  }
  
  function generatechangeorderQuestion() {
  // Generate a random number between -10 and 10 (inclusive) for n
 

  // Generate a random number between 1 and 10 (inclusive) for x
  const x = Math.floor(Math.random() * 10) + 1;
  const n = (x - Math.floor(Math.random() * x))*(-1); 
  // Generate an array of numbers from 1 to x
  const arr = Array.from({ length: x }, (_, i) => i + 1);

  // Shuffle the array randomly
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Determine the absolute value of n
  const absN = Math.abs(n);

  // Ensure that absN is less than or equal to the length of arr
  const effectiveN = Math.min(absN, arr.length);

  // Select the output numbers based on the value of n
  let output;
  if (n < 0) {
    output = arr.slice(-effectiveN);
  } else {
    output = arr.slice(0, effectiveN);
  }

  // Combine the question string and output numbers into a single string
  const question = `${n} @ (!${x})`;
  const outputString = output.join(' ');
  const result = `${question} = ${outputString}`;

  return result;
}

function cumulativetableFilling() {
  const maxRows = 2;
  const maxCols = 2;
  const numRows = Math.ceil(Math.random() * maxRows);
  const numCols = Math.ceil(Math.random() * maxCols);

  const table1Nums = generateRandomNums(numRows, numCols);
  const table2Nums = generateRandomNums(numRows, numCols);
  const table3Nums = addTables(table1Nums, table2Nums);

  const question = `(${numRows} ${numCols} ? ${table1Nums}) + (${numRows} ${numCols} ? ${table2Nums}) =`;
  const answer = `<br>${table3Nums}`;

  return [question, answer];
}

function generateRandomNums(numRows, numCols) {
  const numValues = Math.floor(Math.random() * 5) + 3;
  const nums = [];
  for (let i = 0; i < numValues; i++) {
    nums.push(Math.floor(Math.random() * 9) + 1);
  }

  let tableNums = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const numIndex = i * numCols + j;
      const num = nums[numIndex % numValues];
      tableNums += num;
      if (j < numCols - 1) {
        tableNums += " ";
      }
    }
    if (i < numRows - 1) {
      tableNums += ",";
    }
  }
  return tableNums;
}

function addTables(table1Nums, table2Nums) {
  const table1Rows = table1Nums.split(",").map(row => row.split(" "));
  const table2Rows = table2Nums.split(",").map(row => row.split(" "));
  const numRows = table1Rows.length;
  const numCols = table1Rows[0].length;
  const table3Rows = [];

  for (let i = 0; i < numRows; i++) {
    const table3Row = [];
    for (let j = 0; j < numCols; j++) {
      const num1 = parseInt(table1Rows[i][j]);
      const num2 = parseInt(table2Rows[i][j]);
      const sum = isNaN(num1) || isNaN(num2) ? "" : num1 + num2;
      table3Row.push(sum);
    }
    table3Rows.push(table3Row.join(" "));
  }

  return table3Rows.join("<br> ");
}