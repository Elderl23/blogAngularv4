import { TystabPage } from './app.po';

describe('tystab App', () => {
  let page: TystabPage;

  beforeEach(() => {
    page = new TystabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
