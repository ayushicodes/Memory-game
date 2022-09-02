const cardArray = [
    {

        "name": "Cheese Burger",
        "img": "cheeseburger.png",
    },
    {

        "name": "fries",
        "img": "fries.png",
    },

    {

        "name": "hotdog",
        "img": "hotdog.png",
    },

    {

        "name": "Ice Cream",
        "img": "ice-cream.png",
    },

    {

        "name": "Milkshake",
        "img": "milkshake.png",
    },

    {

        "name": "Pizza",
        "img": "pizza.png",
    },
    {

        "name": "Cheese Burger",
        "img": "cheeseburger.png",
    },
    {


        "name": "fries",
        "img": "fries.png",
    },

    {
        "name": "hotdog",
        "img": "hotdog.png",
    },

    {
        "name": "Ice Cream",
        "img": "ice-cream.png",
    },

    {
        "name": "Milkshake",
        "img": "milkshake.png",
    },

    {
        "name": "Pizza",
        "img": "pizza.png",
    },

]


cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

window.addEventListener('DOMContentLoaded', function () {
    grid.style.height = "650px"
    grid.style.width = "680px"
    createBoard()
})

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')

        card.setAttribute('src', 'blank.png')
        card.style.height = "150px"
        card.style.borderRadius = "10px"
        card.style.padding = "10px"

        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
// createBoard()

//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    if (cardsChosenId[0] === cardsChosenId[1]) {

        alert('you have clicked the same card')
    }

    else if (cardsChosen[0] === cardsChosen[1]) {

        cards[cardsChosenId[0]].setAttribute('src', 'white.png')
        cards[cardsChosenId[1]].setAttribute('src', 'white.png')
        cards[cardsChosenId[0]].removeEventListener('click', flipCard)
        cards[cardsChosenId[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[cardsChosenId[0]].setAttribute('src', "blank.png")
        cards[cardsChosenId[1]].setAttribute('src', "blank.png")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'You have matched it all'
    }
}



//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    console.log(cardArray[cardId])
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}









