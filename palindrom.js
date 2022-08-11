// Yazıldığı zaman tersten okunuşu da normal okunuşu da aynı olan yazılar ya da sayılara palindrom denilir

const value = "test";

const isPalindrome = (val) => {

    const reverse = val.split("").reverse().join("");
    return reverse === val // eğer eşitse true dönecek değilse false
}

console.log(`is palindrome: ${isPalindrome(value)}`);



/*

Açıklama => 
split("") --> val'den gelen stringin içindeki her bir harfi ayrıştırır
reverse() --> tersine çevirir
join("") --> ayrıştırılmış ve tersine çevrilmiş stringi tekrardan reverse adlı değişkene yerleştirir


*/
