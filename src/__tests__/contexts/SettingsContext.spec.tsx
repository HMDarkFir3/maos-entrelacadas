import { ReactNode } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";

import { SettingsProvider } from "@contexts/SettingsContext";

import { useSettings } from "@hooks/useSettings";

const Providers = ({ children }: { children: ReactNode }) => {
  return <SettingsProvider>{children}</SettingsProvider>;
};

describe("SettingsContext", () => {
  const ComponentMock = () => {
    const {
      fontSizeValue,
      sawIntroductionInStorage,
      changeFontSize,
      toggleTheme,
    } = useSettings();

    const dataMock = [
      {
        name: "Pequeno",
        size: "sm",
      },
      {
        name: "Normal",
        size: "md",
      },
      {
        name: "Grande",
        size: "lg",
      },
    ];

    return (
      <View>
        <Text style={{ fontSize: fontSizeValue(20) }}>Test</Text>

        <Button title="Jump Introduction" onPress={sawIntroductionInStorage} />

        <Button title="Toggle Theme" onPress={toggleTheme} />

        <FlatList
          data={dataMock}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() =>
                changeFontSize(
                  item.name as "Pequeno" | "Normal" | "Grande",
                  item.size as "sm" | "md" | "lg"
                )
              }
            />
          )}
        />
      </View>
    );
  };

  it("should be able to render correctly", () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });
    expect(getByText("Test")).toBeTruthy();
  });

  it("should be able to press the jump introduction", () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });

    const jumpIntroduction = getByText("Jump Introduction");

    fireEvent.press(jumpIntroduction);
  });

  it("should be able to press the toggle theme", () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });

    const toggleTheme = getByText("Toggle Theme");

    waitFor(() => {
      act(() => {
        fireEvent.press(toggleTheme);
      });
    });

    render(<ComponentMock />, { wrapper: Providers });

    act(() => {
      fireEvent.press(toggleTheme);
    });
  });

  it("should be able to press the change font size", () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });

    const smallFontSize = getByText("Pequeno");
    const normalFontSize = getByText("Normal");
    const largeFontSize = getByText("Grande");

    waitFor(() => {
      act(() => {
        fireEvent.press(smallFontSize);
      });

      act(() => {
        fireEvent.press(normalFontSize);
      });

      act(() => {
        fireEvent.press(largeFontSize);
      });
    });

    render(<ComponentMock />, { wrapper: Providers });
  });

  it("should be able to change the font size", async () => {});
});
