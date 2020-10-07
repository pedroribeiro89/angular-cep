import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgViacepService} from './ng-viacep.service';
import {IViacepAddress, IViacepAddressError} from './viacep-address';

@Component({
  selector: 'ng-material-viacep',
  template: `
    <mat-form-field>
      <mat-label>CEP</mat-label>
      <input matInput #cep [placeholder]="placeholder" type="text" maxlength="9" [(ngModel)]="displayValue" (ngModelChange)="onChangeValue($event)" />
    </mat-form-field>
  `,
  styles: []
})
export class NgMaterialViacepComponent implements OnInit {

  @Input() label = 'CEP';
  @Input() placeholder = 'XXXXX-XX';
  @Output() onLoadCEP = new EventEmitter<IViacepAddress | IViacepAddressError>();
  @ViewChild('cep') input: ElementRef;
  public displayValue = '';
  public value = '';


  constructor(private service: NgViacepService) { }

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
    this.service.loadCEP(this.value).subscribe((address: IViacepAddress | IViacepAddressError) => this.onLoadCEP.emit(address));
  }

}
