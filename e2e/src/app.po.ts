import { by, element, browser, ElementArrayFinder } from 'protractor';
import { ElementFinder } from 'protractor';

export class App {
    private title: ElementFinder;
    private modalBackground: ElementFinder;
    private verifyButton: ElementFinder;
    private modalBodyText: ElementFinder;
    private modalFooterButton: ElementFinder;
    private answerField: ElementFinder;
    private progressBar: ElementFinder;
    private message: ElementFinder;
    private emoji: ElementFinder;
    private score: ElementFinder;
    private trys: ElementFinder;

    private fullHearts: ElementArrayFinder;
    private emptyHearts: ElementArrayFinder;

    constructor() {
        this.initVariables();
    }

    private initVariables(): void {
        this.title = element(by.css('app-top span'));
        this.modalBackground = element(by.css('app-modal > div.modal-background'));
        this.verifyButton = element(by.css('button#verify-button'));
        this.modalBodyText = element(by.css('app-modal div.modal-body p'));
        this.modalFooterButton = element(by.css('app-modal div.modal-footer button'));
        this.answerField = element(by.id('answerField'));
        this.progressBar = element(by.css('app-progress div#progress-bar'));
        this.message = element(by.id('message'));
        this.emoji = element(by.id('emoji'));
        this.score = element(by.css('p.text-white > span.text-danger'));
        this.trys = element(by.css('app-trys'));

        this.fullHearts = element.all(by.css('app-trys img[src*=\'coracao_cheio.png\']'));
        this.emptyHearts = element.all(by.css('app-trys img[src*=\'coracao_vazio.png\']'));
    }

    private async smallBrowserWaiting(): Promise<void> {
        await browser.sleep(500);
    }

    public async getTitle(): Promise<string> {
        return await this.title.getText();
    }

    public async getModalBackgroundDisplayProperty(): Promise<string> {
        return await this.modalBackground.getCssValue('display');
    }

    public async getModalBodyText(): Promise<string> {
        return await this.modalBodyText.getText();
    }

    public async getProgressBarText(): Promise<string> {
        return await this.progressBar.getText();
    }

    public async getMessage(): Promise<string> {
        return await this.message.getText();
    }

    public async getEmoji(): Promise<string> {
        return await this.emoji.getText();
    }

    public async getScore(): Promise<string> {
        return await this.score.getText();
    }

    public async isEmptyHeartPresent(index: number): Promise<boolean> {
        return await this.emptyHearts.get(index).isPresent();
    }

    public async isFullHeartPresent(index: number): Promise<boolean> {
        return await this.fullHearts.get(index).isPresent();
    }

    public async isTrysPresent(): Promise<boolean> {
        return await this.trys.isPresent();
    }

    public async clickVerifyButton(): Promise<void> {
        await this.verifyButton.click();
        await this.smallBrowserWaiting();
    }

    public async clickModalFooterButton(): Promise<void> {
        await this.modalFooterButton.click();
        await this.smallBrowserWaiting();
    }

    public async sendKeysToAnswerField(key: string): Promise<void> {
        await this.answerField.sendKeys(key);
        await this.smallBrowserWaiting();
    }

    public async prepareBrowser(): Promise<void> {
        await browser.waitForAngularEnabled(true);
        await browser.get('/');
        await this.smallBrowserWaiting();
    }

}