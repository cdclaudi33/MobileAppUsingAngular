import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['home']);
  }

gohome(){
  this.router.navigate(['home']);
  }
  gotoprofile(){
    this.router.navigate(['profile']);
}
}
