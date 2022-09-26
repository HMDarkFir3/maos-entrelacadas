export default ({ config }) => {
  switch (process.env.APP_ENV) {
    case "production": {
      return {
        ...config,
        name: "Mãos Entrelaçadas",
        android: {
          package: "com.hmdarkfire.maosentrelacadas",
        },
      };
    }
    case "development": {
      return {
        ...config,
        name: "Mãos Entrelaçadas (DEVELOPMENT)",
        android: {
          package: "com.hmdarkfire.maosentrelacadas.development",
        },
      };
    }
    case "preview": {
      return {
        ...config,
        name: "Mãos Entrelaçadas (PREVIEW)",
        android: {
          package: "com.hmdarkfire.maosentrelacadas.preview",
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
