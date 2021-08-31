import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	items = [];
	stories = [];

	constructor(public navCtrl: NavController, private usuarioProvider: UsuarioProvider) {

		this.stories = this.usuarioProvider.getStory();

		this.items = this.usuarioProvider.simulaDados();

	}

}
