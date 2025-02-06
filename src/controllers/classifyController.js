const axios = require("axios");
const { isPrime, isPerfect, isArmstrong, getDigitSum } = require("../utils/mathUtils");

exports.classifyNumber = async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number, 10);
    const properties = [];

    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math`);
        const funFact = funFactResponse.data;

        res.status(200).json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: getDigitSum(num),
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch fun fact" });
    }
};
