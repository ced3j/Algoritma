/*

Bize verilen string içerisindeki kelime sayısını bulmamız isteniyor
Kelimeler arasında 1 adet boşluk olmalı
ve fonksiyonumuz kelimeler arasındaki boşluğu return etmeli



*/



export const wordCount = (str) => {
    str = str.trim().replace(/  +/g, ' ');
    return (str.split(" ").length);

    /*
        -Öncelikle str üzerinde trim() kullanıyoruz bu method ile "sadece" başta ve sonda eğer boşluk varsa onları siliyoruz
        -Daha sonra replace methodu içerisine bir regex giriyoruz
        - / +/g     artı işaretinin hemen soluna bir boşluk bırakıyoruz yani 1 ve daha fazla sayıdaki boşlukları " " tek boşluk ile değiştiriyoruz
        - Kısacası tüm boşluklar uzunluğu fark etmeksizin tek boşluk kadar kısalıyor
        - Daha sonra str üzeirinde split uygulayıp boşluklardan parçalıyoruz ve uzunluğunu(length) return ediyoruz
    */



}