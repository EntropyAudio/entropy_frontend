import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
    imports: [AuthModule.forRoot({
        config: {
          authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_ydj5FE48G',
          redirectUrl: 'http://localhost:4200/callback',
          clientId: '737bv5e89psn3kpdufb6e5uv4b',
          scope: 'email openid phone profile',
          responseType: 'code'
        },
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
