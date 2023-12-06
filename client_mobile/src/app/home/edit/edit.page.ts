import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  formData: any = {};
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.formData);
  }

  backHome() {
    this.navCtrl.back();
  }
}
