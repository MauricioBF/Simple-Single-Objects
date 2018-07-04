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
            console.log(val);
            if (val === 0) {
                this.valorc -= valorantigo;
                this.nota100[1] -= n100;
                this.nota50[1] -= n50;
                this.nota20[1] -= n20;
                this.nota10[1] -= n10;
                this.nota5[1] -= n5;
            }
            console.log(this.valorc);
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

//Casos de teste

const atm = new ATM(2344499);
console.log(atm.numeroSerie === 2344499);
// a linha a seguir não deve fazer efeito
atm.numeroSerie = 34883444;
console.log(atm.numeroSerie === 2344499);
// o ATM não tem dinheiro no início
console.log(atm.valor); // 0
console.log(atm.valor === 0);
// abastecendo com 33 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(5)); // 0
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(50) === 0);
// mesmo os que não existem podem ser consultados, mas retornam 0
console.log(atm.cedulas(3)); // 0
console.log(atm.cedulas(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.cedulas(3) === 0);
// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais
console.log(atm.valor === 3300);
// retirada rejeitada
atm.retirar(350); // não há cédulas de R$ 50,00
console.log(atm.cedulas(100) === 33);
console.log(atm.valor === 3300);
// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.cedulas(100) === 0);
console.log(atm.valor === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 10);
console.log(atm.valor === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 8);
console.log(atm.valor === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.cedulas(10) === 6);
console.log(atm.cedulas(50) === 7);
console.log(atm.valor === 410); // 6 * 10 + 7 * 50
// até aqui 0.5 pts
// incluir casos de teste pessoais com retiradas
// quem combinam 3, 4 e 5 cédulas (+0.5 pts)
// ---------------------------------------------------