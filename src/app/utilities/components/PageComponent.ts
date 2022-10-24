import { Title } from '@angular/platform-browser';
import { HappyComponent } from './HappyComponent';
import { AppLogger } from '../../shared/services/main-logger.service';

export abstract class PageComponent extends HappyComponent {
  constructor(logger: AppLogger, protected title: Title) {
    super(logger);
  }

  protected setTitle(value: string): void {
    this.title.setTitle(value);
  }
}
