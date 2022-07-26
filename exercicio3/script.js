//Crie a const para a frase aqui

let casa= 'verde'
let portao= 'azul'
const msng= 'boas vindas'

const frase =`Jorge tem uma casa ${casa} e com portão ${portao}, com os dizeres: 
"${msng.toUpperCase()},` + ("mas não deixe o gato sair\'").toUpperCase()

console.log(frase)

const fraseNova = frase.replace('verde','rosa').replace('azul','laranja')
console.log (fraseNova)

const temVerde = fraseNova.includes('verde')
const temLaranja = fraseNova.includes('laranja')

console.log(`A nova string inclui a palavra verde: ${temVerde}
\nA nova string inclui a palavra laranja: ${temLaranja}`)
