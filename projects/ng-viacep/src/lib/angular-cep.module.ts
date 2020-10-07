import { NgModule } from '@angular/core';
import { AngularCepComponent } from './angular-cep.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularCepMaterialComponent} from './angular-cep-material';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AngularCepComponent, AngularCepMaterialComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    MatInputModule
  ],
  exports: [AngularCepComponent, AngularCepMaterialComponent]
})
export class AngularCepModule { }
