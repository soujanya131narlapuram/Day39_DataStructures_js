//Write a program in the following steps
//a. Roll a die and find the number between 1 to 6
//b. Repeat the Die roll and find the result each time
//c. Store the result in a dictionary
//d. Repeat till any one of the number has reached 10 times
//e. Find the number that reached maximum times and the one that was for
//minimum times


function rollDie(){
    let isWon = false;
    let dictionary = {};
    let random
    while(!isWon){
        random =  Math.floor(Math.random() * 10) % 6 + 1;

        if(dictionary[random]){
            dictionary[random]++;
            if(dictionary[random] === 10){
                isWon = true;
            }
        } else {
            dictionary[random] =1;
        }
    }
    console.log(" scores are ")
    console.log(dictionary)
    console.log(random + " won")

    let smallest  = 10;
    let smallestKey;

    Object.keys(dictionary).forEach(key=>{
        if(dictionary[key] < smallest){
            smallest = dictionary[key];
            smallestKey = key;
        }
    })

    console.log(smallestKey + " got less frequency")

}

rollDie()

function generateBirthMonths(){
    let dictionary = {};

    for(let i=0;i<50;i++){
        random =  Math.floor(Math.random() * 13) % 12 + 1;
        if(dictionary[random]){
            dictionary[random]++;
        } else {
            dictionary[random] = 1;
        }
    }

    console.log(dictionary)
}

generateBirthMonths()