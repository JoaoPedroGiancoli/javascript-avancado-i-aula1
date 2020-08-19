/* 
Ou seja, a função bind, presente em todas as funções, permite indicar qual será o valor de this quando ela for executada
*/
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
        this._listaNegociacoes = new ListaNegociaoes();
        
    }

    adiciona(event){
        event.preventDefault();
        alert('nabo call no controller');


        // instanciando a class DataHelper
        event.preventDefault();

        // let helper = new DateHelper();
        //fazendo Lista Negociacoes SEM VARIAVEL! puxando de cria negociacao
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        //vai gravar duas negociacoes ??? - TENTANDO EVITAR O PUSH
        //this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
        
        this._limpaFormulario(); 
            
                // console.log(helper.textoParaData(this._inputData.value));
                    
                //console.log(dataParaTexto(negociacao.data));

                // console.log(DateHelper().dataParaTexto(negociacao.data))

                // console.log(this.dataParaTexto(negociacao.data))
    }
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
      }
    
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
    
        this._inputData.focus();
    
                }


    
}
        
        //expressao global  g pra trocar hifen por virgula
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        // tres pontinhos significa que o array tem que ser desmembrado, segundo paremetro eh o segundo parametro do Date
      
        // Para aero functions voce nao precisa colocar return se ter so uma instrucao, nem chaves.


        /* 
        
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
            );
            
            */

           
     
        //console.log(negociacao); 
        
        // NAO PRECISA MAIS POR CAUSA DO DATA HELPER let diaMesAno = negociacao.data.getDate()  + '/' + (negociacao.data.getMonth()+1) + '/' + negociacao.data.getFullYear();
    

