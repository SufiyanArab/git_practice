// Define arrays containing different parts of the joke
const starters = [
    "Why did the chicken cross the road?",
    "What do you get when you cross a snowman and a vampire?",
    "Why was the math book sad?"
];

const middles = [
    "To get to the other side!",
    "Frostbite!",
    "Because it had too many problems!"
];

const endings = [
    "Ba-dum tss!",
    "That's a knee-slapper!",
    "Hope that brought a smile to your face!"
];

// Function to generate a random joke
function generateJoke() {
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    return `${randomStarter} ${randomMiddle} ${randomEnding}`;
}

// Generate and log a random joke
console.log(generateJoke());

