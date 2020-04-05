const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}


const generateNewQuestion = () => {
    let number1 = getRandomInt(9);
    let number2 = getRandomInt(9);
    return [number1, number2]

}

let testOutput = generateNewQuestion()
let myMessage = `what is ${testOutput[0]} times ${testOutput[1]}?`

console.log(generateNewQuestion())
console.log(myMessage)