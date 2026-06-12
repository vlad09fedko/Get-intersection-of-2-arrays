'use strict';

function createArray() {
  return Array.from({ length: 1e4 }, () => Math.floor(Math.random() * 100));
}

const myArr1 = createArray();
const myArr2 = createArray();

// ~~~~~~~~~~~~~~~~~~~ arrays-set bubbles ~~~~~~~~~~~~~~~~~~~

function getItersection1(arr1, arr2) {
  let intersection = new Set();
  const len = arr1.length >= arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.add(arr1[i]);
      }
    }
  }

  return Array.from(intersection);
}

// ~~~~~~~~~~~~~~~~~~~ arrays ~~~~~~~~~~~~~~~~~~~
function getItersection2(arr1, arr2) {
  let intersection = [];
  for (const item of arr1) {
    if (!intersection.includes(item) && arr2.includes(item)) {
      intersection.push(item);
    }
  }

  return intersection;
}

// ~~~~~~~~~~~~~~~~~~~ set-arrays ~~~~~~~~~~~~~~~~~~~
function getItersection3(arr1, arr2) {
  const set1 = new Set(arr1);
  let intersection = [];
  for (const item of set1) {
    if (arr2.includes(item)) {
      intersection.push(item);
    }
  }

  return intersection;
}

// Для сравнения пузырьков с 2 и 3 вариантами лучше использовать длинну массивов около 1e4
// Для сравнения 2 с 3 вариантами - около 1e7
// Менять длинну на 4 строке

let start = Date.now();
console.log(getItersection1(myArr1, myArr2));
console.log(`Lead time (arrays bubbles): ${Date.now() - start} ms`);

start = Date.now();
console.log(getItersection2(myArr1, myArr2));
console.log(`Lead time (arrays): ${Date.now() - start} ms`);

start = Date.now();
console.log(getItersection3(myArr1, myArr2));
console.log(`Lead time (set-arrays): ${Date.now() - start} ms`);