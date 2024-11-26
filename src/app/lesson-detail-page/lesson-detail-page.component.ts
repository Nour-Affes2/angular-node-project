import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-detail-page.component.html',
})
export class LessonDetailPageComponent {
  readonly initialId: number | undefined;
  id: number | undefined;
  private router: any;
  constructor(activatedRoute: ActivatedRoute) {
    this.initialId = +activatedRoute.snapshot.params['id'];
    console.log('initalId:', this.initialId);
    activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];
      console.log('id:', this.id);
    });
  }

  onClickGoNextPage() {
    const nextId = (this.id)? this.id + 1 : 1;
    this.router.navigate(['/lesson', nextId]);
  }
}
