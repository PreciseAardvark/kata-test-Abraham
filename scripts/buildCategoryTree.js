function buildCategoryTree(categories) {
    // Crear un mapa de categorías por ID
    const categoryMap = new Map();
    for (const category of categories) {
        categoryMap.set(category[0], {
            id: category[0],
            parentId: category[1],
            name: category[2],
            children: []
        });
    }

    // Construir un árbol de categorías
    const root = [];
    for (const [id, category] of categoryMap) {
        const parentCategory = categoryMap.get(category.parentId);
        if (parentCategory) {
            parentCategory.children.push(category);
        } else {
            root.push(category);
        }
    }

    // Ordenar alfabéticamente los hijos de cada categoría
    function sortCategories(categories) {
        categories.sort((a, b) => a.name.localeCompare(b.name));
        for (const category of categories) {
            sortCategories(category.children);
        }
    }
    sortCategories(root);

    // Generar un string que represente al árbol de categorías
    let result = '';
    function buildString(categories, spaces) {
        for (const category of categories) {
            result += ' '.repeat(2 * spaces) + category.name + '\n';
            buildString(category.children, spaces + 1);
        }
    }
    buildString(root, 0);

    return result;
}



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


console.log(buildCategoryTree(categories));


module.exports = { buildCategoryTree }