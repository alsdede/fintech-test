import { ThemedText } from "@/components/themed-text";
import { render } from "@testing-library/react-native";
import { screen } from "expo-router/testing-library";

// Mock do hook useThemeColor
// jest.mock('@/hooks/use-theme-color', () => ({
//   useThemeColor: jest.fn().mockReturnValue('#000000'),
// }));

describe("<ThemedText />", () => {
  it("render", () => {
    render(<ThemedText>Texto teste</ThemedText>);
    const textElement = screen.getByText("Texto teste");
    expect(textElement).toBeTruthy();
  });
  it("render default", () => {
    render(<ThemedText>Texto teste</ThemedText>);

    const textElement = screen.getByText("Texto teste");
    expect(textElement).toBeTruthy();

    expect(textElement.props.style).toContainEqual({
      fontSize: 16,
      lineHeight: 24,
    });
  });

  it("render subtitle", () => {
    render(<ThemedText type="subtitle">Texto teste</ThemedText>);

    const textElement = screen.getByText("Texto teste");
    expect(textElement).toBeTruthy();

    expect(textElement.props.style).toContainEqual({
      fontSize: 20,
      fontWeight: "bold",
    });
  });
  it("render link", () => {
    render(<ThemedText type="link">Texto teste</ThemedText>);

    const textElement = screen.getByText("Texto teste");
    expect(textElement).toBeTruthy();

    expect(textElement.props.style).toContainEqual({
      lineHeight: 30,
      fontSize: 16,
      color: "#0a7ea4",
    });
  });
  it("render title", () => {
    render(<ThemedText type="title">Texto teste</ThemedText>);

    const textElement = screen.getByText("Texto teste");
    expect(textElement).toBeTruthy();

    expect(textElement.props.style).toContainEqual({
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 32,
    });
  });
  it("render defaultSemiBold", () => {
    render(<ThemedText type="defaultSemiBold">Texto teste</ThemedText>);

    const textElement = screen.getByText("Texto teste");
    expect(textElement).toBeTruthy();

    expect(textElement.props.style).toContainEqual({
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "600",
    });
  });

   it("render ThemedText with lightColor", () => {
    render(<ThemedText lightColor="#fff">Texto teste</ThemedText>);

    const textElement = screen.getByText("Texto teste");
    expect(textElement.props.style).toContainEqual({
      color:"#fff"
    });
  });

  it("render ThemedText with darkColor", () => {
    render(<ThemedText darkColor="#11181C">Texto teste</ThemedText>);

    const textElement = screen.getByText("Texto teste");
    expect(textElement.props.style).toContainEqual({
      color: "#11181C"
    });
  });

  it("render ThemedText with custom style", () => {
    render(
      <ThemedText style={{ marginBottom: 10, textAlign: 'center' }}>
        Texto teste
      </ThemedText>
    );

    const textElement = screen.getByText("Texto teste");
    expect(textElement.props.style).toContainEqual({
      marginBottom: 10,
      textAlign: 'center'
    });
  });

  it("render ThemedText with long text", () => {
    const longText = "Este é um texto muito longo que deve ser renderizado corretamente mesmo quando excede o tamanho normal de uma linha de texto";
    render(<ThemedText>{longText}</ThemedText>);

    const textElement = screen.getByText(longText);
    expect(textElement).toBeTruthy();
  });

  it("render ThemedText with number as children", () => {
    render(<ThemedText>{42}</ThemedText>);

    const textElement = screen.getByText("42");
    expect(textElement).toBeTruthy();
  });

  it("render ThemedText with nested text components", () => {
    const { getByTestId } = render(
      <ThemedText testID="parent-text">
        Texto principal
        <ThemedText testID="child-text" type="subtitle">
          Subtítulo
        </ThemedText>
      </ThemedText>
    );

    const parentText = getByTestId("parent-text");
    const childText = getByTestId("child-text");

    expect(parentText).toBeTruthy();
    expect(childText).toBeTruthy();
    expect(childText.props.style).toContainEqual({
      fontSize: 20,
      fontWeight: "bold",
    });
  });
});
