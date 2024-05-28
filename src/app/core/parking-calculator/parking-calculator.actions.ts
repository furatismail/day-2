import { createAction, props } from "@ngrx/store";
import { CarForm } from "../../shared/car-form.interface";

export const parkingCalculate = createAction(
    '[PARKING CALCULATOR] Calculate',
    props<{payload: CarForm}>()
)

export const parkingCalculateSuccess = createAction(
    '[PARKING CALCULATOR] Calculate success',
    props<{payload: any}>()
)

export const parkingCalculateError = createAction(
    '[PARKING CALCULATOR] Calculate error',
    props<{payload: any}>()
)
