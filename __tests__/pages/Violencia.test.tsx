import React from 'react';
import { render, screen } from '@testing-library/react';
import Violencia from '../../src/pages/Violencia';

describe('Violencia Page', () => {
  it('Should render title', () => {
    render(<Violencia />);
    const heading = screen.getByText('¿Cómo saber si sufro violencia?');
    expect(heading).toBeInTheDocument();
  });

  it('Should render sumary paragraphs', () => {
    render(<Violencia />);
    const paragraphs = [
      screen.getByText(/no solemos darnos cuenta/i),
      screen.getByText(/quieres saber si/i),
      screen.getByText(/llena la siguiente encuesta/i),
      screen.getByText(/por una vida libre/i)
    ];
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });
});
