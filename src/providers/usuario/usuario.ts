import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsuarioProvider {

    API_URL = 'assets/db/stories.json';  //Onde está localizado o arquivo com os dados dos stories

    constructor(public http: HttpClient) {
        console.log('Hello UsuarioProvider Provider');
    }

    getStory() {

        let stories = [];

        //pegando os dados do arquivo stories.json
        this.http.get(this.API_URL).toPromise().then(data => {
            console.log(data);

            //adicionando os dados recebidos do arquivo stories.json ao array stories
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    stories.push(data[key]);
                }
            }
        });

        //return console.log(this.stories);
        return stories; //retornando o array com os dados dos stories
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
