// TODO: Declare any global variables we need
let numOne = 0
let numTwo = 0
let numThree = 0
let numFour = 0
let numFive = 0
let numSix = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
 
    // Flip Button Click Handler
    document.getElementById('roll').addEventListener('click', () => {
        // TODO: Determine flip outcome
        let rolledValue = Math.ceil(Math.random() * 6)
        // TODO: Update image and status message in the DOM
        if (rolledValue == 1){
            document.getElementById('dice-image').src = 'assets/images/dice/dice1.png'
            document.getElementById('message').textContent = 'You Rolled One!'
            numOne += 1
        } else if (rolledValue == 2){
            document.getElementById('dice-image').src = 'assets/images/dice/dice2.png'
            document.getElementById('message').textContent = 'You Rolled Two!'
            numTwo += 1
        } else if (rolledValue == 3){
            document.getElementById('dice-image').src = 'assets/images/dice/dice3.png'
            document.getElementById('message').textContent = 'You Rolled Three!'
            numThree += 1
        } else if (rolledValue == 4){
            document.getElementById('dice-image').src = 'assets/images/dice/dice4.png'
            document.getElementById('message').textContent = 'You Rolled Four!'
            numFour += 1
        } else if (rolledValue == 5){
            document.getElementById('dice-image').src = 'assets/images/dice/dice5.png'
            document.getElementById('message').textContent = 'You Rolled Five!'
            numFive += 1
        } else {
            document.getElementById('dice-image').src = 'assets/images/dice/dice6.png'
            document.getElementById('message').textContent = 'You Rolled Six!'
            numSix += 1
        }

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let total = numOne + numTwo + numThree + numFour + numFive + numSix
        // Make variables to track the percentages of heads and tails
        let numOnePerc = 0
        let numTwoPerc = 0
        let numThreePerc = 0
        let numFourPerc = 0
        let numFivePerc = 0
        let numSixPerc = 0

        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if(total > 0){
            numOnePerc = Math.ceil((numOne/total) * 100)
            numTwoPerc = Math.ceil((numTwo/total) * 100)
            numThreePerc = Math.ceil((numThree/total) * 100)
            numFourPerc = Math.ceil((numFour/total) * 100)
            numFivePerc = Math.ceil((numFive/total) * 100)
            numSixPerc = Math.ceil((numSix/total) * 100)
        }
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        document.getElementById('one').textContent = numOne
        document.getElementById('one-percent').textContent = numOnePerc + '%'
        document.getElementById('two').textContent = numTwo
        document.getElementById('two-percent').textContent = numTwoPerc + '%'
        document.getElementById('three').textContent = numThree
        document.getElementById('three-percent').textContent = numThreePerc + '%'
        document.getElementById('four').textContent = numFour
        document.getElementById('four-percent').textContent = numFourPerc + '%'
        document.getElementById('five').textContent = numFive
        document.getElementById('five-percent').textContent = numFivePerc + '%'
        document.getElementById('six').textContent = numSix
        document.getElementById('six-percent').textContent = numSixPerc + '%'

    })


    // Clear Button Click Handler
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        // TODO: Reset global variables to 0
        let numOne = 0
        let numTwo = 0
        let numThree = 0
        let numFour = 0
        let numFive = 0
        let numSix = 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        // TODO: Update the display of each table cell
        document.getElementById('one').textContent = numOne
        document.getElementById('one-percent').textContent = 0 + '%'
        document.getElementById('two').textContent = numTwo
        document.getElementById('two-percent').textContent = 0 + '%'
        document.getElementById('three').textContent = numThree
        document.getElementById('three-percent').textContent = 0 + '%'
        document.getElementById('four').textContent = numFour
        document.getElementById('four-percent').textContent = 0 + '%'
        document.getElementById('five').textContent = numFive
        document.getElementById('five-percent').textContent = 0 + '%'
        document.getElementById('six').textContent = numSix
        document.getElementById('six-percent').textContent = 0 + '%'
       
    })

})
