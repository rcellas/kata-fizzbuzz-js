// Escribe un programa que muestre en consola (con un print) los números del 1 al 100,(ambos incluidos y con un salto de líne entre cada impresión) substituyendo los siguientes:
// 1. Cuando el número sea múltiplo de 3, imprime Fizz en lugar del número
// 2. Cuando el número sea múltiplo de 5, imprime Buzz en lugar del número
// 3. Cuando el número sea múltiplo de 3 y 5, imprime FizzBuzz en lugar del número

function fizzbuzz(number){
    if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz"
    } else if(number % 3 === 0){
        return "Fizz"
    } else if (number % 5 === 0){
        return "Buzz"
    } return number
}

module.exports ={fizzbuzz}
