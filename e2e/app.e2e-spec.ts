import { YohandmadePage } from './app.po';

describe('yohandmade App', () => {
  let page: YohandmadePage;

  beforeEach(() => {
    page = new YohandmadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
