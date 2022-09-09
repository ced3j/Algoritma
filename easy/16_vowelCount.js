/*
Bize bir string verilecek ve bu string içerisinde yer alan 
sesli harflerin sayısını döndürmemiz istenecek
 

*/

export const vowelCount = (str) => {

    const vowelWords = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
    let vowelCount = 0;

    [...str].forEach((char) => {
        if ((/[a/e/i/o/u/A/E/I/O/U]/).test(char)) {
            vowelCount += 1;
        }
    });

    return vowelCount;



}


/* --------- SPREAD OPERATÖRÜ

    const arr = str.split(""); // Bu kod ile str parametresini teker teker ayırıp array haline getiririz

    // Bu işlemi yapabilmenin daha kısayolu ise şudur = [...str]
 
*/