import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  
  items: any;
  data: any;
  searchTerm: any;

  constructor(public popoverController:PopoverController,private serviceService:ServiceService,public router:Router) { }

  ngOnInit() {
  }
closePop(){
    this.popoverController.dismiss();
  }
  ionViewDidLoad(){
    this.setFilteredItems();
    console.log("taking load");
  }

  setFilteredItems() {
 console.log("taking search input");
        this.items = this.serviceService.filterItems(this.searchTerm);
        
    }
    itempage(name){
      let navigationExtras: NavigationExtras = {
        state: {
          name: name
        }
      };
    this.router.navigate(['itempage'],navigationExtras);
    }
}
