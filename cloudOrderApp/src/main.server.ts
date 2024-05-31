import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
// In main.server.ts


const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
