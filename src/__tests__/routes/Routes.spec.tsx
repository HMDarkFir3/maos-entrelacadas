import { render } from "@testing-library/react-native";

import { AuthProvider } from "@contexts/AuthContext";
import { SettingsProvider } from "@contexts/SettingsContext";

import { Routes } from "@routes/index.routes";

describe("Routes", () => {
  it("should be able to render correctly", () => {
    render(
      <AuthProvider>
        <SettingsProvider>
          <Routes />
        </SettingsProvider>
      </AuthProvider>
    );
  });
});
