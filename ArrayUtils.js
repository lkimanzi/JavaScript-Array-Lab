class ArrayUtil {
  isEmpty(array) {
    // .lentgh returns the length of an array.
    if (array.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  append(original, value) {
    /*
      Example:
      original = [1,2]
      original.length = 2
      original[2] = 5
      original = [1,2,5]
      */
    return (original[original.length] = value);
  }

  clone(original) {
    //returns the same array
    return original;
  }

  fill(original, value) {
    let newArray = [];
    for (let i = 0; i < original.length; i++) {
            this.append(newArray, value);
    }
    return newArray;
  }

  subArray(original, from, to) {
    //declaring an empty array
    let newArray = [];
    //"from and to" gives us the range for values
    for (let i = from; i <= to; i++) {
      //initiating a loop, that starts from the value passed in and runs until it reaches "to"
      //appending values of indexs between the range to newArray.
      this.append(newArray, original[i]);
    }
    //returning newArray after appending.
    return newArray;
  }

  equals(arr1, arr2) {
    //   firstly checking if both arrays have equal no. of elements
    if (arr1.length != arr2.length) {
      return false;
    }

    // using the following loop, we're checking that each index of both arrays have the same value
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }

  indexOf(original, value) {
    //this method returns the index of value passed in, if it exists.
    for (let i = 0; i < original.length; i++) {
      //   In each iteration of loop, we're checking if we have the value.
      if (original[i] == value) {
        //if found, it'll return the current iteration which will also be the index of the value
        return i;
      }
    }

    // if the value doesn't exit in the array, the method  returns -1
    return -1;
  }

  remove(original, value) {
    // Here, we'll be removing value passed in from the array that's passed in.

    // Declaring an empty array.
    let cleanedArray = [];

    for (let i = 0; i < original.length; i++) {
      // we'll skip the iteration if the passed value is found
      if (original[i] == value) {
        continue;
      }
      // else we'll append the value of current iteration(index) to the cleanedArray
      this.append(cleanedArray, original[i]);
    }

    return cleanedArray;
  }

  reverse(original) {
    let reversedArray = [];
    // Initiating loop with array's length
    // loop will execute as long as i = greaterthen or equal to 0
    // after each iteration, i subracts 1 value from itself.
    for (let i = original.length; i >= 0; i--) {
      // using an if statement here because as we know legnth of an array is always 1 number greater than the last index of an array
      if (i == original.length) {
               continue;
      }

      this.append(reversedArray, original[i]);
    }
    return reversedArray;
  }
}

let myArray = [];

const arrayPractice = new ArrayUtil();


/*TESTING ------------>
// isEmpty
console.log("--isEmpty--");
console.log(arrayPractice.isEmpty(myArray));

// Append to End of array

console.log("--Append--");

arrayPractice.append(myArray, 2);

console.log(myArray);

arrayPractice.append(myArray, 5);

console.log(myArray);

//Clone Array
console.log("--Clone--");

let cloneArray = arrayPractice.clone(myArray);

console.log(cloneArray);

//Fill

console.log("--Fill--");

let abc = [1, 2, 3, 4, 5];

abc = arrayPractice.fill(abc, 2);

console.log(abc);

// SubArray
console.log("--SubArray--");

let simpleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Before SubArray:");
console.log(simpleArray);

let subArray = arrayPractice.subArray(simpleArray, 0, 2);

console.log("After SubArray:");
console.log(subArray);

//Equals - Check if both Arrays are equal
console.log("--Equals--");

let myArray1 = [1, 2, 3];
let myArray2 = [2, 4, 5];
let myArray3 = [1, 2];
let myArray4 = [1, 2, 3];

console.log(
  "Array 1 & Array 2 are equal? ",
  arrayPractice.equals(myArray1, myArray2)
); //false
console.log(
  "Array 1 & Array 3 are equal? ",
  arrayPractice.equals(myArray1, myArray3)
); //false
console.log(
  "Array 1 & Array 4 are equal? ",
  arrayPractice.equals(myArray1, myArray4)
); //true

// indexOf
console.log("--indexOf--");

console.log(arrayPractice.indexOf(myArray1, 3)); //2
console.log(arrayPractice.indexOf(myArray1, 5)); //-1 - because it doesn't exist

//remove
console.log("--Remove--");

console.log(myArray1);

myArray1 = arrayPractice.remove(myArray1, 1);

console.log(myArray1);

//reverse
console.log("--Reverse--");

console.log(myArray2);

myArray2 = arrayPractice.reverse(myArray2);

console.log(myArray2);
-------------------*/