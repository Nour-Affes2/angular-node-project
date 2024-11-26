import { Component, OnInit, OnDestroy } from '@angular/core';
import {RouterLink} from "@angular/router";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {UserSettingsService} from "../user-settings.service";
import {Router} from "@angular/router";
import {FormGroup, ReactiveFormsModule, FormBuilder, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './lesson-edit-form.component.html',
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
  private router: any;
  lessonEditForm: FormGroup;
  constructor(router: Router,private fb: FormBuilder, private userSettingsService: UserSettingsService) {
    this.router = router;
    this.lessonEditForm = this.fb.group({
      title: ['', Validators.required], // Required field
      description: ['', Validators.required], // Required field
      category: ['', Validators.required], // Required field
      level: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)], // Between 1 and 10
      ],
      prerequisite: [''], // Optional field
      tags: [''], // Optional field
      copyright: [''], // Optional field
    });
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
    if (this.lessonEditForm.valid) {
      console.log('Form Submitted', this.lessonEditForm.value);
    } else {
      console.log('Form is invalid');
    }
    this.router.navigate(['lesson-list']).then(() => {})
  }

}
