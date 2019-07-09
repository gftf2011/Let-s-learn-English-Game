export class EndGame {
    private message:string

    private gameHasEnded:boolean 

    constructor (message:string, gameHasEnded:boolean) {
        this.message = message
        this.gameHasEnded = gameHasEnded
    }

    public getMessage():string {
        return this.message
    }

    public getGameHasEnded():boolean {
        return this.gameHasEnded
    }
}