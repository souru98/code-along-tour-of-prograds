import { Component, OnInit } from '@angular/core';
import { PROGRADS } from '../mock-pro-grads';
import { Prograd } from '../pro-grads';
import { ProgradService } from '../prograd.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pro-grads',
  templateUrl: './pro-grads.component.html',
  styleUrls: ['./pro-grads.component.css'],
})
export class ProGradsComponent implements OnInit {
  prograds: Prograd[];

  selectedPrograd: Prograd;

  constructor(
    private progradService: ProgradService,
    private messageService: MessageService
  ) {}

  getPrograds(): void {
    this.progradService
      .getPrograds()
      .subscribe((prograds) => (this.prograds = prograds));
  }

  onSelect(prograd: Prograd): void {
    this.selectedPrograd = prograd;
    this.messageService.add('ProgradService: You have selected a ProGrad');
  }

  ngOnInit() {
    this.getPrograds();
  }
}
