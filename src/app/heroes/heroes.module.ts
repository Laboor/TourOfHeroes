import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { MyTestComponent } from '../my-test/my-test.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MyTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MyTestComponent
  ]
})
export class HeroesModule {
}
