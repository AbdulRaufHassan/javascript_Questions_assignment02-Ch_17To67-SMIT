// ************************* Chapter 17 to 20 : Arrays and Loop ****************************

// ============== Answer to question 1 ==============
// const arrayOfArrays = [[], [], []];

// ============== Answer to question 2 ==============
// const multiDimArry = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(`${multiDimArry[0]}</br>${multiDimArry[1]}</br>${multiDimArry[2]}`);

// ============== Answer to question 3 ==============
// for (let i = 1; i <= 10; i++) {
//     document.write(i + '</br>');
// }

// ============== Answer to question 4 ==============
// const table = +prompt('Enter a number to show its multiplication table', 5);
// const tableLength = +prompt('Enter length multiplication table', 10);
// for (let i = 1; i <= tableLength; i++) {
//     document.write(`${table} x ${i} = ${table * i}</br>`);
// }

// ============== Answer to question 5 ==============
// const fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + '</br>');
// }
// for (let i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is ${fruits[i]}</br>`);
// }

// ============== Answer to question 6 ==============
// document.write('Counting:</br>');
// for (let i = 1; i <= 15; i++) {
//     document.write(`${i}, `)
// }
// document.write('</br>');
// document.write('Reverse Counting:</br>');
// for (let i = 10; i > 0; i--) {
//     document.write(`${i}, `)
// }
// document.write('</br>');
// document.write('Even:</br>');
// for (let i = 0; i <= 20; i += 2) {
//     document.write(`${i}, `);
// }
// document.write('</br>');
// document.write('Odd:</br>');
// for (let i = 1; i <= 19; i += 2) {
//     document.write(`${i}, `);
// }
// document.write('</br>');
// document.write('Series:</br>');
// for (let i = 2; i <= 20; i += 2) {
//     document.write(`${i}k, `);
// }

// ============== Answer to question 7 ==============
// let searchItem = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am?', 'chips');
// let answer = `We are sorry. ${searchItem} is not available in our bakery`;
// const items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// if (searchItem) {
//     for (let i = 0; i < items.length; i++) {
//         if (items[i] === searchItem) {
//             answer = `${searchItem} is available at index ${i} in our bakery`;
//             break;
//         }
//     }
//     document.write(answer);
// } else {
//     document.write('Please enter a item');
// }

// ============== Answer to question 8 ==============
// const numArry = [24, 53, 78, 91, 12];
// let largestNum = numArry[0];
// for (let i = 0; i < numArry.length; i++) {
//     if (largestNum < numArry[i]) {
//         largestNum = numArry[i];
//     }
// }
// document.write(`Array numbers: ${numArry}</br>Largest number is: ${largestNum}`);

// ============== Answer to question 9 ==============
// const numArr = [24, 53, 78, 91, 12];
// let smallestNum = numArr[0];
// for (let i = 0; i < numArr.length; i++) {
//     if (smallestNum > numArr[i]) {
//         smallestNum = numArr[i];
//     }
// }
// document.write(`Array numbers: ${numArry}</br>Smallest number is: ${smallestNum}`);

// ============== Answer to question 10 ==============
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(`${i}, `)
//     }
// }

// ************************* Chapter 21 to 25 : String Methods ****************************

// ============== Answer to question 1 ==============
// let firstName = prompt('Enter your first name:','Rauf');
// let lastName = prompt('Enter your last name:','Hasan');
// let fullName = firstName + ' ' + lastName;
// document.write(`Hello ${fullName}! Welcome`);

// ============== Answer to question 2 ==============
// let favPhone = prompt('Whats your favourite phone:','itel vision 1 pro');
// let favPhoneStrlth = favPhone.length;
// document.write(`My favourite phone is: ${favPhone}</br>Length of string: ${favPhoneStrlth}`);

// ============== Answer to question 3 ==============
// let myNationality = 'Pakistani';
// let indOfn = myNationality.indexOf('n');
// document.write(`String: ${myNationality}</br>Index of 'n': ${indOfn}`);

