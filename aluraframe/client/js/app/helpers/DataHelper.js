//qual a necessidade de um new Date, onde vai esses dados?

class DateHelper {

    constructor(){

        throw new Error('DateHelper nao pode ser instanciado');
    }

    static dataParaTexto(data) {

       return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;

    }
    static textoParaData(texto) {

        //seguir esse padrao de digitos
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('deve estar no formato yyyy-mm-dd')};
        //extrai os parametros e passa pra minha data
         return  new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        

        
         
        }

         //esse DateHelper nao tem constructer nem nada
}

//quero poder invocar direto da definicao da classe