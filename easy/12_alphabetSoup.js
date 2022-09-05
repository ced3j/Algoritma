/*
Bize bir string verilecek
Bu stringte sadece harfler bulunacak
Bu stringteki harflerin alfabetik sıralamaya göre dizilmesini bizden bekliyor
örnek: hello ---> ehllo
*/

export const alphabetSoup = (str) => {
    str = str.replace(/[^a-z]/gi, '');
    let arr = str.split("").sort().join("");
    return arr;

    /*
        [^a-z] ---> yani harf olmayan her şeyi seçmesini söylüyoruz
        g ---> global olarak yani verilen stringin tamamına bunu uygulatıyoruz
        i ---> büyük küçük harf ayırt etmemesini söylüyoruz
        
     */

}