import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './products/catalog/catalog';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'catalogo',
        component: Catalog
    },
];
