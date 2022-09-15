/*
Bize bir dizi sayı verilecek 
Ve bizden istenen şu: 
    En büyük 2. sayıyı ve en küçük 2. sayıyı bulmamız bekleniyor

Array boş olamaz ve en az 2 sayı içermelidir
*/


export const secondGreatLow = (arr) => {

    let newArr = [];
    arr.forEach((num) =>{
        !newArr.includes(num) && newArr.push(num); // Çiftlerden kurtulduk bu sayede
    });


    // Küçükten büyüğe sıralama yapıyoruz
    newArr.sort((a,b) => a-b); 

    if(newArr.length == 2){ // Eğer arrayin son halinde 2 adet sayı varsa
        return `${newArr[1]}--${newArr[0]}`;
    }
    else{
        return `${newArr[1]}--${newArr[newArr.length-2]}`;
    }

    return newArr;
    

}
