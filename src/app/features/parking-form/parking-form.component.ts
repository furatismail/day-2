import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ParkingCalculatorFacade } from '../../core/parking-calculator/parking-calculator.facade';
import { CarForm } from '../../shared/car-form.interface';

@Component({
  selector: 'app-parking-form',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './parking-form.component.html',
  styleUrl: './parking-form.component.css'
})
export class ParkingFormComponent {
  private parkingCalculatorFacade = inject(ParkingCalculatorFacade);
  formData = {} as CarForm;

  floors = [
    '1 floor',
    '2 floor',
    '3 floor'
  ]

  async onSubmit(form: NgForm) {
    console.log(form)
    const payload = form?.value
    this.parkingCalculatorFacade.calculate(payload);
    
  }
}
