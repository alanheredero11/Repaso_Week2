function hasEven(myNums: number[]): boolean{

    let resultado: boolean = false;
    let i = 0;
    while(i < myNums.length && resultado == false){

        if(myNums[i]%2 == 0){
            resultado = true
        }
        i++;
    }

    return resultado
}

// console.log(hasEven([9,5,3,7,4,5,7,5,9]))               //has to return true

function stardWithM(myNames: string[]):boolean{

    let resultado: boolean = true;
    let i = 0; 
    
    while(i < myNames.length && resultado == true){

        if (myNames[i][0] != "M"){

            resultado = false; 
        }
        i++;
    }
    return resultado 
}

// console.log(stardWithM(["Maria", "Marina", "Marco", "Mordocai"]))       //has to return true