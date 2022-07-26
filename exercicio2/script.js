const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringTrim = minhaString.trim()

console.log(minhaStringTrim)

console.log(`Sem o comando Trim 
há ${minhaString.length} caracteres.

\nCom o comando Trim a varíavel 
fica com ${minhaStringTrim.length} caracteres.`)

const textoSubstituido = minhaString.replace('________.      ', 'sticioso.')
console.log(textoSubstituido)