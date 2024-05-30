import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'component-slidebar',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './slidebar.component.html',
    styleUrl: './slidebar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidebarComponent { }
