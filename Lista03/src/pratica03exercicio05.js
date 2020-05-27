var numero1, numero2, logaritmo;

/* 
for ([inicialização]; [condição]; [expressão final])
   declaração 
*/

for (numero1 = parseInt(prompt("Informe o primeiro número real (Logaritmando): ")); numero1 < 1; numero1 = parseInt(prompt("O número precisa ser maior que 0:")));

document.write("Logaritmando: " + numero1);
document.write("<br>");

for (numero2 = parseInt(prompt("Informe o segundo número real (base): ")); numero2 < 1; numero2 = parseInt(prompt("O número precisa ser maior que 0: ")));

document.write("Base: " + numero2);
document.write("<br>");

//Cálculo do Logarítmo
logaritmo = Math.log(numero1) / Math.log(numero2);

document.write("Resultado Logarítmo: " + logaritmo + " .");