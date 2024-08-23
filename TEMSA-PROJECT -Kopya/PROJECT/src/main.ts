import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routes from './routes/routes'; // Varsayılan ihracatı kullanın

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // `routes` dizisini sağla
  ]
})
.catch((err) => console.error(err));
