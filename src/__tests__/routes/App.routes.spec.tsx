import { render } from "@testing-library/react-native";

import { AppRoutes } from "@routes/App.routes";

describe("App Routes", () => {
  it("should be able to render correctly", () => {
    render(<AppRoutes />);
  });
});
