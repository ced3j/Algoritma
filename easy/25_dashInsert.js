/*
Verilen string içerisinde ard arda yer alan tek rakamlar arasında -(tire) 
koy ve o şekilde return et

Örnek: 4547-9-3



*/
/*
export const dashInsert = (str) => {

    let newArr = [];


    return newArr.join('');
    for(let i = 0; i <  str.length; i++){
        if((/[^1-9]/).test(str[i])){ // test ile str[i] indeksinin her elemanının rakam olup olmadığını kontrol eder
            newArr.push(str[i]);
        }else{
            if(
                str[i] % 2 != 0 &&
                str[i+1] % 2 != 0 &&
                str[i+1] != undefined &&
                (/[1-9]/)).test(str[i+1]){
                    newArr.push(str[i]+"-");
                }
                else{
                    newArr.push(str[i]);
                }
        }
    }


    return str;

}



/* bu ders bitmedi birader  */
/*       https://www.youtube.com/watch?v=7QwR-BUiZmQ&list=PL0Au88Qum4UmiN0WHD6NKrZNpQqiUwwqe&index=26    */


