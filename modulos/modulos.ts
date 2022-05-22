// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
import retangulo from './retangulo'
import { areaCircunferencia as circ } from './circunferencia'

// console.log("🚀 ~ file: modulos.ts ~ line 2 ~ areaRetangulo", areaRetangulo(112, 24))
console.log("🚀 ~ file: modulos.ts ~ line 2 ~ areaRetangulo", retangulo(112, 24))
// console.log("🚀 ~ file: modulos.ts ~ line 3 ~ areaCircunferencia", areaCircunferencia(12))
console.log("🚀 ~ file: modulos.ts ~ line 3 ~ areaCircunferencia", circ(12))


const { digaOi } = require('./novo')
console.log(digaOi('Ana'))