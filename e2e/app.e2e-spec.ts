import { A1Page } from './app.po';

describe('a1 App', () => {
  let page: A1Page;

  beforeEach(() => {
    page = new A1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
