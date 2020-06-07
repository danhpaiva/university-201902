var raio, volumeEsfera;

raio = prompt("Informe o raio da esfera: ");

document.write("O raio da esfera é de: " + raio);
document.write("<br>")

//vesfera = 4 / 3 * π * (raio)3.
volumeEsfera = 4 / 3 * Math.PI * (raio ** 3);

document.write("<br>");
document.write("O volume da esfera é de: " + volumeEsfera);