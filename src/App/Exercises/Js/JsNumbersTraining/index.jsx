import './styles.css';
import React from 'react';
//1.

// export function Js_Boolean_Numbers() {
//   let age = 18;
//   let hasDriverLicense = true;
//   let hasCar = true;

//   function canDrive(age, hasDriverLicense, hasCar) {
//     if (age >= 18 && hasDriverLicense && hasCar) {
//       return 'You can drive your car!';
//     } else if (age >= 18 && hasDriverLicense && !hasCar) {
//       return 'You can drive a rental car.';
//     } else if (age >= 18 && !hasDriverLicense) {
//       return "You can't drive without a driver's license.";
//     } else {
//       return 'You are too young to drive.';
//     }
//   }
//   return (
//     <div>
//       <h4>
//         {''}
//         1. Na podstawie kodu uprość zagnieżdżone instrukcje warunkowe "if" za
//         pomocą operatora logicznego oraz spróbuj wykorzystać odwracanie warunku
//       </h4>
//       <div>{canDrive(19, true, true)}</div>
//     </div>
//   );
// }

//2.

// function isStringShort(str) {
//   if (str.length < 10) {
//     return true;
//   }
//   return false;
// }

// function Js_Boolean_Numbers() {
//   const result = isStringShort('abcde');

//   return (
//     <div>
//       <h4>
//         2. Napisz funkcję isStringShort, która przyjmuje string jako argument i
//         zwraca wartość true, jeśli długość stringa jest mniejsza niż 10, a
//         false, jeśli długość stringa wynosi 10 lub przekracza 10. Funkcja
//         powinna wykorzystać technikę early return
//       </h4>
//       <div>{result}</div>
//     </div>
//   );
// }

// export default Js_Boolean_Numbers;

//3.

// function circleArea(radius) {
//   return Math.PI * radius * radius;
// }

// function Index() {
//   const result = circleArea(3);

//   return (
//     <div>
//       <h4>
//         3. Napisz funkcję zwracającą pole koła podając promień: circleArea(3) => 28.274333882308138;
//       </h4>
//       <div>{result}</div>
//     </div>
//   );
// }

// export default Index;

//4.

// function zmianaLiczbyNaOcene(liczba) {
//   if (liczba === 1) {
//     return 'niedostateczny';
//   } else if (liczba === 2) {
//     return 'mierny';
//   } else if (liczba === 3) {
//     return 'dostateczny';
//   } else if (liczba === 4) {
//     return 'dobry';
//   } else if (liczba === 5) {
//     return 'bardzo dobry';
//   } else if (liczba === 6) {
//     return 'celujący';
//   } else {
//     return 'złe wejście';
//   }
// }

// console.log(zmianaLiczbyNaOcene(1)); // Output: "niedostateczny"
// console.log(zmianaLiczbyNaOcene(10)); // Output: "złe wejście"

// // Renderowanie komponentu
// function App() {
//   return (
//     <div>
//       <h4>4. Napisz funkcję zmieniającą ocenę 1-6 na jej wersję tekstową:</h4>
//       <div>{zmianaLiczbyNaOcene(1)}</div>
//       <div>{zmianaLiczbyNaOcene(10)}</div>
//     </div>
//   );
// }
// export default App;

//5.

function ownMax(a, b) {
  return a > b ? a : b;
}

console.log(ownMax(4, 7)); // Output: 7