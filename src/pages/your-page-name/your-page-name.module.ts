import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourPageNamePage } from './your-page-name';

@NgModule({
  declarations: [
    YourPageNamePage,
  ],
  imports: [
    IonicPageModule.forChild(YourPageNamePage),
  ],
})
export class YourPageNamePageModule {}
