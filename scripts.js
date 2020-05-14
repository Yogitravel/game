let computeNum = Math.floor(Math.random() * 100) + 1
let history = []
let remainingGuess = 5




function guessNumber() {
    let resultMessage = ' '
    let userNum = document.getElementById("userNum").value
    if (remainingGuess > 0) {
        //Hanh dong khi so luot van lon hon 0

        if (computeNum > userNum) {
            resultMessage = 'Too low ';
            remainingGuess--;
        }
        else if (computeNum < userNum) {
            resultMessage = 'Too high '
            remainingGuess--;
        }

        else if (computeNum == userNum) {
            resultMessage = 'Yeah! correct '
        }
        history.push(userNum)

    }


    else {
        //hanh dong xay ra khi so luot bang 0
        alert("You are suck!");
        timeOut()
    }



    document.getElementById("resultArea").innerHTML = `${resultMessage}`
    document.getElementById("historyArea").innerHTML = `History: ${history}`

}
function timeOut() {
    clearInterval(myTime);
}


// dong ho dem  nguoc
let time = 30 // time start from 0
let myTime; // timer will be assign to this variable
function remainingTime() {
    console.log("function nay chay chua")
    myTime = setInterval(() => {
        if (time === 0) {
            return;

        }
        time -= 1
        document.getElementById('remainingTime').innerHTML = `Remaining Time: ${time}`

    }, 1000)
}
remainingTime()

//reset lai game
function resetGame() {
    timeOut()
    console.log("da chay chua")
    remainingGuess = 5
    remainingTime()
    time = 30
    history = [];
    document.getElementById("remainingGuess").innerHTML = `Remaining Guess: ${remainingGuess} `
    document.getElementById("historyArea").innerHTML = `History: ${history} `
    document.getElementById('remainingTime').innerHTML = `Remaining Time: ${time} `

}




