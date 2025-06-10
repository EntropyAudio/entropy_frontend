import type { ResourcesConfig } from 'aws-amplify';

const awsconfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_ydj5FE48G',
      userPoolClientId: '737bv5e89psn3kpdufb6e5uv4b',
    },
  },
};

export default awsconfig;
