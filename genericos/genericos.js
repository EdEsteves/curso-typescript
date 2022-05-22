"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(24).length);
console.log(echo({ nome: 'Carlos', idade: 14 }));
//Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(24));
console.log(echoMelhorado({ nome: 'Carlos', idade: 14 }));
// Generics disponeis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.9);
// avaliacoes.push('5.5')
console.log("🚀 ~ file: genericos.ts ~ line 20 ~ avaliacoes", avaliacoes);
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([2, 4, 5]);
imprimir([2, 4, 5]);
imprimir(['Ana', 'Dale', 'dole']);
imprimir([
    { nome: 'Fulano', idade: 9 },
    { nome: 'Cicrano', idade: 34 },
    { nome: 'Beltrano', idade: 8 },
]);
imprimir([
    { nome: 'Fulano', idade: 9 },
    { nome: 'Cicrano', idade: 34 },
    { nome: 'Beltrano', idade: 8 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
//Classe com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, ' Opa').executar())
// console.log(new OperacaoBinaria({}, null).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
console.log(new SomaBinaria(30, 434).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        // this.fila.shift()
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Guia', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
class Mapa {
    constructor() {
        this.items = new Array();
    }
    obter(chave) {
        const resultado = this.items.filter(item => item.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (!encontrado) {
            this.items.push(par);
        }
        else {
            encontrado.valor = par.valor;
        }
    }
    limpar() {
        this.items = new Array();
    }
    imprimir() {
        console.log(this.items);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=genericos.js.map