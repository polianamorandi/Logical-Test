function somaDeQuadrado(vet) {
    var vet = [3, 6, 9, 12, 15, 20];
    var soma = 0;

    console.log('Valores a serem somados: '+ vet)
    for (var i = 0; i < vet.length; i++) {
        vet[i] = Math.pow(vet[i], 2)
        soma += vet[i]
    }
    console.log('Soma:' + soma)
} let res = somaDeQuadrado()