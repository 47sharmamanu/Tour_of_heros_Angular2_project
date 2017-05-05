import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import { AppComponent }       from './app.component.3';

/* Feature Modules */
import { ContactModule }      from './contact/contact.module.3';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module.3';

@NgModule({
  imports:      [
    BrowserModule,
    ContactModule,
    AppRoutingModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
  ],
  providers:    [  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/