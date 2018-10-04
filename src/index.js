module.exports = function getZerosCount(number, base) {
    // your implementation
    let min = number,
        st,
        base1 = base,
        count,
        number1;
    for (let i = 2; i <= base; i++) {
        if (base % i == 0) {
            st = 0;
            while (base1 % i == 0) {
                st++;
                base1 /= i;
            }
            count = 0;
            number1 = number;
            while (number1 / i > 0) {
                count += Math.trunc(number1 / i);
                number1 /= i;
            }

            if (min > count / st) {
                min = count / st;
            };
        }
    }
    return Math.floor(min);
}
