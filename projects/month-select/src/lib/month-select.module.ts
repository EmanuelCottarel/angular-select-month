import { NgModule } from '@angular/core';
import { MonthSelectComponent } from './month-select.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";



@NgModule({
  declarations: [
    MonthSelectComponent
  ],
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  exports: [
    MonthSelectComponent
  ]
})
export class MonthSelectModule { }
