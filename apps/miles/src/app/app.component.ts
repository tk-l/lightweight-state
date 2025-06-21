import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.component';

@Component({
    imports: [RouterModule, MaterialModule],
    selector: 'miles-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miles';
}
