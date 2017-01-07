import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Inline template</h1>
                <app-other>Loading...</app-other>
                <app-another>Loading...</app-another>`,
  styles:[`h1{
    color:red;
  }`]
})
export class AppComponent {
  title = 'app works!';
}
