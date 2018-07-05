//Casos de teste
// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
fr.numerator = 10;
fr.denominator = 10;
const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');
const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');
const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
const fplus1 = new Fraction(9, 7);
const fplus2 = new Fraction(8, 7);
const fplus3 = fplus1.plus(fplus2);
console.log(fplus3.toString() === '17/7');
const fplus4 = fplus3.plus(fplus3);
console.log(fplus4.toString() === '34/7');
const fplus5 = new Fraction(5, 6);
const fplus6 = new Fraction(15, 6);
const fplus7 = fplus5.plus(fplus6);
console.log(fplus7.toString() === '20/6');
const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);
const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);
f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
const freduce1 = new Fraction(666, 123456);
freduce1.reduce();
console.log(freduce1.toString() === '1/2');
const freduce2 = new Fraction(333, 936);
freduce2.reduce();
console.log(freduce2.toString() === '1/3');
const freduce3 = new Fraction(500, 4598);
freduce3.reduce();
console.log(freduce3.toString() === '1/4');
const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);
const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"
// TODO: escreva mais 3 casos de teste com divide
const fdivide8 = new Fraction(1, 7);
const fdivide9 = new Fraction(4, 3);
console.log(fdivide8.divide(fdivide9) === '3/28');
const fdivide11 = new Fraction(4, 15);
const fdivide12 = new Fraction(66, 15);
console.log(fdivide11.divide(fdivide12) === '60/990');
const fdivide13 = new Fraction(1, 5);
const fdivide14 = new Fraction(1, 5);
console.log(fdivide13.divide(fdivide14) === '5/5');
const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);
const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"
// TODO: escreva mais 3 casos de teste com multiply
const fmultiply8 = new Fraction(22, 6);
const fmultiply9 = new Fraction(3, 6);
console.log(fmultiply8.multiply(fmultiply9).toString() === '66/36');
const fmultiply11 = new Fraction(1, 7);
const fmultiply12 = new Fraction(4, 7);
console.log(fmultiply11.multiply(fmultiply12).toString() === '4/49');
const fmultiply13 = new Fraction(8, 3);
const fmultiply14 = new Fraction(8, 5);
console.log(fmultiply13.multiply(fmultiply14).toString() === '64/15');
const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);
console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);
const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3); // TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
console.log(f14.greaterThan(f15) === true);
console.log(f14.lessThan(f15) === false);
console.log(f14.equals(f15) === false);
console.log(f15.greaterThan(f16) === false);
console.log(f15.lessThan(f16) === false);
console.log(f15.equals(f16) === true);
console.log(f16.greaterThan(f13) === false);
console.log(f16.lessThan(f13) === true);
console.log(f16.equals(f13) === false);
const f17 = new Fraction(4); // TODO: escreva casos de teste para o valor que se espera de f17
console.log(f17.toString() === '4/1');
const f18 = new Fraction(1); // TODO: escreva casos de teste para o valor que se espera de f18
console.log(f18.toString() === '1/1');