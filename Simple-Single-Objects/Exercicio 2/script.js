class Conta {
    constructor(agencia, numero, saldo = 500) {
        this.agenciac = agencia;
        this.numeroc = numero;
        this.saldoc = saldo;
    }
    toString() {
        return 'ag ' + this.agenciac + ' cc ' + this.numeroc + ' saldo ' + this.saldoc + '.00';
    }
    sacar(valor) {
        if (valor <= this.saldoc) {
            this.saldoc -= valor;
        }
        return;
    }
    depositarEmDinheiro(valor) {
        if (valor <= 1000 && valor >= 0) {
            this.saldoc += valor;
        }
        return;
    }
    depositarEmCheque(valor) {
        if (valor <= 10000 && valor >= 0) {
            this.saldoc += valor;
        }
    }
    get agencia() {
        return this.agenciac;
    }
    get numero() {
        return this.numeroc;
    }
    get saldo() {
        return this.saldoc;
    }
}
