class ATM {
    constructor(numserie) {
        this.numeroSeriec = numserie;
        this.valorc = 0;
        this.nota100 = [100, 0];
        this.nota50 = [50, 0];
        this.nota20 = [20, 0];
        this.nota10 = [10, 0];
        this.nota5 = [5, 0];
    }
    abastecer(quant, nota) {
        if (nota === 100) {
            this.valorc += 100 * quant;
            this.nota100[1] += quant;
        }
        if (nota === 50) {
            this.valorc += 50 * quant;
            this.nota50[1] += quant;
        }
        if (nota === 20) {
            this.valorc += 20 * quant;
            this.nota20[1] += quant;
        }
        if (nota === 10) {
            this.valorc += 10 * quant;
            this.nota10[1] += quant;
        }
        if (nota === 5) {
            this.valorc += 5 * quant;
            this.nota5[1] += quant;
        }
        return;
    }
    retirar(val) {
        let valorantigo = val;
        let n100 = 0, n50 = 0, n20 = 0, n10 = 0, n5 = 0;
        if (val <= this.valorc && val%5 === 0) {
            for (;val/100 >= 1 && this.nota100[1] > 0;) {
                val -= 100;
                n100 += 1;
            }
            for (;val/50 >= 1 && this.nota50[1] > 0;) {
                val -= 50;
                n50 += 1;
            }
            for (;val/20 >= 1 && this.nota20[1] > 0;) {
                val -= 20;
                n20 += 1;
            }
            for (;val/10 >= 1 && this.nota10[1] > 0;) {
                val -= 10;
                n10 += 1;
            }
            for (;val/5 >= 1 && this.nota5[1] > 0;) {
                val -= 5;
                n5 += 1
            }
            if (val === 0) {
                this.valorc -= valorantigo;
                this.nota100[1] -= n100;
                this.nota50[1] -= n50;
                this.nota20[1] -= n20;
                this.nota10[1] -= n10;
                this.nota5[1] -= n5;
            }
        }
        return;
    }
    cedulas(nota) {
        if (nota === 100) {
            return this.nota100[1];
        }
        if (nota === 50) {
            return this.nota50[1];
        }
        if (nota === 20) {
            return this.nota20[1];
        }
        if (nota === 10) {
            return this.nota10[1];
        }
        if (nota === 5) {
            return this.nota5[1];
        } else {
            return 0;
        }
    }
    get numeroSerie() {
        return this.numeroSeriec;
    }
    get valor() {
        return this.valorc;
    }
}
