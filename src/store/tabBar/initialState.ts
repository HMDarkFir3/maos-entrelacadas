export interface TabBarState {
  isActive: "Home" | "Events" | "Donations" | "Profile";
}

export const initialState: TabBarState = {
  isActive: "Home",
};
