import { Routes } from '@angular/router';
import { LibrospageComponent } from './modules/librospage/librospage/librospage.component';
import { CrearlibroComponent } from './modules/crearlibro/crearlibro.component';
export const routes: Routes = [
    {
        path:'',
        component: LibrospageComponent,
        title: 'Libros',
    },
    {
        path:'crearlibro',
        component: CrearlibroComponent,
        title: 'CrearLibro',
    },
    
];
