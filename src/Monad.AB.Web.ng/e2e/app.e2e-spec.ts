import { Monad.AB.Web.NgPage } from './app.po';

describe('monad.ab.web.ng App', () => {
  let page: Monad.AB.Web.NgPage;

  beforeEach(() => {
    page = new Monad.AB.Web.NgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
