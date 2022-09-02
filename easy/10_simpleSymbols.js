/*

Bize string verilecek
Stringte + = ve en az bir harf bulunacak
String içerisinde yer alan harflerin her birinin sağında ve solunda + işareti olmak zorunda
Harflerden birinin sağında/solunda + işareti yoksa fonksiyonumuz false 
Ancak string içerisindeki her bir harfin sağında veya solunda + varsa true dönsün


++d+===+c++==a



 */


export const simpleSymbols = (str) => {


    let arr = str.split(''); // Verilen stringi split ile parçalarına ayırdık
    let controlArr = [];

    arr.forEach(element => {
        if ((/[a-zA-Z]/).test(element)) { // eğer test methodu içindeki eleman a-zA-Z'ye uyuyorsa burası çalışacak
            if (arr[arr.indexOf(char) - 1] === "+" && arr[arr.indexOf(char) + 1] === "+") {
                // Onayladığımız karakterin -1 ile bir önceki, +1 ile de bir sonraki karakterlerinin + olup olmadığına bakıyoruz
                controlArr.push(1); // hem önünde hem arkasında + olan her değer için controlArr'e 1 puan ekleriz
            } else {
                controlArr.push(0); // + koşulunu sağlamayan her karakter için 0 ekleniyor
            }
        }
    });

    if (controlArr.includes(0)) { // controlArr 0 içeriyor mu
        return false;
    } else {
        return true;
    }

}



/*                          ---- ALTERNATİF ÇÖZÜM ----

export const simpleSymbols = (str) => {
    var arr = str.toLowerCase().split("");
    for(var i=0; i < arr.length; i++){
        if(arr[i] >= "a" && arr[i] <= "z"){
            if(i === 0 || i === arr.length){
                return false;
            }

            if(arr[i-1] !== "+" || arr[i+1] !== "+"){
                return false;
            }
        }
    }


    return true; 
}


*/