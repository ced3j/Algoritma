/*
12 saatlik formatta 2 adet saat verilecek
Bu saatler string olacak
Bizden istenen ise bu iki saat arasındaki farkın 
dakika cinsinden verilmesi

--> 9:00am   10:00am ---> 60
--> 1:00pm   11:00am ---> 1320


A.M = Ante Meridiem --> Öğleden önce
P.M = Post Meridiem --> Öğleden sonra



*/

export const countMinutes =(time)=>{

    // Aradaki tire işaretinden saatleri ikiye böldük
    const times = time.split("-"); 
    
    // Elde ettiğimiz saatleri bir obje haline getirelim
    let time1 = {};
    let time2 = {};


    time1.meridiem = times[0].slice(-2); // 🔴
    time1.hour = parseInt(times[0].split(":")[0]); // 🟠
    time1.minute = parseInt(times[0].slice(0, -2).split(":")[1]); // 🟡


    time2.meridiem = times[1].slice(-2); 
    time2.hour = parseInt(times[1].split(":")[0]); 
    time2.minute = parseInt(times[1].slice(0, -2).split(":")[1]); 

    let minutes = 0; // Aradaki dakika farkını burada tutacağız
    let result = 0;
    
    // İki meridiemin aynı olduğu durum
    if(time1.meridiem === time2.meridiem){ // 🟢
        minutes = (time2.hour*60 + time2.minute) - (time1.hour*60 +time1.minute); 
        result = minutes > 0 ? minutes : 24*60 + minutes; 
        // Eğer minutes değeri 0dan büyük yani pozitifse (Bizim örneğimiz için 60 ise diyebiliriz)
        // Direkt kendisi dönsün
        // Fakat diğer durumdaki gibi -60 ise 
        // Şunu dönsün: 24*60 + minutes
        // Burada neden - değil de + kullandık çünkü minutes değerinin kendisi zaten -60
        // eğer eksi kullansaydık 24*60 -(-minutes) olup toplamaya çevrilecekti
    }
    else{ // Farklı meridiemler durumunda ​⚪​
        minutes = (time2.hour*60 + time2.minute) - (time1.hour*60 +time1.minute); 
        result = 12*60 + minutes;
    }


    return result
    
}



// 🔴​🟠​🟡​🟢​🔵​🟣​​⚫​⚪​

/* ---- Açıklamalar ----

    🔴
    time1 içinde meridiem key'i oluşturduk
    Bu key'e bize verilen zaman birimlerinden 0. index yani ilk sıradakinin 
    Sadece meridiem kısmını atadık
    slice(-2) bize son 2 karakteri verdi bu da şu anki örnek için 
    9:00am değerinin -am- kısmına denk geliyor


    🟠
    time1 içindeki değeri --> 9:00am --> : işaretinden
    split böldüğümüzde elimizde 2 farklı değer olacak
    -->  '9' : '00am'
    Biz saati seçmek istediğimiz için split(":")[0] yani 0. index'i
    Yani 9'a denk gelen kısmı seçiyoruz
    Son olarak parseInt kullanıp integer değer yaptık


    🟡
    Yine bu sefer de time1 içindeki dakika kısmını alabilmek için
    Öncelikle 0. indexteki time'ı seçtik times[0]
    Daha sonra burada bir slice işlemi yaptım (0, -2) 
    Yani 0 dan başla ---> sondan -2 adet karakteri bırak arada ne varsa hepsini al demiş olduk
    Bunun sonucunda elimizde kalan: 9:00 oldu
    Bunu da split(":") ile ortadaki iki noktadan bölüp ikiye ayırdık
    Ve 1. indexi seçtik elimizde kalan ---> 00 yani dakika değeri oldu
    Ve tabii ki bu bir string değeri olduğu için parseInt kullanıp integer değer yaptık


    🟢
    time1'in saat kısmını 60 ile çarpıp dakika yaptık ve üzerine eğer kendi dakika değeri varsa bunu ekledik
    Bu değerden de time2 nin dakika değerini çıkarıyoruz
    Şimdi burada şöyle bir durum var mesela biz bu örnekte time2'den time1'i çıkardık
    Girdiğimiz parametrelere göre yani 9:00am-10:00am için
    10dan 9u çıkarıp 60 bulduk 
    Ama ilk parametre 10:00am ikinci parametre de 9:00am olsaydı
    9am saatinden 10am saatini çıkarıp -60 bulacaktık
    Bu şu anlama geliyor
    Saat sabah 10un tekrar saat sabah 9 olması için geçmesi gereken süreyi bulmuş oluyoruz
    Yani bu sabah 10 ile ertesi sabah 9 arasındaki zaman farkı -60
    Bunu bulabilmek için 24*60 -60 = 1380dakika yani 23 saat 


    ​⚪​
    Bu sefer meridiemler farklı 
    Şöyle düşünelim eğer 10am-10pm olsaydı bize verilen saatler
    Direkt bu iki saat arasında 12 saat olduğunu söyleyebilirdik
    Öyleyse sayılar değiştiğinde de biz 12 saatin üzerine ekleme ya da çıkarma yaparak
    Sonuca ulaşabiliriz o yüzden
    result = 12*60 + minutes; yapıyoruz
    Minutes sonucumuz negatif olduğu zaman 12 saat üzerinden düşecek
    Pozitif olursa da 12 saat üzerine eklenecek



 */