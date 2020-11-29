const config = {
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'notes-app-upload-fullstack',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://odf8otnpwa.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_mkDYiv4LI',
    APP_CLIENT_ID: '1bjhep729vajsussq5ji08n2rg',
    IDENTITY_POOL_ID: 'us-east-1:b7523cee-e320-4e11-983e-25cc6ff37735',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_4HhmqYd9HiWZh4a9b0Zs6bHM004mv6EUeH',
};

export default config;
