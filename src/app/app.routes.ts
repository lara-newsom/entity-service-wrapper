import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./entity-list-view-wrapper/entity-list-view.routes').then(m => m.ENTITY_ROUTES),
  },
];
