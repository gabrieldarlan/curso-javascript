import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Gabriel", 10000, 12345678945);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Darlan", 5000, 13245687935);
gerente.cadastrarSenha("123")

const cliente = new Cliente("lais", 13456464879, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(diretorEstaLogado,gerenteEstaLogado);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);
