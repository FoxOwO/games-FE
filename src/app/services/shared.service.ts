import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public messageSubject: Subject<any> = new Subject<any>();
  messageObserver: Observable<string> = this.messageSubject.asObservable();

  constructor() {
  }

  send(clazz, msg: string): void {
    this.messageSubject.next(msg);
  }
}
