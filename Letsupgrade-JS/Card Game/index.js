let cards=[
    {
        image:"https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/pokemongo/images/5/56/Charmander.png/revision/latest?cb=20191018001202",
        value:2,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/pokemongo/images/5/56/Charmander.png/revision/latest?cb=20191018001202",
        value:2,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
        value:3,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/1b/47/3a/1b473a97ded04ac7c5b85eaf2baa5441.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/1b/47/3a/1b473a97ded04ac7c5b85eaf2baa5441.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/2/2d/Pok%C3%A9mon_Psyduck_art.png",
        value:5,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/2/2d/Pok%C3%A9mon_Psyduck_art.png",
        value:5,
        status:"closed"
    },
]

// durnsten shuffling alogorithm 
//Shuffles the array everytime
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){

    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });
    document.getElementById('cards').innerHTML=cardsString;

}
displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // rest after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }
    }

    displayCards(cards);
}

