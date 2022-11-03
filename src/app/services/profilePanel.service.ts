import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilePanelService {
  someValue?: boolean;

  private initialValue = new BehaviorSubject(this.someValue);
  currentVal = this.initialValue.asObservable();

  changeValue(newValue: boolean) {
    this.initialValue.next(newValue);
    return newValue;
  }

  constructor() {}
}
