/*
Bize bir cümle verilecek ve 
bu cümle içerisindeki kelimelerin sadece baş harflerini büyütmemizi ve bu yeni cümleyi return etmemiz isteniyor


*/






/* ÖRNEK ÇÖZÜM 1 ----------------------------------------------------- */





export const letterCapitalize = (str) => {

    // Verilen stringteki kelimeleri tek tek ayrıştıralım 

    let newWord = ""; // Yeni cümlemiz 

    let words = str.split(" ");
    words.forEach((word) => {

        // Kelimenin önce ilk harfini büyütüyoruz sonra + ile kelimenin geri kalanını tekrar ekliyoruz 
        // charAt(0) içine girilen indexteki harfi verir
        // slice(1) --> 1. indexten başlatıp kelime sonuna kadar seçim yapar

        word = word.charAt(0).toUpperCase() + word.slice(1);
        newWord += " " + word;
    });


    newWord = newWord.trim(); // Baştaki ve sondaki boşlukları silip temizledik
    return newWord;
}






/* ÖRNEK ÇÖZÜM 2 ----------------------------------------------------- */

/*

export const letterCapitalize = (str) => {

    const ilkHarf = str.charAt(0).toUpperCase(); // ilk harfi seçip büyüttük
    const geriKalan = str.slice(1, str.length);  
    // slice ile 1. indexten itibaren str'nin uzunluğu kadar yani str sonuna kadarki kısmı kırptık
    
    
    let newStr = [];
    
    // str.split(" ") ile parçalama yaptığımız zaman bunun kendizi bizzat array haline gelir 
    // ve forEach ile array içindeki split ile bölünmüş kelimelerde geziniyoruz

    str.split(" ").forEach((word) => {
        newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
    });

    // join methodu ile kelime kelime ayrılmış olan kelimelerin arasında join parametresi içerisine girdğimiz değeri ekleyerek birleştirir
    // Burada da join içerisini boş bırakıyoruz kelimeler arasına birer boşluk girerek birleştirmiş oluyoruz
    return newStr.join(" ");


}


















*/