/*
İki sayının bölümünün formatlanarak return edilmesi isteniyor
Bölümü string olarak vermemizi istiyor
Ondalık kısım istenmiyor ve binler basamağına virgül koyulmalı

    num1: 123456789 
    num2: 10000

    return: "12,345"

Eğer bize verilen sayıların bölüm sonucu
3 basamaktan daha küçükse direkt bölümü döndürelim: 21.satır

 */

export const divisionStringified = (n1, n2) =>{

    return Math.floor(n1/n2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

}


 

/*          ALTERNATİF

    // Math.floor ile alta yuvarlıyoruz
    // Eğer onu kullanmasaydık n1/n2 ==> 12345.6789 olacaktı
    const division = Math.floor(n1/n2).toString();

    if(division.length < 4){ 
        return division;
    }

    const divisonArr = division.split("");
    const backwordsArr = division.split("").reverse();


    let arr = [987,];
    let j = 0;

    for(let i = 0;i< backwordsArr.length; i++){
        if(j != 0 && j%3 === 0) {
            arr.push(backwordsArr[i]+",");
        }
        else{
            arr.push(backwordsArr[i]);
        }
        j++;
    }


    return arr.reverse().join("");

*/