// Problem 1: Check Even or Odd (use ternary operator)
const number1 = 10; 
const result1 = (number1 % 2 === 0) ? "Even" : "Odd";
console.log(`1. Even/Odd (Input: ${number1}): ${result1}`);

// Problem 2: Check Positive, Negative or Zero (use if...else if...else)
const number2 = -5; 
let result2;
if (number2 > 0) {
    result2 = "Positive";
} else if (number2 < 0) {
    result2 = "Negative";
} else {
    result2 = "Zero";
}
console.log(`2. Sign Check (Input: ${number2}): ${result2}`);

// Problem 3: Find Maximum of Two Numbers (use ternary operator)
const numA3 = 10;
const numB3 = 20; 
const max3 = (numA3 > numB3) ? numA3 : numB3;
console.log(`3. Max of Two (Input: ${numA3}, ${numB3}): ${max3}`);

// Problem 4: Find Maximum of Three Numbers (use if...else if)
const n1_4 = 5;
const n2_4 = 12;
const n3_4 = 8; 
let largest4;
if (n1_4 >= n2_4 && n1_4 >= n3_4) {
    largest4 = n1_4;
} else if (n2_4 >= n1_4 && n2_4 >= n3_4) {
    largest4 = n2_4;
} else {
    largest4 = n3_4;
}
console.log(`4. Max of Three (Input: ${n1_4}, ${n2_4}, ${n3_4}): ${largest4}`);

// Problem 5: Check Leap Year
const year5 = 2024; 

const isLeap5 = (year5 % 4 === 0 && year5 % 100 !== 0) || (year5 % 400 === 0);
console.log(`5. Leap Year (Input: ${year5}): ${isLeap5 ? "Leap Year" : "Not Leap Year"}`);

// Problem 6: Check Voting Eligibility (use ternary operator)
const age6 = 17; 
const eligibility6 = (age6 >= 18) ? "Eligible for Voting" : "Not Eligible for Voting";
console.log(`6. Voting Eligibility (Input: ${age6}): ${eligibility6}`);

// Problem 7: Check Divisibility by 5 and 11
const number7 = 55; 
let result7;
if (number7 % 5 === 0 && number7 % 11 === 0) {
    result7 = "Divisible by both 5 and 11";
} else {
    result7 = "Not divisible by both 5 and 11";
}
console.log(`7. Divisibility (Input: ${number7}): ${result7}`);

// Problem 8: Grade Calculator (using if...else if...else)
const score8 = 75; 
let grade8;
if (score8 >= 90) {
    grade8 = "A (Excellent)";
} else if (score8 >= 80) {
    grade8 = "B (Very Good)";
} else if (score8 >= 70) {
    grade8 = "C (Good)";
} else if (score8 >= 60) {
    grade8 = "D (Average)";
} else {
    grade8 = "F (Fail)";
}
console.log(`8. Grade (Input: ${score8}): ${grade8}`);

// Problem 9: Check Uppercase or Lowercase (use ternary operator)
const char9 = 'a';
const charCode9 = char9.charCodeAt(0);
const charType9 = (charCode9 >= 65 && charCode9 <= 90) 
    ? "Uppercase"
    : (charCode9 >= 97 && charCode9 <= 122) 
    ? "Lowercase"
    : "Not an English Letter";
console.log(`9. Case Check (Input: ${char9}): ${charType9}`);

// Problem 10: Check Vowel or Consonant
const char10 = 'e'; 
const lowerChar10 = char10.toLowerCase();
let result10;
if (lowerChar10 === 'a' || lowerChar10 === 'e' || lowerChar10 === 'i' || lowerChar10 === 'o' || lowerChar10 === 'u') {
    result10 = "Vowel";
} else if (lowerChar10 >= 'a' && lowerChar10 <= 'z') {
    result10 = "Consonant";
} else {
    result10 = "Not a Letter";
}
console.log(`10. Vowel/Consonant (Input: ${char10}): ${result10}`);



