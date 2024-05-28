import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ParkingCalculatorState } from "./parking-calculator.model";

export const selectParkingCalculatorState = createFeatureSelector<ParkingCalculatorState>('parkingCalculator')

export const selectOffers = createSelector(selectParkingCalculatorState, (state: ParkingCalculatorState) => state.offers);

export const selectLoading = createSelector(selectParkingCalculatorState, (state: ParkingCalculatorState) => state.loading);