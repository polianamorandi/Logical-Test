function fibonacci(valor) {
    var anterior = 0
    var atual = 1
    var proximo = 1
   
    for (let i = 0; i < valor; i++) {
        var tamanho = proximo.toString()
        if (tamanho.length == 5){
            console.log('O primeiro registro com tamanho 5 é: ' + proximo)
            break
        }  
        anterior = atual + proximo
        atual = proximo
        proximo = anterior
    }
} 
fibonacci(1000)