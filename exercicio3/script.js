//Crie a const para a frase aqui

let casa= 'verde'
let portao= 'azul'
const msng= 'boas vindas'

const frase =`Jorge tem uma casa ${casa} e com portão ${portao}, com os dizeres: 
"${msng.toUpperCase()},` + ("mas não deixe o gato sair").toUpperCase()

console.log(frase)

console.log (frase.replace('verde','rosa').replace('azul','laranja'))
