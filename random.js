const randomGenerator = digitCount => (() => (Math.floor(Math.random() * digitCount())));
const twoDigits = () => (Math.pow(10, 2));
const randomTwoDigitNumber = randomGenerator(twoDigits);

const makeQuestion = () => ({first: randomTwoDigitNumber(), second: randomTwoDigitNumber()});

const buildQuizBank = (size) => [...new Array(size)].reduce((acc) => acc = [...acc, makeQuestion()], []);
const askQuestion = ({first, second}) => console.log(`${first} X ${second} = ??`);
const startQuiz = (size) => {
    buildQuizBank(size).map(
        (question, index) => {
            setTimeout(() => askQuestion(question), 7000 * (index))
        }
    )
};

startQuiz(5);
console.log("Quiz begins!!");


const fetchWithTimeOut = (spec) => {
};

const timeOut = (time) => {
    
}