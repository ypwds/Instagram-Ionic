import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsuarioProvider {

    constructor(public http: HttpClient) {
        console.log('Hello UsuarioProvider Provider');
    }

    getUsuarios() {
        // TODO: fazer uma requisicao http get ao json e retornar pra tela
        // this.http.get()
    }

    simulaDados() {

        let _items = [];

        for (let index = 0; index < 11; index++) {
            let element = {
                usuario: 'User ' + index,
                legenda: 'Bem-vindo ' + index,
                fotoPost: 'https://picsum.photos/500/500?random=' + index,
                fotoPerfil: 'https://picsum.photos/400/400/?random=' + index,
            };

            _items.push(element);

        }

        return _items;

    }

}
