class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
    }

    sacar(valor) {        

        if (valor > 500) {
            console.log('Valor máximo para saque é de R$ 500,00');
        }

        this._saldo -= valor;
        
    }
}