function converte(palavraTriangulo) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codigos = [];
    for (var i in palavraTriangulo) {
        codigos.push(
            alfabeto.indexOf(palavraTriangulo[i].toUpperCase()) + 1// +1 para a letra A iniciar com 1
        ); 
    }
    return codigos;
}

var palavra = ("SKY")
var posicaoLetra = converte(palavra);
var soma = 0
for (var i in posicaoLetra) {  
    soma += posicaoLetra[i]
}

var resultado = []
for (var n=1; n <= soma; n++){
    resultado[n-1]=(n*(n+1)/2) 
}

var posicao = resultado.findIndex(item => item === soma)
if (posicao >= 0){
    console.log("Palavra Triangulo: "+palavra)
    console.log(`Posição ${posicao+1}`)
}else{
    console.log("Palavra Triangulo: "+palavra)
    console.log("Posição:"+posicao)
}