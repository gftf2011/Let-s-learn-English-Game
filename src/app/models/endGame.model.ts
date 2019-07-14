export class EndGame {
    private correctAnswers:number
    private totalQuestions:number

    private message:string
    private emoji:string

    private gameHasEnded:boolean 

    constructor (correctAnswers:number, totalQuestions:number, message:string, emoji:string, gameHasEnded:boolean) {
        this.correctAnswers = correctAnswers
        this.totalQuestions = totalQuestions
        this.message = message
        this.emoji = emoji
        this.gameHasEnded = gameHasEnded
    }

    public getCorrectAnswer():number {
        return this.correctAnswers
    }

    public getTotalQuestions():number {
        return this.totalQuestions
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