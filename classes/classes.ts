class Data {
	// public por padrao
	dia: number
	public mes: number
	ano: number

	constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
		this.dia = dia
		this.mes = mes
		this.ano = ano
	}
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversario", aniversario.dia)
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversario", aniversario)


const casamento = new Data // posso omitir os "()"
casamento.ano = 2017
console.log("🚀 ~ file: classes.ts ~ line 21 ~ casamento", casamento)


class DataEsperta {
	constructor(public dia: number = 1,public mes: number = 1,public ano: number = 1970) {		
	}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversarioEsperto", aniversarioEsperto.dia)
console.log("🚀 ~ file: classes.ts ~ line 14 ~ aniversarioEsperto", aniversarioEsperto)


const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log("🚀 ~ file: classes.ts ~ line 21 ~ casamentoEsperto", casamentoEsperto)



//Desafio Classe Produto
class Produto {	  
	constructor(public nome: string,public preco: number,public desconto: number = 0){
		// this.desconto = this.preco * desconto
	}

	public precoComDesconto(): number {
		// return this.desconto ? this.preco - this.preco * this.desconto : this.preco
		return this.preco * (1 - this.desconto)
	}

	public resumo(): string {
		return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% OFF)`
	}
}

const produto1 = new Produto('Geladeira', 1500)
console.log(produto1.resumo())

const produto2 = new Produto('Airfrayer', 500.20, 0.05)
console.log(produto2.resumo())


class Carro {
	private velocidadeAtual: number = 0
	
	constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){
		
	}

	protected alterarVelocidade(delta: number): number {
		const novaVelocidade = this.velocidadeAtual + delta
		const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

		if(velocidadeValida) {
			this.velocidadeAtual = novaVelocidade
		} else {
			this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
		}

		return this.velocidadeAtual
	}

	public acelerar(): number {
		return this.alterarVelocidade(5)
	}
	public frear(): number {
		return this.alterarVelocidade(-5)
	}
}


const carro1 = new Carro('Ford', 'Ka', 185)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log("🚀 ~ file: classes.ts ~ line 96 ~ carro1", carro1)

Array(50).fill(0).forEach(() => carro1.frear())
console.log("🚀 ~ file: classes.ts ~ line 96 ~ carro1", carro1)

// Simular "Erros"
// carro1.velocidadeAtual = 300
// console.log("🚀 ~ file: classes.ts ~ line 103 ~ carro1.velocidadeAtual", carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log("🚀 ~ file: classes.ts ~ line 106 ~ carro1.velocidadeMaxima", carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log("🚀 ~ file: classes.ts ~ line 103 ~ carro1.velocidadeAtual", carro1.velocidadeAtual)

// Herança
class Ferrari extends Carro {
	constructor(modelo: string, velocidadenMaxima: number){
		super('ferrari', modelo, velocidadenMaxima)
	}

	public acelerar(): number {
		return this.alterarVelocidade(20)
	}
	public frear(): number {
		return this.alterarVelocidade(-15)
	}
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters
class Pessoa {
	private _idade: number = 0

	get idade(): number {
		return this._idade
	}

	
	set idade(valor: number) {
		if(valor >= 0 && valor <= 120){
			this._idade = valor;
		}
	}
}

const pessoa1 = new Pessoa
pessoa1.idade = 15
console.log("🚀 ~ file: classes.ts ~ line 146 ~ pessoa1", pessoa1)


// Atributos e métodos estáticos
class Matematica {
	static PI: number = 3.1416

	static areaCirc(raio: number): number {
		return Matematica.PI * raio * raio
	}
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))


// Classe Abstrata
abstract class Calculo {
	protected resultado: number = 0

	abstract executar(...numeros: number[]): void

	getResulado(): number{
		return this.resultado
	}
}

class Soma extends Calculo {
	executar(...numeros: number[]): void {
		this.resultado = numeros.reduce((t, a) => t + a)
	}
}

class Multiplicacao extends Calculo {
	executar(...numeros: number[]): void {
		this.resultado = numeros.reduce((t, a) => t * a)
	}
}

let c1: Calculo = new Soma()
c1.executar(2,3)
console.log(c1.getResulado())

c1 = new Multiplicacao()
c1.executar(2,3)
console.log(c1.getResulado())

//Singleton
class Unico {
	private static instance: Unico = new Unico
	private constructor() {}

	static getInstance(): Unico {
		return Unico.instance
	}

	agora(): Date {
		return new Date
	}
}

// const errado = new Unico()
console.log(Unico.getInstance().agora())


//Somente Leitura
class Aviao {
	public readonly modelo: string

	constructor(modelo: string, public readonly prefixo: string) {
		this.modelo = modelo
	}

}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log("🚀 ~ file: classes.ts ~ line 227 ~ turboHelice", turboHelice)
