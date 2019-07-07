export class Heart {
    private filledHeart: boolean

    private readonly fullHeart:string = '../../assets/coracao_cheio.png'
    private readonly emptyHeart:string = '../../assets/coracao_vazio.png'

    constructor(filledHeart: boolean) {
        this.filledHeart = filledHeart
    }

    public setHeart(filledHeart: boolean):void {
        this.filledHeart = filledHeart
    }

    public getHeart():string {
        if (this.filledHeart) {
            return this.fullHeart
        } else {
            return this.emptyHeart
        }
    }
}