/*

Bize bir str verilecek
Bu strnin düz ve ters okunuşu aynı ise true döndürmemiz gerekiyor
Aynı değilse false

*/

export const isPalindrome = (str) => {

    // regex ile boşlukları silip toLowerCase ile harfleri küçülttük

    const newStr = str.replace(/ /g, "").toLowerCase();
    return (newStr.split("").reverse().join("") === newStr ? true : false);


}


/* ---- Alternatif çözüm


    // Önce verilen str değerini küçük harflere çeviriyorum daha sonra split ile her karakterini ayırıyorum 
    // ve reverse ile ters çevirip tekrar ayırdığım karakterleri join ile birleştirerek newStr değişkenine atıyorum
    let newStr = str.toLowerCase().split("").reverse().join("");
    if (newStr == str.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }


*/