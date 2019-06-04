const flattenArray = (arrayToFlatten, newFlatArray) => {
    if (arrayToFlatten.toString().length == 1) {
        newFlatArray.push(arrayToFlatten);
    } else {
        arrayToFlatten.forEach(arrayElement => {
            flattenArray(arrayElement, newFlatArray);
        });
    }
}

module.exports = arrayToFlatten => {
    if (!arrayToFlatten) {
        throw new Error('Please ensure you pass a valid array to the tool.');
    }

    const flatArray = [];
    flattenArray(arrayToFlatten, flatArray);

    return flatArray;
}
