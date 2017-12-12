import { GithubdemoPage } from './app.po';

describe('githubdemo App', function() {
  let page: GithubdemoPage;

  beforeEach(() => {
    page = new GithubdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
