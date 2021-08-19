function somaDeQuadrado(vet) {
    var vet = [1, 2, 3, 4, 5, 6];
    var soma = 0;

    console.log('Valores a serem somados: '+ vet)
    for (var i = 0; i < vet.length; i++) {
        vet[i] = Math.pow(vet[i], 2)
        soma += vet[i]
    }
    console.log('Soma:' + soma)
} 
somaDeQuadrado()