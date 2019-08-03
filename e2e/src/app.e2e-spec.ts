import { App } from './app.po';
import { async } from 'q';

describe('workspace-project App', () => {
  let appPage:App;

  const SAD_EMOJI: string = ":(";
  const HAPPY_EMOJI: string = ":)";
  const YOU_LOSE: string = "Você perdeu!";
  const YOU_WIN: string = "Você ganhou!";
  const WRONG_ANSWER: string = "A resposta está errada!";
  const CORRECT_ANSWER: string = "A resposta está correta!";
  
  const PROGRESS_BAR: Array<string> = [
    "0%",
    "20%",
    "40%",
    "60%",
    "80%"
  ];
  const ANSWERS: Array<string> = [
    "Eu gosto de aprender",
    "Eu assisto televisão",
    "Como você está indo",
    "O livro está sobre a mesa",
    "O que é isto"
  ];

  beforeAll(() => {
    appPage = new App();
  });

  beforeEach( async () => {
    await appPage.prepareBrowser();
  });

  it('should display Top Component text', async () => {
    await appPage.getTitle().then(text => {
      expect(text).toEqual("Let's learn English!");
    });
  });

  it('should \'div.modal-backgroung\' from modal be invisible with class \'.none\' when game starts', async () => {
    await appPage.getModalBackgroundDisplayProperty().then(value => {
      expect(value).toEqual("none");
    });
  });

  it('should display wrong answer dialog message by click button', async () => {
    await appPage.clickVerifyButton();
    await appPage.getModalBodyText().then(text => {
      expect(text).toEqual(WRONG_ANSWER);
    });
  });

  it('should display empty heart after wrong answer', async () => {
    await appPage.clickVerifyButton();
    await appPage.clickModalFooterButton();
    await appPage.isEmptyHeartPresent(0).then(value => {
      expect(value).toBeTruthy();
    });
  });

  it('should display correct answer dialog message after button click with correct answer in text area', async  ()  => {
    await appPage.sendKeysToAnswerField(ANSWERS[0]);
    await appPage.clickVerifyButton();
    await appPage.getModalBodyText().then(text => {
      expect(text).toEqual(CORRECT_ANSWER);
    });
    await appPage.clickModalFooterButton();
    for (let i = 0; i < 3; i++) {
      await appPage.isFullHeartPresent(i).then(value => {
        expect(value).toBeTruthy();
      });
    }
    await appPage.getProgressBarText().then(text => {
      expect(text).toEqual(PROGRESS_BAR[1]);
    });
  });

  it('should display \'you lose\' message with sad emoji after three wrong answers', async () => {
    for (let i = 0; i < 3; i++) {
      await appPage.clickVerifyButton();
      await appPage.clickModalFooterButton();
      if (i != 2) {
        await appPage.isEmptyHeartPresent(i).then(value => {
          expect(value).toBeTruthy();
        });
      } else {
        await appPage.isTrysPresent().then(value => {
          expect(value).toBeFalsy();
        });
      }
    }
    await appPage.getMessage().then(text => {
      expect(text).toEqual(YOU_LOSE);
    });
    await appPage.getEmoji().then(text => {
      expect(text).toEqual(SAD_EMOJI);
    });
  });

  it('should display \'you won\' message with happy emoji after five correct answers', async () => {
    for (let i = 0; i < ANSWERS.length; i++) {
      await appPage.getProgressBarText().then(text => {
        expect(text).toBe(PROGRESS_BAR[i]);
      });
      await appPage.sendKeysToAnswerField(ANSWERS[i]);
      await appPage.clickVerifyButton();
      await appPage.getModalBodyText().then(text => {
        expect(text).toEqual(CORRECT_ANSWER);
      });
      await appPage.clickModalFooterButton();
    }
    await appPage.getMessage().then(text => {
      expect(text).toEqual(YOU_WIN);
    });
    await appPage.getEmoji().then(text => {
      expect(text).toEqual(HAPPY_EMOJI);
    });
    await appPage.getScore().then(value => {
      expect(value).toBe('5');
    });
  });

});
