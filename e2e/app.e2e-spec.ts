import { MyAngualrPage } from './app.po';

describe('my-angualr App', () => {
  let page: MyAngualrPage;

  beforeEach(() => {
    page = new MyAngualrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
