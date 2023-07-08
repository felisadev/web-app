import React from 'react';
import { render, screen } from '@testing-library/react';
import LogIn from '../../src/pages/LogIn';

describe('LogIn Page', () => {
  it('Should render login text', () => {
    render(<LogIn />);
    const loginText = screen.getByText(/login/i);
    expect(loginText).toBeInTheDocument();
  });
});
