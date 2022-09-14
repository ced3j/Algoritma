/*
Bize bir adet string verilecek
Bu string içerisinde en fazla harf tekrarı yapılan ilk kelimeyi
return etmemiz bekleniyor

    Örnek:
    "today, is the greatest day ever!"  

    Kelimelere ayrı ayrı baktığımızda 
    today, is, the kelimelerinin içerisinde tekrar eden bir harf yok
    Fakat greatest içerisinde 2 adet t 2 adet e harfi var
    day de tekrar yok
    ever kelimesinde 2 adet e harfi tekrar ediyor

    Bizden beklenilen ise daha önce olduğu için greatest kelimesini döndürmemiz bekleniyor
    Eğer greatest kelimesinden sonra gelen bir kelimede daha fazla tekrar eden harf olsaydı o 
    kelimeyi döndürmemiz gerekecekti
*/
export const letterCount = (str) => {

  /* Konsoldaki yazıyı stillendirelim */
  // console.log("%cHello World", "color:red; font-size:25px;");  // Bu bir yöntem


  // 1- harf dışındaki ve boşluk dışındaki karakterleri sil
  // 2- str küçük harflere dönüştürülecek
  // 3- stringi array haline getireceğiz
 

  // ^a-zA-Z --> a-z ya da A-Z olmayanları seçip "" ile değiştiriyoruz yani siliyoruz aslında
  const arr = str.replace(/[^a-zA-Z ]/g,"").toLowerCase().split(" ");

  let kelimeNesneleri = []

  for(let i = 0; i< arr.length; i++){
    let obj = { // Öncelikle bir nesne oluşturalım

    } 

    // her kelime içerisindeki harfler üzerinde ayrı ayrı işlem gerçekleştirelim
    arr[i].split("").forEach((char) => { 
      char in obj ? obj[char] += 1 : obj[char] = 1; 
      // Eğer o anki char objenin içinde varsa obj.char'ı 1 arttır eğer yoksa char key'ine 1 değerini ata ve bırak
    });

    kelimeNesneleri.push(obj); 
    // Anlık işlem yapılan kelime için oluşturulan objeyi
    // KelimeNesneleri arrayine push ile ekliyoruz
  }

  // Kelimelerin objelerine tek tek bakıp harflerin maksimum değerlerini bulup bu listeye atayacağız
  let maxFrequencies = []; 

  kelimeNesneleri.forEach((item) => {
    maxFrequencies.push(Math.max(...Object.values(item)));
    // maxFrequencies içerisine math max kullanarak objelerin values değerlerine bakıyoruz
    // En yüksek olanları seçiyoruz
  });

  // En çok sayıya sahip olan kelimeyi seçiyoruz
  let maxValue = Math.max(...maxFrequencies); 


  return maxValue < 2 ? -1 : 
  (arr[maxFrequencies.indexOf(maxValue)] ? 
  arr[maxFrequencies.indexOf(maxValue)] : -1 );

  // Burayı açıklayalım: maxValue'yu elde ettik eğer bu değer 2den küçükse -1 dönsün
  // Çünkü zaten 2den küçükse bütün kelimelerin içinde tekrar eden hiçbir harf yok demektir
  // Eğer 2den büyükse bu demektir ki tekrar eden kelimeler var
  // Bu durumda da yeni bir koşul daha oluşturuyoruz
  // maxValue'nun maxFrequencies indexini bul
  // Ve bunu array içerisinde o indexe yerleştir
  // Array içerisinde o index'e sahip bir kelime varsa bize o kelimeyi ver
  // Eğer yoksa bize yine -1 ver dedik
  

};


