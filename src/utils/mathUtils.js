// Check if a number is prime
exports.isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Check if a number is perfect (sum of divisors equals the number)
exports.isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

// Check if a number is an Armstrong number
exports.isArmstrong = (num) => {
    const digits = num.toString().split("");
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
};

// Get the sum of digits of a number
exports.getDigitSum = (num) => {
    return num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
};
