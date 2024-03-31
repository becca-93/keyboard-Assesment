//String of all 26 letters of the alphabet (lowercase)
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//Variable that will randomly pick one of the 26 letters as a secret letter
let secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];

// Keyboard Event
document.body.addEventListener('keydown', function(event) {
    const pressedKey = event.key.toLowerCase();

    if (pressedKey === secretKey) {
    
        const newListItem = document.createElement('li');

        newListItem.textContent = `SECRET KEY PRESSED: ${secretKey}`;
        
        document.querySelector('ol').appendChild(newListItem);

        secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
});