// ============== Answer to question 4 ==============
// let text = 'Hello World';
// let lastIndOfl = text.lastIndexOf('l');
// document.write(`String: ${text}</br>Last index of 'l': ${lastIndOfl}`);

// ============== Answer to question 5 ==============
// let charFind = myNationality.charAt(3)
// document.write(`String: ${myNationality}</br>Character at index 3: ${charFind}`);

// ============== Answer to question 6 ==============
// let first_name = prompt('Enter your first name:','Rauf');
// let last_name = prompt('Enter your last name:','Hasan');
// let concatTwoStr = first_name.concat(' ',last_name)
// document.write(`Hello ${concatTwoStr}! Welcome`);

// ============== Answer to question 7 ==============
// let cityName = 'Hyderabad';
// let replaceCityName = cityName.replace('Hyder', 'Islam');
// document.write(`City: ${cityName}</br>After replacement: ${replaceCityName}`);

// ============== Answer to question 8 ==============
// let msg = 'Ali and Sami are best friends. They play cricket and football together.';
// let replaceMsgCharac = msg.replaceAll('and', '&');
// document.write(`Message: ${msg}</br>After replaceAll: ${replaceMsgCharac}`);

// ============== Answer to question 9 ==============
// let stringNum = '472';
// let strToNum = Number(stringNum);
// document.write(`Value: ${stringNum}</br>Type: ${typeof stringNum}</br>
// Value: ${strToNum}</br>Type: ${typeof strToNum}`);

// ============== Answer to question 10 ==============
// let input = prompt('Enter a string in lower case','peanuts');
// let upperCaseInput = input.toUpperCase();
// document.write(`User input: ${input}</br>Upper case: ${upperCaseInput}`);

// ============== Answer to question 11 ==============
// let userInput = prompt('Enter anything', 'hello world');
// let titleCase = userInput[0].toUpperCase();
// for (let i = 1; i < userInput.length; i++) {
//     if (userInput[i] === ' ') {
//         titleCase += ' ';
//         titleCase += userInput[i + 1].toUpperCase();
//         i++;
//     } else {
//         titleCase += userInput[i];
//     }
// }
// document.write(`User input: ${userInput}</br>Title case: ${titleCase}`);

// ============== Answer to question 12 ==============
// let num = 35.36;
// let numToStr = String(num);
// numToStr = numToStr.replaceAll('.', '');
// document.write(`Number: ${num}</br>Result: ${numToStr}`);

// ============== Answer to question 13 ==============
// let userName = prompt('Enter your name','rauf!');
// let specialChar = ['@', '.', ',', '!'];
// if(userName && isNaN(userName)){
//     for (let i = 0; i < specialChar.length; i++) {
//         if(userName.indexOf(specialChar[i]) >= 0){
//             document.write(`Please enter a valid name`);
//             break;
//         }
//     }
// }else{
//     document.write(`Please enter a name`);
//  }

// ============== Answer to question 14 ==============
// let itemInput = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am?', 'chips');
// let res= `We are sorry. ${itemInput} is not available in our bakery`;
// const itemsArr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// if (itemInput) {
//     for (let i = 0; i < itemsArr.length; i++) {
//         if (itemsArr[i].toLowerCase() === itemInput.toLowerCase()) {
//             res = `${itemInput} is available at index ${i} in our bakery`;
//             break;
//         }
//     }
//     document.write(res);
// } else {
//     document.write('Please enter a item');
// }

// ============== Answer to question 15 ==============
// let passwordInput = prompt('Enter a password', '123password');
// if (passwordInput) {
//     if (passwordInput.length < 6) {
//         document.write('The password should be at least 6 characters long.');
//     } else if (!isNaN(passwordInput.charAt(0))) {
//         document.write('Password should not start with number.');
//     } else { }
// } else {
//     document.write('Please enter a password');
// }

// ============== Answer to question 16 ==============
// let uniName = 'University of Karachi';
// let arryUniName = uniName.split('');
// for (let i = 0; i < arryUniName.length; i++) {
//     document.write(`${arryUniName[i]}</br>`);
// }
// document.write('</br>');

