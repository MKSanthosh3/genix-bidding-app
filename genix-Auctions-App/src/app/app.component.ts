import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'genix-Auctions-App';
  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
          // Handle the back or forward button press
          this.location.replaceState('/');
        }
      }
    });
  }
}
