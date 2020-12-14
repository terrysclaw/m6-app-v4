import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { AdsenseModule } from 'ng2-adsense';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
	public results: Array<any> = [];
	ts = new Date().getTime();
    
	constructor(private http: Http) {

    }

    ngOnInit() {
        this.http.get('//app.1817.hk/api/v1/marksix_results?max_results=100&' + this.ts)
        .map(response => response.json())
        .subscribe(res => this.results = res._items);
    }

}
