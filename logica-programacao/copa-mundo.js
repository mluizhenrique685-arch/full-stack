let anoInicio = Number(prompt("Digite o nome da primeira copa que você viu"));
let anoAtual = 2025;

while(anoInicio <= anoAtual) {
    document.write("copa do mundo: " + anoInicio + "<br>");

    anoInicio = anoInicio + 4;
}