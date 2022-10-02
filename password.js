// create a variable called password, set value as a string

const password = 'Checkpass1#'

// write conditional statement that checks if password meets the following constraints:
// At least 10 chars long
// contains at least 1 letter and 1 number
// If the password meets the constraint, console log a success message.
// If the password fails the constraint, console log a failure message.

// Code from class review

//checks variables to mae sure requirements are met
let minChars = false
let letterCheck = false
let numberCheck = false
let upperCheck = false

for(let i = 0; i < password.length; i++){
    //checking if char can be converted to a number data type
    if(!isNaN(+password[i])){
        numCheck = true
        console.log(password[i])
    }
    //checking if number is upperCase
    if(password[i] === password[i].toUpperCase() && !isNaN(+password[i])){
        upperCheck = true
    }
}

// check that password has a letter
if(/[a-zA-z].test(password)/){
    letterCheck= true
}

//password.includes('abc')// all would have to present in that order to be true

//check that password meets minimum chars and max chars
if (password.length >= 10 && password.length <= 20){
    minChars = true
}


// putting it all together and end spit a reply
if (minChars && letterCheck && upperCheck && numberCheck){
    console.log ('The password fulfills all the requirements')
} else {
    console.log('The password does not fulfill all of the requirements')
}