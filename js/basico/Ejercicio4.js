function numeros(number){
    let invertir = [];
    number = String(number);
  
    for(let i = number.length -1 ; i>=0; i--){        
      invertir.push(number[i]);
    }
    return invertir;
  }
  
  console.log(numeros(1234))