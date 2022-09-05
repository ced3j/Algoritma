/*
    Bize bir string verilecek
    Eğer bu string içinde bir "a" harfi varsa ve bu harften 3 karakter sonra bir "b" harfi yer alıyorsa
    Bu fonksiyon true dönmeli 
    Bu harfler hiç yoksa false dönmeli
    Ya da bu harfler arasında 3 karakterden daha fazla bi boşluk varsa yine false dönmeli

    İşlem sırasını kuralım:
        1- Öncelikle a ve b harflerinin aynı anda bulunup bulunmadığını kontrol edelim if ve includes işimizi çözecektir
        2- regex ile a-b harici her şeyi x harfine çevirelim boşluklar dahil


*/

export const abCheck = (str) => {

    const arr = str.toLowerCase().split("");
    // Stringi bir arraye çevirdik ve çevirirken öncelikle tüm harfleri küçülltük
    // Daha sonra her bir karakteri split ile ayırdık

    let control = [];
    arr.forEach(char => {
        if (char === "a" && arr[arr.indexOf(char) + 4] === "b") {
            // Eğer o anlık üzerinde bulunduğumuz karakter "a" ise
            // Ve eğer a'dan sonraki 4. karakter "b" ise
            control.push(true);
            // control adlı array'e true pushlayalım
        }
    });

    return control.includes(true) ? true : false;
    // Eğer control içinde true mevcutsa true retun etsin eğer mevcut değilse
    // false return etsin

}




/*  ----------- DAHA KISA ÇÖZÜM ŞEKLİ ----------



    // Search() ---> içine girdiğimiz parametreyi stringin içinde arar ve eğer varsa kaçıncı indexten başladığını bize gösterir

    const newStr = str.toLowerCase();
    let posA = newStr.search("a");
    let posB = newStr.search("b");

    if(Math.abs(posA-posB) === 4){
        return true;
    }
    else{
        return false;
    }




    /// ----------------->>> Bunun da kısayolu şudur: return str.search("a...b"); 
    /// ----------------->>> Aralarında 3 adet karakter kadar mesafe bulunan a ve b ifadelerini arar ve eğer bulursa 1 döner eğer bulamazsa -1 döner
    /// ----------------->>> Burada 3 tane nokta aralarına girecek karakterleri temsil eder
    /// ----------------->>> Peki bunun kontrolü nasıl yapılabilir?
    /// ----------------->>> return str.search("a...b") > -1 ? true : false;
    /// ----------------->>> -1'den büyükse true dönsün değilse false dönsün zaten 2 seçenek var



/*









Kendi mücadelemin başarısız sonucu....

        if ((str.split("").includes("a")) && (str.split("").includes("b"))) {
        str = str.replace(/[^ab]/g, "x");
    }

    let location = str.indexOf("a");
    let counterX = 0;
    for (let i = location; i < str.length; i++) {
        if (str[i] == "x") {
            counterX += 1;
            if (counterX == 3) {
                if (str.charAt(counterX + 1) === "b") {
                    console.log("True");
                }
            }
        }
    }


*/