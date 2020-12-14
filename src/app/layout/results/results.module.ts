import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsenseModule } from 'ng2-adsense';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';

@NgModule({
    imports: [
        CommonModule,
		AdsenseModule.forRoot({
		  adClient: 'ca-pub-0437258559459382'
		}),
        ResultsRoutingModule,
    ],
    declarations: [
        ResultsComponent,
    ]
})
export class ResultsModule { }
