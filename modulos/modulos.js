"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
// console.log("🚀 ~ file: modulos.ts ~ line 2 ~ areaRetangulo", areaRetangulo(112, 24))
console.log("🚀 ~ file: modulos.ts ~ line 2 ~ areaRetangulo", (0, retangulo_1.default)(112, 24));
// console.log("🚀 ~ file: modulos.ts ~ line 3 ~ areaCircunferencia", areaCircunferencia(12))
console.log("🚀 ~ file: modulos.ts ~ line 3 ~ areaCircunferencia", (0, circunferencia_1.areaCircunferencia)(12));
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map