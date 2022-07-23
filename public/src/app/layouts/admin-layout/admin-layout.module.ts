import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AppsComponent } from './apps/apps.component';
import { InboxComponent } from './inbox/inbox.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [  
    InboxComponent,
    AppsComponent
  ],
  exports:[
  ]

})

export class AdminLayoutModule {}
