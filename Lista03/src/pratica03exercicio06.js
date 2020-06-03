var area, raio;

raio = prompt("Informe o raio do círculo: ");

document.write("O raio do círculo é: " + raio);

//Cálculo da área: acírculo = π * (raio)2

area = Math.PI * (raio ** 2);

document.write("<br>")
document.write("A área é de: "+ area);
