import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  data: any = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isEmpty(): boolean {
    if (this.data.length == 0) {
      return false;
    } else {
      return true;
    }
  }
}
