function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
	return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b?: number}) {
	return function(_: Function): void {
		console.log(obj.a + ' ' + obj.b)
	}
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
	console.log('Carregado...')
	return class extends construtor {
		constructor(...args: any[]) {
			console.log('Antes...')
			super(...args)
			console.log('Depois...')
		}
	}
}

// new Eletrodomesticos()

interface Eletrodomesticos {
	imprimir?(): void
}

// @logarClasse
// @decorator({ a: 'Teste', b: 4})
// @decorator({ a: 'Teste'})
// @logarClasseSe(true)
// @logarObjeto
@imprimivel
class Eletrodomesticos {
	constructor() {
		console.log('Novo ....')
	}
}

function imprimivel(construtor: Function) {
	construtor.prototype.imprimir = function () {
		console.log(this)
	}
}

// (<any>new Eletrodomesticos()).imprimir()
const eletro = new Eletrodomesticos()
eletro.imprimir && eletro.imprimir()



// Desafio Decorator perfilAdmin
const usuarioLogado = {
	nome: 'Guilherme Filho',
	email: 'guigui@gmail.com',
	admin: true
}

@perfilAdmin
class MudancaAdministrativa {
	critico() {
		console.log('Algo crítico foi alterado!')
	}
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
	return class extends construtor {
		constructor(...args: any[]) {
			super(...args)
			if(!usuarioLogado || !usuarioLogado.admin){
				throw new Error('Sem permissão')
			}
		}
	}	
}



class ContaCorrente {
	@naoNegativo
	private saldo: number

	constructor(saldo: number){
		this.saldo = saldo
	}

	@congelar
	sacar(@paramInfo valor: number){
		if(valor <= this.saldo) {
			this.saldo -= valor
		} else {
			return false
		}
	}
	
	@congelar
	getSaldo() {
		return this.saldo
	}
}

const cc = new ContaCorrente(10248.57)

cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function() {
// 	return this['saldo'] + 7000
// }
console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomePropriedade: string,
	descritor: PropertyDescriptor) {
		console.log(alvo)
		console.log(nomePropriedade)
		descritor.writable = false
}


function naoNegativo(alvo: any, nomePropriedade: string){
	console.log('valor antigo >>', alvo[nomePropriedade])
	delete alvo[nomePropriedade]
	Object.defineProperty(alvo, nomePropriedade, {
		get: function(): any {
			return alvo['_' + nomePropriedade]
		},
		set: function(valor: any): void {
			console.log("valor do decorator", valor)
			if(valor < 0) {
				throw new Error('Saldo inválido')
			} else {
				alvo['_' + nomePropriedade] = valor
			}
		}
	})
}


function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
	console.log(`Alvo: ${alvo}`)
	console.log(`Método: ${nomeMetodo}`)
	console.log(`Índice: ${indiceParam}`)
}