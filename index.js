const buttonOne = document.getElementById('one')
const buttonTwo = document.getElementById('two')
const buttonThree = document.getElementById('three')
const buttonFour = document.getElementById('four')
const buttonFive = document.getElementById('five')
const buttonSix = document.getElementById('six')
const buttonSeven = document.getElementById('seven')
const buttonEight = document.getElementById('eight')
const buttonNine = document.getElementById('nine')
const resetButton = document.getElementById('reset')
const buttons = document.getElementsByClassName('gameButton')
let xWin = document.getElementById('xwin')
let oWin = document.getElementById('owin')
let whosTurn = document.getElementById('whosTurn')
let winningAnouncement = document.getElementById('winningAnouncement')
let xWinCounter = 0;
let oWinCounter = 0;
xWin.innerText = xWinCounter
oWin.innerText = oWinCounter
let roundOver = false
let turn = 1;

const gameFunc = () => {
    if (event.target.value || roundOver) {

    } else if (turn % 2 === 0) {
        event.target.value = "X"
        whosTurn.innerText = `It's O's turn`
        if ((buttonOne.value === 'X' && buttonTwo.value === 'X' && buttonThree.value === 'X') || 
        (buttonFour.value === 'X' && buttonFive.value === 'X' && buttonSix.value === 'X') ||
        (buttonSeven.value === 'X' && buttonEight.value === 'X' && buttonNine.value === 'X') ||
        (buttonOne.value === 'X' && buttonFive.value === 'X' && buttonNine.value === 'X') ||
        (buttonThree.value === 'X' && buttonFive.value === 'X' && buttonSeven.value === 'X') ||
        (buttonOne.value === 'X' && buttonFour.value === 'X' && buttonSeven.value === 'X') ||
        (buttonTwo.value === 'X' && buttonFive.value === 'X' && buttonEight.value === 'X') ||
        (buttonThree.value === 'X' && buttonSix.value === 'X' && buttonNine.value === 'X')) {
            winningAnouncement.innerText = "X won!!!"
            roundOver = true
            xWinCounter++
            xWin.innerText = xWinCounter
            whosTurn.innerText = "Click reset to play again"
    }
        turn++
    } else if (turn !== 9) {
        event.target.value = "O"
        whosTurn.innerText = `It's X's turn`
        if ((buttonOne.value === 'O' && buttonTwo.value === 'O' && buttonThree.value === 'O') || 
    (buttonFour.value === 'O' && buttonFive.value === 'O' && buttonSix.value === 'O') ||
    (buttonSeven.value === 'O' && buttonEight.value === 'O' && buttonNine.value === 'O') ||
    (buttonOne.value === 'O' && buttonFive.value === 'O' && buttonNine.value === 'O') ||
    (buttonThree.value === 'O' && buttonFive.value === 'O' && buttonSeven.value === 'O') ||
    (buttonOne.value === 'O' && buttonFour.value === 'O' && buttonSeven.value === 'O') ||
    (buttonTwo.value === 'O' && buttonFive.value === 'O' && buttonEight.value === 'O') ||
    (buttonThree.value === 'O' && buttonSix.value === 'O' && buttonNine.value === 'O')){
        winningAnouncement.innerText = "O won!!!"
        roundOver = true
        oWinCounter++
        oWin.innerText = oWinCounter
        whosTurn.innerText = "Click reset to play again"
    }   
        turn++
    } else {
        winningAnouncement.innerText = "Its a tie"
        whosTurn.innerText = "Click reset to play again"
    }    
    console.log(turn)
}

buttonOne.addEventListener('click', gameFunc)
buttonTwo.addEventListener('click', gameFunc)
buttonThree.addEventListener('click', gameFunc)
buttonFour.addEventListener('click', gameFunc)
buttonFive.addEventListener('click', gameFunc)
buttonSix.addEventListener('click', gameFunc)
buttonSeven.addEventListener('click', gameFunc)
buttonEight.addEventListener('click', gameFunc)
buttonNine.addEventListener('click', gameFunc)
resetButton.addEventListener('click', () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].value = ""
        
    }
    roundOver = false
    turn = 1
    winningAnouncement.innerText = ""
    whosTurn.innerText = `It's O's turn`
})


