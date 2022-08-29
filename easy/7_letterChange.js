export const letterChange = (str) => {

    // Küçük harf ve büyük harflerin karakter kodları birbirinden farklıdır
    // Örneğin "a" harfinin karakter kodu 65 iken "A" harfinin karakter kodu 97 
    // Bu yüzden öncelikle ilk adımda bütün harfleri küçük harflere çevirelim ( büyük harflere çevirsek de olurdu mantık aynı )

    let new_str = str.toLowerCase().replace(/[a-z]/gi, (char) => { // a'dan z'ye olan değerler dışında ( mesela rakam ) kalan değerleri seçme dedik 
        if (char == "z") { // eğer z varsa bunu direkt a ile eşitledik 
            return "a";
        } else {
            return String.fromCharCode(char.charCodeAt() + 1); // 
        }
    });


    // 2. kısım


    let vowelCapitalize = new_str.replace(/a|e|o|u|i/gi, char =>
        char.toUpperCase()
    );

    return vowelCapitalize;



    /* 2. kısım için alternatif çözüm :

    let vowels = ["a", "e", "i", "o", "u"];
    let vowelStr = [];

    for (let i = 0; i < new_str.length; i++) {
        if (vowels.includes(new_str[i])) {
            vowelStr.push(new_str[i].toUpperCase());
        } else {
            vowelStr.push(new_str[i]);
        }
    }

    vowelStr = vowelStr.join("");
    return vowelStr;

    */


}




/*

Görev: verilen string içerisindeki harfleri
alfabedeki bir sonraki değer ile değiştireceğiz
Yani stringin içerisinde tespit ettiğimiz A harfi  ==> B olacak

Eğer stringimizin içerisinde Z varsa bu da A harfine eşit olacak


Bu işlemin ardından string içerisinde sesli harfler varsa bunları büyük harflere çevireceğiz
ve bitti



*/