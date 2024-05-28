import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ParkingCalculatorService } from "../services/parking-calculator.service";
import * as ParkingCalculatorActions from './parking-calculator.actions'
import { switchMap } from "rxjs";

@Injectable()
export class ParkingCalculatorEffects {
    private actions$ = inject(Actions)
    private parkingCalculatorService = inject(ParkingCalculatorService)

    calculateParking$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ParkingCalculatorActions.parkingCalculate),
            switchMap((action) => {
                return this.parkingCalculatorService.calculate(action.payload)
            })
        )
    )
}