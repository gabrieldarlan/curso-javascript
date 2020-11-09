import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Gabriel", 39562057828);

const contaCorrenteGabriel = new Conta(0, cliente1, 1001);
contaCorrenteGabriel.depositar(500)
contaCorrenteGabriel.sacar(100)

const contaPoupanca = new Conta(50, cliente1, 1001);
console.log(contaPoupanca);
console.log(contaCorrenteGabriel);
