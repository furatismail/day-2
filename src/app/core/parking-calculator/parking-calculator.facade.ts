import { inject, Injectable } from "@angular/core";
import * as ParkingCalculationActions from './parking-calculator.actions'
import { Store } from "@ngrx/store";

@Injectable({
    providedIn: 'root'
})
export class ParkingCalculatorFacade {
    private readonly store = inject(Store<any>);

    calculate(payload: any) {
        this.store.dispatch(ParkingCalculationActions.parkingCalculate({payload}))
    }
}