import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    usuarioObj = {
        usuario: '',
        email: '',
        telefone: '',
        senha: '',
    };

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    salvar() {
        console.log("INFORMAÇÕES SALVAS")
        console.log('Usuário: ', this.usuarioObj.usuario);
        console.log('E-mail: ', this.usuarioObj.email);
        console.log('Telefone: ', this.usuarioObj.telefone);
        console.log('Senha: ', this.usuarioObj.senha);

        let dados = 'Nome: ' + this.usuarioObj.usuario + '; E-mail: ' + this.usuarioObj.email + '; Telefone: ' + this.usuarioObj.telefone + '; Senha: ' + this.usuarioObj.senha;

        const alert = this.alertCtrl.create({
            title: 'Usuário',
            subTitle: dados,
            buttons: ['OK']
        });
        alert.present();
    }

    showConfirm() {
        const confirm = this.alertCtrl.create({
            title: 'Salvar?',
            message: 'Tem certeza que deseja salvar?',
            buttons: [
                {
                    text: 'NÃO',
                    handler: () => {
                        console.log('Informações não salvas!');
                    }
                },
                {
                    text: 'SIM',
                    handler: () => {
                        console.log(this.salvar());
                    }
                }
            ]
        });
        confirm.present();
    }

}
