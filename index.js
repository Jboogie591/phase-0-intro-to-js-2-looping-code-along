 function writeCards(names) {
    const messages = []
    for (let i = 0; i < names.length;i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
     messages.push(message);
    }
    return messages;
}

function countDown(number) {
    for (let i = number; i >=0; i--) {
        console.log(i);
    }
}

const names = ["Johnny", "Tim", "Pat"];
const thankyoumessages = writeCards(names);
console.log(thankyoumessages);

const countFrom = 5;
countDown(countFrom);


