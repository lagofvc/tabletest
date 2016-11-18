import { TabletestPage } from './app.po';

describe('tabletest App', function() {
  let page: TabletestPage;

  beforeEach(() => {
    page = new TabletestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
