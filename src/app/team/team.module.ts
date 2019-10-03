import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { TeamPage } from './team.page';

const routes: Routes = [
  {
    path: '',
    component: TeamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 10,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [TeamPage]
})
export class TeamPageModule {}
