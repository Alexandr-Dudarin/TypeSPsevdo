//Задача 1

function findElement<T>(array: T[], element: T): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

const numbers = [1, 2, 3, 4, 5];
const target = 3;
const index = findElement(numbers, target);
console.log(`Индекс элемента ${target} в массиве: ${index}`);

//Задача 2

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  const result: any = {};

  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  keys.forEach((key) => {
    const val1 = (obj1 as any)[key];
    const val2 = (obj2 as any)[key];

    if (val1 !== undefined && val2 !== undefined) {
      result[key] = [val1, val2];
    } else if (val1 !== undefined) {
      result[key] = val1;
    } else {
      result[key] = val2;
    }
  });

  return result as T & U;
}

const person1 = { name: 'Alice', age: 30 };
const person2 = { age: 25, city: 'New York' };

const mergedPerson = mergeObjects(person1, person2);
console.log(mergedPerson);