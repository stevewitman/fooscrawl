import { FooscrawlPage } from './app.po';

describe('fooscrawl App', function() {
  let page: FooscrawlPage;

  beforeEach(() => {
    page = new FooscrawlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
