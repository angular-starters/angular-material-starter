import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UiMaterialModule } from './ui-material.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutModule, RouterModule, UiMaterialModule],
})
export class UiModule {}
