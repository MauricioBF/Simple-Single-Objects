class Fraction {
    constructor(num = 1, den = 1) {
        this.numeratorc = num;
        this.denominatorc = den;
    }
    toString() {
        return this.numeratorc + '/' + this.denominatorc;
    }
    plus(valor) {
        let number = new Fraction(this.numeratorc + valor.numeratorc, this.denominatorc);
        return number;
    }
    get canReduce() {
        let num = this.numeratorc;
        let den = this.denominatorc;
        let conf = 0;
        for (let cont = 2; cont <= Math.min(den, num) && conf === 0; cont++) {
            if (num % cont === 0 && den % cont === 0) {
                conf = 1;
            }
        }
        if (conf === 1) {
            return true;
        } else {
            return false;
        }
    }
    reduce() {
        let num = this.numeratorc;
        let den = this.denominatorc;
        for (let conf = 0; this.canReduce === true; conf = 0) {
            for (let cont = 2; cont <= Math.min(den, num) && conf === 0; cont++) {
                if (num % cont === 0 && den % cont === 0) {
                    this.numeratorc = num / cont;
                    this.denominatorc = den / cont;
                    conf = 1;
                }
            }
        }
    }
    multiply(valor) {
        let number = new Fraction(this.numeratorc * valor.numeratorc, this.denominatorc * valor.denominatorc);
        return number;
    }
    divide(valor) {
        let number = new Fraction(this.numeratorc * valor.denominatorc, this.denominatorc * valor.numeratorc);
        return number;
    }
    greaterThan(valor) {
        if (this.numeratorc / this.denominatorc > valor.numeratorc / valor.denominatorc) {
            return true;
        } else {
            return false;
        }
    }
    lessThan(valor) {
        if (this.numeratorc / this.denominatorc < valor.numeratorc / valor.denominatorc) {
            return true;
        } else {
            return false;
        }
    }
    equals(valor) {
        if (this.numeratorc / this.denominatorc === valor.numeratorc / valor.denominatorc) {
            return true;
        } else {
            return false;
        }
    }
    get numerator() {
        return this.numeratorc;
    }
    get denominator() {
        return this.denominatorc;
    }
}
