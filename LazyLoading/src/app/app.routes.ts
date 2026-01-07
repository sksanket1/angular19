import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: 'admin', component: AdminComponent }
    {
        path: 'admin', loadComponent: () => import('./admin/admin.component')
            .then((c) => c.AdminComponent)
    }
];