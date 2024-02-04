// Import stylesheets
import './style.css';

// Solution:
const isMultipleOf3 = (n: number) => n % 3 === 0;
const isMultipleOf5 = (n: number) => n % 5 === 0;

const result = (max: number) =>
  Array.from({ length: max }, (_, i) => i).reduce((acc, curr, idx) => {
    return isMultipleOf3(idx) || isMultipleOf5(idx) ? curr + acc : acc;
  }, 0);

// Display Result
console.log(result(1000));

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h4>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</h4>
<h3>Find the sum of all the multiples of 3 or 5 below 1000.</h3>
<code>
const isMultipleOf3 = ${isMultipleOf3} <br>

const isMultipleOf5 = ${isMultipleOf5} <br>
<br>
const result = ${result} <br>
<br>
Result: ${result(1000)}
</code>
`;
