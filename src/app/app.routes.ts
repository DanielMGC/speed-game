import { Routes } from '@angular/router';
import { SpeedMainComponent } from './speed/speed-main/speed-main.component';

export const routes: Routes = [
    { path: '', redirectTo: '/speed', pathMatch: 'full' },
    { path: 'speed', component: SpeedMainComponent },
  ];
