//Casos de Teste
const agenda = new Agenda('Marcio', '00010010');
console.log(agenda.nome); //Marcio
console.log(agenda.nome === 'Marcio');
console.log(agenda.numero); //00010010
console.log(agenda.numero === '00010010');

//Não deve surtir efeito as seguintes linhas
agenda.nome = 'Mauricio';
agenda.numero = '12345678';
console.log(agenda.nome === 'Marcio');
console.log(agenda.numero === '00010010');

console.log(agenda.agenda);

agenda.adicionar('Raquel', '10101010');
agenda.adicionar('Tiago', '01010101');
console.log(agenda.agenda);

//Não deve surtir afeita os seguintes linhas
agenda.adicionar(1, '10101010');
agenda.adicionar('Tiago');
console.log(agenda.agenda);

agenda.remover(1);
console.log(agenda.agenda);

//Não deve surtir afeita os seguintes linhas
agenda.remover('Marcio');
console.log(agenda.agenda);

agenda.alterar(1, 'Telecken');
console.log(agenda.agenda);

agenda.adicionar('Cris', '00000000');
agenda.adicionar('Marcos', '00000111');
agenda.adicionar('Marceline', '11111111');
agenda.adicionar('Rarra', '12345678');
agenda.adicionar('Carinha de BD', '46468254');
console.log(agenda.listar('Cris'));
console.log(agenda.listar('Ma'));
console.log(agenda.listar('Mar'));
console.log(agenda.listar('Ra'));
console.log(agenda.listar('Rarra'));