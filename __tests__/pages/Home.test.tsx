import React from 'react';
import { render, screen } from '@testing-library/react';
import { homeInfo } from '../../src/common/const';
import Home from '../../src/pages/Home';

describe('Home Page', () => {
  describe('First section', () => {
    it('Should render a title', () => {
      render(<Home />);
      const expectedTitle = homeInfo.sections[0].title;
      expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    });

    it('Should render a summary', () => {
      render(<Home />);
      const expectedParagraph = homeInfo.sections[0].summary[0];
      expect(screen.getByText(expectedParagraph)).toBeInTheDocument();
    });
  });

  describe('Second section', () => {
    it('Should render a title', () => {
      render(<Home />);
      const expectedTitle = homeInfo.sections[1].title;
      expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    });

    it('Should render a subtitle', () => {
      render(<Home />);
      const expectedSubtitle = homeInfo.sections[1].subtitle as string;
      expect(screen.getByText(expectedSubtitle)).toBeInTheDocument();
    });

    it('Should render info cards titles', () => {
      render(<Home />);
      const expectedTitles = homeInfo.cards.map((card) => card.title);
      expectedTitles.forEach((expectedTitle) => {
        expect(screen.getByText(expectedTitle)).toBeInTheDocument();
      });
    });

    it('Should render info cards summary', () => {
      render(<Home />);
      const expectedSummaries = homeInfo.cards.map((card) => card.summary);
      expectedSummaries.forEach((expectedSummary) => {
        expect(screen.getByText(expectedSummary)).toBeInTheDocument();
      });
    });
  });
});
