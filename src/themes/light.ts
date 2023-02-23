export const light = {
  title: "light",

  colors: {
    background: "#fafafa",

    screens: {
      welcome: {
        primary: "#3cb371",
        textPrimary: "#3cb371",
        textSecondary: "#7d9cae",
      },
      authentication: {
        components: {
          header: {
            title: "#3cb371",
            description: "#7d9cae",
          },
        },
      },
      introduction: {
        title: "#7d9cae",

        components: {
          introductionSlider: {
            title: "#3cb371",
            description: "#7d9cae",
          },
          introductionSliderPaginator: {
            dot: "#3cb371",
          },
        },
      },
    },

    components: {
      backButton: {
        title: "#1c1e26",
        icon: "#1c1e26",
      },
      button: {
        background: "#3cb371",
        icon: "#fafafa",
        normal: "#fafafa",
        register: "#3cb371",
        jump: "#7d9cae",
      },
    },

    statusBar: {
      backgroundPrimary: "#fafafa",
    },
  },

  fonts: {
    regular: "Ubuntu_400Regular",
    medium: "Ubuntu_500Medium",
    bold: "Ubuntu_700Bold",
  },
};
