import { CarForm } from "../../shared/car-form.interface"

export interface ParkingCalculatorState {
    calculation: CarForm | undefined
    loading: boolean
    error: any
    offers: Array<any>
}