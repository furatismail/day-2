import { inject, Injectable } from "@angular/core";
import * as ParkingCalculationActions from './parking-calculator.actions'
import { Store } from "@ngrx/store";
import { CarForm } from "../../shared/car-form.interface";

@Injectable({
    providedIn: 'root'
})
export class ParkingCalculatorFacade {
    private readonly store = inject(Store<any>);

    calculate(payload: CarForm) {
        this.store.dispatch(ParkingCalculationActions.parkingCalculate({payload}))
    }
}