import { createAction, props } from "@ngrx/store";
import { CarForm } from "../../shared/car-form.interface";

export const parkingCalculate = createAction(
    '[PARKING CALCULATOR] Calculate',
    props<{payload: CarForm}>()
)
