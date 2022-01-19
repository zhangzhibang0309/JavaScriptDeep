// ES11之前
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt);
console.log(maxInt + 1);
console.log(maxInt + 2);

// ES11之后：BigInt
const bigInt = 900719925474099n;
console.log(bigInt);
console.log(bigInt + 10n);

const num = 100;
console.log(bigInt + BigInt(num));

const smallNum = Number(bigInt);
console.log(smallNum);// 可能就不准确了
