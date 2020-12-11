const Suits = ["♠","♥","♣","♦"]
const Values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


export default class Deck{
    deckCon(cards = newDeck()){
        this.cards = []

    }

}
class Card{
    eachCard(suit, value){
        this.Card = suit
        this.value = value
    }
}

function newDeck(){
    return Suits.flatMap(suit=>{
        return Values.map(value =>{
           return new Card(suit,value) 
        })
    }
        )
}