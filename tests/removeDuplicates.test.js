const removeDuplicates = require('../scripts/removeDuplicates');

describe('removeDuplicates', () => {
    it('should delete the duplicate elements and return an array with unique elements.', () => {
        const arr = [2,3,5,1,3,4,6,7,8,2,1,3,4,6,8];
        const result = removeDuplicates(arr);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});