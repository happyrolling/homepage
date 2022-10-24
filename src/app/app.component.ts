import { Component } from '@angular/core';
import { AppLogger } from 'src/utilities';
import { Title } from '@angular/platform-browser';
import { PageComponent } from 'src/utilities/components/PageComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends PageComponent {
  constructor(logger: AppLogger, titleService: Title) {
    super(logger, titleService);
    this.setTitle('Happy Rolling | آموزش زبان آلمانی ، مهاجرت به آلمان');
  }
}
