import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [

  {
    path: '',
    component: AppComponent
  },
  {
    path: 'note',
    component: NoteComponent
  },
  {
    path: 'categorie',
    component: CategorieComponent
  },
  {
    path: 'PagenotFound',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
