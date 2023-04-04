export const dark = {
  title: 'dark',

  colors: {
    background: '#222222',

    screens: {
      welcome: {
        primary: '#3cb371',
        textPrimary: '#3cb371',
        textSecondary: '#e5ebef',
      },
      authentication: {
        textPrimary: '#3cb371',

        components: {
          header: {
            textPrimary: '#3cb371',
            textSecondary: '#e5ebef',
          },
        },
      },
      introduction: {
        text: '#e5ebef',

        components: {
          introductionSlider: {
            textPrimary: '#3cb371',
            textSecondary: '#e5ebef',
          },
          introductionSliderPaginator: {
            dot: '#3cb371',
          },
        },
      },
      home: {
        components: {
          header: {
            primary: '#3cb371',
            text: '#e5ebef',
            icon: '#3cb371',
          },
        },
      },
      profile: {
        primary: '#3cb371',
        text: '#e5ebef',
        icon: '#3cb371',

        components: {
          header: {
            primary: '#3cb371',
            text: '#bfbfbf',
            icon: '#3cb371',
          },
          settingsItem: {
            text: '#e5ebef',
            icon: '#e5ebef',
          },
        },
      },
      settings: {
        components: {
          switcher: {
            icon: '#3cb371',
            text: '#e5ebef',
            trackActive: '#3cb371',
            trackInactive: '#bdc8ce',
            thumbActive: '#f4f3f4',
            thumbInactive: '#f4f3f4',
          },
          fontSwitcher: {
            icon: '#3cb371',
            textPrimary: '#e5ebef',
            textSecondary: '#3cb371',
          },
        },
      },
      userInfo: {
        components: {
          header: {
            primary: '#3cb371',
            text: '#e5ebef',
            icon: '#3cb371',
          },
        },
      },
    },

    components: {
      backButton: {
        title: '#e5ebef',
        icon: '#e5ebef',
      },
      smallButton: {
        background: '#3cb371',
        icon: '#fafafa',
      },
      button: {
        background: '#3cb371',
        text: '#fafafa',
      },
      input: {
        primary: '#3cb371',
        text: '#e5ebef',
        placeholder: '#c0c0c0',
      },
      select: {
        primary: '#3cb371',
        text: '#e5ebef',
        placeholder: '#c0c0c0',
      },
      datePicker: {
        primary: '#3cb371',
        text: '#e5ebef',
        placeholder: '#c0c0c0',
      },
      customTabBar: {
        background: '#222222',
        active: '#3cb371',
        inactive: '#e5ebef',
        border: '#3cb371',
      },
    },

    statusBar: {
      backgroundPrimary: '#222222',
    },

    navigationBar: {
      backgroundPrimary: '#222222',
      backgroundSecondary: '#222222',
    },

    androidRipple: {
      backgroundPrimary: '#111111',
    },
  },

  fonts: {
    regular: 'Ubuntu_400Regular',
    medium: 'Ubuntu_500Medium',
    bold: 'Ubuntu_700Bold',
  },
};
