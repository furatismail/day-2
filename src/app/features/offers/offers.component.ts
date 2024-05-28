import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  offers$: Observable<any> = of([])
  loading$: Observable<boolean> = of(true)
  
  ngOnInit(): void {
  }
}
