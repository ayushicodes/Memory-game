const cardarr = [
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


cardarr.sort(() => 0.5 - Math.random())
let cardChoosen = []
let displayGrid = document.getElementById('grid')




function displayCard() {
    for (let i = 0; i < cardarr.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        displayGrid.appendChild(card)
    }
}
displayCard()




function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChoosen.push(cardarr[cardId].name)
    this.setAttribute('src', cardarr[cardId].img)
    if (cardChoosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}




function checkMatch() {

}









