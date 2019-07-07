export class Sentence {
    private sentence_en: string
    private sentence_pt: string

    constructor(sentence_en: string, sentence_pt: string) {
        this.sentence_en = sentence_en
        this.sentence_pt = sentence_pt
    }

    public setSentenceEn(sentence_en: string): void {
        this.sentence_en = sentence_en
    }

    public setSentencePt(sentence_pt: string): void {
        this.sentence_pt = sentence_pt
    }

    public getSentenceEn(): string {
        return this.sentence_en
    }

    public getSentencePt(): string {
        return this.sentence_pt
    }
}