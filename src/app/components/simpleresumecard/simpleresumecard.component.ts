import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'component-simpleresumecard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './simpleresumecard.component.html',
  styleUrl: './simpleresumecard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleresumecardComponent { }
