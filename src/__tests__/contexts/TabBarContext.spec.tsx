import { View, Text } from "react-native";
import { render } from "@testing-library/react-native";

import { TabBarProvider } from "@contexts/TabBarContext";

describe("TabBarContext", () => {
  const TestComponent = () => {
    return (
      <TabBarProvider>
        <View>
          <Text>Test</Text>
        </View>
      </TabBarProvider>
    );
  };

  it("should be able to render correctly", () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText("Test")).toBeTruthy();
  });
});
