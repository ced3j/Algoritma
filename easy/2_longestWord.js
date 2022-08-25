export const longestWord = (sen) => {


    // 3- Oluşan bu arrayi kelimelerin karakter sayılarına göre azalan bir şekilde sıralayalım
    // 4- En başta yani 0. indekste yer alan kelimeyi return edelim

    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
    // sen parametresi içerisindeki karakterler harf ya da boşluk değilse ( yani rakam, sembol vs ise ) bunları siler
    // son durumda oluşan değeri split methodu ile istediğimiz karakterden(boşluklardan) böleriz ve oluşan bu elemanlı yapıyı da array haline getiririz

    arr.sort((a, b) => { return b.length - a.length }); // fazla karaktere sahip olan kelime öne geçecek

    return arr[0] // cümle içerisindeki en uzun kelime en başa yani 0. indekse gelmiş oldu





}


/*
Longest Word 


- Have the function longestWord(sen) take the str parameter being passed
and return the largest word in the string


- If there are two or more words that are the same length, return the first
word from the string with that length 


- Ignore punctuation and assume str will not be empty.


*/