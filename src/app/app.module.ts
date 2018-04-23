import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AddNewsComponent} from './newspress/add-news.component'
import {AddModuleComponent} from './newspress/add-module.component'
import {ReviseModuleComponent} from './newspress/revise-module.component'
import {ManageNewsComponent} from './newspress/manage-news.component'
import {ReviseNewsComponent} from './newspress/revise-news.component';

import { ForbiddenValidatorDirective } from './newspress/share/module_name_effictive.directive';
import {Module_infoService} from './newspress/share/module_info.service'

import {NewsInfoService} from './newspress/share/news_info.service'
const appRoutes: Routes = [
  {
    path:'add-news',
    component:AddNewsComponent
  },
  {
    path:'manage-news',
    component:ManageNewsComponent
  },
  {
    path:'add-module',
    component:AddModuleComponent
  },
  {
    path:'manage-module',
    component:ReviseModuleComponent
  },
  {
    path:'revise-news/:newsId',
    component:ReviseNewsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    ManageNewsComponent,
    ReviseNewsComponent,
    AddModuleComponent,
    ReviseModuleComponent,
    ForbiddenValidatorDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [Module_infoService,NewsInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
