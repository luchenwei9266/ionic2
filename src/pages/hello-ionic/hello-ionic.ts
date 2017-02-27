import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ActionSheet } from '../ActionSheets/actionSheets';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ){ }
  
  // 打开底部菜单
  openMenu() {
      let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons:[
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Archive clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }

  openAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hello My Friend',
      subTitle: 'My Fiend,this is subTitle!',
      buttons: ['OK','Haha','Cancel']
    });
    alert.present();
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name:'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
              console.log('Cancel clicked');
          }
        },
        {
          text: 'Cancel',
          handler: data => {
              console.log('Saved clicked');
          }
        }
      ],
    });
    prompt.present();
  }

  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
              console.log('Agree clicked');
          }
         }
      ]
    });
    confirm.present();
  }

  testRadioOpen:boolean;
  testRadioResult;
  doRadio() {
    // console.log(this.testRadioOpen);
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
    alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: true
    });
    alert.addButton('Cancel');
    alert.addButton({
        text: 'OK',
        handler: data => {
            this.testRadioOpen = false;
            this.testRadioResult = data;
        }
    });
    alert.present();
  }


  testCheckboxOpen: boolean;
  testCheckboxResult;
  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');
    alert.addInput({
        type: 'checkbox',
        label: 'Alderaan',
        value: 'value1',
        checked: true
    });
    alert.addInput({
        type: 'checkbox',
        label: 'Bespin',
        value: 'value2'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Tatooine',
      value: 'value6'
    });
    alert.addButton('Cancel');
    alert.addButton({
        text: 'Okay',
        handler: data => {
            console.log('Checkbox data:', data);
            this.testCheckboxOpen = false;
            this.testCheckboxResult = data;
        }
    });
    alert.present();
  }

}
