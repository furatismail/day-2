import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromParkingCalculator from './core/parking-calculator/parking-calculator.reducer';
import { provideEffects } from '@ngrx/effects'
import { ParkingCalculatorEffects } from './core/parking-calculator/parkiing-calculator.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState({ name: fromParkingCalculator.featureKey, reducer: fromParkingCalculator.reducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(ParkingCalculatorEffects)
]
};
