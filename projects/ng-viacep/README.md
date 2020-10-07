# AngularCEP

An Angular CEP(Brazilian ZIP code) input field

## Dependencies

* [Angular](https://angular.io)
* [Material](https://material.angular.io/)

## Features

* Native Input 
* Material Input
* Load Address using [Viacep](https://viacep.com.br/)

## Installation

After install the dependencies, install `angular-cep`:

```shell
npm install angular-cep --save
```

Once installed, import AngularCepModule in your application module:
```js
import { AngularCepModule } from 'angular-cep';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [AngularCepModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Native Input:
```html
  <angular-cep (onLoadCEP)="loadedCep($event)"></angular-cep>
```

#### Material Input:
```html
  <angular-cep-material label="Digite seu CEP" (onLoadCEP)="loadedCep($event)"></angular-cep-material>
```


## Contributing

I would love for improvements ideas and bug reports (leave in github issues).
