import { Monad.AB.Web.NgPage } from './app.po';

describe('monad.ab.web.ng App', () => {
  let page: Monad.AB.Web.NgPage;

  beforeEach(() => {
    page = new Monad.AB.Web.NgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
