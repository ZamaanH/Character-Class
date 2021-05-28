class Character {
    constructor(name, phrase1, phrase2,){
        this.name = name
        this.phrase1 = phrase1
        this.phrase2 = phrase2
        this.level = 0

        console.log(name + "Summoned")
    }
    LevelUp(NewLevel){
        this.level = NewLevel
    }
    Catchphrase(PhraseNum){
        if(PhraseNum == 1){
            console.log(this.name + " said " + this.phrase1)
        }
        else if(PhraseNum == 2){
            console.log(this.name + " said " + this.phrase2)
        }
    }
}

let Po = new Character("Kung Fu Panda","Skadoosh","You have been blinded by pure awesomeness!")
let Peter_Parker = new Character("Spiderman","My Spider-Sense is tingling","Your friendly neighbourhood spiderman.!")
console.log(Po)
console.log(Peter_Parker)
Po.LevelUp(2)
console.log(Po)
Peter_Parker.Catchphrase(1)
Po.Catchphrase(2)