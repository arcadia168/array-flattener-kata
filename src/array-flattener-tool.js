const flattenArray = (arrayToFlatten, newFlatArray) => {
    console.log(`Inside recursive function! arrayToFlatten is: ${arrayToFlatten}`);
    if (arrayToFlatten.toString().length == 1) {
        console.log(`BASE CASE!: ${arrayToFlatten}`);
        newFlatArray.push(arrayToFlatten);
        console.log(`The newFlatArray is now: ${newFlatArray}`);
    } else {
        console.log(`RECURSIVE CASE!`)
        arrayToFlatten.forEach(arrayElement => {
            flattenArray(arrayElement, newFlatArray);
        });
    }
}

module.exports = arrayToFlatten => {

    if (!arrayToFlatten) {
        throw new Error('Please ensure you pass a valid array to the tool.');
    }

    console.info(`arrayToFlatten is: ${arrayToFlatten}`);

    const flatArray = [];
    flattenArray(arrayToFlatten, flatArray);

    console.info(`finalFlatArray is: ${flatArray}`);

    return flatArray;
}
