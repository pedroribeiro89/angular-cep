import { Component } from '@angular/core';
import {IViacepAddress, IViacepAddressError} from '../../projects/ng-viacep/src/lib/viacep-address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-viacep';

  loadedCep(address: IViacepAddress | IViacepAddressError) {
    if ((address as IViacepAddressError).erro) {
      console.log('Erro!');
    } else {
      console.log(address);
    }

  }
}
