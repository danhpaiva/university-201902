var capitalInicial, taxaJuros, prazo, montante;

capitalInicial = prompt("Informe o capital inicial: ");

document.write("O capital inicial é de: " + capitalInicial);
document.write("<br>");

taxaJuros = prompt("Informe a taxa de juros: ");

document.write("A taxa de juros é de " + taxaJuros);
document.write("<br>");

prazo = prompt("Informe o tempo de investimento: ");

document.write("O tempo de investimento é de : " + prazo);
document.write("<br>");

//M = C * (1 + i)t

montante = capitalInicial * (1 + taxaJuros) ** prazo;

