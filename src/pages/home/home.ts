import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	items = [];

	constructor(public navCtrl: NavController) {

		for (let index = 0; index < 11; index++) {
			let element = {
				usuario: 'User ' + index,
				legenda: 'Bem-vindo ' + index,
				fotoPost: 'https://picsum.photos/500/500?random=' + index,
				fotoPerfil: 'https://picsum.photos/400/400/?random=' + index,
			};

			this.items.push(element);

		}

	}

}
