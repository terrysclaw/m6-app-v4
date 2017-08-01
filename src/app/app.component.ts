import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public results: Array<any> = [];
    
	constructor(private http: Http) {

    }

    ngOnInit() {
     this.http.get('//app.1817.hk/api/v1/marksix_results?max_results=100')
      .map(response => response.json())
      .subscribe(res => this.results = res._items);
    }
}
