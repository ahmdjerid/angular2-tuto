import {Component} from "@angular/core";
/**
 * Created by Ahmed Jerid on 19/12/2016.
 */


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
<my-heroes></my-heroes>`

})
export class AppComponent {

  title = 'Tour of heroes'

}
