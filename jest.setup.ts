import '@jest/globals';
import '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

// default mock to userColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: () => 'light',
}));

// Clear all mock after each test
afterEach(() => {
  jest.clearAllMocks();
});