// function to generate the fizzbuzz api array

function fizzbuzzArray(count) {
    console.log('\n\nNew Array Request\n');
    const resultArray = [];
    let value;
    try {
        for (let i = 1; i <= count; i += 1) {
            value = (i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i;
            console.log(value);
            resultArray.push(value);
        }

        return resultArray;
    } catch (err) {
        throw new Error('Error in calculating array values');
    }
}

module.exports.fizzbuzzArray = fizzbuzzArray;
