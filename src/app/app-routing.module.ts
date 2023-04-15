import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { BecomeTeacherComponent } from './become-teacher/become-teacher.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
   {
    path: '',
    component: LandingComponent,
    
  },
   {
    path: 'pricing',
    component: PricingComponent,
    
  },
  {
    path: 'become-teacher',
    component: BecomeTeacherComponent,

  },
  {
    path: 'faq',
    component: FaqComponent,

  },
  {
    path: 'aboutus',
    component: AboutusComponent,

  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/dashboard/dashboard.module').then(x => x.DashboardModule)
      }]

  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
