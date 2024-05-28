import { createAction, props } from "@ngrx/store";

export const parkingCalculate = createAction(
    '[PARKING CALCULATOR] Calculate',
    props<{payload: any}>()
)