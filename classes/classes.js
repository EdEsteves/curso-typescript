"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversario", aniversario.dia);
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversario", aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log("🚀 ~ file: classes.ts ~ line 21 ~ casamento", casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversarioEsperto", aniversarioEsperto.dia);
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversarioEsperto", aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log("🚀 ~ file: classes.ts ~ line 21 ~ casamentoEsperto", casamentoEsperto);
//Desafio Classe Produto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        // this.desconto = this.preco * desconto
    }
    precoComDesconto() {
        // return this.desconto ? this.preco - this.preco * this.desconto : this.preco
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% OFF)`;
    }
}
const produto1 = new Produto('Geladeira', 1500);
console.log(produto1.resumo());
const produto2 = new Produto('Airfrayer', 500.20, 0.05);
console.log(produto2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log("🚀 ~ file: classes.ts ~ line 96 ~ carro1", carro1);
Array(50).fill(0).forEach(() => carro1.frear());
console.log("🚀 ~ file: classes.ts ~ line 96 ~ carro1", carro1);
// Simular "Erros"
// carro1.velocidadeAtual = 300
// console.log("🚀 ~ file: classes.ts ~ line 103 ~ carro1.velocidadeAtual", carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log("🚀 ~ file: classes.ts ~ line 106 ~ carro1.velocidadeMaxima", carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log("🚀 ~ file: classes.ts ~ line 103 ~ carro1.velocidadeAtual", carro1.velocidadeAtual)
// Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadenMaxima) {
        super('ferrari', modelo, velocidadenMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 15;
console.log("🚀 ~ file: classes.ts ~ line 146 ~ pessoa1", pessoa1);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
// Classe Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResulado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3);
console.log(c1.getResulado());
c1 = new Multiplicacao();
c1.executar(2, 3);
console.log(c1.getResulado());
//Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico()
console.log(Unico.getInstance().agora());
//Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log("🚀 ~ file: classes.ts ~ line 227 ~ turboHelice", turboHelice);
//# sourceMappingURL=classes.js.map