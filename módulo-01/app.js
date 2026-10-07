//const nome="Nomezinho"; não ser reatribuída
//let contador-uso-nome-que-eu-quiser=0; - o valor pode ser alterado
//var antigo = "evite"; forma antiga, não use!
//nome="Jooooohnnn";
console.log("É o que temos para o momento");
let nomeDaVariavel="valor da variável";
let outraVariavel="valor de outra variável";
let variavelNumero="1980";
let variavelCheiroNaSala=false;

console.log(nomeDaVariavel);
console.log(outraVariavel);
console.log(variavelNumero);
console.log(variavelCheiroNaSala);

//dia 07-10

const texto = "Pense em um texto lindo aqui";
const num=42;
const ativo=true

console.log(typeof texto);
console.log(typeof num);
console.log(typeof ativo);

const aluno="Rafaella";
const conceito1T=8.5;
const conceito2T=2.0;
const conceito3T=5.0;

const media=(conceito1T + conceito2T + conceito3T)/3;
const resultado=media>=7 ? "Aprovado : "Reprovado";

console.log(`O aluno ${aluno} obteve média ${media.toFixed(2)} e foi ${resultado}`);

document.getElementById("saida").textContent=`O aluno ${aluno} obteve média ${media.toFixed(2)} e foi ${resultado}`;
