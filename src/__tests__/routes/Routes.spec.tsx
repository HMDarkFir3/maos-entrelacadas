import { render } from "@testing-library/react-native";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@store/index";

import { AuthProvider } from "@contexts/AuthContext";
import { SettingsProvider } from "@contexts/SettingsContext";

import { Routes } from "@routes/index.routes";

describe("Routes", () => {
  it("should be able to render correctly", () => {
    render(
      <ReduxProvider store={store}>
        <AuthProvider>
          <SettingsProvider>
            <Routes />
          </SettingsProvider>
        </AuthProvider>
      </ReduxProvider>
    );
  });
});
