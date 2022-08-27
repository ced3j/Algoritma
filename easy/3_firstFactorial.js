export const firstFactorial = (num) => {

    if (num == 0) {
        console.log(1);
    }
    else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;

        }
        return result;
    }

}



/*

Rules 

if num = 5 
return 5*4*3*2*1

*/