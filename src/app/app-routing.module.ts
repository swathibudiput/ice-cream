import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesertsComponent } from './deserts/deserts.component';
import { FaloodaComponent } from './falooda/falooda.component';
import { HomeComponent } from './home/home.component';
import { IceCreamsComponent } from './ice-creams/ice-creams.component';
import { MenuComponent } from './menu/menu.component';
import { NuttyconesComponent } from './nuttycones/nuttycones.component';
import { ThickshakesComponent } from './thickshakes/thickshakes.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'menu',component:MenuComponent},
  {path:'ice-creams',component:IceCreamsComponent},
  {path:'desserts',component:DesertsComponent},
  {path:'falooda',component:FaloodaComponent},
  {path:'thickshakes',component:ThickshakesComponent},
  {path:'nuttycones',component:NuttyconesComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
