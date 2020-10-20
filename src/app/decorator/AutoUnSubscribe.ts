import {Subscription} from 'rxjs';

export function AutoUnsubscribe(constructor): void {
  const original = constructor.prototype.ngOnDestroy;
  constructor.prototype.ngOnDestroy = function(): void {
    // tslint:disable-next-line:forin
    for (const prop in this) {
      const property = this[prop];
      if (property instanceof Subscription) {
        property.unsubscribe();
        console.log(prop + ' is auto unsubscribed in class ' + this.constructor.name);
      }
    }
    // tslint:disable-next-line:no-unused-expression
    original && typeof original === 'function' && original.apply(this, arguments);
  };
}
