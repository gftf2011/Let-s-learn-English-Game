import { by, element, ElementFinder, browser, WebDriver } from 'protractor';

describe('workspace-project App', () => {
  
  const WRONG_ANSWER: string = "A resposta está errada!";

  beforeEach(() => {
    browser.waitForAngularEnabled(true);
    browser.get('/');
  });

  it('should display Top Component text', () => {
    element(by.css('app-top span')).getText().then(( title ) => {
      expect(title).toEqual("Let's learn English!");
    });
  });

  it('should \'div.modal-backgroung\' from modal be invisible with class \'.none\' when game starts', () => {
    element(by.css('app-modal > div.modal-background')).getCssValue('display').then(value => {
      expect(value).toEqual('none');
    });
  });

  it('should display wrong answer dialog message by click button', () => {
    element(by.css('button#verify-button')).click();
    element(by.css('app-modal div.modal-body p')).getText().then(text => {
      expect(text).toEqual('A resposta está errada!');
    });
  });

  it('should display empty heart after wrong answer', () => {
    element(by.css('button#verify-button')).click();
    element(by.css('app-modal div.modal-footer button')).click();
    element(by.css('app-trys img[src*=\'coracao_vazio.png\']')).isPresent().then(value => {
      expect(value).toBeTruthy();
    });
  });

  it('should display correct answer dialog message after button click with correct answer in text area', ()  => {
    element(by.id('answerField')).sendKeys('Eu gosto de aprender');
    element(by.css('button#verify-button')).click();
    element(by.css('app-modal div.modal-body p')).getText().then(text => {
      expect(text).toEqual('A resposta está correta!');
    });
    element(by.css('app-modal div.modal-footer button')).click();
    element.all(by.css('app-trys img[src*=\'coracao_cheio.png\']')).count().then(hearts => {
      expect(hearts).toBe(3);
    });
    element(by.css('app-progress div#progress-bar')).getText().then(text => {
      expect(text).toEqual('20%');
    });
  });

});
