import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./entity-side-nav.routes').then(m => m.ENTITY_ROUTES()),
  },
];
