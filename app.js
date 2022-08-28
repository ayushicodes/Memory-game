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
        "img": "cheeseburger.png",
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

let displayGrid = document.getElementById('grid')

function displayCard() {
    for (let i = 0; i < cardarr.length; i++) {
        let card = document.createElement('img')
        // console.log(card)
        card.setAttribute('src', 'blank.png')
        // console.log(card)
        card.setAttribute('data-id', i)
        displayGrid.appendChild(card)

    }
}
displayCard()







