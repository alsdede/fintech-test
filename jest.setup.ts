import '@jest/globals';
import '@testing-library/jest-native/extend-expect';
import '@testing-library/react-native';

// default mock to userColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: () => 'light',
}));

// Clear all mock after each test
afterEach(() => {
  jest.clearAllMocks();
});