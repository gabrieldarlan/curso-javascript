import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Gabriel", 39562057828);
const cliente2 = new Cliente("Alice", 98745612300);
const contaCorrenteGabriel = new ContaCorrente(cliente1, 1001);
contaCorrenteGabriel.depositar(500)
const contaCorrenteAlice = new ContaCorrente(cliente2, 2002);
contaCorrenteAlice.depositar(200)


console.log(ContaCorrente.numeroDeContas);