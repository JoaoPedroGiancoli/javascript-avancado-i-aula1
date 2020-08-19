class NegociacaoController {
    // quando eu clicar em incluir ele vai adicionar uma negociacao nessa tabela

    constructor( ){
        //Jquery internament o query selection ele tem uma chamada this. o this do querysolector eh document, estou executando o query fora do contexto so com o dolar
        // quero tratar o query selector como uma funcao.
        //existe o metodo BIND (ainda mantendo a assossiacao com o document)
        let $ = document.querySelector.bind(document);
        // minha variavel tem o elemento do DOM que tem a quantidade
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        

    }


    adiciona(event){
        event.preventDefault();
        alert('nabo call no controller');
        
        //expressao global  g pra trocar hifen por virgula
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        // tres pontinhos significa que o array tem que ser desmembrado, segundo paremetro eh o segundo parametro do Date
        let data = new Date(...this._inputData.value.split('-').map((item, indice) => { if(indice == 1 ){
                return item - 1;
            }
                return item;
            }
        )
        );

      let negociacao = new Negociacao(data,this._inputQuantidade.value , this._inputValor.value)
            console.log(negociacao);
        // Para aero functions voce nao precisa colocar return se ter so uma instrucao, nem chaves.


        /* 
        
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
            );
            
            */
        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
     
        console.log(this._inputValor.value);
     
        //console.log(negociacao); 

    }


}