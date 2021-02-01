import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.page.html',
  styleUrls: ['./itempage.page.scss'],
})
export class ItempagePage implements OnInit {
items;
  name: any;
  value=null;
  constructor(public router:Router,private activatedRoute: ActivatedRoute,private serviceService: ServiceService,
    private alertController: AlertController, private camera: Camera,private file: File,public actionSheetController:ActionSheetController) {
  
    
    this.items= this.serviceService.getItems1(this.router.getCurrentNavigation().extras.state.name);
   }

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
  btnActivate(ionicButton) {
    if(ionicButton.color === 'dark')
      ionicButton.color =  'primary';
    else
      ionicButton.color = 'dark';
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Please Confirm Text!',
      message: `<strong>${this.value}</strong>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'dark',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Order Confirmed!',
      message: 'This Order has been placed successfully!',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Order Added to Cart!',
      message: 'This Item is moved to the cart!',
      buttons: ['OK']
    });

    await alert.present();
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
