let password="El password de mi cuenta es PASSWORD. Es un password de poco cuidado"

function guessPasswordWord(guess)
{
    let timesGuessAppeared=0;
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