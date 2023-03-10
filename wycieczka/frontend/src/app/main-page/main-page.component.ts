import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  title = '';
  currentCount = 0;
  constructor() {}

  ngOnInit(): void {}
  onUpdatedCounter(value: number): void {
    this.currentCount = value;
  }
}
