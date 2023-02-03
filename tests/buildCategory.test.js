const { buildCategoryTree } = require('../scripts/buildCategoryTree');

describe('buildCategoryTree', () => {
    it('should return a string representation of the category tree', () => {
        const categories = [[1, null, 'root'],
        [2, 1, 'electrónicos'],
        [3, 2, 'computadoras'],
        [4, 3, 'apple'],
        [5, 3, 'lenovo'],
        [6, 2, 'televisiones'],
        [7, 1, 'libros'],
        [8, 7, 'clásicos'],
        [9, 7, 'fantasía'],
        [10, 7, 'poesía']
        ]; 

const expectedResult = `
root
  electrónicos
    computadoras
      apple
      lenovo
    televisiones
  libros
    clásicos
    fantasía
    poesía`;

    expect(buildCategoryTree(categories).trim()).toEqual(expectedResult.trim());

    });
});