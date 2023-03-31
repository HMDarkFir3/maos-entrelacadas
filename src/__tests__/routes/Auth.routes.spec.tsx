import { render } from "@testing-library/react-native";

import { SettingsProvider } from "@contexts/SettingsContext";

import { AuthRoutes } from "@routes/Auth.routes";

describe("Auth Routes", () => {
  it("should be able to render correctly", () => {
    render(
      <SettingsProvider>
        <AuthRoutes />
      </SettingsProvider>
    );
  });
});
