import { ThemedText } from '@/components/themed-text';
import { render } from '@testing-library/react-native';
import { screen } from 'expo-router/testing-library';

// Mock do hook useThemeColor
// jest.mock('@/hooks/use-theme-color', () => ({
//   useThemeColor: jest.fn().mockReturnValue('#000000'),
// }));


describe('<ThemedText />', () => {
   it('render', () => {
   render(<ThemedText>Texto teste</ThemedText>);
    const textElement = screen.getByText('Texto teste');
       expect(textElement).toBeTruthy();
  });
  it('render default', () => {
   render(<ThemedText>Texto teste</ThemedText>);
    
    const textElement = screen.getByText('Texto teste');
    expect(textElement).toBeTruthy();
    
    expect(textElement.props.style).toContainEqual({
      fontSize: 16,
      lineHeight: 24,
    });
  });
});