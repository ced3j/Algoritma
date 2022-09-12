export const userValidation = (str) => {




    if (str.length >= 4 && str.length <= 25 && // Rule 1
        (/[a-zA-Z]/).test(str.slice(0, 1)) && // Rule 2
        (/^\w+$/).test(str) && // Rule 3
        (/[a-zA-Z0-9]/.test(str.slice(-1)))) { // Rule 4
        return true;
    } else {
        return false;
    }




}


/*

- Rules - 

1 - The username is between 4 and 25 characters
2 - It must start with a letter
3 - It can only contain letters, numbers and the underscore character
4 - It cannot end with an underscore character


If the username is valid then your program should return the string 'true'
Otherwise return the string false






*/