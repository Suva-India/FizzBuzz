function fizzbuzzArray(count) {
    const resultArray = [];

    for (let i = 1; i <= count; i += 1) {
        resultArray.push((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
    }

    return resultArray;
}

module.exports.fizzbuzzArray = fizzbuzzArray;
