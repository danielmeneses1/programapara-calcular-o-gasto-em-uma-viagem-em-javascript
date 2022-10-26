/** Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
 */


let tipoDeCombustivel = "alcool"
let preco = 0
if (tipoDeCombustivel === "alcool"){
    preco = 4.5;
} else if(tipoDeCombustivel === "gasolina"){
    preco = 5.79;
}
let tamanho_da_viagem = 100;
let kmPorLitro = 10


let gasto = (tamanho_da_viagem/kmPorLitro)* preco;

console.log(gasto);

