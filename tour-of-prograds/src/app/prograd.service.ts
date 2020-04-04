import { Injectable } from '@angular/core';
import { Prograd } from './pro-grads';
import { PROGRADS } from './mock-pro-grads';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProgradService {
  constructor(private messageService: MessageService) {}

  getPrograds(): Observable<Prograd[]> {
    this.messageService.add('ProGradService: fetched ProGrad');
    return of(PROGRADS);
  }
}
