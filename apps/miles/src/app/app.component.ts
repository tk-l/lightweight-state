import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    imports: [NxWelcomeComponent, RouterModule, MatSlideToggleModule],
    selector: 'flight-demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miles';
}
