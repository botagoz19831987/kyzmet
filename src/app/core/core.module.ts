import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoreService } from './core.service';
import { TranslateModule } from '@ngx-translate/core';
import {NgxJsonViewerModule} from 'ngx-json-viewer';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        NgxJsonViewerModule
    ],
  exports: [
      HeaderComponent,
      BottomSectionComponent,
      FooterComponent
  ],
  declarations: [
      HeaderComponent,
      BottomSectionComponent,
      FooterComponent
  ],
  providers: [
      CoreService
  ]
})
export class CoreModule { }
