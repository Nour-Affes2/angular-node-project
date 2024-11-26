import { Component } from '@angular/core';
import {UserSettingsService} from "../user-settings.service";

@Component({
  selector: 'app-lesson-list-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-list-page.component.html',
})
export class LessonListPageComponent {
  constructor (private userSettingsService: UserSettingsService) {
    console.log("get lastLessonId:", userSettingsService.lastLessonId);
  }
}
