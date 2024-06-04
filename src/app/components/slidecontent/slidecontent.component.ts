import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinealchartComponent } from "../linealchart/linealchart.component";
import { CircularchartComponent } from "../circularchart/circularchart.component";
import { SimpleresumecardComponent } from "../simpleresumecard/simpleresumecard.component";
import { BarchartComponent } from "../barchart/barchart.component";
import { RadarchartComponent } from "../radarchart/radarchart.component";

@Component({
    selector: 'component-slidecontent',
    standalone: true,
    templateUrl: './slidecontent.component.html',
    styleUrl: './slidecontent.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        LinealchartComponent,
        CircularchartComponent,
        SimpleresumecardComponent,
        BarchartComponent,
        RadarchartComponent
    ]
})
export class SlidecontentComponent {
}