// ============== Answer to question 17 ==============
// let promt = prompt('Enter anything', 'Pakistan');
// let lastChar = promt.charAt(promt.length - 1);
// document.write(`User input: ${promt}</br>Last character of input: ${lastChar}`);

// ============== Answer to question 18 ==============
// let sentence = 'The quick brown fox jumps over the lazy dog.';
// let sentenceArry = sentence.split(' ');
// let numOfOccur = 0;
// for (let i = 0; i < sentenceArry.length; i++) {
//     if (sentenceArry[i].toLowerCase() === 'the') {
//         numOfOccur += 1;
//     } else { }
// }
// document.write(`Text: ${sentence}</br>There are ${numOfOccur} occurrence(s) of word 'the'`);

// ************************* Chapter 26 to 30 : Math Methods ****************************

// ============== Answer to question 1 ==============
// let numInput = +prompt('Enter any positive decimal number:',3.45214);
// let roundVal = Math.round(numInput);
// let floorVal = Math.floor(numInput);
// let ceilVal = Math.ceil(numInput);
// document.write(`number: ${numInput}</br>round off value: ${roundVal} </br>floor value: ${floorVal} </br>ceil value: ${ceilVal}`);

// ============== Answer to question 2 ==============
// let negNumInput = +prompt('Enter any negative decimal number:',-2.673);
// let roundNegVal = Math.round(negNumInput);
// let floorNegVal = Math.floor(negNumInput);
// let ceilNegVal = Math.ceil(negNumInput);
// document.write(`number: ${negNumInput}</br>round off value: ${roundNegVal} </br>floor value: ${floorNegVal} </br>ceil value: ${ceilNegVal}`);

// ============== Answer to question 3 ==============
// let numberinput = prompt('Enter any positive or negative number:',-4);
// let absoluteNum = Math.abs(numberinput);
// document.write(`The absolute value of ${numberinput} is ${absoluteNum} `);

// ============== Answer to question 4 ==============
// let randomDiceVal = Math.floor(Math.random() * 6) + 1;
// document.write(`Random dice value: ${randomDiceVal}`);

// ============== Answer to question 5 ==============
// let randmNum = Math.floor(Math.random() * 2) + 1;
// let coinValue = randmNum === 1 ? 'Heads' : 'Tails'
// document.write(`${randmNum}</br>Random coin value: ${coinValue}`);

// ============== Answer to question 6 ==============
// let randmNum1to100 = Math.floor(Math.random() * 100) + 1;
// document.write(`Random number between 1 and 100: ${randmNum1to100}`);

// ============== Answer to question 8 ==============
// let userGuessNum = +prompt('Enter a number between 1 and 10', 3);
// let randomNum1to10 = Math.floor(Math.random() * 10) + 1;
// document.write(userGuessNum === randomNum1to10 ? 'Congratulations! You guessed the secret number!' : 'Try again!');

// ************************* Chapter 31 to 34 : Date Methods ****************************

// ============== Answer to question 1 ==============
// let nowDate = new Date();
// document.write(`${nowDate}`);

// ============== Answer to question 2 ==============
// let currentMnt = new Date().getMonth();
// const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.write(`Current month: ${monthsName[currentMnt]}`);

// ============== Answer to question 3 ==============
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let today = new Date().getDay();
// document.write(`Today is ${days[today]}`);

// ============== Answer to question 4 ==============
// const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = new Date().getDay();
// document.write(daysArr[day] === 'Sun' || daysArr[day] === 'Sat' ? "It's Fun day" : '');

// ============== Answer to question 5 ==============
// let date = new Date().getDate();
// document.write(date <= 15 ? 'First fifteen days of the month' : 'Last days of the month');

// ============== Answer to question 6 ==============
// let oldDate = new Date('1 jan 1970');
// let date_ = new Date();
// let milliSecHavePassed = date_.getTime() - oldDate.getTime();
// let minutsHavePassed = milliSecHavePassed / (1000 * 60);
// document.write(`Current date: ${date_}</br>
// Elapsed milliseconds since January 1, 1970: ${milliSecHavePassed}</br>
// Elapsed minutes since January 1, 1970: ${minutsHavePassed}`);

