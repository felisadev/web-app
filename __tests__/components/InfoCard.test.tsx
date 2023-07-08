import React from 'react';
import { screen, render } from '@testing-library/react';
import InfoCard from '../../src/components/InfoCard';

const testComponentInfo = {
  title: 'This is a title',
  paragraph: 'This is a paragraph',
  iconUrl: 'This is an url',
};
const testInfoCardComponent = (
  <InfoCard title={testComponentInfo.title} icon={testComponentInfo.iconUrl}>
    {testComponentInfo.paragraph}
  </InfoCard>
);

describe('InfoCard component', () => {
  it('Should render a title', () => {
    render(testInfoCardComponent);
    const expectedTitle = screen.getByText(testComponentInfo.title);
    expect(expectedTitle).toBeInTheDocument();
  });

  it('Should render a summary', () => {
    render(testInfoCardComponent);
    const expectedSummary = screen.getByText(testComponentInfo.paragraph);
    expect(expectedSummary).toBeInTheDocument();
  });

  it(`Should render an image with expected source route: ${testComponentInfo.iconUrl}`, () => {
    render(testInfoCardComponent);
    const expectedImage = screen.getByRole('img');
    expect(expectedImage).toHaveAttribute('src', testComponentInfo.iconUrl);
  });
});
