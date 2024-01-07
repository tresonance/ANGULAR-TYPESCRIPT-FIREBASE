
import { NgModule } from '@angular/core';

import { Router,Routes , RouterModule} from '@angular/router';

//import {RegisterComponent } from '../app/register/register.component' 
 
import { TestComponent } from './components/test/test.component'

export const routes: Routes = [
  {
    path: 'register',
    component: TestComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
