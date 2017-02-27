import { Component } from '@angular/core';
import { ActionSheet } from '../ActionSheets/actionSheets';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor(
    public actionSheetCtrl: ActionSheetController
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
}
