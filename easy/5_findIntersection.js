export const findIntersection = (arr) => {

    /*

    let arr1 = arr[0].toString();
    arr1 = arr1.replace(" ", "").split(","); // Önce replace ile boşlukları ortadan kaldırdım daha sonra split ile virgüllerden ayırdım
    console.log(arr1);

    let arr2 = arr[1].toString();
    arr2 = arr2.replace(" ", "").split(",");
    console.log(arr2);


    let matchArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            matchArr.push(arr1[i]);
        }
    }
    return matchArr;

    */

    let intersection = [];

    let kume1 = arr[0].replace(/\s/g, "").split(",");
    // önce arrayın ilk kısmını alıyoruz
    // boşlukları regex ile kaldırıyoruz ve split methoduyla virgüllerden parçalıyoruz

    let kume2 = arr[1].replace(/\s/g, "").split(","); // aynısını 2. kısıma yaptık

    kume2.forEach((item) => { // forEach ile küme2 içindeki elemanlarda geziniyoruz ve her elemana item diyoruz
        if (kume1.includes(item)) { // kume1'de itemlardan bir tanesi bulunuyosa eğer, bunu intersection içerisine yazdıralım
            intersection.push(item); // aynı olanları yani eşleşenleri yeni kümeye attık
        }
    });

    if (intersection.length != 0) { // eğer intersection içerisi boş değilse
        return intersection.toString();

    } else { // Eğer boş ise
        return false
    }

}


/*
Fonksiyonumuza bir adet array gönderiliyor
Bu array 2 adet stringten ve stringler de rakamlardan oluşuyor

Yapılması istenen: 
Eğer stringler içerisinde kesişen elemanlar varsa bu elemanları 
bize ver eğer yoksa false değerini return et


*/