// function to generate the fizzbuzz api array

function fizzbuzzArray(count) {
    const resultArray = [];
    try {
        for (let i = 1; i <= count; i += 1) {
            resultArray.push((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
        }

        return resultArray;
    } catch (err) {
        throw new Error('Error in calculating array values');
    }
}

module.exports.fizzbuzzArray = fizzbuzzArray;
