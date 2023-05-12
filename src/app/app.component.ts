import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount!: number;
  height!: number;
  miles!: number;

  mobile = {
    make: 'Sumsung',
    model: 'A60',
    year: 2022
  }

  onMilesChange(event: Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }

  onHeightChange(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount= parseFloat((event.target as HTMLInputElement).value);
  }

}
