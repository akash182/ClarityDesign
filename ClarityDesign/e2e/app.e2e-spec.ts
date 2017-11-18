import { ClarityDesignPage } from './app.po';

describe('clarity-design App', function() {
  let page: ClarityDesignPage;

  beforeEach(() => {
    page = new ClarityDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
