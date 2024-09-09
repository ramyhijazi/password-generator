// Random Password Generator


function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*_"

    let allowedChars = "";
    let password = "";

    // Fill up the allowedChars variable with all characters that the user allows.
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (passwordLength <= 0){
        return `(password length must be at least 1)`;
    }
    if (allowedChars === 0){
        return (`(Select at least one set of characters)`);
    }

    for(let i=0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return '';
}

// Here we define the constraints of the password. Normally, this would be defined by the user via a GUI or something.
const passwordLength = 12;
const includeLowercase = True;
const includeUppercase = True;
const includeNumbers = True;
const includeSymbols = True;


const password = (passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);
