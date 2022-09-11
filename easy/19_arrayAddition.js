/*
Bize bir array verilecek
Array içerisindeki en büyük sayı hariç diğer sayıları toplayacağız
Diğer sayıların toplamı en büyük sayıya eşit ise true
Değilse false dönecek

Örnek: [2,3,4,5,14];

Buradaki en büyük sayı 14 
14ü dışarıda bırakacağız kalan sayıları toplayacağız
2+3+4+5 == 14 ise 
Ki bu örnekte evet 14 
Öyleyse true olacak 

*/

export const arrayAddition = (arr) => {
  let max = Math.max(...arr);
  let sum = 0;

  arr.forEach((item) => {
    sum += item;
  });

  sum -= max;

  return sum === max ? true : false;
};

/* ---------- YÖNTEM 1 ---------------


const newArr = [...arr];
let sum = 0;
const maxValue = Math.max(...arr);

newArr.splice(arr.indexOf(maxValue), 1); 
// splice methodu array içerisinden eleman seçer
// splice('başlangıç indexi','kesilecek eleman sayısı');
// Yani arr içerisindenki maxValue'nun indexini alıyoruz ordan itibaren 1 adet kesim yapıyoruz 
// bu da kendisini array içerisinden çıkarmak anlamına geliyor

for(let i = 0; i<newArr.length; i++){
    sum += newArr[i];
}

return maxValue === sum ? true : false;  // maxValue toplama eşitse true dön

*/

/* ------------- YÖNTEM 2 ------------------

arr.sort((a,b) => a-b);  // Küçükten büyüğe sıraladık

let sum = 0;
let maxValue = arr[arr.length -1]; // arr'in son hanesindeki değeri alıyoruz

for(let i = 0; i < arr.length -1 ; i++){ // En büyük olan yani sondaki değeri almak istemiyoruz o yüzden length-1 
    sum += arr[i];
}

return maxValue === sum ? true : false;

 */

/* ------------- YÖNTEM 3 -----------------

const maxValue = Math.max(...arr); 
for(let i = 0; i< arr.length; i++){
    sum += arr[i];
}

return sum / 2 === maxValue ? true : false;  

// toplam değeri ikiye bölüyoruz
// Eğer maxValue'ya eşit ise true değilse false dönecek



*/
