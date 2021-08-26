import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	items = [];

	constructor(public navCtrl: NavController, private usuarioProvider: UsuarioProvider) {

		this.items = this.usuarioProvider.simulaDados();

	}

}
