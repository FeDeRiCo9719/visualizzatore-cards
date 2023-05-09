/*
DATA ----------------------------------------------
*/
// array with cards 
const cards = [
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'red',
        text: 'Questo è il testo inerente alla card che rappresenta una <strong>mela di colore rosso</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 0
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'orange',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>gelato di colore arancione</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 1
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'blue',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>pesce di colore blu</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 2
    },
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'pink',
        text: 'Questo è il testo inerente alla card che rappresenta una <strong>mela di colore rosa</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 3
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'yellow',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>pesce di colore giallo</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 4
    },
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'red',
        text: 'Questo è il testo inerente alla card che rappresenta una <strong>mela di colore rosso</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 5
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'orange',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>gelato di colore arancione</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 6
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'blue',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>pesce di colore blu</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 7
    },
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'pink',
        text: 'Questo è il testo inerente alla card che rappresenta una <strong>mela di colore rosa</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 8
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'yellow',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>pesce di colore giallo</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 9
    },
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'red',
        text: 'Questo è il testo inerente alla card che rappresenta una <strong>mela di colore rosso</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 10
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'orange',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>gelato di colore arancione</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 11
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'blue',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>pesce di colore blu</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 12
    },
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'pink',
        text: 'Questo è il testo inerente alla card che rappresenta una <strong>mela di colore rosa</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 13
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food',
        color: 'yellow',
        text: 'Questo è il testo inerente alla card che rappresenta un <strong>pesce di colore giallo</strong>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aliquid illum! Nulla eveniet autem quod explicabo ea. Magnam, minus, at dolorum nulla provident, ad odio dolor nostrum quis consectetur officia!',
        id: 14
    }
];

let cnt = document.getElementById('mainContainer');
let cardCnt = document.getElementById('cardContainer');
let cardBox = document.getElementById('cardBox');
let loadingScreen = document.querySelector('.loadingBg');
let selectedCard = 0;
let selectCols = document.getElementById('selectCols');
let btnBackHome = document.getElementById('btnBackHome');


/*
FUNCTIONS ----------------------------------------------
*/
function fillCnt (arr, container, cols) {

    loading();

    let classCols = cols;

    // svuoto il container in html
    container.innerHTML = '';

    // riempio il container con il contenuto selezionato
    arr.forEach( (card) => {
        container.innerHTML += `
        <div class="card ${cols}" id="${card.id}" onclick="clickedCard(this.id)">
            <i class="${card.family} ${card.prefix}${card.name}" style="color: ${card.color};"></i>
            <div>${card.name}</div>
        </div>
        `;
    } );
}

function loading() {

    // show loading ------------------------------------------------------
    loadingScreen.classList.remove('hidden');
    loadingScreen.classList.add('opacity'); 
    // setTimeout( ()=> {
    //     document.querySelector('.bar').classList.add('expandWidth');
    // }, 200)

    // hide loading ------------------------------------------------------
    setTimeout( ()=> {
        loadingScreen.classList.remove('opacity'); 
    }, 400)
    setTimeout( ()=> {
        loadingScreen.classList.add('hidden'); 
        // document.querySelector('.bar').classList.remove('expandWidth');
    }, 500)
}

function clickedCard(id) {
    loading();

    selectedCard = id;

    cnt.classList.add("hidden");
    selectCols.classList.add("hidden");
    cardCnt.classList.remove("hidden");
    btnBackHome.classList.remove("hidden");
    
    cardBox.innerHTML = `
    <div class="cardItem card">
        <i class="${cards[id].family} ${cards[id].prefix}${cards[id].name}" style="color: ${cards[id].color};"></i>
    </div>
    <div class="cardInfo">
        <h2>${cards[id].name}-${cards[id].color}</h2>
        <p>${cards[id].text}</p>
    </div>
    `;
}

function nextImg() {
    if (selectedCard == cards.length -1) {
        selectedCard = 0;
    }
    else {
        selectedCard++;
    }
    
    clickedCard(selectedCard);
}

function prevImg() {
    if (selectedCard == 0) {
        selectedCard = cards.length -1;
    }
    else {
        selectedCard--;
    }
    clickedCard(selectedCard);
}

function backToHome() {
    loading();

    cnt.classList.remove("hidden");
    selectCols.classList.remove("hidden");
    cardCnt.classList.add("hidden");
    btnBackHome.classList.add("hidden");
}

selectCols.addEventListener( 'change', () => {

    let columns = document.getElementById('selectCols').value;

    switch(columns) {
        case "12":
            fillCnt(cards, cnt, "cards_12");
            break;
        case "9":
            fillCnt(cards, cnt, "cards_9");
            break;
        case "6": 
            fillCnt(cards, cnt, "cards_6");       
            break;
        case "3":
            fillCnt(cards, cnt, "cards_3");
            break;
    }
})

/*
PROGRAM ----------------------------------------------
*/
// fill main container with cards
fillCnt(cards, cnt, "cards_12");




