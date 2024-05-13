const passwordLength = document.getElementById('password-length')
const includeNumbers = document.getElementById('include-numbers')
const includeSpecial = document.getElementById('include-special')
const includeUppercase = document.getElementById('include-uppercase')
const generateBtn = document.querySelector('.generate-btn')
const passwordBtnCopy = document.querySelector('.password-btn_copy')
const passwordOutput = document.getElementById('passwordOutput')


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '0123456789'
const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'


const generatePassword = () => {
    let password = ''
    let possibleChars = lowercaseChars

    if (includeNumbers.checked) {
        possibleChars += numberChars
    }
    if (includeSpecial.checked) {
        possibleChars += specialChars
    }
    if (includeUppercase.checked) {
        possibleChars += uppercaseChars
    }

    for (let i = 0; i < passwordLength.value; i++) {
        let s = possibleChars[Math.floor(Math.random() * possibleChars.length)]
        password += s
    }

    passwordOutput.textContent = password
}

passwordOutput.textContent = ''
generateBtn.addEventListener('click', () => {
    generatePassword()
    passwordBtnCopy.textContent = 'Click to Copy Password'
})
passwordBtnCopy.addEventListener('click', () => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordOutput.textContent)
        passwordBtnCopy.textContent = 'Password copied!'
    }
})

