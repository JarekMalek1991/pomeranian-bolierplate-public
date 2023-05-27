import './styles.css';

export function Exercise() {
  const a = 2;
  const b = 3;
  // Declatarion types - 1
  function multiplyTypesFunction() {
    return a * b;
  }

  const multiplyTypeArrowFunction = () => {
    return a * b;
  };

  //lamba
  const multiplyTypeArrowFunction_lamba = () => a * b;

  const filterHelper = (num) => {
    return (num) => 3;
  };

  const array_function_anonymous_function_with_declaration = [1, 2, 3].filter(
    (num) => num >= 3
  );
  const array_function_with_declaration = [1, 2, 3].filter((num) =>
    filterHelper(num)
  );

  function outsideFunction() {
    function insideFunction() {
      console.log('test');
    }
    // !!! wywołanie funkcji
    return insideFunction();

    // !!!zwracamy zmienną do której jest przypisana ta funkcja - przekazujemy referencje do tej funkcji
    // return insideFunction
  }

  outsideFunction();

  //...............................................................
  //ARGUMENTY FUNKCJI

  function multiplyTypesFunctiontwo(...values) {
    // !!! values jako lista z wartościami
    return values;
  }

  function multiplyTypesFunctionthree(callback1, a, ...values) {
    // !!! values jako lista z wartościami
    callback1()
    console.log(a)
    // ... values
    return values;
  }

  multiplyTypesFunctionthree(() => {console.log('1')}, () => {console.log('1')}, 1, 2, 3, 4, 5, 6, 7, 8, 9,)
  multiplyTypesFunctiontwo(1,2,3)

  const testFunction = (a, b) => {
    (a > 1) && console.log(b)
  }

  const l1 = 1;
  const l2 = 2;

  console.log(l1 === l2);

  const obj1 = {}
  const obj2 = {}

  console.log(obj1 === obj2)


function outsideFunction_hosting() {
  let a = 1;

  function insideFunction() {
    var a = 2;
    console.log(a);
    console.log(b);
  }
  console.log(a, b)
  return insideFunction();
}
outsideFunction_hosting();






  return (
    <div>
      {/* Deklaracje funkcji */}
      <div>{multiplyTypesFunction(a, b)}</div>
      <div>{multiplyTypeArrowFunction(a, b)}</div>
      <div>
        {() => {
          return a * b;
        }}
      </div>
    </div>
  );
}
