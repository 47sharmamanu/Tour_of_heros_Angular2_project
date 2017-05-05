import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component.3';
import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module.3';

@NgModule({
  imports: [ ContactRoutingModule, SharedModule],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/