// Problem 11: Check Multiple of 3 or 7 (use ternary operator)
const number11 = 14;
const result11 = (number11 % 3 === 0 || number11 % 7 === 0) ? "Multiple of 3 or 7" : "Not a Multiple of 3 or 7";
console.log(`11. Multiple of 3 or 7 (Input: ${number11}): ${result11}`);

// Problem 12: Simple Calculator (using if...else if)
function calculate12(n1, n2, operator) {
    let result;
    if (operator === '+') {
        result = n1 + n2;
    } else if (operator === '-') {
        result = n1 - n2;
    } else if (operator === '*') {
        result = n1 * n2;
    } else if (operator === '/') {
        result = n1 / n2;
    } else {
        result = "Invalid Operator";
    }
    return result;
}
console.log(`12. Simple Calculator (10 * 5): ${calculate12(10, 5, '*')}`);

// Problem 13: Absolute Value (use ternary operator)
const number13 = -15; 
const absoluteValue13 = (number13 < 0) ? -number13 : number13;
console.log(`13. Absolute Value (Input: ${number13}): ${absoluteValue13}`);

// Problem 14: Check Triangle Validity (sum of any two sides > third side)
const s1_14 = 3;
const s2_14 = 4;
const s3_14 = 5; 
let result14;
if ((s1_14 + s2_14 > s3_14) && (s2_14 + s3_14 > s1_14) && (s1_14 + s3_14 > s2_14)) {
    result14 = "Valid Triangle";
} else {
    result14 = "Not a Valid Triangle";
}
console.log(`14. Triangle Validity (Inputs: ${s1_14}, ${s2_14}, ${s3_14}): ${result14}`);

// Problem 15: Check Profit or Loss
const CP15 = 100;
const SP15 = 150; 
let result15;
if (SP15 > CP15) {
    result15 = `Profit of ${SP15 - CP15}`;
} else if (CP15 > SP15) {
    result15 = `Loss of ${CP15 - SP15}`;
} else {
    result15 = "No Profit or Loss";
}
console.log(`15. Profit/Loss (CP: ${CP15}, SP: ${SP15}): ${result15}`);

// Problem 16: Find Minimum of Two Numbers (use ternary operator)
const n1_16 = 12;
const n2_16 = 5;
const min16 = (n1_16 < n2_16) ? n1_16 : n2_16;
console.log(`16. Min of Two (Input: ${n1_16}, ${n2_16}): ${min16}`);

// Problem 17: Check Pass or Fail (use ternary operator)
const marks17 = 35;

const result17 = (marks17 >= 40) ? "Pass" : "Fail";
console.log(`17. Pass/Fail (Input: ${marks17}): ${result17}`);

// Problem 18: Check Odd and Positive
const number18 = 7; 
let result18;
if (number18 > 0 && number18 % 2 !== 0) {
    result18 = "Odd & Positive";
} else if (number18 % 2 !== 0) {
    result18 = "Odd but Not Positive";
} else {
    result18 = "Not Odd and Positive";
}
console.log(`18. Odd & Positive Check (Input: ${number18}): ${result18}`);

// Problem 19: Check Armstrong Number (3 digit)
const number19 = 153; 
const original19 = number19;

const d1_19 = Math.floor(number19 / 100);
const d2_19 = Math.floor((number19 % 100) / 10);
const d3_19 = number19 % 10;
const armstrongSum19 = (d1_19 ** 3) + (d2_19 ** 3) + (d3_19 ** 3);
let result19;
if (armstrongSum19 === original19) {
    result19 = "Armstrong";
} else {
    result19 = "Not Armstrong";
}
console.log(`19. Armstrong Check (Input: ${number19}): ${result19}`);

// Problem 20: Student Performance Category (if...else if)
const marks20 = 85;
let category20;
if (marks20 > 90) {
    category20 = "Excellent";
} else if (marks20 > 80) {
    category20 = "Very Good";
} else if (marks20 > 70) {
    category20 = "Good";
} else if (marks20 > 60) {
    category20 = "Average";
} else {
    category20 = "Needs Improvement";
}
console.log(`20. Performance Category (Input: ${marks20}): ${category20}`);
