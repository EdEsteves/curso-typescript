// let & const
let seraQuePode = '?' //hosting
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
	let acao = 'Colocar o casaco!'
	console.log(acao)
}

const cpf: string = '123.456.789-00'
// cpf = "321.456.675-22"
console.log(cpf)


var segredo = 'externo'
function revelar(): void {
	const segredo = 'interno'
	console.log(segredo)
}
revelar()
console.log(segredo)

{
	const def = 'def'
	console.log(def)
}
// console.log(def)

for(let i = 0; i < 10; i++) {
	console.log(i)
}
// console.log(i)

// arrow function
function somar(n1: number, n2: number): number {
	return n1 + n2
}
console.log(somar(2,2))

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(3, 2))

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

// this
// function normalComThis() {
// 	console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })

// normalComThisEspecial()

// const arrowComThis = () => console.log(this)

// arrowComThis()

// const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' })

// arrowComThisEspecial()


// Parâmetros padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
	console.log(inicio)
	while(inicio > fim){
		inicio--
		console.log(inicio)
	}
	console.log('Fim')
}

contagemRegressiva()
contagemRegressiva(4)


// Rest & Spread
const numbers: number[] = [1, 10, 99, -5]
// console.log(Math.max(numbers))
// console.log(Math.max(1, 10, 99, -5))
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

function retornaArray(...args: number[]): number[] {
	return args
}

const numeros = retornaArray(1, 2, 4, 5, 6)
console.log("🚀 ~ file: ecmascript.ts ~ line 99 ~ numeros", numeros)
console.log(retornaArray(...numbers))


// Rest & Spread (tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]



function tuplaParam1(a: number, b: string, c: boolean): void {
	console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)


function tuplaParam2(...params: [number, string, boolean]): void {	
	// console.log(Array.isArray(params))
	console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)


// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log("🚀 ~ file: ecmascript.ts ~ line 129 ~ motor", motor)
console.log("🚀 ~ file: ecmascript.ts ~ line 128 ~ ano", ano)

// Destructuring (object)
const item = {
	nome: 'SSD 480GB',
	preco: 200,
	caracteristicas: {
		w: 'Importado'
	}
}

const nomeItem = item.nome
console.log("🚀 ~ file: ecmascript.ts ~ line 139 ~ nomeItem", nomeItem)
const precoItem = item.preco
console.log("🚀 ~ file: ecmascript.ts ~ line 141 ~ precoItem", precoItem)
const { nome: n, preco: p , caracteristicas: { w } } = item
console.log(n)
console.log(p)
console.log(w)


//Template String
const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '9'
// const boasVindas = 'Boas vindas ' + usuarioID + ' Notificações: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)

// Desafios

// exercício 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// exercício 2
const dizerOla = (nome: string = "Pessoa"): void => console.log("Ola, " + nome)

dizerOla()
dizerOla("Anna")

// exercício 3
const nums1: number[] = [-3, 33, 38, 5, -9]
console.log(Math.min(...nums1))


// exercício 4
const array: number[] = [55, 20]
array.push(...nums1)
console.log(array)


// exercício 5
const notas: number[] = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// exercício 6
const cientista: { primeiroNome: string, experiencia: number } = {primeiroNome: "Will", experiencia: 12}
const { primeiroNome: pn, experiencia: e } = cientista
console.log(pn, e)


// Callback
function espera3s(callback: (dado: string) => void){
	setTimeout(() => {
		callback('3 segundos depois')
	}, 3000)
}

// espera3s(function(resultado: string){
// 	console.log(resultado)
// })

function espera3sPromise(){
	return new Promise((resolve: any) => {
		setTimeout(() => {
			resolve('3 segundos depois promise')
		}, 3000)
	})
}

// espera3sPromise()
// 	.then(dado => console.log(dado))


fetch('https://swapi.dev/api/people/1')
	.then(res => res.json())
	.then(personagem => personagem.films)
	.then(films => fetch(films[0]))
	.then(resFilm => resFilm.json())
	.then(filme => console.log(filme))
	.catch(err => console.log('Catch!! ' + err))