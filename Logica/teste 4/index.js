const arvore = { // folha1 - esquerda | folha2 - direita
    id: 1,
    folha1:{
        id: 4,
        folha1:{
            id: 10,
            folha1:{
                id: 8
            }
        },
        folha2:{
            id: 2,
            folha1:{
                id: 12,
                folha2:{
                    id: 13,
                    folha1:{
                        id: 9
                    }
                }
            }
        }
    },
    folha2:{
        id: 7,
        folha1:{
            id: 3
        },
        folha2:{
            id: 11,
            folha1:{
                id: 6
            },
            folha2:{
                id: 5
            }
        }
    }    
}

function preOrdem(arvore, id){
    console.log(arvore.id)
    arvore.folha1 && preOrdem(arvore.folha1)
    arvore.folha2 && preOrdem(arvore.folha2)
}
preOrdem(arvore, 9)

//Não soube fazer a busca recursiva nas folhas da arvore nessa questão...
