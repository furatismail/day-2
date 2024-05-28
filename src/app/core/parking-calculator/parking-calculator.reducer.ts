import { createReducer, on } from "@ngrx/store"
import * as ParkingCalculatorActions from './parking-calculator.actions'

export const featureKey = 'parkingCalculator'

export const initialState: any = {
    calculation: undefined,
    loading: false,
    offers: [],
    error: undefined
}


// {
//     parkingCalculator: {
//             calculation: undefined,
//             loading: false,
//             offers: [],
//             error: undefined
//     }
// }

export const reducer = createReducer(
    initialState,
    on(ParkingCalculatorActions.parkingCalculate, 
        (state, action) => {
        return ({
            ...state,
            calculation: action.payload,
            loading: true
        })
    }),
    on(ParkingCalculatorActions.parkingCalculateSuccess,
        (state, action) => {
            return {
                ...state,
                offers: action.payload,
                loading: false
            }
        }
    ),
    on(ParkingCalculatorActions.parkingCalculateError,
        (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    )
)