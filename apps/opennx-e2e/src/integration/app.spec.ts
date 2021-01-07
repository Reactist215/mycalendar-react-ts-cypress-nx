import { getHeader } from '../support/app.po';

describe('welcome', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getHeader().contains('Voyage Calendar');
  });
});
