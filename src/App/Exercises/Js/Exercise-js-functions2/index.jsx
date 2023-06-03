import './styles.css';

export function ExerciseJsFunction() {
  // Zadanie 1

  const originalArr = [3, 2, 1];

  const sortedArr = sortImmute(originalArr);
  function sortImmute(lista) {
    // lista.sort();
    return [...lista].sort();
  }

  // Zadanie 2

  const originalObject = { name: 'john', surname: 'wick', age: 14 };
  //   const upperObject = (object) => {
  //     const helperObject = {};
  //     for (const property in object) {
  //       const propertyToString = object[property].toString();
  //       const helperValue = propertyToString[0];
  //       helperObject[property] =
  //         helperValue.toUpperCase() + propertyToString.slice(1);
  //     }
  //     return helperObject;
  //   };
  //   const changedObject = upperObject(originalObject);

  // Zadanie 3

  const tablicaPierwotna = [
    {
      id: 0,
      name: 'Eve',
      grades: [4, 2, 4, 6, 1],
    },
    {
      id: 1,
      name: 'Eve 1',
      grades: [3, 2, 4, 2, 1],
    },
  ];

  const calcAvr = (peopleArr) => {
    const returnArr = [];
    peopleArr.forEach((person) => {
      let sum = 0;
      let avr = 0;

      person.grades.forEach((num) => (sum += num));
      avr = sum / person.grades.length;

      returnArr.push({
        id: person.id,
        name: person.name,
        avr,
      });
    });
    return returnArr;
  };

  const tablicaWynikowa = calcAvr(tablicaPierwotna);
  console.log(tablicaPierwotna, tablicaWynikowa);

  return (
    <div>
      <div>{originalArr}</div>
      <div>{sortedArr}</div>
    </div>
  );
}
