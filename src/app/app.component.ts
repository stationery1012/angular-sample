import { Component } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-sample';
  constructor(private sampleService: SampleService) {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
    this.sampleService.getItems().subscribe((data) => {
      console.log(data);
    });
  }
}
