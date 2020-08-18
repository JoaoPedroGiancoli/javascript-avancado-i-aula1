/* porque colocar uma cerquilha no data? */

/* perguntar ao heitor se pega a tag html do tr pela funcao: var tr = document.createElement('tr'); */



var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

/* pegar o elemento tbody do html 
pq eu nao coloquei dentro do query selector? pq a cada submissao ia ter que buscar o tbody daqui eu ja faco um cast e nao preciso buscar no dom */
var tbody = document.querySelector('table tbody')

/* funcao de callback! */

/*QUEREMOS PEGAR A TAG FORM DO HTML PARA SALVAR OS CAMPOS DE DATA QUANTIDADE E VALOR. */
    document.querySelector('.form').addEventListener('submit', function(event) {

        /* nao quero que voce recarregue a pagina */

        event.preventDefault();

        /* **alert('nabo'); */

        /* usando javascript vanila puro, sem Jquery */    
        var tr = document.createElement('tr');

        /* interar no array sem precisar fazer o loop for */
        campos.forEach(function(campo){

            
    /* ja tenho na minha primeira td que equivale a data? tenho!
    o que vem entre a tag do td */

            var td = document.createElement('td');
            td.textContent = campo.value;
            tr.appendChild(td);
        });

var tdVolume = document.createElement('td');

    /* aplicacao do form de vendas, multiplica quantidade e valor para compra*/
tdVolume.textContent = campos[1].value * campos[2].value;


    /* falta mudar o tdvolume do meu appendchild */
tr.appendChild(tdVolume);

    /* agora tenho que incluir minha tr como FILHA de tbody(next vartbody) */

tbody.appendChild(tr);

/* como eu quero colocar valores padroes eu nao posso simplesmente apagar tudo entao: */

campos[0].value = '';
campos[1].value = 1;
campos[2].value = 0;

/*focus volta o formulario pra onde vc deseja comecar novamente! */
campos[0].focus()

});

/* novo request, totalizacao do volume no rodape! 
    nao podde ser modificada ou alterada a lista de negociacoes.
*/

/* nosso codigo tem apresentacao naba, 
aplicar modelo MVC(separacao entre model e view) */