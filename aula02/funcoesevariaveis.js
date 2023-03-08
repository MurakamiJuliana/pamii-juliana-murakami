//TIPOS DE DECLARAÇÃO DE VARIÁVEL

//Textos em aspas duplas
var variavel1 = "Olá"  // Forma antiga, é acessada em todo o arquivo
let variavel2 = 3     // Mais usada, é acessada somente dentro de um "método" específico 
const variavel3 = 8   

console.log(variavel1, "Turminha do ", variavel2, " ano")  
// console.log: Aparecer no console (Tipo o System.out.println)
// Ctrl Alt N : executar o código no console
// Concatenação: , ou + (não deixa espaço entre as variáveis, porém não é muito utilizado)

console.log(variavel2 + variavel3)

// Mostrar o tipo de variável
console.log(typeof variavel1)
console.log(typeof variavel2)


// Formato JSON - JavaScript Notation Object 
const obj = {
    nome: "João", 
    signo: "Escorpião"
}

console.log(obj)
console.log(typeof obj)

// Para mostrar sem as {}
console.log(obj.nome, obj.signo)