// ============== Answer to question 8 ==============
// let laterDate = new Date('31 Dec 2025');
// document.write(`Later Date: ${laterDate}`);

// ============== Answer to question 9 ==============
// let now = new Date().getTime();
// let oldRamdan = new Date('18 June 2015').getTime();
// let daysHavePassed = Math.floor((now - oldRamdan) / (1000 * 60 * 60 * 24));
// document.write(`${daysHavePassed} days have passed since 1st Ramadan, 2015`);

// ============== Answer to question 11 ==============
// let oneHourLater = new Date();
// oneHourLater.setHours(oneHourLater.getHours() - 1);
// document.write(`current date: ${new Date()}</br>1 hour ago, it was ${oneHourLater}`);

// ============== Answer to question 12 ==============
// let hundredYrAgo = new Date();
// hundredYrAgo.setFullYear(hundredYrAgo.getFullYear() - 100);
// document.write(`current date: ${new Date()}</br>100 Years back, it was ${hundredYrAgo}`);

// ============== Answer to question 13 ==============
// let userAge = +prompt('Enter your age', 16);
// let currntYear = new Date().getFullYear();
// let userBirthYr = currntYear - userAge;
// document.write(`Your age is ${userAge}</br>Your birth year is ${userBirthYr}`);

// ============== Answer to question 14 ==============
// let user_name = prompt('Enter your name:', 'Rauf');
// let montNameArry = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let numOfUnits = +prompt('Enter your k-Electric bill units:', 410);
// let chrgesPerUnits = 16;
// let lateDueCharges = 350;
// let currntMnt = new Date().getMonth();
// let amountBeforeDueDte = numOfUnits * chrgesPerUnits;
// let amountAfterDueDte = amountBeforeDueDte + lateDueCharges;
// document.write(`<h1>K-Electric Bill</h1>Customer name: <b>${user_name}</b></br>
// Month: <b>${montNameArry[currntMnt]}</b></br>Number of units: <b>${numOfUnits}</b></br>
// Charges per unit: <b>${chrgesPerUnits}</b></br>
// Net Amount Payable(within Due Date): <b>${amountBeforeDueDte}</b></br>
// Late payment surcharge: <b>${lateDueCharges}</b></br>
// Gross Amount Payable(After Due Date): <b>${amountAfterDueDte}</b></br>`);

// ************************* Chapter 35 to 38 : Function ****************************

// ============== Answer to question 1 ==============
// function dateFunc() {
//     document.write(new Date());
// }
// dateFunc();

// ============== Answer to question 2 ==============
// function greet(fname,lname){
//     document.write(`Welcome! ${fname} ${lname}`)
// }
// let fname = prompt('Enter your first name:','rauf');
// let lname = prompt('Enter your last name:','hasan');
// greet(fname,lname);

// ============== Answer to question 3 ==============
// function sumTwoNum(n1, n2) {
//     return n1 + n2;
// }
// let n1 = +prompt('Enter first number:',2);
// let n2 = +prompt('Enter second number:',2);
// document.write(sumTwoNum(n1, n2));


// ============== Answer to question 4 ==============
// function calcul(num1, num2, oper) {
//     if (oper === '*') {
//         return num1 * num2;
//     } else if (oper === '/') {
//         return num1 / num2;
//     } else if (oper === '+') {
//         return num1 + num2;
//     } else if (oper === '-') {
//         return num1 - num2;
//     } else if (oper === '%') {
//         return num1 % num2;
//     }
// }
// let num1 = +prompt('Enter the first number:', 4);
// let num2 = +prompt('Enter the second number:', 2);
// let oper = prompt('Enter the operator:', '*');
// document.write(calcul(num1, num2, oper));

// ============== Answer to question 5 ==============
// function square(numb){
// return numb * numb;
// }
// document.write(square(4));

// ============== Answer to question 6 ==============
// function factorial(number) {
//     if (number === 0) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   }
// document.write(factorial(5));

