import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaschboardPageRoutingModule } from './daschboard-routing.module';

import { DaschboardPage } from './daschboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaschboardPageRoutingModule
  ],
  declarations: [DaschboardPage]
})
export class DaschboardPageModule {}
