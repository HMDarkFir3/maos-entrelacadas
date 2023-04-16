export default ({ config }) => {
  switch (process.env.APP_ENV) {
    case 'production': {
      return {
        ...config,
        name: 'Mãos Entrelaçadas',
        android: {
          package: 'com.hmdarkfire.maosentrelacadas',
        },
      };
    }
    case 'development': {
      return {
        ...config,
        name: 'Mãos Entrelaçadas (DEVELOPMENT)',
        android: {
          package: 'com.hmdarkfire.maosentrelacadas.development',
        },
        extra: {
          apiUrl: process.env.API_URL,
          eas: {
            projectId: 'dfcd84b5-f1d4-4aa5-a828-f2fe48c6758d',
          },
        },
      };
    }
    case 'preview': {
      return {
        ...config,
        name: 'Mãos Entrelaçadas (PREVIEW)',
        android: {
          package: 'com.hmdarkfire.maosentrelacadas.preview',
        },
        extra: {
          apiUrl: process.env.API_URL,
          eas: {
            projectId: 'dfcd84b5-f1d4-4aa5-a828-f2fe48c6758d',
          },
        },
      };
    }
    default: {
      return {
        ...config,
      };
    }
  }
};
