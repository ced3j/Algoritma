export const questionMark = (str) => {

    // 5ten büyük olmasını kontrol etme sebebimiz basit bir örnekle: 4???6 
    if (str.length > 5) {
        // Soru işareti ve rakamların dışındaki değerleri temizleyelim

        var newStr = str.replace(/[^0-9?]/g, ""); // 0-9 veya ? dışındaki değerleri seç ve boşluk haline getir yani ortadan kaldır


        var arr = newStr.split(""); // Tüm karakterleri tekli tekli ayırıp bir array içerisinde topladık

        var sums = [];
        var sum = 0;
        var iterator = 0;

        arr.forEach((e) => { // arr içerisindeki her bir karakter 'e' olarak alınacak
            // üzerinde bulunduğumuz karakter soru işareti mi rakam mı bunu anlayalım
            if (e != "?") { // soru işareti değilse
                sum = parseInt(e) + parseInt(arr[iterator + 4]);
                sums.push(sum);
            }
            iterator += 1;
        });

    }
    else {
        return false;
    }

    return sums.includes(10) ? true : false;

}

/*

Bize içerisinde yalnızca harf, rakam ve soru işaretleri bulunan bir string verilecek
Eğer aralarında 3 adet soru işareti olan 2 rakam bulursak bu rakamları toplamamızı istiyor 
Eğer toplam = 10 olursa true, diğer durumlarda ise false dönüş istiyor
ve bize verilen değerin uzunluğunun minimum 5 olması isteniyor

*/