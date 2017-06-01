import { browser, by, element } from 'protractor';

export class Monad.AB.Web.NgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