// ============== Answer to question 7 ==============
// function counting(startNum, endNum) {
//     for (let i = startNum; i <= endNum; i++) {
//         document.write(i+',');
//     }
// }
// counting(5, 20);

// ============== Answer to question 8 ==============
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }

//     let baseSquared = calculateSquare(base);
//     let perpendicularSquared = calculateSquare(perpendicular);
//     let hypotenuseSquared = baseSquared + perpendicularSquared;
//     let hypotenuse = Math.sqrt(hypotenuseSquared);

//     return hypotenuse;
//   }
//   document.write(`The hypotenuse of the right triangle is: ${calculateHypotenuse(3, 4)}`);

// ============== Answer to question 9 ==============
// function calculateRectangleArea(width, height) {
//     let area = width * height;
//     return area;
// }

// document.write(`The area of the rectangle is: ${calculateRectangleArea(5, 7)}</br>`);

// function calculateRectangleAreaUsingVariables() {
//     let width = 5;
//     let height = 7;
//     let area = width * height;
//     return area;
// }
// document.write(`The area of the rectangle is: ${calculateRectangleAreaUsingVariables()}`);

// ============== Answer to question 10 ==============
// function palindromeCheck(string) {
//     let word = string.replaceAll(' ', '');
//     if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
//         return `yes, ${string} is a palindrome`;
//     } else {
//         return `No, ${string} is not a palindrome`;
//     }
// }
// let palindromeStr = prompt('Enter any word or phrase:','level')
// document.write(palindromeCheck(palindromeStr));

// ============== Answer to question 11 ==============
// function convertTitleCase(str) {
//     let strtoArr = str.split(' ');
//     let titleCaseStr = '';
//    for (let i = 0; i < strtoArr.length; i++) {
//     titleCaseStr += strtoArr[i].charAt(0).toUpperCase() + strtoArr[i].slice(1).toLowerCase() + ' ';
//    }
//     return titleCaseStr;
// }
// let strToTC = prompt('Enter any sentence:', 'the quick brown fox');
// document.write(convertTitleCase(strToTC));

// ============== Answer to question 12 ==============
// function findLongWord(userSentnce) {
//     let sentnceToArr = userSentnce.split(' ');
//     let longestWrd = sentnceToArr[0];
//    for (let i = 0; i < sentnceToArr.length; i++) {
//     if (longestWrd.length < sentnceToArr[i].length) {
//         longestWrd = sentnceToArr[i];
//     }
//    }
//     return longestWrd;
// }
// let userSentnce = prompt('Enter any sentence:', 'Web development tutorial');
// document.write(`Example string: ${userSentnce}</br>Expected output: ${findLongWord(userSentnce)}`)

// ============== Answer to question 13 ==============
// function numOfOccur(string){
// let stringToArr = string.toLowerCase().split('');
// let numOfOccurence = 0;
// for (let i = 0; i < stringToArr.length; i++) {
//     if(stringToArr[i] === 'o'){
//         numOfOccurence++;
//     }
// }
// return numOfOccurence;
// }

// let strInp = prompt('Enter any sentence:','JSResourseS.com');
// document.write(`Text: ${strInp}</br>There are ${numOfOccur(strInp)} occurence(s) of word 'o'`);

// ============== Answer to question 14 ==============
// let valueOfPie = Math.PI;
// let radius = 5;
// function calcCircumference(radius) {
//     return (2 * valueOfPie * radius);
// }
// document.write(`The circumference is ${calcCircumference(radius)}</br>`);

// function calcArea(radius) {
//     return (valueOfPie * Math.pow(radius,2));
// }
// document.write(`The area is ${calcArea(radius)}`);

// ************* Chapter 38 to 42 : FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS *************

// ============== Answer to question 1 ==============
// function power(a, b) {
//     return Math.pow(a, b)
// }
// document.write(power(2, 3));

// ============== Answer to question 2 ==============
// function checkLeapYear(year) {
//     let leap = new Date(`29 Feb ${year}`).getDate() === 29;
//     return leap;
// }
// let yearInput = +prompt('Enter your current year:', 2023);
// document.write(checkLeapYear(yearInput) ? `${yearInput} is a leap year`
//     : `${yearInput} is not a leap year`);

