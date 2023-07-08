import { useNavigate } from 'react-router-dom';

const navigateMock = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

(useNavigate as jest.Mock).mockReturnValue(navigateMock);

export default navigateMock;
