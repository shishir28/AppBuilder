import { Blackwoods.CostNotification.Web.NgPage } from './app.po';

describe('blackwoods.cross-notification.web.ng App', () => {
  let page: Blackwoods.CostNotification.Web.NgPage;

  beforeEach(() => {
    page = new Blackwoods.CostNotification.Web.NgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
