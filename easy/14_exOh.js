/*

Bize x ve o harflerinden oluşan bir string gelecek
x ve o karakterlerinin sayısı birbirine eşitse true
Değilse false dönecek

*/

export const exOh = (str) => {

    /* ... ---> spread operatörü
        Örnek kullanım: 
            let username = "regex";
            let chars = [...username];
            console.log(chars); ---> "r","e","g","e","x"
    */

    let x = 0;
    let o = 0;

    [...str].forEach((item) => {
        item === "x" ? x += 1 : o += 1;
    });

    return x === o ? true : false;




}

/* ---- Alternatif çözüm


    
    let countX = 0;
    let countO = 0;

    str.split("").forEach((char) => {
        if (char == "x") {
            countX++;
        } else {
            countO++;
        }
    });

    if (countX == countO) {
        return true;
    } else {
        return false;
    }



*/