// ============== Answer to question 3 ==============
// let sideA = 5;
// let sideB = 6;
// let sideC = 7;
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//     let s = calculateS(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// document.write(`The area of the triangle is: ${calculateArea(sideA, sideB, sideC)}`);

// ============== Answer to question 4 ==============
// function calculAverage(sub1, sub2, sub3) {
//     return (sub1 + sub2 + sub3) / 3;
// }
// function calculPercentage(sub1, sub2, sub3, maxMarks) {
//     let obtMrks = sub1 + sub2 + sub3;
//     return (obtMrks / maxMarks) * 100;
// }
// function mainFunc() {
//     let sub1 = +prompt('Enter your chemisty marks:', 62);
//     let sub2 = +prompt('Enter your physics marks:', 70);
//     let sub3 = +prompt('Enter your math marks:', 67);
//     let maxMarks = 300;
//     let averageMrks = calculAverage(sub1, sub2, sub3);
//     let percentage = calculPercentage(sub1, sub2, sub3, maxMarks);
//     document.write(`Average marks: ${Math.floor(averageMrks)}</br>Perentage: ${Math.floor(percentage)}%`);
// }
// mainFunc();

// ============== Answer to question 5 ==============
// function customIndexOfFunc(string, char) {
//     let ind;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             ind = i;
//         }else{
//             ind = -1
//         }
//     }
//     return ind;
// }
// let userString = prompt('Enter any sentence:', "I don't want anything to drink");
// let charFind = prompt('Enter the character for which you want to find the index:', 'g')
// document.write(`sentence: ${userString}</br>
// index of ${charFind}: ${customIndexOfFunc(userString, charFind)}`);

