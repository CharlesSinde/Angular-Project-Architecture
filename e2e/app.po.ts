import { browser, element, by } from 'protractor';

export class ProjectArchitecturePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pra-root h1')).getText();
  }
}
