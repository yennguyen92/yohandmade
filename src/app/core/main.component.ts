import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    
    <gota-header></gota-header>
    <router-outlet></router-outlet>
    <gota-footer></gota-footer>
  `
})
export class MainComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/