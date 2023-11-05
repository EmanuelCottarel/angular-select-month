import {Component, EventEmitter, Output} from '@angular/core';
import {Months} from "./_enums/months-fr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'lib-month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css']
})
export class MonthSelectComponent {

  months = Object.values(Months);
  years: number[] = [];
  currentYear: number = new Date().getFullYear()
  currentMonth: number = new Date().getMonth() - 1
  openDropdown = false;

  dateForm = new FormGroup(
    {
      month: new FormControl(),
      year: new FormControl()
    }
  )


  @Output() selectValueEvent = new EventEmitter<string>();

  toggleDropdown() {
    this.openDropdown = !this.openDropdown;
  }


  ngOnInit() {
    const maxYear = new Date().getFullYear()
    for (let i = 2016; i <= maxYear; i++) {
      this.years.push(i)
    }
  }


  resetValues() {
    this.dateForm.reset()
  }

  sendSelectValue() {
    const month = this.dateForm["controls"]["month"].value;
    const year = this.dateForm["controls"]["year"].value;
    if (month && year) {
      this.selectValueEvent.emit(`${year}-${month}`)
    }
  }


  protected readonly parseInt = parseInt;
}
