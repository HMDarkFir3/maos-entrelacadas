import { ReactNode } from "react";
import { View, Text, Button } from "react-native";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@store/index";

import { AuthProvider } from "@contexts/AuthContext";

import { useAuth } from "@hooks/useAuth";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </ReduxProvider>
  );
};

describe("AuthContext", () => {
  const ComponentMock = () => {
    const { login, register, logOut } = useAuth();

    const loginMock = {
      email: "henrique@gmail.com",
      password: "123456",
    };

    const registerMock = {
      givenName: "John Doe",
      email: "john.doe@example.com",
      gender: "Masculino",
      birthdate: new Date(),
      password: "123456",
    };

    return (
      <View>
        <Text>Test</Text>

        <Button
          title="Login"
          onPress={() => login(loginMock.email, loginMock.password)}
        />

        <Button
          title="Register"
          onPress={() =>
            register(
              registerMock.givenName,
              registerMock.email,
              registerMock.gender,
              registerMock.birthdate,
              registerMock.password
            )
          }
        />

        <Button title="LogOut" onPress={logOut} />
      </View>
    );
  };

  it("should be able to render correctly", () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });
    expect(getByText("Test")).toBeTruthy();
  });

  it("should be able to login", async () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });

    const loginButton = getByText("Login");

    await waitFor(async () => {
      await act(() => {
        fireEvent.press(loginButton);
      });
    });

    render(<ComponentMock />, { wrapper: Providers });
  });

  it("should be able to register", async () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });

    const registerButton = getByText("Register");

    act(() => {
      fireEvent.press(registerButton);
    });
  });

  it("should be able to log out", async () => {
    const { getByText } = render(<ComponentMock />, { wrapper: Providers });

    const logOutButton = getByText("LogOut");

    await waitFor(() => {
      act(() => {
        fireEvent.press(logOutButton);
      });
    });
  });
});
