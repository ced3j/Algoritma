/*
Negatif ve pozitif tam sayılardan oluşan bir array veriliyor
Bizden istenilen bu array içindeki değerlerin aritmetik mi yoksa geometrik mi sıralandığının kontrol edilmesi
Eğer aritmetik bir sıra varsa fonksiyonumuz "Aritchmetic" kelimesini döndürsün
Geometrik sıra varsa "Geometric" kelimesini döndürsün

Örnek aritmetik = [2,4,6,8] --> bütün elemanlar arasındaki fark aynı olmalı
Örnek geometrik = [2,6,18,54] --> ardışık her iki elemanın oranı eşit olmak zorunda


*/

export const arithGeo = (arr) => {

    let aritm = arr[1] - arr[0]; // Fark
    let geomet = arr[1] / arr[0]; // Oran

    let arrCount = 1;
    let geoCount = 1;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] == aritm) {
            arrCount += 1;
        }
        if (arr[i + 1] / arr[i] == geomet) {
            geoCount += 1;
        }
    }

    if (arrCount == arr.length) {
        return "Aritchmetic";
    }
    else if (geoCount == arr.length) {
        return "Geometric";
    }
    else {
        return "-1";
    }
}

/*
------------ Alternatif Çözüm 1 --------------

        export const arithGeo = (arr) => {
            let arithVal = arr[1] - arr[0]
            let GeoVal   = arr[1] / arr[0]
            let isArith = true
            let isGeo = true
            for (let index = 0; index < arr.length - 1; index++) {
                if( arithVal !== (arr[index+1] - arr[index]) ){
                    isArith = false
                }
                if( GeoVal !== ( arr[index+1] / arr[index] )){
                    isGeo = false
                }
            }
            let result = ( isArith ? "Arithmetic":"" )+(isGeo ? "Geometric":"")
            return result ? result : -1
        }

*/


/*
------------ Alternatif Çözüm 2 --------------






*/