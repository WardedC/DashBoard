import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>userpage works!</p>`,
  styleUrl: './userpage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserpageComponent { }
