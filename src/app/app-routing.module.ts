import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivingRoomComponent } from './home/living-room/living-room.component';
import { KitchenComponent } from './home/kitchen/kitchen.component';
import { BedroomComponent } from './home/bedroom/bedroom.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'living-room', component: LivingRoomComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'bedroom', component: BedroomComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
