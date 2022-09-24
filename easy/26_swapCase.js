/*
We will be given a str
We need to convert lowercase letters to uppercase 
We need to convert uppercase letters to lowercase


*/


export const swapCase = (str) => {

    let newArr = [];

    str.split('').forEach((element) => {
        if(/[^a-zA-Z]/.test(element)){
            newArr.push(element);
        }
        else if((/[a-z]/).test(element)){
            newArr.push(element.toUpperCase());
        }
        else if((/[A-Z]/).test(element)){
            newArr.push(element.toLowerCase());
        }
    });
    
    return newArr.join('');

}



/*
---------- An Alternative Perspective -----------

    
    const newArr = [...str];
    for(let i = 0; i < newArr.length; i++){
        if (newArr[i].toUpperCase() === newArr[i]) {
            newArr[i] = newArr[i].toLowerCase();
          } else {
            newArr[i] = newArr[i].toUpperCase();
          }
    }

    return newArr.join("");




*/