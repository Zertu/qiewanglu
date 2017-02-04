import { RemembermePage } from './app.po';

describe('rememberme App', function() {
  let page: RemembermePage;

  beforeEach(() => {
    page = new RemembermePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
