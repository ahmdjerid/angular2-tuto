/**
 * @author Ahmed Jerid  <ahmed.jerid@arismore.fr> on 19/12/2016.
 */
import {Component} from "@angular/core";


@Component({
  selector: 'my-app',
  template: ` <h1>{{title}}</h1>
   <a routerLink="/heroes">Heroes</a>
   <router-outlet></router-outlet>`

})
export class AppComponent {

  title = 'Tour of heroes'

}
