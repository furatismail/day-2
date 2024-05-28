import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromParkingCalculator from './core/parking-calculator/parking-calculator.reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(), 
    provideState({name: fromParkingCalculator.featureKey, reducer: fromParkingCalculator.reducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
