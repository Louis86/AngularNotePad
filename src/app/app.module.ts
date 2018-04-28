import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  declarations: [
    AppComponent,
    NoteComponent,
    CategorieComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
