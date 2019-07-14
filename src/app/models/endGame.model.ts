export class EndGame {
    private message:string
    private emoji:string

    private gameHasEnded:boolean 

    constructor (message:string, emoji:string, gameHasEnded:boolean) {
        this.message = message
        this.emoji = emoji
        this.gameHasEnded = gameHasEnded
    }

    public getMessage():string {
        return this.message
    }

    public getEmoji():string {
        return this.emoji
    }

    public getGameHasEnded():boolean {
        return this.gameHasEnded
    }
}