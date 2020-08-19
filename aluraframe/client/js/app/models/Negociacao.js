        /* 
        var nao tem escopo de bloco, let tem!
        */

class Negociacao {

    //definindo os atributos
    constructor(data, quantidade, valor){
        //this eh uma variavel "implicita" para a referencia

        // eu nao vou confiar na data que vc me passou pois eh passivel de lteracao entao vou usar um novo metodo pra data. evito alteracao!
        //
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // object freeze eh shellow (lol) raso, como data eh um objeto ele nao entra nas propriedades do freeze! ele nao eh DEEP!
        Object.freeze(this);
    }

    /* metodo eh uma especie de funcao, funcao dentro de classe eh metodo,fora da classe eh funcao */


    // criando variaveis privadas `0`. propriedade geter para propriedade de leitura
    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {
        /*  contornando o problema do freeze, 
        usando o getTime pre tornar um numero */
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}