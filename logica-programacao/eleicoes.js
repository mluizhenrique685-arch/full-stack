let eleições = Number(prompt("Digite a primeira eleição que você viu"));
let anoAtual = new Date().getFullYear();

while(eleições <= anoAtual) {

    let tipoAno = (anoInicio % 2 === 0) ? "ano par" : "ano impar";
    document.write("eleição de: " + eleições + "<hr>" + tipoAno + "<br>");

    eleições = eleições + 2;


}