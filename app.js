const card = [
    {
        "data": "cheeseburger",
        "name": "Cheese Burger",
        "img": "cheeseburger.png",
    },
    {
        "data": "fries",
        "name": "fries",
        "img": "fries.png",
    },

    {
        "data": "hotdog",
        "name": "hotdog",
        "img": "hotdog.png",
    },

    {
        "data": "icecream",
        "name": "Ice Cream",
        "img": "ice-cream.png",
    },

    {
        "data": "milkshake",
        "name": "Milkshake",
        "img": "milkshake.png",
    },

    {
        "data": "pizza",
        "name": "Pizza",
        "img": "pizza.png",
    },
    {
        "data": "cheeseburger",
        "name": "Cheese Burger",
        "img": "cheeseburger.png",
    },
    {
        "data": "fries",

        "name": "fries",
        "img": "fries.png",
    },

    {
        "data": "hotdog",
        "name": "hotdog",
        "img": "hotdog.png",
    },

    {
        "data": "icecream",
        "name": "Ice Cream",
        "img": "cheeseburger.png",
    },

    {
        "data": "milkshake",
        "name": "Milkshake",
        "img": "milkshake.png",
    },

    {
        "data": "pizza",
        "name": "Pizza",
        "img": "pizza.png",
    },

]
card.sort(() => 0.5 - Math.random())


let gridDisplay = document.getElementById('grid')

function cardDisplay(card) {

    let display = card.map(function (item) {

        return `<div class="div"><img src="blank.png"  data-id=${item.data}/></div>`

    }).join('')
    console.log(display)
    gridDisplay.innerHTML = display
}

cardDisplay(card)




