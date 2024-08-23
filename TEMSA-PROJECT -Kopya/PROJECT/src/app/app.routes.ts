import { Routes } from '@angular/router';
import { ComplexityComponent } from './complexity/complexity.component';
import { ChartsComponent } from '../charts/charts.component';

export const routes: Routes = [
  { path: 'complexity', component: ComplexityComponent },
  { path: 'charts', component: ChartsComponent },
];
