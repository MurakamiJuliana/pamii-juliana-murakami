let num1 = 2
const num2 = 3  // Não pode ser sobrescrito (mas tem gambiarra)

// Criar uma função (é obrigatório ter um retorno)
function soma(){
    return num1 + num2
}

// Chamar a função
console.log(soma())

// Exemplo de que const não pode ser sobrescrita 

/* num1 = 6
   num2 = 9

  console.log(soma())
*/

// Criar uma Função 2: Passar parâmetros (Gambiarra para sobrescrever const)
const funcaoSoma = (a, b) =>{
    return a + b
}

console.log(funcaoSoma(10, 8))
console.log(funcaoSoma(7, 30))

// Ctrl ; para comentário automático