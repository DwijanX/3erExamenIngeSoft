let password;
let separators=new Set(["-",",","."])

function setPassword(Password)
{
    password=Password
    return password
}
function deleteDotsOnSentence(password)
{
    let newPass=""
    for(let index=0;index<password.length;index++)
    {
        if(separators.has(password[index]))
            newPass+=" "
        else
            newPass+=password[index]
    }
    return newPass
}
function guessPasswordWord(guess)
{
    guess=guess.toLowerCase()
    let passwordToGuess=password.toLowerCase()
    passwordToGuess=deleteDotsOnSentence(passwordToGuess);
    let wordsArray=passwordToGuess.split(" ")
    let timesGuessAppeared=0;

    for(let wordIndex=0;wordIndex<=wordsArray.length;wordIndex++)
    {
        if(wordsArray[wordIndex]==guess)
        {
            timesGuessAppeared+=1;
        }
    }
    return timesGuessAppeared
}

export {guessPasswordWord,setPassword}