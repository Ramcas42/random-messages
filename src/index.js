const messages = [
    "Hi",
    "Ramses",
    "Charles",
    "Nicolay",
    "Laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

randomMsg(messages);

module.exports = { randomMsg };