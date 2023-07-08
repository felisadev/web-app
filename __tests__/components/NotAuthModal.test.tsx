import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import navigateMock from '../../mocks/navigateMock';
import NotAuthModal from '../../src/components/NotAuthModal';

const componentInfo = {
  redirect: '/',
  title: 'This is a title',
  description: 'This a description paragraph',
  button: 'This is a button,',
};
const testNotAuthModal = (
  <NotAuthModal
    redirect={componentInfo.redirect}
    title={componentInfo.title}
    description={componentInfo.description}
    button={componentInfo.button}
  />
);

describe('NotAuthModal component', () => {
  describe('Rendering component', () => {
    it('Should render a title', () => {
      render(testNotAuthModal);
      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
    });

    it('Should render a description paragraph', () => {
      render(testNotAuthModal);
      const paragraph = screen.getByText(componentInfo.description);
      expect(paragraph).toBeInTheDocument();
    });

    it('Should render a button', () => {
      render(testNotAuthModal);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Given custom properties for component rendering', () => {
    it(`Should contain text "${componentInfo.title}" in title`, () => {
      render(testNotAuthModal);
      const heading = screen.getByRole('heading');
      expect(heading).toHaveTextContent(componentInfo.title);
    });

    it(`Should contain text "${componentInfo.description}" in description paragraph`, () => {
      render(testNotAuthModal);
      const heading = screen.getByText(componentInfo.description);
      expect(heading).toHaveTextContent(componentInfo.description);
    });

    it(`Should contain text "${componentInfo.button}"
    const <NotAuthModal in button`, () => {
      render(testNotAuthModal);
      const heading = screen.getByRole('button');
      expect(heading).toHaveTextContent(componentInfo.button);
    });
  });

  describe('Handling events', () => {
    it('Should call navigate when button is clicked', () => {
      render(testNotAuthModal);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(navigateMock).toBeCalledTimes(1);
    });

    it(`Should redirect to page "${componentInfo.redirect}" when button is clicked`, () => {
      render(testNotAuthModal);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(navigateMock).toBeCalledWith(componentInfo.redirect);
    });
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});
