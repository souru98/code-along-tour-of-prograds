import { Component, OnInit } from '@angular/core';
import { Prograd } from '../pro-grads';
import { ProgradService } from '../prograd.service';
import { PROGRADS } from '../mock-pro-grads';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  prograd: Prograd[] = [];

  constructor(private progradService: ProgradService) {}

  ngOnInit() {
    this.getPrograds();
  }

  getPrograds(): void {
    this.progradService
      .getPrograds()
      .subscribe((prograds) => (this.prograd = prograds.slice(1, 5)));
  }
}
