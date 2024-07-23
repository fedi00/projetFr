import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';

const routes: Routes = [
  {path:'' , component:FrontLayoutComponent },


  {path:'admin', component:AdminLayoutComponent,children:[
    {path:'' ,loadChildren:()=>import('./views/Admin/dashboard/dashboard.module').then (m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/Admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path: 'addproduit', loadChildren: () => import('./views/Admin/produit/add-produit/add-produit.module').then(m => m.AddProduitModule) },
    {path:'allproduits',loadChildren:()=>import('./views/Admin/produit/all-produit/all-produit.module').then(m=>m.AllProduitModule)},
    {path:'allclients',loadChildren:()=>import('./views/Admin/client/all-clients/all-clients.module').then(m=>m.AllClientsModule)},
    {path:'addclient',loadChildren:()=>import('./views/Admin/client/add-client/add-client.module').then(m=>m.AddClientModule)},
    {path:'addcategorie',loadChildren:()=>import('./views/Admin/categorie/add-categorie/add-categorie.module').then(m=>m.AddCategorieModule)},
    {path:'allcategories',loadChildren:()=>import('./views/Admin/categorie/all-categories/all-categories.module').then(m=>m.AllCategoriesModule)},
    {path:'addcommande',loadChildren:()=>import('./views/Admin/commande/add-commande/add-commande.module').then(m=>m.AddCommandeModule)},
    {path:'allcommandes',loadChildren:()=>import('./views/Admin/commande/all-commandes/all-commandes.module').then(m=>m.AllCommandesModule)},
    {path:'addfacture',loadChildren:()=>import('./views/Admin/factures/addfactures/addfactures.module').then(m=>m.AddfacturesModule)},
    {path:'allfactures',loadChildren:()=>import('./views/Admin/factures/allfactures/allfactures.module').then(m=>m.AllfacturesModule)},
    { path: 'panier', loadChildren: () => import('./views/Admin/panier/panier.module').then(m => m.PanierModule) },
    {path:'allpanier',loadChildren:()=>import('./views/Admin/commande/all-commandes/all-commandes.module').then(m=>m.AllCommandesModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/Admin/login-admin/login-admin.module').then(m=>m.LoginAdminModule)}
  ]},

  {path:'admin/login', component:AuthAdminLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
