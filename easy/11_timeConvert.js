/*

Bize bir sayı verilecek örn: 63
Bizden bu sayıyı saat ve dakika olarak return etmemizi bekleyecek

63 ---> 1:3


*/


export const timeConvert = (num) => {

    const min = num % 60; // num sayısının 60'a bölümünden kalanını verir
    // 3 

    const hour = Math.floor(num / 60); // num / 60 normalde 1.05 olarak döner
    // ama math.floor ile 1 değeri dönecektir bu da 1 saat olduğu anlamına gelir

    return hour + ':' + min;

}





/* --------------- Çözüm yolu 2 ------------------- */

/*

return `${Math.floor(num/60)}:${num%60}`;  








*/