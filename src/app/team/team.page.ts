import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navigateToProfile() {
    this.navCtrl.navigateForward("profile")
  }

}
