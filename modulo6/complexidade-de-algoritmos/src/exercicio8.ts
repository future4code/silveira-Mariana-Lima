function copyArray(array: number[]): number[] {
    let copy: number[] = [];
    for (const value of array) {
      copy = appendToNew(copy, value);
    }
    return copy;
  }
  
  function appendToNew(array: number[], value: number) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    newArray.push(value);
    return newArray;
  }

//Sendo n o tamanho do array, a complexidade de appendToNew é
// O(n)

//Sendo n o tamanho do array, a complexidade de copyArray é
// O(n²)