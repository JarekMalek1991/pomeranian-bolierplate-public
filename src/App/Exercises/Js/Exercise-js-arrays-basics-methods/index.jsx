import './styles.css';

const arrayofMultipleTypes = [
  true,
  1,
  'Cześć to Rock In IT',
  { jarek: 'malek' },
];
export const objectOfMultipleTypes = {
  jarek: { daneOsobowe: 'Jestem z Borkowa' },
  kursFe: 'react',
  kursFe1: 1,
  kursFe2: true,
  kursFe3: [],
  kursFe4: () => 'Lubię Vanilla JS',
};

const array2d = [1, [2]];

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayOfNumbersOne = [1, 2, 3];
const arrayOfNumbersTwo = [4, 5, 6];

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 5, 7, 9];

export function Exercise() {
  function filterMethod(arrayOfNumbers) {
    const gratherThan5 = arrayOfNumbers.filter(function (kot) {
      return kot > 5;
    });
    return console.log('filterMethod', gratherThan5);
  }
  filterMethod(arrayOfNumbers);

  function sameNumbers(array1, array2) {
    const result = [];
    for (const element of array1) {
      if (array2.includes(element) && !result.includes(element)) {
        result.push(element);
      }
    }
    return result;
  }
  sameNumbers(array1, array2);

  function mergeObjects() {
    const object1 = { foo: 'bar' };
    const object2 = { name: 'Jarek' };
    const resultOfMerging = { ...object1, ...object2 };
    console.log('mergeObjects', resultOfMerging);
    return resultOfMerging.name;
  }

  return (
    <div>
      <p>Metody na tablicach:</p>
      {objectOfMultipleTypes.jarek.daneOsobowe}
      <br></br>
      {objectOfMultipleTypes.kursFe4()}
      <br></br>
      {objectOfMultipleTypes['jarek']['daneOsobowe']}
      {/* <br></br>
          {Object.values(objectOfMultipleTypes)}
          <br></br>
          {Object.keys(objectOfMultipleTypes)} */}
      <br></br>
      {mergeObjects()}
    </div>
  );
}
