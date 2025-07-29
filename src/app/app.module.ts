import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LivingRoomComponent } from './home/living-room/living-room.component';
import { KitchenComponent } from './home/kitchen/kitchen.component';
import { BedroomComponent } from './home/bedroom/bedroom.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LivingRoomComponent,
    KitchenComponent,
    BedroomComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
