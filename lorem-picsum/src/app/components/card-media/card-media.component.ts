import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Picture {
	constructor(
		public id: string,
		public author: string,
		public width: number,
		public height: number,
		public url: string,
		public download_url: string
	) {}
}

@Component({
	selector: 'app-card-media',
	templateUrl: './card-media.component.html',
	styleUrls: ['./card-media.component.css'],
})
export class CardMediaComponent implements OnInit {
	photos: Picture[] = [];
	page = 11;
	loading = true;

	constructor(private HttpClient: HttpClient) {}

	ngOnInit(): void {
		this.getPics();
		setTimeout(() => {
			this.loading = false;
		}, 2000);
	}

	getPics() {
		this.HttpClient.get<any>(
			'https://picsum.photos/v2/list?page=' +
				this.page +
				'&limit=30'
		).subscribe((response) => {
			this.photos = response;
		});
	}

	handleRandom() {
		this.loading = true;
		this.page = Math.floor(Math.random() * 11);
		this.getPics();
		setTimeout(() => {
			this.loading = false;
		}, 1500);
	}
}
