import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-input-suffix',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSuffixComponent {}
