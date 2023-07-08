import React from 'react';
import { render, screen } from '@testing-library/react';
import Orientacion from '../../src/pages/Orientacion';

describe('Orientacion Page', () => {
  it('Should render title', () => {
    render(<Orientacion />);
    const heading = screen.getByText('Orientar para prevenir');
    expect(heading).toBeInTheDocument();
  });

  it('Should render sumary paragraphs', () => {
    render(<Orientacion />);
    const paragraphs = [
      screen.getByText(/en este espacio/i),
      screen.getByText(/pero la violencia/i),
    ];
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });
});
