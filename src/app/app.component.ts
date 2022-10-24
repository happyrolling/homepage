import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageComponent } from 'src/app/utilities';
import { AppLogger } from './shared/services/main-logger.service';

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
