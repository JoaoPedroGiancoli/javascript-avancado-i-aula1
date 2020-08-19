//qual a necessidade de um new Date, onde vai esses dados?

class DateHelper {

    dataParaTexto(data) {

       return data.getDate() + '/'  + (data.getMonth()+1) + '/' + data.getFullYear();

    }
    textoParaData(texto) {
        //extrai os parametros e passa pra minha data
         return  new Date(...texto.split('-').map((item, indice) => item - indice % 2));}
}
