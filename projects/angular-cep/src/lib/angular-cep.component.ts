import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AngularCepService} from './angular-cep.service';
import {IViacepAddress, IViacepAddressError} from './viacep-address';

@Component({
  selector: 'angular-cep',
  template: `
    <input #cep [placeholder]="placeholder" type="text" maxlength="9" [(ngModel)]="displayValue" (ngModelChange)="onChangeValue($event)" />
  `,
  styles: []
})
export class AngularCepComponent implements OnInit {

  @Output() loadedCEP = new EventEmitter<IViacepAddress | IViacepAddressError>();
  @Input() placeholder = 'XXXXX-XX';
  @ViewChild('cep') input: ElementRef;
  public displayValue = '';
  public value = '';

  constructor(private service: AngularCepService) { }

  ngOnInit(): void {}

  onChangeValue(event: string) {
    this.value = event.replace(/\D/g, '');
    this.displayValue = this.value;
    if (this.displayValue.length > 5) {
      this.displayValue = this.value.substring(0, 5) + '-' + this.value.substring(5, 9);
    }
    this.input.nativeElement.value = this.displayValue;
    if (this.value.length === 8) { this.loadCep(); }
  }

  loadCep() {
    this.service.loadCEP(this.value).subscribe((address: IViacepAddress | IViacepAddressError) => this.loadedCEP.emit(address));
  }

}
