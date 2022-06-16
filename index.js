const buttonOne = document.getElementById('one') // game buttons - used in game login inside gameFunc
const buttonTwo = document.getElementById('two')
const buttonThree = document.getElementById('three')
const buttonFour = document.getElementById('four')
const buttonFive = document.getElementById('five')
const buttonSix = document.getElementById('six')
const buttonSeven = document.getElementById('seven')
const buttonEight = document.getElementById('eight')
const buttonNine = document.getElementById('nine')

const resetButton = document.getElementById('reset') // game reset button

const buttons = document.getElementsByClassName('gameButton') // calls an HTML collection used to loop through and create event listeners

let xWin = document.getElementById('xwin') // span element where score displays for player X
let oWin = document.getElementById('owin') // span element where score displays for player O
let whosTurn = document.getElementById('whosTurn') // who's turn display element
let winningAnouncement = document.getElementById('winningAnouncement') // end game winning announcement display element
let xWinCounter = 0; // X player score tracker
let oWinCounter = 0; // O player score tracker

let roundOver = false // determines if the round is over
let turn = 1; // turn tracker

xWin.innerText = xWinCounter
oWin.innerText = oWinCounter


const winFunc = (player) => {// set of actions that take place after a win is determined - winning announcement, 
    winningAnouncement.innerText = `${player} won!!!`
    alert(`${player} won!!!`)
    roundOver = true
    whosTurn.innerText = "Click reset to play again"
}

const gameFunc = () => { // function that runs the game - win determination, turn tracking, score tracking
    if (event.target.value || roundOver) {

    } else if (turn % 2 === 0) {
        event.target.value = "X"
        if ((buttonOne.value === 'X' && buttonTwo.value === 'X' && buttonThree.value === 'X') || 
            (buttonFour.value === 'X' && buttonFive.value === 'X' && buttonSix.value === 'X') ||
            (buttonSeven.value === 'X' && buttonEight.value === 'X' && buttonNine.value === 'X') ||
            (buttonOne.value === 'X' && buttonFive.value === 'X' && buttonNine.value === 'X') ||
            (buttonThree.value === 'X' && buttonFive.value === 'X' && buttonSeven.value === 'X') ||
            (buttonOne.value === 'X' && buttonFour.value === 'X' && buttonSeven.value === 'X') ||
            (buttonTwo.value === 'X' && buttonFive.value === 'X' && buttonEight.value === 'X') ||
            (buttonThree.value === 'X' && buttonSix.value === 'X' && buttonNine.value === 'X')) {
                winFunc('X')
                xWinCounter++
                xWin.innerText = xWinCounter
        } else {
            whosTurn.innerText = `It's O's turn`
        }
        turn++
    } else if (turn !== 9) {
        event.target.value = "O"
        if ((buttonOne.value === 'O' && buttonTwo.value === 'O' && buttonThree.value === 'O') || 
            (buttonFour.value === 'O' && buttonFive.value === 'O' && buttonSix.value === 'O') ||
            (buttonSeven.value === 'O' && buttonEight.value === 'O' && buttonNine.value === 'O') ||
            (buttonOne.value === 'O' && buttonFive.value === 'O' && buttonNine.value === 'O') ||
            (buttonThree.value === 'O' && buttonFive.value === 'O' && buttonSeven.value === 'O') ||
            (buttonOne.value === 'O' && buttonFour.value === 'O' && buttonSeven.value === 'O') ||
            (buttonTwo.value === 'O' && buttonFive.value === 'O' && buttonEight.value === 'O') ||
            (buttonThree.value === 'O' && buttonSix.value === 'O' && buttonNine.value === 'O')){
                winFunc('O')
                oWinCounter++
                oWin.innerText = oWinCounter
        } else {
            whosTurn.innerText = `It's X's turn`
        }  
        turn++
    } else if (event.target.value) {
        } else {
            event.target.value = "O"
             if ((buttonOne.value === 'O' && buttonTwo.value === 'O' && buttonThree.value === 'O') || 
        (buttonFour.value === 'O' && buttonFive.value === 'O' && buttonSix.value === 'O') ||
        (buttonSeven.value === 'O' && buttonEight.value === 'O' && buttonNine.value === 'O') ||
        (buttonOne.value === 'O' && buttonFive.value === 'O' && buttonNine.value === 'O') ||
        (buttonThree.value === 'O' && buttonFive.value === 'O' && buttonSeven.value === 'O') ||
        (buttonOne.value === 'O' && buttonFour.value === 'O' && buttonSeven.value === 'O') ||
        (buttonTwo.value === 'O' && buttonFive.value === 'O' && buttonEight.value === 'O') ||
        (buttonThree.value === 'O' && buttonSix.value === 'O' && buttonNine.value === 'O')){
            winFunc('O')
            oWinCounter++
            oWin.innerText = oWinCounter
        } else {
        event.target.value = "O"
        winningAnouncement.innerText = "Its a tie"
        alert("Its a tie")
        whosTurn.innerText = "Click reset to play again"
        }    
    }
    console.log(turn)
}

for (let i = 0; i < buttons.length; i++) { // loop that sets all board game event listeners
    buttons[i].addEventListener('click', gameFunc)
}

resetButton.addEventListener('click', () => { // game reset button event listener 
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].value = "" // clears the board
    }
    roundOver = false // re enables the buttons
    turn = 1 // reset turn tracker
    winningAnouncement.innerText = "" // resets winning announcement
    whosTurn.innerText = `It's O's turn` // resets who's turn announcement
})