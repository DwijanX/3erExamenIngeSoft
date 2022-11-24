let password="El password de mi cuenta es PASSWORD. Es un Password de poco cuidado"

function guessPasswordWord(guess)
{
    guess=guess.toLowerCase()
    let timesGuessAppeared=0;
    password=password.toLowerCase()
    let wordsArray=password.split(" ")
    for(let wordIndex=0;wordIndex<=wordsArray.length;wordIndex++)
    {
        if(wordsArray[wordIndex]==guess)
        {
            timesGuessAppeared+=1;
        }
    }
    return timesGuessAppeared
}

export {guessPasswordWord}