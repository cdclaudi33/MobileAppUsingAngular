import { Component, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { IonSlides, NavController, PopoverController, ActionSheetController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { PopoverPage } from '../popover/popover.page';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
items;
offer;

@ViewChild('slider',{static:true})slides:IonSlides;
sliderOpts = {
  autoplay: true,
  speed: 1000
};
  slideIndex: any;
  id: NavigationExtras;
  constructor(private serviceService:ServiceService ,public router:Router, public popoverController:PopoverController,private camera: Camera,
    private file: File,public actionSheetController:ActionSheetController) {}
ngOnInit(){
  this.items=this.serviceService.getItems();
  this.offer=this.serviceService.getOffers();
}
onSlideChanged() {
  this.slideIndex = this.slides.getActiveIndex();
  //console.log('Slide changed! Current index is', this.slideIndex);

}
gohome(){
this.router.navigate(['home']);
}
gotoprofile(){
  this.router.navigate(['profile']);

}
async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: PopoverPage,
    event: ev,
    translucent: true
  });
  return await popover.present();
}
itempage(name){
  let navigationExtras: NavigationExtras = {
    state: {
      name: name
    }
  };
this.router.navigate(['itempage'],navigationExtras);
}
pickImage(sourceType) {
  const options: CameraOptions = {
    quality: 100,
    sourceType: sourceType,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    // let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    // Handle error
  });
}
async selectImage() {
  const actionSheet = await this.actionSheetController.create({
    header: "Select Image source",
    buttons: [{
      text: 'Load from Library',
      handler: () => {
        this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
      }
    },
    {
      text: 'Use Camera',
      handler: () => {
        this.pickImage(this.camera.PictureSourceType.CAMERA);
      }
    },
    {
      text: 'Cancel',
      role: 'cancel'
    }
    ]
  });
  await actionSheet.present();
}
}
