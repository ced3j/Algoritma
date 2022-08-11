const number = 5;
let result = 1;

for (let i = 1; i <= number; i++) {
    result *= i;
}

console.log(result);

/*
Açıklama


Her dönüşte olan olaylar => 
result = 1
i = 1
number = 5



i her seferinde 1 artacak taa ki number'a eşit olana kadar

result      i       sonuç
1         *= 1       = 1
1         *= 2       = 2
2         *= 3       = 6
6         *= 4       = 24
24        *= 5       = 120 

 */