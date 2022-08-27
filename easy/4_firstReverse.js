export const firstReverse = (str) => {

    let firstStr = str.split("");
    let reversedStr = firstStr.reverse();
    let lastStr = reversedStr.join("");

    return lastStr;

    // Alternative --> return str.split("").reverse().join("");
}

/*
First Reverse

The function 'FirstReverse' take the str parameter being passed and return the string
in reversed order

*/