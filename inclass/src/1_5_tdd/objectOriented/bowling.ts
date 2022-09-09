export class BowlingGame {

    private _scoreBoard: number[]
    constructor(){
        this._scoreBoard = []
    }

    roll(pins:number){
        this._scoreBoard.push(pins)
    }

    score(){
        let sum = 0
        let firstRoll = 0
        for (let frames = 0; frames < 10; frames++) {
            if (this.isStrike(firstRoll)) {
                sum += 10 + this._scoreBoard[firstRoll+1] + this._scoreBoard[firstRoll+2]
                firstRoll++
            }else if(this.isSpare(firstRoll)){
                sum += 10 + this._scoreBoard[firstRoll+2]
                firstRoll += 2
            }else{
                sum += this._scoreBoard[firstRoll] + this._scoreBoard[firstRoll+1]
                firstRoll += 2
            }   
        }
        return sum 
    }

    private isStrike(firstRoll:number) {
        return this._scoreBoard[firstRoll] == 10
    }

    private isSpare(firstRoll:number) {
        return this._scoreBoard[firstRoll] + this._scoreBoard[firstRoll+1] == 10
    }
}