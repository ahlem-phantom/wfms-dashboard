import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { InboxComponent } from './inbox/inbox.component';



export const AdminLayoutRoutes: Routes = [
     {
       path: '',
       children: [ {
         path: 'dashboard',
         component: AdminLayoutComponent
     }
    ]
},
     
     {
     path: '',
     children: [ {
       path: 'inbox',
       component: InboxComponent
     }]
     }
    //, {   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

];
