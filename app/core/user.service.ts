import { Injectable,Optional } from '@angular/core';


export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
/** Dummy version of an authenticated user service */
export class UserService {
  _userName = 'Sherlock Holmes';
  constructor(@Optional() config: UserServiceConfig) {
  if (config) { this._userName = config.userName; }
}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/