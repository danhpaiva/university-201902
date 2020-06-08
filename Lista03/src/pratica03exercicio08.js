var capitalInicial, taxaJuros, prazo, montante;

capitalInicial = parseFloat(prompt("Informe o capital inicial: "));

document.write("O capital inicial é de: R$ " + capitalInicial + " .");
document.write("<br>");

taxaJuros = parseInt(prompt("Informe a taxa de juros em %: "));

taxaJuros /= 100;

document.write("A taxa de juros em % é de :" + taxaJuros + " .");
document.write("<br>");

prazo = parseInt(prompt("Informe o tempo de investimento: "));

document.write("O tempo de investimento é de : " + prazo + " .");
document.write("<br>");

//Fórmula: M = C * (1 + i)t
montante = parseInt(capitalInicial * (1 + taxaJuros) ** prazo);

document.write("O montante é de: R$ " + montante + " ."); 
