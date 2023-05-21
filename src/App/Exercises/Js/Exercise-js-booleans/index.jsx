import './styles.css';

export function Exercise() {
  const isValid = true;
  const passStyle = true;
  const checkStatement = isValid && true; // true
  const checkStatement_1 = false && isValid; // false
  const checkStatement_2 = false && true && false; // false
  const checkStatement_3 = false && true && false; // false
  const checkStatement_4 = false || (true && false); // false

  let x = 10;
  let y = 10;
  let z = 10;
  let w = 10;
  let s = 10;

  // x = x + 5;
  x += 5;

  // y = y * 5;
  y *= 5;

  // z = z / 5;
  z /= 5;

  // w = w ** 5;
  w **= 5;

  // s = s % 5;
  s %= 5;

  // negacja
  // const notValid = !isValid;

  // if (x == 5) {
  //   // console.log(magia)
  // } else if (x == 15){
  //   // console.log(brak magii)
  // } else {
  //   // console.log('inna wartość niż wskazane')
  // }

  // if (x > 5) {
  //   // console.log(magia)
  // } else {
  //   // console.log(brak magii)
  // }

  // // (x > 5) ? console.log('wieksze od 5') : console.log('mniejsze lub równe 5')

  //CONDITIONAL (TERNARY) OPERATOR

  // (x > 5)
  // ? ((x == 7)
  // ? console.log('')
  // : console.log('większe od 5'))
  // : console.log('mniejsze lub równe 5')

  // if (x) {
  //   if (y) {
  //     if (z) {
  //       if (w){

  //       }
  //     }
  //   }
  // }

  // SWITCH
  // switch (x) {
  //   case 5 : console.log('5!');
  //   break;
  //   case 6: console.log('6!');
  //   break;
  //   default: console.log('inna wartość!')
  // }

  return (
    <>
      {isValid && (
        <div
          style={{
            backgroundColor: passStyle ? 'red' : 'black',
          }}
        >
          JS booleans
        </div>
      )}
    </>
  );
}
