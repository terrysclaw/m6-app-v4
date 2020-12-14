import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routerTransition()]
})
export class LayoutComponent implements OnInit {

	constructor(public router: Router) { }

	ngOnInit() {
		if (this.router.url === '/') {
			this.router.navigate(['/results']);
		}
	}

}
