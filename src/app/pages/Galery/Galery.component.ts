import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Galery works!</p>`,
  styleUrl: './Galery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleryComponent { }
