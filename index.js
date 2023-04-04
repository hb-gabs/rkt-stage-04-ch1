alert("Insira dois números!");
let n1 = Number(prompt("Insira o primeiro número: "));
let n2 = Number(prompt("Insira o segundo número: "));

if (n1 && n2) {
alert(
`A soma dos números é: ${n1+n2}\n
A diferença dos números é: ${n1-n2}\n
O produto dos números é: ${n1*n2}\n
A divisão dos números é: ${n1/n2}\n
O resto da divisão dos números é ${n1%n2}\n
A soma dos números é ${(n1+n2)%2==0 ? `par` : `ímpar`}\n
Os números são ${n1===n2 ? `iguais` : `diferentes`}`
);
} else {
    alert("Dados inválidos!");
}