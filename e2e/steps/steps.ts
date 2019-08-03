import { expect } from "chai";
import { Given, When, Then, Before } from "cucumber";
import { browser, by, element } from 'protractor';

Before( async () => {
    await browser.waitForAngularEnabled(true);
    await browser.manage().window().maximize();
});

Given ("I will enter the application url", async () => {
    await browser.get('http://localhost:4200/');
    await browser.sleep(500);
});

When ("I will click the verify button", async () => {
    await element(by.css('button#verify-button')).click();
});

When ("I will click the close button from modal footer", async () => {
    await element(by.css('app-modal div.modal-footer button')).click();
});

Then ("I will check if logo title is {string}", async (title: string) => {
    await element(by.css('app-top span')).getText().then(text => {
        expect(text).to.equal(title);
    });
});

Then ("I will check if modal background has display {string}", async (property: string) => {
    await element(by.css('app-modal > div.modal-background')).getCssValue('display').then(text => {
        expect(text).to.equal(property);
    });
});

Then ("I will check if modal body message is {string}", async (message: string) => {
    await element(by.css('app-modal div.modal-body p')).getText().then(text => {
        expect(text).to.equal(message);
    });
});

Then ("I will check if has {string} empty hearts present", async (value: string) => {
    await element.all(by.css('app-trys img[src*=\'coracao_vazio.png\']')).get(parseInt(value, 10)).isPresent().then(bool => {
        expect(bool).to.true;
    });
});