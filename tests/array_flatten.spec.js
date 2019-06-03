const ArrayFlattenerTool = require('../src/array-flattener-tool.js');

describe('Array flattening tool', () => {
    describe('When passed an array with nested arrays', () => {
        it('Should throw an error when an array is not passed as a parameter', () => {
            try {
                const flatArray = ArrayFlattenerTool();
            } catch (expectedError) {
                expect(expectedError.message).toEqual('Please ensure you pass a valid array to the tool.');
            }
        })

        it('Should return a flattened version of the array', () => {
            const flatArray = ArrayFlattenerTool([1, [1, 2], 3]);
            expect(flatArray).toEqual([1, 1, 2, 3]);
        });

        it('Should flatten a doubly nested array', () => {
            const flatArray = ArrayFlattenerTool([1, [1, [2, 3]], 4]);
            expect(flatArray).toEqual([1, 1, 2, 3, 4]);
        })

        it('Should flatten a triple nested array!', () => {
            const flatArray = ArrayFlattenerTool([1, [1, [2, [3, 4]]], 5]);
            expect(flatArray).toEqual([1, 1, 2, 3, 4, 5]);
        })
    })
});
