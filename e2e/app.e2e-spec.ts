import { ProjectArchitecturePage } from './app.po';

describe('project-architecture App', () => {
  let page: ProjectArchitecturePage;

  beforeEach(() => {
    page = new ProjectArchitecturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pra works!');
  });
});
