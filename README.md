# projecteuler-1-ts

```
// Solution:
const isMultipleOf3 = (n: number) => n % 3 === 0;
const isMultipleOf5 = (n: number) => n % 5 === 0;

const result = (max: number) =>
  Array.from({ length: max }, (_, i) => i).reduce((acc, curr, idx) => {
    return isMultipleOf3(idx) || isMultipleOf5(idx) ? curr + acc : acc;
  }, 0);

// Display Result
console.log(result(1000)); // 233168
```

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/honorablemention/projecteuler-1-ts)
