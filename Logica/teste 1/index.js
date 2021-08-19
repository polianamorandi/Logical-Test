function imprimeNum(num){
    for(num = 1; num <=100; num++){
        if ((num % 3 ==0) || (num % 5 ==0)){
            if ((num % 3 == 0 ) && (num % 5 == 0))
                console.log(num + " BUZZBIZZ")
            else{
                if (num % 3 == 0)
                    console.log(num + " BUZZ")
                if (num % 5 == 0)
                    console.log(num + " BIZZ")
            }      
        }else{console.log(num)}
    }
}
imprimeNum()
