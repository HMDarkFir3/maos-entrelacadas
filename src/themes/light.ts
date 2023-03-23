export const light = {
  title: "light",

  colors: {
    background: "#ffffff",

    screens: {
      welcome: {
        primary: "#3cb371",
        textPrimary: "#3cb371",
        textSecondary: "#7d9cae",
      },
      authentication: {
        textPrimary: "#3cb371",

        components: {
          header: {
            textPrimary: "#3cb371",
            textSecondary: "#7d9cae",
          },
        },
      },
      introduction: {
        text: "#7d9cae",

        components: {
          introductionSlider: {
            textPrimary: "#3cb371",
            textSecondary: "#7d9cae",
          },
          introductionSliderPaginator: {
            dot: "#3cb371",
          },
        },
      },
      home: {
        components: {
          header: {
            primary: "#3cb371",
            text: "#1c1e26",
            icon: "#3cb371",
          },
        },
      },
      profile: {
        primary: "#3cb371",
        text: "#1c1e26",
        icon: "#3cb371",

        components: {
          header: {
            primary: "#3cb371",
            text: "#bfbfbf",
            icon: "#3cb371",
          },
          settingsItem: {
            text: "#6e8592",
            icon: "#6e8592",
          },
        },
      },
      settings: {
        components: {
          switcher: {
            icon: "#3cb371",
            text: "#6e8592",
            trackActive: "#3cb371",
            trackInactive: "#bdc8ce",
            thumbActive: "#f4f3f4",
            thumbInactive: "#f4f3f4",
          },
        },
      },
    },

    components: {
      backButton: {
        title: "#1c1e26",
        icon: "#1c1e26",
      },
      smallButton: {
        background: "#3cb371",
        icon: "#fafafa",
      },
      button: {
        background: "#3cb371",
        text: "#fafafa",
      },
      input: {
        primary: "#3cb371",
        text: "#1c1e26",
        placeholder: "#8babc3",
      },
      select: {
        primary: "#3cb371",
        text: "#1c1e26",
        placeholder: "#8babc3",
      },
      datePicker: {
        primary: "#3cb371",
        text: "#1c1e26",
        placeholder: "#8babc3",
      },
      customTabBar: {
        background: "#ffffff",
        active: "#3cb371",
        inactive: "#6E8592",
        border: "#3cb371",
      },
    },

    statusBar: {
      backgroundPrimary: "#ffffff",
    },

    navigationBar: {
      backgroundPrimary: "#000000",
      backgroundSecondary: "#000000",
    },

    androidRipple: {
      backgroundPrimary: "#e1e1e1",
    },
  },

  fonts: {
    regular: "Ubuntu_400Regular",
    medium: "Ubuntu_500Medium",
    bold: "Ubuntu_700Bold",
  },
};
