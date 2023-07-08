import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../mocks/navigateMock'
import Lugares from '../../src/pages/Lugares';

describe('Lugares Page', () => {
  describe('Found token and fechaExp in localStorage', () => {
    beforeEach(() => {
      localStorage.setItem('token', 'my-token')
      localStorage.setItem('fechaExp', 'my-date')
    })

    it('Should render title h1', () => {
      render(<Lugares />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  
    it('Should contain text in title h1', () => {
      render(<Lugares />);
      const heading = screen.getByRole('heading', { level: 1});
      expect(heading).toHaveTextContent('¿Dónde acudir?');
    });
  })

  describe('Not found token and fechaExp in localStorage', () => {
    it('Should render not authorized modal component', () => {
      render(<Lugares />);
      const modal = screen.getByRole('alertdialog')
      expect(modal).toBeInTheDocument();
    })
  })
});

afterEach(() => {
  jest.clearAllMocks();
  localStorage.removeItem('token')
  localStorage.removeItem('fechaExp')
})

afterAll(() => {
  jest.resetAllMocks();
})
