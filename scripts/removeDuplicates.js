// Se crea un objeto obj vacío para mantener un registro de los elementos únicos del array.
// Se crea un array result vacío para almacenar los elementos únicos del array original.
// Se usa un bucle for para recorrer el array original.
// Dentro del bucle, se verifica si el elemento actual (arr[i]) ya está en el objeto obj usando una negación (!) y la propiedad obj[arr[i]].
// Si el elemento actual no está en el objeto, significa que es un elemento único y se agrega al array result usando el método push().
// Después de agregar el elemento único al array result, se establece la propiedad obj[arr[i]] en true para indicar que se ha registrado el elemento.
// El bucle continúa hasta que se haya recorrido todo el array original.
// Al final del bucle, se devuelve el array result que contiene los elementos únicos del array original.

function removeDuplicates() {

    let obj = {};
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) {
        result.push(arr[i]);
        obj[arr[i]] = true;
      }
    }
    console.log(result)
    return result;
  }
let arr =  [2,3,5,1,3,4,6,7,8,2,1,3,4,6,8]
arr.sort()

removeDuplicates.apply(this, arr)

module.exports = removeDuplicates;