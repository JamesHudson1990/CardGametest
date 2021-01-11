
//DECK JS
 const SUITS = ["♠","♥","♣","♦"]
 const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
 var sum = "12"
 var tax = "1.5"
 var newTotal = sum+tax
class Deck{
     constructor(cards = newDeck()){
         this.cards = cards
 
     }

     get totalNumCards(){
         return this.cards.length
     }
     shuffleDeck(){
         for(let i = this.totalNumCards - 1; i>0; i--){
             const newLocation = Math.floor(Math.random() * (i+1)) //Random location before the card we are on
             const oldCard = this.cards[newLocation] // Switched the card we are currently on with new card at the random location
             this.cards[newLocation] = this.cards[i] 
             this.cards[i] = oldCard
         }
     }
 }
 
 class Card{
     constructor(suit, value){
         this.suit = suit
         this.value = value
     }
     get colour(){
         return this.suit === "♠" || this.suit === "♣" ? 'black': 'red'
     }
     getHTML(){
         const cardDiv = document.createElement('div')
         cardDiv.innerText=this.suit
         cardDiv.classList.add("card",this.colour)
         cardDiv.dataset.value = ${this.value}  ${this.suit}
         return cardDiv
       
     }
 }
 
 
 function newDeck(){
     return SUITS.flatMap(suit=>{
         return VALUES.map(value =>{
            return new Card(suit, value) 
         })
     })
 }



 //SCRIPT JS
//  import Deck from "./deck.js"
const computerCardSlot = document.querySelector('.computer-card-slot')

const deck = new Deck()
deck.shuffleDeck()
console.log(deck.cards)

computerCardSlot.appendChild(deck.cards[0].getHTML())