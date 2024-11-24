import { Component, OnInit, OnDestroy } from '@angular/core';
import {RouterLink} from "@angular/router";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {UserSettingsService} from "../user-settings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './lesson-edit-form.component.html',
  styleUrl: './lesson-edit-form.component.css'
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
  private router: any;

  constructor(router: Router, private userSettingsService: UserSettingsService) {
    this.router = router;
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
  faHome = faHome;
  protected readonly onclick = onclick;

  onClickSubmit() {
    this.router.navigate(['lesson-list']).then(() => {})
  }
}
