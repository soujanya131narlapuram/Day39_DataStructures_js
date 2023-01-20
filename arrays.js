//Write a program in the following steps
//a. Generates 10 Random 3 Digit number.
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

function generateRandomArray(count){
    let ar = [];

    for(let i=0;i<count;i++){
       let random = Math.floor(Math.random() * 90) + 10;
       ar.push(random)
    }

    return ar;
}

function findSecondLargestAndSmallestWithoutSort(ar){
    let largest_ele = ar[0];
    let secondLargest_ele =  ar[0];
    let smallest_ele = ar[0];
    let secondSmallest_ele =  ar[0];

    for(let i=2;i<ar.length;i++){
        if(ar[i] > largest_ele){
            secondLargest_ele = largest_ele;
            largest_ele = ar[i]
        } else if( ar[i] > secondLargest_ele && largest_ele != ar[i]){
            secondLargest_ele = ar[i];
        }

        if(ar[i] < smallest_ele){
            secondSmallest_ele = smallest_ele;
            smallest_ele = ar[i]
        } else if( ar[i] < secondSmallest_ele && smallest_ele != ar[i]){
            secondSmallest_ele = ar[i];
        }
    }

    console.log("Second largest  element in an array is:  " + secondLargest_ele);
    console.log("Second smallest element in array is " + secondSmallest_ele);
}

let array = generateRandomArray(10);
console.log(array)

findSecondLargestAndSmallestWithoutSort(array);

// Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

function findSecondLargestAndSmallestWithSort(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j] > array[j+1]){
                swap = array[j];
                array[j] = array[j+1];
                array[j+1] = swap;
            }
        }
    }

    console.log("Second largest element is " + array[array.length-2]);
    console.log("Second smallest element is " + array[1]);
}

array = generateRandomArray(10);
console.log(array)

findSecondLargestAndSmallestWithoutSort(array);

//Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.

function PrimeFactors(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n %i ===0 ) return false;
    }

    return true;
}

function getPrimeFactorsInArray(n){
    let array = []
    for(let i=2;i<n/2;i++){
        if( n % i ===0 && PrimeFactors(i)){
           array.push(i)
        }
    }

    console.log("prime factors are:")
    console.log(array)
}

getPrimeFactorsInArray(52)

// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

function repeatedTwiceDigits(){
    let array = [];
    for(let i=1;i<=100;i++ ){
       if(i%11 === 0){
        array.push(i);
       }
    }

    console.log("twice digits are ")
    console.log(array)
}

repeatedTwiceDigits();