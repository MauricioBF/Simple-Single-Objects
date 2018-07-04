class Agenda {
    constructor(nome, numero) {
        this.nomec = nome;
        this.numeroc = numero;
        this.agendac = [[nome, numero]];
    }
    adicionar(nome, numero) {
        this.agendac[this.agendac.length] = [nome, numero];
    }
    listar(id) {
        let list = '';
        if(typeof id === 'string' && id !== 'Eu') {
            for (let cont = 0; cont < this.agendac.length; cont++) {
                if (this.agendac[cont][0].indexOf(id) > -1) {
                    list += cont + ' Nome: ' + this.agendac[cont][0] + ' - Numero: ' + this.agendac[cont][1] + '\n';
                }
            }
        }
        if(typeof id === 'number') {
            list += id + ' Nome: ' + this.agendac[id][0] + ' - Numero: ' + this.agendac[id][1] + '\n';
        }
        if (id === 'Eu') {
            list += '0 Nome: ' + this.agendac[0][0] + ' - Numero: ' + this.agendac[0][1] + '\n';
        }
        return list;
    }
    alterar(id, tipo, novo) {
        if(tipo === 'numero') {
            this.agendac[id][1] = novo;
        }
        if(tipo === 'nome') {
            this.agendac[id][0] = novo;
        }
    }
    remover(id) {
        if(id > 0) {
            this.agendac = this.agendac.slice(0, id).concat(this.agendac.slice(id + 1, this.agendac.length))
        }
    }
    get agenda() {
        let numeros = '';
        for (let cont = 0; cont < this.agendac.length; cont++) {
            numeros += cont + ' Nome: ' + this.agendac[cont][0] + ' - Numero: ' + this.agendac[cont][1] + '\n';
        }
        return numeros;
    }
    get nome() {
        return this.nomec;
    }
    get numero() {
        return this.numeroc;
    }
}