let startingPhrase = ['Look at you, you\'re', 'Oh my, you\'re', 'You are', 'Today, you\'re', 'Wow, you\'re']
let adverbs = ['quite', 'absolutely', 'majestically', 'literally so', 'unequivocally']
let complimentArray = ['beautiful', 'gorgeous', 'fantastic', 'perfect', 'glowing', 'radiant', 'handsome', 'pretty', 'stylish', 'cool', 'wonderful', 'goals']

let randomGenerator = arr => {
    let randomArrChoice = Math.floor(Math.random() * arr.length)
    return arr[randomArrChoice];
}

const complimenter = () => {
    let arr1 = startingPhrase;
    let arr2 = adverbs;
    let arr3 = complimentArray;
    return `${randomGenerator(arr1)} ${randomGenerator(arr2)} ${randomGenerator(arr3)}.`
}

console.log(complimenter())