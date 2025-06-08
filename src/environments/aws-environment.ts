import type { ResourcesConfig } from 'aws-amplify';

const awsconfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_ydj5FE48G',
      userPoolClientId: '737bv5e89psn3kpdufb6e5uv4b',
      loginWith: {
        oauth: {
          domain: 'your-domain.auth.us-east-1.amazoncognito.com',
          scopes: ['openid', 'email', 'phone', 'profile'],
          redirectSignIn: ['http://localhost:4200/'],
          redirectSignOut: ['http://localhost:4200/'],
          responseType: 'code',
        },
      },
    },
  },
};

export default awsconfig;
