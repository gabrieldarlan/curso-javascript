import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Gabriel", 39562057828);

const contaCorrenteGabriel = new ContaCorrente(cliente1, 1001);
contaCorrenteGabriel.depositar(500)
contaCorrenteGabriel.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);
// console.log(contaPoupanca);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);