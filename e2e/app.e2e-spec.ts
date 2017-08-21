import { QrcodeReaderWithAngularPage } from './app.po';

describe('qrcode-reader-with-angular App', () => {
  let page: QrcodeReaderWithAngularPage;

  beforeEach(() => {
    page = new QrcodeReaderWithAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
