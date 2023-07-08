import React from 'react';
import { screen, render } from '@testing-library/react';
import LocationCard from '../../src/components/LocationCard';

const componentInfo = {
  img: 'This is an image Url',
  name: 'This is a name',
  address: 'This is an address',
  map: 'This is a google maps url',
  phones: ['This is a phone', 'This is another phone'],
};
const testLocationCard = (
  <LocationCard
    img={componentInfo.img}
    name={componentInfo.name}
    address={componentInfo.address}
    map={componentInfo.map}
    phones={componentInfo.phones}
  />
);

describe('NotAuthModal component', () => {
  describe('Rendering component', () => {
    it(`Should render a name: "${componentInfo.name}"`, () => {
      render(testLocationCard);
      const name = screen.getByText(componentInfo.name);
      expect(name).toHaveTextContent(componentInfo.name);
    });

    it(`Should render an address: "${componentInfo.address}"`, () => {
      render(testLocationCard);
      const address = screen.getByText(componentInfo.address);
      expect(address).toHaveTextContent(componentInfo.address);
    });

    it('Should render a link', () => {
      render(testLocationCard);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', componentInfo.map);
    });

    it(`Should render phone numbers: "${componentInfo.phones.join(', ')}`, () => {
      render(testLocationCard);
      const phone = screen.getByText(componentInfo.phones[0], { exact: false });
      expect(phone).toHaveTextContent(componentInfo.phones.join(', '));
    });

    it('Should render an image', () => {
      render(testLocationCard);
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});
