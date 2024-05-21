import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  Amplify.Amplify.configure(awsExports);
  
