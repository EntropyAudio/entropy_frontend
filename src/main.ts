import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify } from "aws-amplify";
import awsconfig from "./environments/aws-environment";

if (environment.production) {
  enableProdMode();
}
console.log("Attempting to configure Amplify in main.ts with:", awsconfig);

Amplify.configure(awsconfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
