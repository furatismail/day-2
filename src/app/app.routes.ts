import { Routes } from '@angular/router';
import { ParkingFormComponent } from './features/parking-form/parking-form.component';

export const routes: Routes = [
    {
        path: '',
        component: ParkingFormComponent
    },
    {
        path: 'offers',
        loadComponent: () => import('./features/offers/offers.component').then((component) => component.OffersComponent)
    }
];
