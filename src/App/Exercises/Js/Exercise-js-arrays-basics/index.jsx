import './styles.css';

const arrayofMultipleTypes = [
  true,
  1,
  'Cześć to Rock In IT',
  { jarek: 'malek' },
];
const arrayOfNumbers = [1, 2, 3, 4, 5];

export function Exercise() {
  function getValueByIndex(array) {
    return console.log('getValueByIndex', array[0]);
  }
  getValueByIndex(arrayofMultipleTypes);

  function shiftElementOfArray(arrayParam) {
    return console.log('shiftElementOfArray', arrayParam.shift());
  }
  shiftElementOfArray(arrayOfNumbers);

  function popElementOfArray(arrayParam) {
    return console.log('popElementOfArray', arrayParam.pop());
  }
  popElementOfArray(arrayOfNumbers);

  function pushElementOfArray(arrayToPush) {
    const internalArray = [];
    internalArray.push('Cześć JS jest bardzo intuicyjny..');
    internalArray.push(2);
    return console.log('pushElementOfArray', arrayToPush);
  }
  pushElementOfArray();

  function whileLoop() {
    let whileCount = 0;

    while (whileCount <= 5) {
      console.log('whileLoop', whileCount);
      whileCount++;
    }
  }
  whileLoop();

  function whileLoopWithBreak() {
    let whileCount = 0;

    while (whileCount <= 10) {
      console.log('whileLoopWithBreak', whileCount);

      if (whileCount === 5) {
        // continue;
        break;
      } 
      whileCount++;
    }
  }
  whileLoopWithBreak();

  return (
    <div>
      <p>Dzialania na tablicach</p>

      <pre>
        <code></code>
      </pre>
    </div>
  );
}
