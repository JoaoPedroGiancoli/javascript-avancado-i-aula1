class ListaNegociaoes {
    constructor(){

        this._negociacoes = []
    }

adiciona(negociacao) {
    this._negociacoes.push(negociacao);

    }

    //preciso ter acesso a essa lista pra exibir ela na minha pagina.

    get negociacoes(){

        //criar um arrei duplo concatenado ja com os dados da negociacoes em negaciacao controleer depois do cria negocicao!
        return [].concat(this._negociacoes);
    }
}