// ============== Answer to question 6 ==============
// let userSentnce = prompt('Enter any sentence (not more than 25 characters):', 'Programming is fun!').trim();
// function removeVowelsInSentence(sentence) {
//     let finalSentence = '';
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (!sentence) {
//         document.write('Please enter a sentence');
//     }
//     else if (sentence.length <= 25) {
//         for (let i = 0; i < sentence.length; i++) {
//             if (!vowels.includes(sentence[i].toLowerCase())) {
//                 finalSentence += sentence[i];
//             }
//         }
//         document.write(`sentence without vowels: ${finalSentence}`)
//     } else {
//         document.write('Input sentence is too long (more than 25 characters).');
//     }
// }
// removeVowelsInSentence(userSentnce);

// ============== Answer to question 7 ==============
// function abc(sentence) {
//     let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < sentence.length - 1; i++) {
//         switch (true) {
//             case vowelsArr.includes(sentence[i].toLowerCase()) && vowelsArr.includes(sentence[i + 1].toLowerCase()):
//                 count++;
//                 i++;
//                 break;
//         }

//     }
//     return count;
// }
// let sentnceInp = prompt('Enter any senence:', 'A rainbow appeared after the rain')
// document.write(`Number of occurrences of any two successive vowels: ${abc(sentnceInp)}`);

// ============== Answer to question 8 ==============
// let distanceInputInKg = +prompt('Enter the distance between two cities in kilometers:', 50);
// function calculMeters(distance) {
//     let oneKgToMeter = 1000
//     return distance * oneKgToMeter;
// }
// document.write(`Distance in Meters: ${calculMeters(distanceInputInKg)} meters</br>`);

// function calculFeet(distance) {
//     let oneKgToFeet = 3280.84;
//     return distance * oneKgToFeet;
// }
// document.write(`Distance in Feet: ${calculFeet(distanceInputInKg)} feet</br>`);

// function calculInches(distance) {
//     let oneKgToInches = 39370.1;
//     return distance * oneKgToInches;
// }
// document.write(`Distance in Inches: ${calculInches(distanceInputInKg)} inches</br>`);

// function calculCentimeters(distance) {
//     let oneKgToCentiMeter = 100000;
//     return distance * oneKgToCentiMeter;
// }
// document.write(`Distance in Centimeter: ${calculCentimeters(distanceInputInKg)} centimeters`);

// ============== Answer to question 9 ==============
// let hoursWorked = +prompt('Enter the number of hours worked:',45);
// function calculateOvertimePay(hoursWorked){
// let regularHours = 40;
// let overtimeRate = 12.00;
// if(hoursWorked <= regularHours){
//     return 0;
// }else{
//     let overtimeHour = hoursWorked - regularHours;
//     let overtimePay = overtimeHour * overtimeRate;
//     return overtimePay;
// }
// }
// document.write(`Overtime pay: ${calculateOvertimePay(hoursWorked)}`);

// ============== Answer to question 10 ==============
// let amount = +prompt('Enter amount to withdraw!:', 470);
// function calculateCurrencyNotes(amount) {
//     let count100RS = 0;
//     let count50RS = 0;
//     let count10RS = 0;
//     while (amount >= 10) {
//         if (amount >= 100) {
//             count100RS++;
//             amount -= 100;
//         } else if (amount >= 50) {
//             count50RS++;
//             amount -= 50;
//         } else if (amount >= 10) {
//             count10RS++;
//             amount -= 10;
//         }
//     }
//     document.write(`You will have ${count100RS} hundred notes ${count50RS} fifty notes ${count10RS} ten notes`);
// }
// calculateCurrencyNotes(amount);

// ************************* Chapter 43 to 48 : Events ****************************

// ============== Answer to question 2 ==============
// function mobileImgClicked(){
//     alert('Thanks for purchasing a phone from us');
// }

// ============== Answer to question 3 ==============
// function deleteStudntInfo(e) {
//     e.parentElement.parentElement.remove();
// }

// ============== Answer to question 4 ==============
// function changeImg(el){
//     el.src = 'https://i.pinimg.com/originals/3c/cb/c9/3ccbc9ead460d5d2c20261e319514760.gif'
// }

// function defaultImg(el){
// el.src = 'https://img.freepik.com/premium-photo/yellow-mercedes-benz-s-class-coupe-with-black-grille-black-grille_796580-1903.jpg'
// }

// ============== Answer to question 5 ==============
// let counterElement = document.getElementById('count');
// let count = Number(counterElement.innerText);
// function increaseCountVal() {
//     count += 1;
//     counterElement.innerText = count;
// }

// function decreaseCountVal() {
//     if (count) {
//         count -= 1;
//         counterElement.innerText = count;
//     }
// }


// ************************* Chapter 49 to 52 : Events **************************** 

// ============== Answer to question 1 ============== 
// function displayData() {
//     event.preventDefault()
//     let firstName = document.getElementById('firstName');
//     let lastName = document.getElementById('lastName');
//     let dob = document.getElementById('dob')
//     let gender = document.getElementById('gender');
//     let address = document.getElementById('address')
//     let education = document.getElementById('firstName')
//     let phone = document.getElementById('phone');
//     let country = document.getElementById('country');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     if (firstName.value.trim() && lastName.value.trim() && dob.value && education.value.trim() && gender.value && phone.value.trim() && country.value.trim() && email.value.trim() && password.value.trim() && address.value.trim()) {
//         let formMainContainer = document.getElementById('signupForm');
//         let userInfo = document.getElementById('userInfo');
//         formMainContainer.style.display = 'none';
//         userInfo.style.display = 'block';
//         userInfo.innerHTML = `<h2>Form Data</h2> 
//         <div style="text-align:start;"><p><strong>First Name:</strong> ${firstName.value}</p>
//         <p><strong>Last Name:</strong> ${lastName.value}</p>
//         <p><strong>Date of Birth:</strong> ${dob.value}</p>
//         <p><strong>Gender:</strong> ${gender.value}</p>
//         <p><strong>Education:</strong> ${education.value}</p>
//         <p><strong>Phone:</strong> ${phone.value}</p>
//         <p><strong>Country:</strong> ${country.value}</p>
//         <p><strong>Address:</strong> ${address.value}</p>
//         <p><strong>Email:</strong> ${email.value}</p>`
//     }else{
//         alert('Please fill all input fields');
//     }
// }