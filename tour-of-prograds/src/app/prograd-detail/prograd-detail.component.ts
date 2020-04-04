import { Component, OnInit, Input } from '@angular/core';
import { Prograd } from '../pro-grads';

@Component({
  selector: 'app-prograd-detail',
  templateUrl: './prograd-detail.component.html',
  styleUrls: ['./prograd-detail.component.css'],
})
export class ProgradDetailComponent implements OnInit {
  @Input() prograd: Prograd;

  constructor() {}

  ngOnInit(): void {}
}
