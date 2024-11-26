import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
//import {MenuNavBarComponent} from "./menu-nav-bar/menu-nav-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularNode_tds';
}
