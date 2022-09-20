/*
İçinde rakamlar bulunan bir array veriliyor
Array içinde bulunan sayıların ortalama değeri moduna eşit ise
"1" olarak dönüş alacağız diğer türlü ise 0 dönecek

Ortalama = Tüm elemanların toplamı / eleman sayısı
Mod = Array içerisinde en fazla tekrar eden sayı

örnek: 
[5,3,3,3,1] 
    toplam = 15
    


*/
export const meanMode = (arr) =>{

    // mean = ortalama değer
    // mode = en fazla tekrar eden sayı

    const mean = calculateMean(arr);

    const mode = calculateMode(arr);

    return mean === mode ? 1 : 0; 
    // ortalama ile fazla tekrar eden sayı eşitse 1 dönsün değilse 0

}

const calculateMean = (arr) => {
    let sum = 0;

    for( let index = 0; index < arr.length; index++){
        sum += arr[index]; // Array içerisindeki tüm sayıları topluyoruz
    }

    return sum / arr.length; // Toplam değerini array uzunluğuna bölüp ortalamayı return ediyoruz
}


const calculateMode = (arr) => { // 🟡
    
    let freq = {};
    
    for(let j = 0; j< arr.lenght; j++){ 
        if(arr[j] in freq){ // 🟣​
            freq[arr[j]] = freq[arr[j]] + 1;
        }
        else{
            freq[arr[j]] = 1;
        }
    }

    const max = Math.max(...Object.values(freq));
    // Object.values ile freq nesnesinin sadece value değerlerini aldık
    // ... ile de bu değerleri bir array haline getirdik ki Math.max fonksiyonunu kullanabilelim

    return iterateOverObj(freq, max);
    // Obje içerisinde değeri 5 olan değeri dönmemiz gerekiyor
    // freq ve max'ı gönderdik

}



const iterateOverObj = (freq, max) => {
    
    for(let j in freq){ // j burada her bir key'i temsil edecek
        if(freq[j] === max){ // freq[j] bu da freq'in valuelarını döndürür max ile eşleşen ilk value'nun keyini alır
            return parseInt(j); // bu key str olarak döneceği için int'e dönüştürüp return ederiz
        }
    }
}




// 🔴​🟠​🟡​🟢​🔵​🟣​​⚫​⚪​

/* --------  Açıklamalar -------- 


🟣
İlk başta freq nesnemiz boş
for döngüsü içerisine girdiğinde gerçekleşen olaylar şöyle olacak
Mesela bizim arrayimiz şu olduğuna göre [5,3,3,3,1]
İlk 5i seçecek 

j= 0 iken       if(arr[j] in freq)      eğer freq nesnesi içinde 5 varsa
    freq[arr[j]] = freq[arr[j]] +1      yani 5'in (value)değerini 1 arttır

Eğer 5 yoksa
    freq[arr[j]] = 1    doğal olarak freq



🟡
bir obje yapısı oluşturalım
{eleman:array içerisindeki tekrarı}
{1:1, 3:5, 5:1} ---> 1den 1 adet var --- 3ten 5 adet var...
max değer = 5


*/


















/*

    const values=[1,2,3,4,5,5,5,5,6,3,3,1,2];
    const sam={};

    values.forEach(val=>{
        const fin=values.filter(v=> v==val);
        sam[fin[0]]=fin.length;
    });

    let keys = Object.entries(sam);

    const sorted=keys.sort(function([,a], [,b]) { return b-a });
    console.log(Number(sorted[0][0]));


*/