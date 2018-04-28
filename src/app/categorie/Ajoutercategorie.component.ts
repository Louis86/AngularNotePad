import { Component } from '@angular/core';

@Component({
  selector: 'Ajoutercategorie', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[],
  templateUrl: './Ajoutercategorie.component.html'
})

export class AjoutercategorieComponent{
  title = 'Ajouter une categorie';
}
