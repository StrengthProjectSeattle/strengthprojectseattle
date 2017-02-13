import { StrengthprojectseattlePage } from './app.po';

describe('strengthprojectseattle App', function() {
  let page: StrengthprojectseattlePage;

  beforeEach(() => {
    page = new StrengthprojectseattlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
